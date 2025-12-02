// Firebase Configuration
// ISTRUZIONI: Sostituisci i valori placeholder con le tue credenziali Firebase
// Ottieni le credenziali da: https://console.firebase.google.com/
// Progetto → Impostazioni → Le tue app → Configurazione SDK

const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Inizializza Firebase
firebase.initializeApp(firebaseConfig);

// Inizializza servizi
const auth = firebase.auth();
const db = firebase.firestore();

// Esporta per uso in altri file
window.firebaseAuth = auth;
window.firebaseDb = db;

console.log('✅ Firebase inizializzato correttamente');
