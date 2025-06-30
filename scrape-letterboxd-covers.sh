#!/bin/bash

# Script pour scraper les images de couverture depuis Letterboxd
# et les télécharger dans public/movies

# Configuration
LETTERBOXD_URL="https://letterboxd.com/webarranco/films/"
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
    # Remplacer les caractères problématiques
    safe_name=$(echo "$title" | sed 's/[^a-zA-Z0-9\s-]//g' | sed 's/\s\+/_/g' | tr '[:upper:]' '[:lower:]')
    echo "$safe_name"
}

# Fonction pour télécharger une image
download_image() {
    local image_url="$1"
    local filename="$2"
    local output_dir="$3"

    local local_path="$output_dir/$filename"

    echo -e "${GREEN}Téléchargement: $filename${NC}"

    # Télécharger l'image
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

# Créer le dossier de sortie
if [ ! -d "$OUTPUT_PATH" ]; then
    mkdir -p "$OUTPUT_PATH"
    echo -e "${BLUE}Dossier créé: $OUTPUT_PATH${NC}"
fi

echo -e "${CYAN}Scraping de Letterboxd: $LETTERBOXD_URL${NC}"

# Télécharger la page Letterboxd
temp_page=$(mktemp)
if ! curl -s -L -o "$temp_page" "$LETTERBOXD_URL" \
    --user-agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"; then
    echo -e "${RED}Erreur: Impossible de télécharger la page Letterboxd${NC}"
    exit 1
fi

echo -e "${GREEN}Page Letterboxd téléchargée${NC}"

# Extraire les informations des films avec des patterns plus robustes
echo -e "${CYAN}Extraction des informations des films...${NC}"

# Créer un fichier temporaire pour les données extraites
temp_data=$(mktemp)

# Extraire les films avec leurs images
# Pattern pour trouver les films dans le HTML de Letterboxd
grep -o '<div[^>]*class="[^"]*film-detail[^"]*"[^>]*>.*</div>' "$temp_page" | while read -r film_block; do
    # Extraire le titre du film
    title=$(echo "$film_block" | grep -o '<h2[^>]*>.*</h2>' | sed 's/<[^>]*>//g' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')

    # Extraire l'URL de l'image
    image_url=$(echo "$film_block" | grep -o 'src="[^"]*\.jpg[^"]*"' | sed 's/src="//;s/"//')

    if [ -n "$title" ] && [ -n "$image_url" ]; then
        echo "$title|$image_url" >> "$temp_data"
        echo -e "${GREEN}Trouvé: $title${NC}"
    fi
done

# Alternative: chercher les images directement
echo -e "${CYAN}Recherche alternative des images...${NC}"

# Chercher toutes les images de films
grep -o 'https://[^"]*\.jpg[^"]*' "$temp_page" | while read -r image_url; do
    # Extraire le nom du film depuis l'URL ou le contexte
    # Les URLs Letterboxd contiennent souvent le nom du film
    filename=$(basename "$image_url")

    # Nettoyer le nom de fichier
    safe_filename=$(get_safe_filename "$filename")

    echo -e "${YELLOW}Image trouvée: $filename${NC}"
    echo "$filename|$image_url" >> "$temp_data"
done

# Compter les films trouvés
total_films=$(wc -l < "$temp_data")
echo -e "${CYAN}Total de films trouvés: $total_films${NC}"

# Télécharger les images
downloaded_count=0
failed_count=0

while IFS='|' read -r title image_url; do
    if [ -n "$title" ] && [ -n "$image_url" ]; then
        safe_filename=$(get_safe_filename "$title")
        filename="${safe_filename}.jpg"

        if download_image "$image_url" "$filename" "$OUTPUT_PATH"; then
            ((downloaded_count++))
        else
            ((failed_count++))
        fi
    fi
done < "$temp_data"

# Mettre à jour le fichier movies.ts
echo -e "${CYAN}Mise à jour du fichier movies.ts...${NC}"

if [ -f "$MOVIES_FILE" ]; then
    # Créer une sauvegarde
    cp "$MOVIES_FILE" "${MOVIES_FILE}.backup"

    # Lire le fichier et mettre à jour les URLs
    temp_updated=$(mktemp)

    while IFS='|' read -r title image_url; do
        if [ -n "$title" ] && [ -n "$image_url" ]; then
            safe_filename=$(get_safe_filename "$title")
            local_url="/movies/${safe_filename}.jpg"

            # Chercher le film dans le fichier et mettre à jour l'URL
            if grep -q "title: \"$title\"" "$MOVIES_FILE"; then
                # Mettre à jour l'URL pour ce film
                sed "s|coverUrl: \"[^\"]*\"|coverUrl: \"$local_url\"|g" "$MOVIES_FILE" > "$temp_updated"
                mv "$temp_updated" "$MOVIES_FILE"
                echo -e "${GREEN}URL mise à jour pour: $title${NC}"
            fi
        fi
    done < "$temp_data"

    echo -e "${GREEN}Fichier movies.ts mis à jour${NC}"
else
    echo -e "${RED}Fichier movies.ts non trouvé${NC}"
fi

# Nettoyer les fichiers temporaires
rm -f "$temp_page" "$temp_data"

# Afficher le résumé
echo -e "\n${MAGENTA}=== RÉSUMÉ ===${NC}"
echo -e "${GREEN}Images téléchargées: $downloaded_count${NC}"
echo -e "${RED}Échecs: $failed_count${NC}"
echo -e "${CYAN}Total de films traités: $total_films${NC}"
echo -e "${BLUE}Dossier de sortie: $OUTPUT_PATH${NC}"

echo -e "\n${GREEN}Script terminé !${NC}"