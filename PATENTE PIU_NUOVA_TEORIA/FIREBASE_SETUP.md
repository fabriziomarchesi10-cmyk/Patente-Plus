# Guida alla Configurazione Firebase per PATENTE+

## Passo 1: Crea un Progetto Firebase

1. Vai su **https://console.firebase.google.com/**
2. Clicca su **"Aggiungi progetto"**
3. Nome progetto: `PATENTE-PLUS` (o quello che preferisci)
4. Disabilita Google Analytics (opzionale, non necessario)
5. Clicca **"Crea progetto"**

## Passo 2: Abilita Authentication

1. Nel menu laterale, clicca su **"Authentication"**
2. Clicca **"Inizia"** (Get Started)
3. Vai alla tab **"Sign-in method"**
4. Clicca su **"Email/Password"**
5. Abilita il toggle **"Email/Password"** (primo toggle)
6. Clicca **"Salva"**

## Passo 3: Abilita Firestore Database

1. Nel menu laterale, clicca su **"Firestore Database"**
2. Clicca **"Crea database"**
3. Seleziona **"Avvia in modalità produzione"** (Production mode)
4. Location: scegli **"europe-west"** (più vicino all'Italia)
5. Clicca **"Abilita"**

## Passo 4: Configura le Regole di Sicurezza

1. Nella pagina Firestore, vai alla tab **"Regole"**
2. Sostituisci il contenuto con:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. Clicca **"Pubblica"**

## Passo 5: Ottieni le Credenziali

1. Clicca sull'icona **ingranaggio** (⚙️) in alto a sinistra → **"Impostazioni progetto"**
2. Scorri fino a **"Le tue app"**
3. Clicca sull'icona **Web** (`</>`)
4. Nome app: `PATENTE+ Web`
5. **NON** spuntare "Configura anche Firebase Hosting"
6. Clicca **"Registra app"**

## Passo 6: Copia le Credenziali

Vedrai un blocco di codice simile a questo:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "patente-plus-xxxxx.firebaseapp.com",
  projectId: "patente-plus-xxxxx",
  storageBucket: "patente-plus-xxxxx.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:xxxxxxxxxxxxx"
};
```

**COPIA QUESTO BLOCCO COMPLETO!**

## Passo 7: Inserisci le Credenziali nel Progetto

1. Apri il file `firebase-config.js` nel tuo progetto
2. Sostituisci i valori placeholder con le tue credenziali:

```javascript
const firebaseConfig = {
  apiKey: "TUA_API_KEY_QUI",           // ← Incolla qui
  authDomain: "TUO_DOMINIO_QUI",       // ← Incolla qui
  projectId: "TUO_PROJECT_ID_QUI",     // ← Incolla qui
  storageBucket: "TUO_STORAGE_QUI",    // ← Incolla qui
  messagingSenderId: "TUO_SENDER_QUI", // ← Incolla qui
  appId: "TUA_APP_ID_QUI"              // ← Incolla qui
};
```

3. Salva il file

## Passo 8: Testa il Sistema

1. Apri `register.html` nel browser
2. Registra un nuovo utente
3. Verifica che vieni reindirizzato a `index.html`
4. Controlla la console Firebase → Authentication per vedere l'utente creato
5. Controlla Firestore Database per vedere il documento utente creato

## ✅ Configurazione Completata!

Ora il sistema di autenticazione Firebase è attivo e funzionante!

---

## Risoluzione Problemi

### Errore: "Firebase is not defined"
- Verifica che gli script Firebase siano caricati prima di `firebase-config.js`
- Controlla la console del browser per errori di rete

### Errore: "Firebase: Error (auth/invalid-api-key)"
- Le credenziali in `firebase-config.js` non sono corrette
- Ricontrolla di aver copiato correttamente tutti i valori

### Utente non viene salvato in Firestore
- Verifica che le regole di sicurezza siano configurate correttamente
- Controlla la console del browser per errori

### Non riesco a fare login
- Verifica che l'email e password siano corrette
- Controlla che Authentication sia abilitato nella console Firebase
