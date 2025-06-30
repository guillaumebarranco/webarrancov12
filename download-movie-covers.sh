#!/bin/bash

# Script bash pour télécharger les images de couverture des films
# Basé sur les URLs dans les fichiers TypeScript

# Configuration
OUTPUT_PATH="public/movies"
FORCE_DOWNLOAD=false

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
    if [ -f "$local_path" ] && [ "$FORCE_DOWNLOAD" = false ]; then
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

        # Essayer avec une URL alternative (TMDB)
        if [[ "$cover_url" == *"/movies/"* ]]; then
            local filename=$(basename "$cover_url")
            local tmdb_url="https://image.tmdb.org/t/p/w500/$filename"
            echo -e "${YELLOW}  Tentative avec TMDB: $title${NC}"

            if curl -s -L -o "$local_path" "$tmdb_url" --max-time 30; then
                if [ -f "$local_path" ] && [ -s "$local_path" ]; then
                    echo -e "${GREEN}✓ Téléchargé via TMDB: $title${NC}"
                    return 0
                fi
            fi
            echo -e "${RED}  ✗ Échec TMDB pour $title${NC}"
        fi
    fi

    return 1
}

# Créer le dossier de sortie s'il n'existe pas
if [ ! -d "$OUTPUT_PATH" ]; then
    mkdir -p "$OUTPUT_PATH"
    echo -e "${BLUE}Dossier créé: $OUTPUT_PATH${NC}"
fi

# Liste des fichiers de films
MOVIE_FILES=(
    "src/app/utils/movies/movies.ts"
    "src/app/utils/movies/movies_3.ts"
    "src/app/utils/movies/movies_4.ts"
    "src/app/utils/movies/movies_5.ts"
    "src/app/utils/movies/movies_6.ts"
    "src/app/utils/movies/movies_7.ts"
    "src/app/utils/movies/movies_8.ts"
    "src/app/utils/movies/movies_9.ts"
    "src/app/utils/movies/movies_10.ts"
    "src/app/utils/movies/movies_11.ts"
)

# Variables pour le suivi
total_movies=0
downloaded_count=0
failed_count=0

# Traiter chaque fichier
for file in "${MOVIE_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${CYAN}Lecture du fichier: $file${NC}"

        # Extraire les informations des films avec grep et sed
        while IFS= read -r line; do
            if [[ "$line" =~ title:[[:space:]]*\"([^\"]+)\" ]]; then
                title="${BASH_REMATCH[1]}"

                # Chercher la ligne suivante avec coverUrl
                cover_url=""
                while IFS= read -r next_line; do
                    if [[ "$next_line" =~ coverUrl:[[:space:]]*\"([^\"]+)\" ]]; then
                        cover_url="${BASH_REMATCH[1]}"
                        break
                    fi
                    # Arrêter si on trouve un autre film
                    if [[ "$next_line" =~ title:[[:space:]]*\" ]]; then
                        break
                    fi
                done < <(tail -n +$(( $(grep -n "title: \"$title\"" "$file" | cut -d: -f1) + 1 )) "$file")

                if [ -n "$cover_url" ] && [ "$cover_url" != "" ]; then
                    ((total_movies++))
                    if download_movie_cover "$title" "$cover_url" "$OUTPUT_PATH"; then
                        ((downloaded_count++))
                    else
                        ((failed_count++))
                    fi
                fi
            fi
        done < "$file"
    fi
done

# Afficher le résumé
echo -e "\n${MAGENTA}=== RÉSUMÉ ===${NC}"
echo -e "${GREEN}Images téléchargées: $downloaded_count${NC}"
echo -e "${RED}Échecs: $failed_count${NC}"
echo -e "${CYAN}Total de films traités: $total_movies${NC}"
echo -e "${BLUE}Dossier de sortie: $OUTPUT_PATH${NC}"

# Optionnel: Mettre à jour les URLs dans les fichiers TypeScript
echo -e "\n${YELLOW}Mise à jour des URLs dans les fichiers TypeScript...${NC}"

for file in "${MOVIE_FILES[@]}"; do
    if [ -f "$file" ]; then
        # Créer une sauvegarde
        cp "$file" "${file}.backup"

        # Remplacer les URLs par les chemins locaux
        sed -i 's|coverUrl: "/movies/\([^"]*\)"|coverUrl: "/movies/\1"|g' "$file"

        echo -e "${GREEN}Fichier mis à jour: $file${NC}"
    fi
done

echo -e "\n${GREEN}Script terminé !${NC}"