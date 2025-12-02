# Guida all'Installazione su WordPress (Elementor Pro)

Poiché il progetto contiene molti video (1.4GB), non può essere caricato come un semplice plugin o media. Va caricato sul server via FTP o File Manager del tuo hosting.

## Passo 1: Caricamento dei File

1.  **Scarica il file `patente_plus_core.zip`** che ho creato sul tuo Desktop.
2.  Accedi al **Pannello di Controllo del tuo Hosting** (cPanel, Plesk, SiteGround Tools, ecc.) o usa un client FTP (FileZilla).
3.  Vai nella cartella `public_html` (o nella cartella del tuo sito).
4.  Crea una nuova cartella chiamata `patente` (o il nome che preferisci).
5.  **Carica** il file `patente_plus_core.zip` dentro questa cartella ed **estrai** il contenuto.
6.  **IMPORTANTE**: Ora devi caricare manualmente le cartelle numerate da `1` a `17` dal tuo computer alla cartella `patente` sul server. Queste contengono i video pesanti.

Alla fine, la struttura sul server dovrà essere:
```
public_html/
  └── patente/
       ├── index.html
       ├── styles.css
       ├── app.js
       ├── ...
       ├── 1/ (con video e pdf)
       ├── ...
       └── 17/
```

## Passo 2: Integrazione in Elementor

Hai due modi per mostrare il sito:

### Opzione A: Link Diretto (Consigliato)
Crea un pulsante o una voce di menu nel tuo sito WordPress che punta a:
`https://iltuosito.it/patente/index.html`

### Opzione B: Incorpora in una Pagina (Iframe)
Se vuoi che il sistema appaia "dentro" una pagina del tuo sito WordPress:

1.  Crea una nuova pagina con Elementor.
2.  Imposta il layout di pagina su "Elementor Canvas" (per avere tutto lo spazio) o "A larghezza intera".
3.  Aggiungi un widget **HTML**.
4.  Incolla questo codice (sostituisci `iltuosito.it` con il tuo dominio reale):

```html
<iframe 
    src="https://iltuosito.it/patente/index.html" 
    style="width: 100%; height: 100vh; border: none;" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>
```

## Note Importanti
- **Cache**: Se fai modifiche, ricorda di svuotare la cache del browser e di WordPress/Server.
- **Permessi**: Assicurati che le cartelle caricate abbiano permessi `755` e i file `644` (di solito è automatico).
