#!/bin/bash

# Script pour télécharger les images de couverture depuis TMDB
# Basé sur les titres de films dans movies.ts

# Configuration
TMDB_API_KEY="your_tmdb_api_key_here"  # Remplacez par votre clé API TMDB
OUTPUT_PATH="public/movies"
MOVIES_FILE="src/app/utils/movies/movies.ts"

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
    safe_name=$(echo "$title" | sed 's/[^a-zA-Z0-9\s-]//g' | sed 's/\s\+/_/g' | tr '[:upper:]' '[:lower:]')
    echo "$safe_name"
}

# Fonction pour rechercher un film sur TMDB
search_movie() {
    local title="$1"
    local search_url="https://api.themoviedb.org/3/search/movie?api_key=$TMDB_API_KEY&query=$(echo "$title" | sed 's/ /%20/g')&language=fr-FR"

    local result=$(curl -s "$search_url")
    local poster_path=$(echo "$result" | grep -o '"poster_path":"[^"]*"' | head -1 | sed 's/"poster_path":"//;s/"//')

    if [ -n "$poster_path" ]; then
        echo "https://image.tmdb.org/t/p/w500$poster_path"
    else
        echo ""
    fi
}

# Fonction pour télécharger une image
download_image() {
    local image_url="$1"
    local filename="$2"
    local output_dir="$3"

    local local_path="$output_dir/$filename"

    if [ -f "$local_path" ]; then
        echo -e "${YELLOW}Image déjà présente: $filename${NC}"
        return 0
    fi

    echo -e "${GREEN}Téléchargement: $filename${NC}"

    if curl -s -L -o "$local_path" "$image_url" \
        --max-time 30 \
        --connect-timeout 10 \
        --user-agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"; then

        if [ -f "$local_path" ] && [ -s "$local_path" ]; then
            local file_size=$(stat -c%s "$local_path" 2>/dev/null || stat -f%z "$local_path" 2>/dev/null)
            echo -e "${GREEN}✓ Téléchargé: $filename ($file_size bytes)${NC}"
            return 0
        else
            echo -e "${RED}✗ Fichier vide ou corrompu: $filename${NC}"
            rm -f "$local_path"
            return 1
        fi
    else
        echo -e "${RED}✗ Erreur de téléchargement: $filename${NC}"
        rm -f "$local_path"
        return 1
    fi
}

# Vérifier si la clé API est configurée
if [ "$TMDB_API_KEY" = "your_tmdb_api_key_here" ]; then
    echo -e "${RED}Erreur: Clé API TMDB non configurée${NC}"
    echo -e "${YELLOW}1. Allez sur https://www.themoviedb.org/settings/api${NC}"
    echo -e "${YELLOW}2. Créez une clé API gratuite${NC}"
    echo -e "${YELLOW}3. Remplacez 'your_tmdb_api_key_here' dans le script${NC}"
    exit 1
fi

# Créer le dossier de sortie
if [ ! -d "$OUTPUT_PATH" ]; then
    mkdir -p "$OUTPUT_PATH"
    echo -e "${BLUE}Dossier créé: $OUTPUT_PATH${NC}"
fi

# Lire le fichier movies.ts et extraire les titres
if [ ! -f "$MOVIES_FILE" ]; then
    echo -e "${RED}Erreur: Fichier movies.ts non trouvé${NC}"
    exit 1
fi

echo -e "${CYAN}Lecture du fichier movies.ts...${NC}"

# Extraire les titres des films
titles=()
while IFS= read -r line; do
    if [[ "$line" =~ title:[[:space:]]*\"([^\"]+)\" ]]; then
        titles+=("${BASH_REMATCH[1]}")
    fi
done < "$MOVIES_FILE"

echo -e "${CYAN}Films trouvés: ${#titles[@]}${NC}"

# Télécharger les images
downloaded_count=0
failed_count=0

for title in "${titles[@]}"; do
    echo -e "${CYAN}Recherche de: $title${NC}"

    # Rechercher le film sur TMDB
    image_url=$(search_movie "$title")

    if [ -n "$image_url" ]; then
        safe_filename=$(get_safe_filename "$title")
        filename="${safe_filename}.jpg"

        if download_image "$image_url" "$filename" "$OUTPUT_PATH"; then
            ((downloaded_count++))
        else
            ((failed_count++))
        fi
    else
        echo -e "${RED}✗ Film non trouvé sur TMDB: $title${NC}"
        ((failed_count++))
    fi

    # Pause pour éviter de surcharger l'API
    sleep 0.5
done

# Mettre à jour le fichier movies.ts
echo -e "${CYAN}Mise à jour du fichier movies.ts...${NC}"

# Créer une sauvegarde
cp "$MOVIES_FILE" "${MOVIES_FILE}.backup"

# Mettre à jour les URLs
for title in "${titles[@]}"; do
    safe_filename=$(get_safe_filename "$title")
    local_url="/movies/${safe_filename}.jpg"

    # Chercher et remplacer l'URL pour ce film
    if grep -q "title: \"$title\"" "$MOVIES_FILE"; then
        sed -i "s|coverUrl: \"[^\"]*\"|coverUrl: \"$local_url\"|g" "$MOVIES_FILE"
        echo -e "${GREEN}URL mise à jour pour: $title${NC}"
    fi
done

# Afficher le résumé
echo -e "\n${MAGENTA}=== RÉSUMÉ ===${NC}"
echo -e "${GREEN}Images téléchargées: $downloaded_count${NC}"
echo -e "${RED}Échecs: $failed_count${NC}"
echo -e "${CYAN}Total de films traités: ${#titles[@]}${NC}"
echo -e "${BLUE}Dossier de sortie: $OUTPUT_PATH${NC}"

echo -e "\n${GREEN}Script terminé !${NC}"