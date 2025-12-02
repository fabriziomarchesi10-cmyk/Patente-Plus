# 📊 Configurazione Google Sheets per Raccolta Lead

## Passo 1: Crea il Google Sheet

1. Vai su [Google Sheets](https://sheets.google.com)
2. Crea un nuovo foglio
3. Nella **prima riga**, inserisci queste intestazioni:
   - A1: `Timestamp`
   - B1: `Nome`
   - C1: `Cognome`
   - D1: `Telefono`
   - E1: `Indirizzo`

## Passo 2: Crea il Google Apps Script

1. Nel foglio Google, vai su **Estensioni → Apps Script**
2. Cancella tutto il codice esistente
3. Incolla questo codice:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date().toLocaleString('it-IT'),
      data.firstName,
      data.lastName,
      data.phone,
      data.address
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("Il webhook è attivo!")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

4. Salva il progetto (Ctrl+S) con un nome es. "Lead Collector"

## Passo 3: Pubblica come Web App

1. Clicca su **Esegui → Esegui funzione → doGet** (per autorizzare)
2. Concedi i permessi richiesti
3. Clicca su **Deploy → Nuovo deployment**
4. Seleziona tipo: **App web**
5. Configura:
   - Descrizione: "Lead Collector"
   - Esegui come: **Me**
   - Chi ha accesso: **Chiunque**
6. Clicca **Deploy**
7. **COPIA L'URL** del web app (ti servirà!)

L'URL sarà simile a:
```
https://script.google.com/macros/s/AKfycb.../exec
```

## Passo 4: Configura il sito

1. Apri il file `player.js`
2. Trova la riga con `const GOOGLE_SHEETS_URL = `
3. Incolla l'URL che hai copiato

## ✅ Fatto!

Ora ogni lead inserito nel popup verrà salvato automaticamente nel tuo Google Sheet!

