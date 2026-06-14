# Aarhus Søfartsmuseum – Hjemmeside (Version 2.1)

Statisk hjemmeside til Aarhus Søfartsmuseum, bygget som en klassisk flersidet hjemmeside
med separate sider for hvert emne. Navigationen sker via en gennemgående hamburger-menu
(de tre streger), som fungerer ens på mobil, iPad og PC.

Målgruppe: 60+, frivillige, museumsgæster, iPad- og PC-brugere. Designet er bevidst
enkelt: korte sider, store knapper, tydelig navigation – ikke en lang scroll-side.

## Struktur

```
/index.html            - Forside (kort): hero + kort intro + "Aktuelt lige nu"
/om.html                - Om museet: mission, vision, hvem er vi
/historie.html          - Museets historie: tidslinje (2009, Bassin 7, Containermuseum, Pier 3, i dag)
/samlingen.html         - Samlingen: temaer, genstande, lille billedgalleri
/fotos.html             - Historiske fotos: ugens/månedens foto + temaer (havn, skibe, søfolk, containerhavn)
/arrangementer.html     - Arrangementer: foredrag, rundvisninger, workshops, kommende datoer
/nyheder.html           - Nyheder: seneste nyt fra museet
/bog.html               - Bogen: "Man skulle have fanden til oldemor" – historie, pris, bestilling
/frivillig.html         - Bliv frivillig: opgaver, billeder, tilmeldingsformular
/stoet.html             - Støt museet: donation, sponsorat, medlemskab, bog, frivillig + CTA
/sponsorer.html         - Sponsorer: nuværende/fremtidige sponsorer og samarbejde
/fremtid.html           - Fremtidens museum: status, vision/strategi, udviklingsprojekter, links & samarbejdspartnere
/aabningstider.html     - Åbningstider: redigerbart åbningstidsfelt + adresse/Maps
/kontakt.html           - Kontakt: kontaktoplysninger + formular
/admin/index.html       - Adminpanel (Decap CMS)
/admin/config.yml       - Opsætning af adminpanel og indholdstyper
/content/               - CMS-data (settings, gallery, events, news, collection, pages)
/dashboard/index.html   - Bestyrelsesportal (kun via diskret footer-link "Bestyrelse")
/assets/                - Billeder og medier (uploads fra Decap CMS gemmes i assets/uploads)
```

## Navigation

Hamburger-menuen (de tre streger) er hovednavigationen på alle skærmstørrelser –
mobil, iPad og PC. Menuen er grupperet i fire afsnit for overskuelighed:

- Museet: Forside, Om museet, Museets historie, Fremtidens museum
- Oplev: Samlingen, Historiske fotos, Arrangementer, Nyheder, Bogen
- Vær med: Bliv frivillig, Støt museet, Sponsorer
- Praktisk: Åbningstider, Kontakt

Den aktive side er markeret i menuen. På PC/iPad åbner menuen som et bredt panel i
4 kolonner (én pr. gruppe); på mobil vises grupperne i en lodret liste.

## Forside

Forsiden er bevidst kort:
- Hero med logo/ikon, "Aarhus Søfartsmuseum", "Vi bevarer Aarhus' maritime historie" og
  tre knapper (Besøg museet, Arrangementer, Støt museet)
- Kort introduktion + "Læs mere om museet"
- "Aktuelt lige nu": tre kort med seneste nyhed, næste arrangement og ugens foto, hver
  med link til den fulde side (Nyheder, Arrangementer, Historiske fotos)

## Footer (på alle sider)

- Aarhus Søfartsmuseum, adresse (Hveensgade 3, 8000 Aarhus C), telefon, e-mail, CVR 43429329
- Genveje til de vigtigste sider
- Google Maps-link og link til Åbningstider
- Facebook
- Diskrete links: Admin (/admin/) og Bestyrelse (/dashboard/)

## Bemærkninger til videre arbejde

- Eksterne links på Fremtidens museum (Maritime partnere, Museer, Organisationer,
  Maritime netværk) er sat ind som eksempler/placeholders og bør gennemgås og opdateres
  med museets faktiske samarbejdspartnere og kontrolleres for aktive links.
- Sponsorer-siden er forberedt med struktur og kort, men afventer museets faktiske
  sponsorliste.
- Nyheder og Arrangementer er pt. statisk indhold på siderne. De kan kobles til Decap
  CMS' content/news/ og content/events/ for løbende redigering.
- "Ugens foto" / "Månedens foto" på Historiske fotos og forsiden er pt. faste eksempler
  og kan med fordel gøres redigerbare via CMS.

---

## 1. Sådan åbnes hjemmesiden

Når siden ligger på GitHub Pages, er den tilgængelig på:

```
https://JOHN_GITHUB_BRUGERNAVN.github.io/REPO_NAVN/
```

Hjemmesiden virker som almindelig statisk HTML.

## 2. Sådan åbnes admin

Gå til:

```
https://JOHN_GITHUB_BRUGERNAVN.github.io/REPO_NAVN/admin/
```

Eller klik på det lille "Admin"-link nederst i footeren på hjemmesiden.

Log ind med din GitHub-konto (kræver adgang til repoet). Decap CMS bruger GitHub som
backend – se admin/config.yml.

Vigtigt før første brug: udfyld backend.repo i admin/config.yml med jeres rigtige
GitHub-brugernavn/repo, og sæt GitHub OAuth op (se Decap CMS' dokumentation).

## 3. Sådan redigeres arrangementer og nyheder

1. Gå til admin (/admin/)
2. Vælg Arrangementer eller Nyheder i menuen til venstre
3. Opret ny eller rediger eksisterende
4. Udfyld titel, dato, beskrivelse og evt. billede
5. Klik Publish (Publicér)

Bemærk: indholdet på arrangementer.html og nyheder.html er pt. skrevet direkte i HTML.
For at CMS-redigeringer skal slå igennem på disse sider, skal siderne udvides til at
hente data fra content/events/ og content/news/ (et naturligt næste skridt).

## 4. Sådan uploades billeder

1. Klik på et billedfelt i admin og vælg Upload
2. Billedet gemmes i assets/uploads/
3. Billedet knyttes til det indhold, du redigerer

## 5. Sådan publiceres ændringer

- Publish i Decap CMS opretter automatisk en ændring (commit) i GitHub-repoet
- GitHub Pages genbygger automatisk hjemmesiden efter 1-2 minutter

## Teknisk

- Ren HTML, CSS og JavaScript – ingen frameworks, ingen WordPress, ingen database
- Maritimt design (navy/sand/hvid/diskret rød), gennemgående hamburger-menu, store
  knapper og touch-flader (egnet til ældre brugere)
- Mobil-, tablet- og PC-optimeret
- Bestyrelsesportal (/dashboard/) er uændret og adskilt fra den offentlige hjemmeside
