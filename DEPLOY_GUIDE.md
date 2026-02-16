# Guida Completa al Deploy su DigitalOcean Droplet

Questa guida ti accompagnerà passo-passo nel deploy del sito NuvolaCantiere sul tuo droplet DigitalOcean.

## 📋 Prerequisiti

- Un droplet DigitalOcean (Ubuntu 22.04 o superiore consigliato)
- Accesso SSH al droplet
- Dominio nuvolacantiere.com configurato per puntare al tuo droplet
- Bot Telegram già funzionante sul droplet

## 🚀 Passo 1: Connessione al Droplet

```bash
ssh root@your-droplet-ip
```

## 📦 Passo 2: Installazione Node.js

```bash
# Aggiorna il sistema
apt update && apt upgrade -y

# Installa Node.js 18.x (LTS)
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# Verifica l'installazione
node --version  # Dovrebbe mostrare v18.x.x
npm --version   # Dovrebbe mostrare 9.x.x o superiore
```

## 🛠️ Passo 3: Installazione PM2

PM2 è un process manager per Node.js che mantiene l'applicazione sempre attiva.

```bash
npm install -g pm2

# Verifica l'installazione
pm2 --version
```

## 📁 Passo 4: Preparazione Directory del Progetto

```bash
# Crea la directory per il sito web
mkdir -p /var/www/nuvolacantiere-website
cd /var/www/nuvolacantiere-website
```

## 📤 Passo 5: Caricamento dei File

Hai diverse opzioni per caricare i file sul droplet:

### Opzione A: Usando SCP (da locale)

Sul tuo computer locale:
```bash
# Dalla directory del progetto
scp -r * root@your-droplet-ip:/var/www/nuvolacantiere-website/
```

### Opzione B: Usando Git

Sul droplet:
```bash
cd /var/www/nuvolacantiere-website
git clone your-repository-url .
```

### Opzione C: Usando SFTP

Usa un client SFTP come FileZilla:
- Host: your-droplet-ip
- Username: root
- Porta: 22
- Carica tutti i file in /var/www/nuvolacantiere-website/

## 🔨 Passo 6: Build del Progetto

```bash
cd /var/www/nuvolacantiere-website

# Installa le dipendenze
npm install

# Builda l'applicazione
npm run build
```

Questo processo potrebbe richiedere alcuni minuti.

## ▶️ Passo 7: Avvio con PM2

```bash
# Avvia l'applicazione
pm2 start npm --name "nuvolacantiere" -- start

# Salva la configurazione
pm2 save

# Configura PM2 per avviarsi automaticamente al boot
pm2 startup
# Copia ed esegui il comando che PM2 ti suggerisce
```

Verifica che l'applicazione sia in esecuzione:
```bash
pm2 status
```

Dovresti vedere "nuvolacantiere" con status "online".

## 🌐 Passo 8: Configurazione Nginx

### Installazione Nginx

```bash
apt install nginx -y
```

### Configurazione del Virtual Host

```bash
# Copia il file di configurazione fornito
nano /etc/nginx/sites-available/nuvolacantiere.com
```

Incolla il contenuto del file `nginx-config.conf` fornito nel progetto.

### Attivazione del Sito

```bash
# Crea il link simbolico
ln -s /etc/nginx/sites-available/nuvolacantiere.com /etc/nginx/sites-enabled/

# Rimuovi la configurazione default (opzionale)
rm /etc/nginx/sites-enabled/default

# Testa la configurazione
nginx -t

# Se il test è OK, riavvia Nginx
systemctl restart nginx
```

## 🔒 Passo 9: Configurazione SSL (HTTPS)

### Installazione Certbot

```bash
apt install certbot python3-certbot-nginx -y
```

### Ottenimento Certificato SSL

```bash
certbot --nginx -d nuvolacantiere.com -d www.nuvolacantiere.com
```

Segui le istruzioni:
1. Inserisci la tua email
2. Accetta i termini di servizio
3. Scegli se condividere la tua email
4. Certbot configurerà automaticamente HTTPS

### Rinnovo Automatico

Il certificato SSL si rinnova automaticamente. Puoi testare il rinnovo con:
```bash
certbot renew --dry-run
```

## 🔥 Passo 10: Configurazione Firewall

```bash
# Configura UFW
ufw allow 22      # SSH
ufw allow 80      # HTTP
ufw allow 443     # HTTPS

# Attiva il firewall
ufw enable

# Verifica lo status
ufw status
```

## ✅ Passo 11: Verifica Finale

### Test del Sito

Apri il browser e visita:
- http://nuvolacantiere.com (dovrebbe reindirizzare a HTTPS)
- https://nuvolacantiere.com (dovrebbe caricare il sito)

### Verifica PM2

```bash
# Visualizza i log in tempo reale
pm2 logs nuvolacantiere

# Visualizza lo status
pm2 status

# Visualizza il monitoraggio
pm2 monit
```

### Verifica Nginx

```bash
# Controlla lo status
systemctl status nginx

# Visualizza i log degli errori
tail -f /var/log/nginx/nuvolacantiere.error.log

# Visualizza i log degli accessi
tail -f /var/log/nginx/nuvolacantiere.access.log
```

## 🔄 Aggiornamenti Futuri

Per aggiornare il sito dopo modifiche:

```bash
cd /var/www/nuvolacantiere-website

# Se usi Git
git pull

# Reinstalla dipendenze se necessario
npm install

# Rebuilda
npm run build

# Riavvia l'applicazione
pm2 restart nuvolacantiere
```

Oppure usa lo script automatico:
```bash
cd /var/www/nuvolacantiere-website
./deploy.sh
```

## 🆘 Troubleshooting

### Il sito non è raggiungibile

1. Verifica che PM2 sia attivo:
```bash
pm2 status
```

2. Verifica che Nginx sia attivo:
```bash
systemctl status nginx
```

3. Verifica i DNS del dominio:
```bash
dig nuvolacantiere.com
```

4. Controlla i log:
```bash
pm2 logs nuvolacantiere --lines 50
tail -f /var/log/nginx/nuvolacantiere.error.log
```

### Errori di Build

Se `npm run build` fallisce:
```bash
# Pulisci la cache
rm -rf node_modules .next
npm install
npm run build
```

### PM2 non parte dopo il riavvio

```bash
pm2 unstartup
pm2 startup
# Esegui il comando suggerito
pm2 save
```

## 📊 Monitoraggio e Manutenzione

### Comandi Utili PM2

```bash
# Visualizza i log
pm2 logs nuvolacantiere

# Riavvia l'app
pm2 restart nuvolacantiere

# Ferma l'app
pm2 stop nuvolacantiere

# Avvia l'app
pm2 start nuvolacantiere

# Informazioni dettagliate
pm2 show nuvolacantiere

# Monitoraggio risorse
pm2 monit
```

### Aggiornamenti Sistema

```bash
# Aggiorna il sistema regolarmente
apt update && apt upgrade -y

# Riavvia i servizi se necessario
pm2 restart all
systemctl restart nginx
```

## 🎉 Conclusione

Il tuo sito NuvolaCantiere è ora online e accessibile tramite HTTPS!

URL finale: https://nuvolacantiere.com

Ricorda di:
- ✅ Testare tutte le funzionalità del sito
- ✅ Verificare che i form contatti funzionino
- ✅ Controllare che il sito sia responsive su mobile
- ✅ Configurare Google Analytics (se desiderato)
- ✅ Impostare backup regolari

## 📞 Supporto

In caso di problemi:
1. Controlla i log di PM2 e Nginx
2. Verifica la configurazione DNS
3. Assicurati che il firewall permetta le connessioni
4. Contatta il supporto DigitalOcean se necessario
