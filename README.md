# Aarhus Søfartsmuseum – Hjemmeside V3.0

Udviklet af **Nordic Operations** · [nordicoperations.dk](https://nordicoperations.dk)

---

## Hvad ejer kunden?

Aarhus Søfartsmuseum ejer:
- Al HTML, CSS og JavaScript i dette projekt
- Alle tekster og indholdet på siderne
- Bestyrelsesportalen og dens data
- Domænet (skal registreres separat, f.eks. via Simply.com eller One.com)
- GitHub-repoet (når det er oprettet på kundens konto)
- QR-koderne i `assets/qr/`

Nordic Operations ejer:
- Retten til at bruge projektet som referenceprojekt
- Kreditering i footeren ("Website developed by Nordic Operations")

---

## Filstruktur

```
/
├── index.html                  Forside
├── om.html                     Om museet
├── historie.html               Museets historie
├── samlingen.html              Samlingen
├── fotos.html                  Historiske fotos (med lysboks)
├── arrangementer.html          Arrangementer
├── nyheder.html                Nyheder
├── bog.html                    Bogen
├── frivillig.html              Bliv frivillig
├── stoet.html                  Støt museet
├── sponsorer.html              Sponsorer
├── fremtid.html                Fremtidens museum
├── aabningstider.html          Åbningstider
├── kontakt.html                Kontakt
├── privatlivspolitik.html      Privatlivspolitik (GDPR)
├── cookiepolitik.html          Cookiepolitik
├── offline.html                Offline fallback (PWA)
├── manifest.json               PWA app-manifest
├── service-worker.js           PWA service worker
├── robots.txt                  Søgemaskineinstruktioner
├── sitemap.xml                 Sitemap til Google/Bing
├── chat-config.js              AI-chat konfiguration ← TILPAS DETTE
├── admin/                      Decap CMS (Content Management)
│   ├── index.html
│   └── config.yml              ← Opdater repo-navn her
├── dashboard/                  Bestyrelsesportal
│   └── index.html
├── content/                    CMS-data (markdown/JSON)
├── assets/
│   ├── icons/                  PWA app-ikoner (192 og 512px)
│   ├── qr/                     QR-koder (PNG + HTML-oversigt)
│   └── uploads/                Billeder uploadet via CMS
└── README.md                   Denne fil
```

---

## Deployment til GitHub Pages

### Første gang
1. Opret et GitHub-repo under museets eller Nordic Operations' konto
2. Upload alle filer direkte til roden af `main`-branchen
   - Brug GitHub-websitet (drag & drop) eller GitHub Desktop
   - **Kritisk:** Alle `.html`-filer skal ligge i roden – IKKE i en undermappe
3. Gå til repo → Settings → Pages → Source: `main` / `/ (root)`
4. Siden er live på `https://BRUGERNAVN.github.io/REPO-NAVN/` efter 1-2 min

### Opdater admin/config.yml
Åbn `admin/config.yml` og erstat:
```yaml
backend:
  name: github
  repo: JOHN_GITHUB_BRUGERNAVN/REPO_NAVN   ← ret disse to
```

### Eget domæne (valgfrit)
1. Opret en fil `CNAME` i roden med indholdet: `aarhus-sofartsmuseum.dk`
2. Peg din DNS til GitHub Pages (A-records: 185.199.108.153 m.fl.)

---

## Opdatering af hjemmesiden

### Via Decap CMS (anbefalet til redaktører)
1. Gå til `https://DIN-URL/admin/`
2. Log ind med GitHub-konto (kræver adgang til repoet)
3. Opret nyheder, arrangementer eller rediger sider
4. Klik "Publish" → ændringen gemmes automatisk i GitHub
5. Siden er opdateret efter 1-2 minutter

### Direkte redigering (til udviklere)
1. Ret HTML-filerne direkte i GitHub-websitet eller i en editor
2. Commit og push til `main`-branchen
3. GitHub Pages genbygger automatisk

### Cache-versionering (ved ny version)
Når du laver en ny version, skal du opdatere `service-worker.js`:
```javascript
const CACHE_VERSION = 'asm-v3.1';  ← skift versionsnummer
```
Dette tvinger alle brugeres browsere til at hente den nye version.

---

## AI-chat konfiguration

Åbn `chat-config.js` og udfyld:
```javascript
window.CHAT_CONFIG = {
  apiKey: "sk-ant-...",  // ← Indsæt Anthropic API-nøgle her
  ...
};
```
Uden API-nøgle kører chatbotten automatisk i **FAQ-tilstand** – den virker stadig og besvarer de mest almindelige spørgsmål. Chatbotten er modulær og kan kopieres direkte til andre Nordic Operations-projekter.

**Sikkerhed:** API-nøglen ligger kun i `chat-config.js` og bruges direkte fra brugerens browser. Anthropic-nøglen er synlig i kildekoden. Brug kun en nøgle med lav udgiftsgrænse til dette formål.

---

## QR-koder

QR-koderne ligger i `assets/qr/`:
- `qr-hjemmeside.png` – Forsiden
- `qr-maps.png` – Google Maps
- `qr-kontakt.png` – Kontaktsiden
- `qr-arrangementer.png` – Arrangementer
- `qr-stoet.png` – Støt museet
- `qr-frivillig.png` – Bliv frivillig
- `qr-chatbot.png` – AI-museumsguide
- `qr-pwa-install.png` – Installér som app

Åbn `assets/qr/qr-oversigt.html` i en browser og print (Ctrl+P) for en printvenlig oversigt med alle QR-koder.

Når domænet skifter, skal QR-koderne regenereres med det nye domæne. Kontakt Nordic Operations.

---

## PWA – Installér som app

Hjemmesiden kan installeres som app på iPhone, Android, iPad og PC:
- **iPhone/iPad:** Safari → Del-knap → "Føj til hjemmeskærm"
- **Android:** Chrome → Menu → "Installér app"
- **PC (Chrome/Edge):** Adresselinjens installér-ikon

Appen fungerer offline for de 15 kernesider. Nye opdateringer vises automatisk med en "Opdater nu"-knap.

---

## Linktest – sådan tester du

1. Åbn `index.html` på GitHub Pages
2. Klik systematisk igennem alle menupunkter og bekræft at siden indlæses
3. Tjek at alle "kontakt os"-knapper åbner mail-klient korrekt
4. Tjek at alle telefonnumre virker (ring/klik på mobil)
5. Test chatbotten (skriv "åbningstider", "adresse", "bogen")
6. Test kontaktformularen (send en testbesked)
7. Test offline: sluk WiFi og genindlæs siden (skal vise offline-siden)

**Automatisk linktest:** Projektet inkluderer en linktest i bygge-scriptet. Kør:
```bash
python3 /home/claude/v30_part3.py
```

---

## Sikkerhed

- Ingen API-nøgler er hardcoded i kildekoden
- Ingen passwords er gemt i HTML, JS eller config-filer
- Kontaktformularer gemmer ingen data på serveren (mailto-baserede)
- Admin-panelet (Decap CMS) kræver GitHub OAuth – ingen password i koden
- `robots.txt` blokerer søgemaskiner fra at indeksere `/admin/` og `/dashboard/`
- CSP (Content Security Policy) anbefales tilføjet via GitHub Pages' `_headers`-fil

---

## GDPR

- Privatlivspolitik: `privatlivspolitik.html`
- Cookiepolitik: `cookiepolitik.html`
- Ingen tracking-cookies eller analytics
- localStorage bruges kun til åbningstider (teknisk nødvendig)
- Kontaktformularen sender via mailto – ingen serverside datalagring
- Chatbotten gemmer ingen persondata og beder aldrig om følsomme oplysninger

---

## Lav ny version

1. Opdater indhold i HTML-filerne eller via Decap CMS
2. Bump version i `service-worker.js`: `CACHE_VERSION = 'asm-vX.X'`
3. Opdater `sitemap.xml` hvis nye sider tilføjes
4. Test alle links (se ovenfor)
5. Commit og push til GitHub
6. Bekræft at GitHub Pages bygger korrekt (grønt flueben under Actions)
7. Udfyld statusrapporten (se nedenfor)

---

## Kontakt – Nordic Operations

For support, opdateringer og nye versioner:
- E-mail: J.Finmann@mail.dk
- Hjemmeside: [nordicoperations.dk](https://nordicoperations.dk)

---

## Statusrapportskabelon (udfyldes ved hver version)

| Kontrolpunkt     | Status | Bemærkning |
|------------------|--------|------------|
| Mobiltest        |        |            |
| Tablettest       |        |            |
| Desktoptest      |        |            |
| PWA              |        |            |
| Service Worker   |        |            |
| Cache-opdatering |        |            |
| Manifest         |        |            |
| Admin            |        |            |
| Mail             |        |            |
| SMS              |        |            |
| Telefon          |        |            |
| QR-kode          |        |            |
| GDPR             |        |            |
| Sikkerhed        |        |            |
| Overdragelse     |        |            |
