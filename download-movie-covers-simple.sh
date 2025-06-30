#!/bin/bash

# Script bash simplifié pour télécharger les images de couverture des films

# Configuration
OUTPUT_PATH="public/movies"

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Fonction pour nettoyer le nom de fichier
get_safe_filename() {
    local title="$1"
    # Remplacer les caractères problématiques
    safe_name=$(echo "$title" | sed 's/[^a-zA-Z0-9\s-]//g' | sed 's/\s\+/_/g' | tr '[:upper:]' '[:lower:]')
    echo "$safe_name"
}

# Fonction pour télécharger une image
download_movie_cover() {
    local title="$1"
    local cover_url="$2"
    local output_dir="$3"

    local safe_filename=$(get_safe_filename "$title")
    local local_path="$output_dir/${safe_filename}.jpg"

    # Vérifier si le fichier existe déjà
    if [ -f "$local_path" ]; then
        echo -e "${YELLOW}Image déjà présente: $title${NC}"
        return 0
    fi

    echo -e "${GREEN}Téléchargement: $title${NC}"

    # Télécharger l'image avec curl
    if curl -s -L -o "$local_path" "$cover_url" --max-time 30; then
        if [ -f "$local_path" ] && [ -s "$local_path" ]; then
            echo -e "${GREEN}✓ Téléchargé: $title${NC}"
            return 0
        else
            echo -e "${RED}✗ Fichier vide ou corrompu: $title${NC}"
            rm -f "$local_path"
        fi
    else
        echo -e "${RED}✗ Erreur pour $title${NC}"
    fi

    return 1
}

# Créer le dossier de sortie s'il n'existe pas
if [ ! -d "$OUTPUT_PATH" ]; then
    mkdir -p "$OUTPUT_PATH"
    echo -e "${BLUE}Dossier créé: $OUTPUT_PATH${NC}"
fi

# Lire le fichier principal des films
if [ ! -f "src/app/utils/movies/movies.ts" ]; then
    echo -e "${RED}Erreur: Fichier movies.ts non trouvé${NC}"
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
    fi

    # Chercher les URLs de couverture
    if [[ "$line" =~ coverUrl:[[:space:]]*\"([^\"]+)\" ]]; then
        urls+=("${BASH_REMATCH[1]}")
    fi
done < "src/app/utils/movies/movies.ts"

# Vérifier que nous avons le même nombre de titres et d'URLs
if [ ${#titles[@]} -ne ${#urls[@]} ]; then
    echo -e "${RED}Erreur: Nombre de titres (${#titles[@]}) différent du nombre d'URLs (${#urls[@]})${NC}"
    exit 1
fi

echo -e "${CYAN}Films trouvés: ${#titles[@]}${NC}"

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
    fi
done

# Afficher le résumé
echo -e "\n${MAGENTA}=== RÉSUMÉ ===${NC}"
echo -e "${GREEN}Images téléchargées: $downloaded_count${NC}"
echo -e "${RED}Échecs: $failed_count${NC}"
echo -e "${CYAN}Total de films traités: ${#titles[@]}${NC}"
echo -e "${BLUE}Dossier de sortie: $OUTPUT_PATH${NC}"

echo -e "\n${GREEN}Script terminé !${NC}"