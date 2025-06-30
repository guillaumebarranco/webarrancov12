#!/bin/bash

# Script bash avec mode debug activé pour diagnostiquer les problèmes

# Configuration
OUTPUT_PATH="public/movies"
DEBUG_MODE=true  # Mode debug activé par défaut

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Fonction pour afficher les logs de debug
debug_log() {
    if [ "$DEBUG_MODE" = true ]; then
        echo -e "${CYAN}[DEBUG] $1${NC}"
    fi
}

# Fonction pour afficher les erreurs détaillées
error_log() {
    echo -e "${RED}[ERROR] $1${NC}"
}

# Fonction pour nettoyer le nom de fichier
get_safe_filename() {
    local title="$1"
    # Remplacer les caractères problématiques
    safe_name=$(echo "$title" | sed 's/[^a-zA-Z0-9\s-]//g' | sed 's/\s\+/_/g' | tr '[:upper:]' '[:lower:]')
    debug_log "Nom original: '$title' -> Nom sécurisé: '$safe_name'"
    echo "$safe_name"
}

# Fonction pour tester une URL
test_url() {
    local url="$1"
    local title="$2"

    debug_log "Test de l'URL: $url"

    # Test de connectivité basique
    local domain=$(echo "$url" | sed 's|https\?://||' | cut -d'/' -f1)
    debug_log "Domaine extrait: $domain"

    # Test DNS
    if ! nslookup "$domain" >/dev/null 2>&1; then
        error_log "Résolution DNS échouée pour $domain"
        return 1
    fi

    # Test de connectivité HTTP
    local http_test=$(curl -s -I --max-time 10 --connect-timeout 5 "$url" 2>/dev/null | head -1)
    debug_log "Test HTTP: $http_test"

    if [[ "$http_test" == *"200"* ]]; then
        debug_log "URL accessible (HTTP 200)"
        return 0
    elif [[ "$http_test" == *"404"* ]]; then
        error_log "URL retourne 404 - page non trouvée"
        return 1
    elif [[ "$http_test" == *"403"* ]]; then
        error_log "URL retourne 403 - accès interdit"
        return 1
    elif [[ "$http_test" == *"301"* ]] || [[ "$http_test" == *"302"* ]]; then
        debug_log "URL redirige (HTTP 301/302)"
        return 0
    else
        error_log "Test HTTP échoué: $http_test"
        return 1
    fi
}

# Fonction pour télécharger une image
download_movie_cover() {
    local title="$1"
    local cover_url="$2"
    local output_dir="$3"

    local safe_filename=$(get_safe_filename "$title")
    local local_path="$output_dir/${safe_filename}.jpg"

    debug_log "=== DÉBUT TÉLÉCHARGEMENT ==="
    debug_log "Titre: $title"
    debug_log "URL: $cover_url"
    debug_log "Chemin local: $local_path"

    # Vérifier si le fichier existe déjà
    if [ -f "$local_path" ]; then
        echo -e "${YELLOW}Image déjà présente: $title${NC}"
        debug_log "Fichier existant détecté: $local_path"
        return 0
    fi

    echo -e "${GREEN}Téléchargement: $title${NC}"

    # Vérifier si l'URL est valide
    if [[ ! "$cover_url" =~ ^https?:// ]]; then
        error_log "URL invalide pour $title: $cover_url"
        debug_log "URL ne commence pas par http:// ou https://"
        return 1
    fi

    # Tester l'URL avant téléchargement
    if ! test_url "$cover_url" "$title"; then
        error_log "Test d'URL échoué pour $title"
        return 1
    fi

    # Télécharger l'image avec curl et plus de détails
    debug_log "Lancement de curl avec options détaillées..."

    # Créer un fichier temporaire pour capturer les erreurs
    local temp_output=$(mktemp)
    local temp_error=$(mktemp)
    local temp_headers=$(mktemp)

    debug_log "Fichiers temporaires créés:"
    debug_log "  Output: $temp_output"
    debug_log "  Error: $temp_error"
    debug_log "  Headers: $temp_headers"

    # Commande curl avec toutes les options de debug
    local curl_cmd="curl -v -L -o \"$local_path\" \"$cover_url\" \
        --max-time 30 \
        --connect-timeout 10 \
        --retry 2 \
        --retry-delay 1 \
        --user-agent \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\" \
        -w \"HTTP_CODE:%{http_code}\nSIZE_DOWNLOADED:%{size_downloaded}\nTIME_TOTAL:%{time_total}\nTIME_CONNECT:%{time_connect}\nTIME_NAMELOOKUP:%{time_namelookup}\n\" \
        -D \"$temp_headers\" \
        2>\"$temp_error\""

    debug_log "Commande curl: $curl_cmd"

    if eval $curl_cmd; then
        # Vérifier le code de retour HTTP
        local http_code=$(grep "HTTP_CODE:" "$temp_output" | cut -d: -f2)
        local size_downloaded=$(grep "SIZE_DOWNLOADED:" "$temp_output" | cut -d: -f2)
        local time_total=$(grep "TIME_TOTAL:" "$temp_output" | cut -d: -f2)
        local time_connect=$(grep "TIME_CONNECT:" "$temp_output" | cut -d: -f2)
        local time_namelookup=$(grep "TIME_NAMELOOKUP:" "$temp_output" | cut -d: -f2)

        debug_log "=== RÉSULTATS CURL ==="
        debug_log "Code HTTP: $http_code"
        debug_log "Taille téléchargée: $size_downloaded bytes"
        debug_log "Temps total: $time_total secondes"
        debug_log "Temps de connexion: $time_connect secondes"
        debug_log "Temps de résolution DNS: $time_namelookup secondes"

        # Afficher les headers de réponse
        debug_log "Headers de réponse:"
        cat "$temp_headers" | while read -r header; do
            debug_log "  $header"
        done

        # Vérifier le code HTTP
        if [ "$http_code" != "200" ]; then
            error_log "Erreur HTTP $http_code pour $title"
            debug_log "Code HTTP non-200 détecté"
            rm -f "$local_path"
            rm -f "$temp_output" "$temp_error" "$temp_headers"
            return 1
        fi

        # Vérifier si le fichier a été créé et n'est pas vide
        if [ -f "$local_path" ] && [ -s "$local_path" ]; then
            local file_size=$(stat -c%s "$local_path" 2>/dev/null || stat -f%z "$local_path" 2>/dev/null)
            debug_log "Fichier créé avec succès, taille: $file_size bytes"

            # Vérifier si c'est bien une image
            local file_type=$(file -b "$local_path" 2>/dev/null || echo "unknown")
            debug_log "Type de fichier détecté: $file_type"

            # Afficher les premiers octets pour debug
            local first_bytes=$(hexdump -C "$local_path" | head -3)
            debug_log "Premiers octets du fichier:"
            echo "$first_bytes" | while read -r line; do
                debug_log "  $line"
            done

            if [[ "$file_type" == *"image"* ]] || [[ "$file_type" == *"JPEG"* ]] || [[ "$file_type" == *"PNG"* ]]; then
                echo -e "${GREEN}✓ Téléchargé: $title ($file_size bytes)${NC}"
                rm -f "$temp_output" "$temp_error" "$temp_headers"
                return 0
            else
                error_log "Fichier téléchargé n'est pas une image: $file_type"
                debug_log "Type de fichier invalide: $file_type"
                rm -f "$local_path"
                rm -f "$temp_output" "$temp_error" "$temp_headers"
                return 1
            fi
        else
            error_log "Fichier vide ou corrompu: $title"
            debug_log "Fichier non créé ou vide"
            rm -f "$local_path"
            rm -f "$temp_output" "$temp_error" "$temp_headers"
            return 1
        fi
    else
        local curl_exit_code=$?
        local error_content=$(cat "$temp_error" 2>/dev/null)

        error_log "Erreur curl pour $title (code: $curl_exit_code)"
        debug_log "Code de sortie curl: $curl_exit_code"
        debug_log "Erreur curl complète:"
        echo "$error_content" | while read -r line; do
            debug_log "  $line"
        done

        # Afficher les erreurs courantes
        case $curl_exit_code in
            1) error_log "  → Erreur de protocole non supporté" ;;
            2) error_log "  → Erreur d'initialisation" ;;
            3) error_log "  → URL malformée" ;;
            4) error_log "  → URL malformée (partie utilisateur)" ;;
            5) error_log "  → Impossible de résoudre l'adresse proxy" ;;
            6) error_log "  → Impossible de résoudre l'adresse hôte" ;;
            7) error_log "  → Impossible de se connecter à l'hôte" ;;
            28) error_log "  → Timeout de connexion" ;;
            *) error_log "  → Erreur curl inconnue" ;;
        esac

        rm -f "$local_path"
        rm -f "$temp_output" "$temp_error" "$temp_headers"
        return 1
    fi
}

# Créer le dossier de sortie s'il n'existe pas
if [ ! -d "$OUTPUT_PATH" ]; then
    mkdir -p "$OUTPUT_PATH"
    echo -e "${BLUE}Dossier créé: $OUTPUT_PATH${NC}"
fi

# Lire le fichier principal des films
if [ ! -f "src/app/utils/movies/movies.ts" ]; then
    error_log "Fichier movies.ts non trouvé"
    exit 1
fi

echo -e "${CYAN}Lecture du fichier movies.ts...${NC}"

# Extraire les titres et URLs avec grep et sed
titles=()
urls=()

# Lire le fichier ligne par ligne
while IFS= read -r line; do
    # Chercher les titres
    if [[ "$line" =~ title:[[:space:]]*\"([^\"]+)\" ]]; then
        titles+=("${BASH_REMATCH[1]}")
        debug_log "Titre trouvé: ${BASH_REMATCH[1]}"
    fi

    # Chercher les URLs de couverture
    if [[ "$line" =~ coverUrl:[[:space:]]*\"([^\"]+)\" ]]; then
        urls+=("${BASH_REMATCH[1]}")
        debug_log "URL trouvée: ${BASH_REMATCH[1]}"
    fi
done < "src/app/utils/movies/movies.ts"

# Vérifier que nous avons le même nombre de titres et d'URLs
if [ ${#titles[@]} -ne ${#urls[@]} ]; then
    error_log "Nombre de titres (${#titles[@]}) différent du nombre d'URLs (${#urls[@]})"
    debug_log "Mismatch entre titres et URLs"
    exit 1
fi

echo -e "${CYAN}Films trouvés: ${#titles[@]}${NC}"

# Vérifier les outils nécessaires
if ! command -v curl &> /dev/null; then
    error_log "curl n'est pas installé"
    echo -e "${YELLOW}Installez-le avec: sudo apt install curl (Ubuntu/Debian) ou sudo yum install curl (CentOS/RHEL)${NC}"
    exit 1
fi

if ! command -v file &> /dev/null; then
    echo -e "${YELLOW}Attention: 'file' n'est pas installé, la vérification du type d'image sera limitée${NC}"
    echo -e "${YELLOW}Installez-le avec: sudo apt install file (Ubuntu/Debian) ou sudo yum install file (CentOS/RHEL)${NC}"
fi

if ! command -v nslookup &> /dev/null; then
    echo -e "${YELLOW}Attention: 'nslookup' n'est pas installé, les tests DNS seront limités${NC}"
fi

# Télécharger les images
downloaded_count=0
failed_count=0

for i in "${!titles[@]}"; do
    title="${titles[$i]}"
    url="${urls[$i]}"

    if [ -n "$url" ] && [ "$url" != "" ]; then
        if download_movie_cover "$title" "$url" "$OUTPUT_PATH"; then
            ((downloaded_count++))
        else
            ((failed_count++))
        fi
    else
        echo -e "${YELLOW}URL vide pour: $title${NC}"
        debug_log "URL vide détectée pour le titre: $title"
    fi
done

# Afficher le résumé
echo -e "\n${MAGENTA}=== RÉSUMÉ ===${NC}"
echo -e "${GREEN}Images téléchargées: $downloaded_count${NC}"
echo -e "${RED}Échecs: $failed_count${NC}"
echo -e "${CYAN}Total de films traités: ${#titles[@]}${NC}"
echo -e "${BLUE}Dossier de sortie: $OUTPUT_PATH${NC}"

echo -e "\n${GREEN}Script terminé !${NC}"