# NuvolaCantiere - Sito Web Promozionale

Sito web moderno e responsive per la promozione di NuvolaCantiere, il bot Telegram per la gestione dei rapportini di cantiere.

## 🚀 Caratteristiche

- **Design Moderno**: Interfaccia pulita e professionale in stile SaaS
- **Responsive**: Ottimizzato per desktop, tablet e mobile
- **Performance**: Costruito con Next.js per caricamenti ultra-veloci
- **SEO Ottimizzato**: Meta tags e struttura ottimizzata per i motori di ricerca
- **Animazioni Fluide**: Micro-interazioni e animazioni per un'esperienza utente superiore

## 📋 Sezioni del Sito

1. **Homepage con Hero Section**: Presentazione del prodotto con CTA prominenti
2. **Funzionalità**: 6 card con le principali caratteristiche del prodotto
3. **Pricing**: Tre piani tariffari (FREE, BASIC, PRO) con comparazione chiara
4. **FAQ**: Sezione domande frequenti espandibili
5. **Contatti**: Call-to-action finale con informazioni di contatto

## 🛠️ Stack Tecnologico

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Linguaggio**: JavaScript/React

## 📦 Installazione

### Prerequisiti
- Node.js 18+ installato
- npm o yarn

### Setup Locale

1. **Installa le dipendenze**:
```bash
npm install
```

2. **Avvia il server di sviluppo**:
```bash
npm run dev
```

3. **Apri il browser**:
Visita http://localhost:3000

## 🚢 Deploy su Droplet DigitalOcean

### Opzione 1: Deploy con PM2 (Consigliato)

1. **Connettiti al tuo droplet**:
```bash
ssh root@your-droplet-ip
```

2. **Installa Node.js e PM2** (se non già installati):
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs
npm install -g pm2
```

3. **Clona il progetto sul droplet**:
```bash
cd /var/www
# Carica i file tramite scp, git, o ftp
```

4. **Installa dipendenze e builda**:
```bash
cd /var/www/nuvolacantiere-website
npm install
npm run build
```

5. **Avvia con PM2**:
```bash
pm2 start npm --name "nuvolacantiere" -- start
pm2 save
pm2 startup
```

6. **Configura Nginx come reverse proxy**:
```bash
apt-get install nginx
```

Crea il file `/etc/nginx/sites-available/nuvolacantiere.com`:
```nginx
server {
    listen 80;
    server_name nuvolacantiere.com www.nuvolacantiere.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

7. **Attiva il sito**:
```bash
ln -s /etc/nginx/sites-available/nuvolacantiere.com /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

8. **Configura SSL con Let's Encrypt**:
```bash
apt-get install certbot python3-certbot-nginx
certbot --nginx -d nuvolacantiere.com -d www.nuvolacantiere.com
```

### Opzione 2: Deploy con Docker

1. **Crea il Dockerfile**:
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

2. **Builda e avvia**:
```bash
docker build -t nuvolacantiere-website .
docker run -d -p 3000:3000 --name nuvolacantiere nuvolacantiere-website
```

## 🔧 Configurazione DNS

Configura i record DNS del tuo dominio:

```
Type: A
Name: @
Value: YOUR_DROPLET_IP

Type: A
Name: www
Value: YOUR_DROPLET_IP
```

## 📝 Personalizzazione

### Modificare i Prezzi
Edita il file `components/NuvolaCantiereWebsite.jsx`, array `plans`:
```javascript
const plans = [
  {
    id: 'free',
    price: '0',
    // ... altre proprietà
  },
  // ...
];
```

### Modificare le Funzionalità
Edita l'array `features` nello stesso file.

### Modificare i Colori
I colori principali sono definiti in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    600: '#2563eb', // Blu principale
    700: '#1d4ed8', // Blu scuro
  },
}
```

## 🔒 Sicurezza

- Mantieni Node.js e le dipendenze aggiornate
- Configura il firewall (UFW):
```bash
ufw allow 22
ufw allow 80
ufw allow 443
ufw enable
```

## 📊 Monitoraggio

### Visualizza i log PM2:
```bash
pm2 logs nuvolacantiere
```

### Monitoraggio risorse:
```bash
pm2 monit
```

## 🤝 Supporto

Per domande o supporto:
- Email: info@nuvolacantiere.com
- Telegram: @nuvolacantiere

## 📄 Licenza

Proprietario - NuvolaCantiere © 2024
