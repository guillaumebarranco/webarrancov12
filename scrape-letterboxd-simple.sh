#!/bin/bash

# Script simplifié pour scraper les images depuis Letterboxd

# Configuration
LETTERBOXD_URL="https://letterboxd.com/webarranco/films/"
OUTPUT_PATH="public/movies"

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}Scraping des images depuis Letterboxd...${NC}"

# Créer le dossier de sortie
mkdir -p "$OUTPUT_PATH"

# Télécharger la page et extraire les URLs d'images
echo -e "${GREEN}Téléchargement de la page Letterboxd...${NC}"

# Utiliser wget pour télécharger la page
wget -q -O- "$LETTERBOXD_URL" --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" | \
grep -o 'https://[^"]*\.jpg[^"]*' | \
sort -u | \
while read -r image_url; do
    # Extraire le nom du fichier depuis l'URL
    filename=$(basename "$image_url")

    # Nettoyer le nom de fichier
    clean_name=$(echo "$filename" | sed 's/[^a-zA-Z0-9._-]//g')

    echo -e "${YELLOW}Téléchargement: $clean_name${NC}"

    # Télécharger l'image
    if wget -q -O "$OUTPUT_PATH/$clean_name" "$image_url" --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"; then
        file_size=$(stat -c%s "$OUTPUT_PATH/$clean_name" 2>/dev/null || stat -f%z "$OUTPUT_PATH/$clean_name" 2>/dev/null)
        echo -e "${GREEN}✓ Téléchargé: $clean_name ($file_size bytes)${NC}"
    else
        echo -e "${RED}✗ Erreur: $clean_name${NC}"
    fi
done

echo -e "\n${GREEN}Scraping terminé !${NC}"
echo -e "${BLUE}Images sauvegardées dans: $OUTPUT_PATH${NC}"