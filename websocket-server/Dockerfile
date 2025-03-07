# =========================
# Étape 1 : Utiliser une image Node.js légère
# =========================
FROM node:16-alpine

# =========================
# Créer et utiliser le répertoire /app
# =========================
WORKDIR /app

# =========================
# Copier les fichiers de package et installer
# =========================
COPY package*.json ./
RUN npm install

# =========================
# Copier le code source
# =========================
COPY . .

# =========================
# Exposer le port 8080
# =========================
EXPOSE 8080

# =========================
# Commande de démarrage
# =========================
CMD ["node", "server.js"]
