// Nordic Operations AI Chat Widget – Site Configuration
// Sæt din Anthropic API-nøgle her for at aktivere AI-tilstand.
// Hvis apiKey er tom (""), bruges automatisk FAQ-tilstand (virker uden API-nøgle).
window.CHAT_CONFIG = {
  apiKey:   "",                         // ← Indsæt Anthropic API-nøgle her
  model:    "claude-sonnet-4-6",
  siteName: "Aarhus Søfartsmuseum",
  welcome:  "Hej! Jeg er museets digitale guide – spørg mig om åbningstider, samlingen, arrangementer eller andet du vil vide om Aarhus Søfartsmuseum.",
  color:    "#0b2438",
  system: `Du er en hjælpsom og venlig digital guide for Aarhus Søfartsmuseum.
Du hjælper besøgende med spørgsmål om museet, samlingen, arrangementer, åbningstider, frivilligarbejde, donationer, bogen og Aarhus Havns maritime historie.
Svar på det sprog brugeren skriver på (dansk eller engelsk). Hold svarene korte og præcise.

Nøglefakta:
- Navn: Aarhus Søfartsmuseum
- Adresse: Hveensgade 3, 8000 Aarhus C
- Telefon: 60 64 18 16
- E-mail: a.dam@suu.dk
- CVR: 43429329
- Grundlagt: 2009 af frivillige
- Åbningstider: Tirsdag–fredag 10-16, lørdag 10-14`,
  faq: [
    {q: "åbningstider",  a: "Museet holder åbent tirsdag–fredag 10-16 og lørdag 10-14. Ring på 60 64 18 16 eller skriv til a.dam@suu.dk for at bekræfte."},
    {q: "adresse",       a: "Aarhus Søfartsmuseum, Hveensgade 3, 8000 Aarhus C. Find os på Google Maps via Kontakt-siden."},
    {q: "parkering",     a: "Offentlig parkering på Pier 2 og langs Kystvejen. P-afgift gælder i dagtimerne."},
    {q: "handicap",      a: "Museet er tilgængeligt for kørestolsbrugere. Kontakt os på forhånd ved særlige behov."},
    {q: "billet",        a: "Kontakt museet for aktuelle oplysninger om priser og billetkøb."},
    {q: "bogen",         a: "Museets bog 'Man skulle have fanden til oldemor' bestilles via a.dam@suu.dk eller tlf. 60 64 18 16."},
    {q: "frivillig",     a: "Vi søger altid frivillige! Udfyld formularen på siden 'Bliv frivillig' eller skriv til a.dam@suu.dk."},
    {q: "arrangementer", a: "Se alle kommende arrangementer på siden 'Arrangementer'. Vi afholder foredrag, åbent hus og maritime dage."},
    {q: "samling",       a: "Samlingen indeholder skibsmodeller, navigationsinstrumenter, fotografier, historiske dokumenter og maritime genstande."},
    {q: "donation",      a: "Støt museet med donation, sponsorat eller medlemskab. Kontakt os på a.dam@suu.dk."},
    {q: "havn",          a: "Aarhus Havn er i dag Skandinaviens største containerhavn og har formet byens udvikling siden middelalderen."},
    {q: "skib",          a: "Samlingen indeholder detaljerede skibsmodeller og historiske billeder af skibe fra Aarhus Havn."},
    {q: "lods",          a: "Lodserne har i århundreder lodset skibe sikkert ind og ud af Aarhus Havn. Lodsvæsenets historie er en vigtig del af museets formidling."},
    {q: "kontakt",       a: "Ring på 60 64 18 16 eller skriv til a.dam@suu.dk. Adressen er Hveensgade 3, 8000 Aarhus C."},
  ]
};