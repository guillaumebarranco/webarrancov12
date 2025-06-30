#!/bin/bash

# Script avancé pour scraper les images depuis Letterboxd avec pagination

# Configuration
BASE_URL="https://letterboxd.com/webarranco/films/"
OUTPUT_PATH="public/movies"
MAX_PAGES=11  # Nombre de pages à scraper

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}Scraping avancé de Letterboxd avec pagination...${NC}"

# Créer le dossier de sortie
mkdir -p "$OUTPUT_PATH"

# Fichier temporaire pour stocker toutes les URLs uniques
temp_urls=$(mktemp)

# Fonction pour nettoyer le nom de fichier
clean_filename() {
    local filename="$1"
    clean_name=$(echo "$filename" | sed 's/[^a-zA-Z0-9._-]//g')
    echo "$clean_name"
}

# Fonction pour télécharger une image
download_image() {
    local image_url="$1"
    local filename="$2"

    if [ -f "$OUTPUT_PATH/$filename" ]; then
        echo -e "${YELLOW}Image déjà présente: $filename${NC}"
        return 0
    fi

    echo -e "${GREEN}Téléchargement: $filename${NC}"

    if wget -q -O "$OUTPUT_PATH/$filename" "$image_url" \
        --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" \
        --timeout=30 \
        --tries=3; then

        file_size=$(stat -c%s "$OUTPUT_PATH/$filename" 2>/dev/null || stat -f%z "$OUTPUT_PATH/$filename" 2>/dev/null)
        echo -e "${GREEN}✓ Téléchargé: $filename ($file_size bytes)${NC}"
        return 0
    else
        echo -e "${RED}✗ Erreur: $filename${NC}"
        rm -f "$OUTPUT_PATH/$filename"
        return 1
    fi
}

# Scraper chaque page
for page in $(seq 1 $MAX_PAGES); do
    if [ $page -eq 1 ]; then
        url="$BASE_URL"
    else
        url="${BASE_URL}page/$page/"
    fi

    echo -e "${CYAN}Scraping page $page: $url${NC}"

    # Télécharger la page
    temp_page=$(mktemp)
    if wget -q -O "$temp_page" "$url" \
        --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" \
        --timeout=30; then

        echo -e "${GREEN}Page $page téléchargée${NC}"

        # Extraire les URLs d'images de cette page
        grep -o 'https://[^"]*\.jpg[^"]*' "$temp_page" | sort -u >> "$temp_urls"

        # Compter les images trouvées sur cette page
        page_images=$(grep -c 'https://[^"]*\.jpg[^"]*' "$temp_page")
        echo -e "${BLUE}Images trouvées sur la page $page: $page_images${NC}"

    else
        echo -e "${RED}Erreur lors du téléchargement de la page $page${NC}"
    fi

    rm -f "$temp_page"

    # Pause entre les pages pour éviter d'être bloqué
    sleep 2
done

# Compter les URLs uniques trouvées
total_urls=$(sort -u "$temp_urls" | wc -l)
echo -e "${MAGENTA}Total d'URLs uniques trouvées: $total_urls${NC}"

# Télécharger toutes les images uniques
downloaded_count=0
failed_count=0

sort -u "$temp_urls" | while read -r image_url; do
    # Extraire le nom du fichier depuis l'URL
    filename=$(basename "$image_url")

    # Nettoyer le nom de fichier
    clean_name=$(clean_filename "$filename")

    if download_image "$image_url" "$clean_name"; then
        ((downloaded_count++))
    else
        ((failed_count++))
    fi
done

# Nettoyer
rm -f "$temp_urls"

echo -e "\n${MAGENTA}=== RÉSUMÉ ===${NC}"
echo -e "${GREEN}Images téléchargées: $downloaded_count${NC}"
echo -e "${RED}Échecs: $failed_count${NC}"
echo -e "${CYAN}Pages scrapées: $MAX_PAGES${NC}"
echo -e "${BLUE}Images sauvegardées dans: $OUTPUT_PATH${NC}"

echo -e "\n${GREEN}Scraping terminé !${NC}"