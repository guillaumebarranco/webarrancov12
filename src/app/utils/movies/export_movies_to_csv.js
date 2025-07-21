// Pour exécuter ce script :
// node export_movies_to_csv.js
const fs = require('fs');
const path = require('path');

const MOVIES_DIR = __dirname;
const OUTPUT_CSV = path.join(MOVIES_DIR, 'all_movies.csv');

function extractAllMovieArrays(content) {
  // Match all 'export const ... = [ ... ];' blocks
  const regex = /export const [a-zA-Z0-9_]+\s*[:=][^=]*=\s*\[([\s\S]*?)\];/g;
  let match;
  const arrays = [];
  while ((match = regex.exec(content)) !== null) {
    arrays.push(match[1]);
  }
  return arrays;
}

function extractMoviesFromArray(arrayContent) {
  // Split on '},' that are at the end of a movie object
  const movieBlocks = arrayContent.split(/},\s*{/g).map((block, i, arr) => {
    if (i === 0) return block + '}';
    if (i === arr.length - 1) return '{' + block;
    return '{' + block + '}';
  });
  const movies = [];
  for (const block of movieBlocks) {
    try {
      // Replace field names with JSON keys
      let jsonBlock = block
        .replace(/([a-zA-Z0-9_]+):/g, '"$1":')
        .replace(/'([^']*)'/g, '"$1"')
        .replace(/\bundefined\b/g, 'null');
      // Fix actors array if missing []
      if (!jsonBlock.includes('[')) jsonBlock = jsonBlock.replace(/actors: {/, 'actors: [{');
      const obj = JSON.parse(jsonBlock);
      movies.push(obj);
    } catch (e) {
      // Ignore parse errors
    }
  }
  return movies;
}

function extractMoviesFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const arrays = extractAllMovieArrays(content);
  let movies = [];
  for (const arr of arrays) {
    movies = movies.concat(extractMoviesFromArray(arr));
  }
  return movies;
}

function getAllMovieFiles() {
  return fs.readdirSync(MOVIES_DIR)
    .filter(f => f.endsWith('.ts') && !f.endsWith('export_movies_to_csv.ts'))
    .map(f => path.join(MOVIES_DIR, f));
}

function toCsvLine(movie) {
  const actors = (movie.actors || []).map(a => a.name).join(',');
  return [
    movie.title || '',
    movie.director || '',
    actors,
    movie.coverUrl || '',
    movie.releaseDate || '',
    movie.rating ?? '',
    movie.length ?? '',
    movie.genre || '',
    movie.timesWatched ?? '',
    movie.lastViewedDate || ''
  ].map(v => '"' + String(v).replace(/"/g, '""') + '"').join(',');
}

function main() {
  const files = getAllMovieFiles();
  const allMovies = [];
  let totalBeforeDedup = 0;
  for (const file of files) {
    const movies = extractMoviesFromFile(file);
    totalBeforeDedup += movies.length;
    console.log(`${path.basename(file)} : ${movies.length} films extraits`);
    allMovies.push(...movies);
  }
  console.log(`Total avant suppression des doublons : ${totalBeforeDedup}`);
  // Remove duplicates by title+director+releaseDate
  const uniqueMovies = Array.from(new Map(allMovies.map(m => [m.title + m.director + m.releaseDate, m])).values());
  const header = 'title,director,actors,coverUrl,releaseDate,rating,length,genre,timesWatched,lastViewedDate';
  const lines = [header, ...uniqueMovies.map(toCsvLine)];
  fs.writeFileSync(OUTPUT_CSV, lines.join('\n'), 'utf-8');
  console.log(`Exported ${uniqueMovies.length} movies to ${OUTPUT_CSV}`);
}

main();