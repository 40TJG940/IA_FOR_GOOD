#!/usr/bin/env sh

# Script de déploiement automatique GitHub Pages

set -e

echo "🚀 Début du déploiement GitHub Pages..."

# Build du projet
echo "📦 Construction du projet..."
npm run build

# Aller dans le dossier de build
cd dist

# Initialiser git si nécessaire
if [ ! -d .git ]; then
  git init
  git checkout -b main
fi

# Ajouter tous les fichiers
git add -A

# Commit
git commit -m "🚀 Deploy: $(date +'%Y-%m-%d %H:%M:%S')"

# Push vers la branche gh-pages
echo "📤 Push vers GitHub Pages..."
git push -f git@github.com:VOTRE-USERNAME/hackathon-ia-for-good.git main:gh-pages

cd -

echo "✅ Déploiement terminé !"
echo "🌐 Site disponible sur: https://VOTRE-USERNAME.github.io/hackathon-ia-for-good/"