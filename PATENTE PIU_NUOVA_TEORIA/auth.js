// Authentication Functions for PATENTE+

// Get current user
function getCurrentUser() {
    return firebaseAuth.currentUser;
}

// Check if user is logged in
function isUserLoggedIn() {
    return getCurrentUser() !== null;
}

// Register new user
async function registerUser(email, password) {
    try {
        const userCredential = await firebaseAuth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Create user document in Firestore
        await firebaseDb.collection('users').doc(user.uid).set({
            email: email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            videoProgress: {},
            leadData: null
        });

        console.log('✅ Utente registrato:', user.uid);
        return { success: true, user };
    } catch (error) {
        console.error('❌ Errore registrazione:', error);
        return { success: false, error: error.message };
    }
}

// Login user
async function loginUser(email, password) {
    try {
        const userCredential = await firebaseAuth.signInWithEmailAndPassword(email, password);
        console.log('✅ Login effettuato:', userCredential.user.uid);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('❌ Errore login:', error);
        return { success: false, error: error.message };
    }
}

// Logout user
async function logoutUser() {
    try {
        await firebaseAuth.signOut();
        console.log('✅ Logout effettuato');
        return { success: true };
    } catch (error) {
        console.error('❌ Errore logout:', error);
        return { success: false, error: error.message };
    }
}

// Save video progress to Firestore
async function saveVideoProgress(videoId, completed = true) {
    const user = getCurrentUser();
    if (!user) return;

    try {
        await firebaseDb.collection('users').doc(user.uid).update({
            [`videoProgress.video_${videoId}_completed`]: completed
        });
        console.log(`✅ Progresso video ${videoId} salvato`);
    } catch (error) {
        console.error('❌ Errore salvataggio progresso:', error);
    }
}

// Get user's video progress
async function getUserProgress() {
    const user = getCurrentUser();
    if (!user) return {};

    try {
        const doc = await firebaseDb.collection('users').doc(user.uid).get();
        if (doc.exists) {
            return doc.data().videoProgress || {};
        }
        return {};
    } catch (error) {
        console.error('❌ Errore caricamento progresso:', error);
        return {};
    }
}

// Save lead data to Firestore
async function saveLeadData(firstName, lastName, phone) {
    const user = getCurrentUser();
    if (!user) return;

    try {
        await firebaseDb.collection('users').doc(user.uid).update({
            leadData: {
                firstName,
                lastName,
                phone,
                submittedAt: firebase.firestore.FieldValue.serverTimestamp()
            }
        });
        console.log('✅ Dati lead salvati');
    } catch (error) {
        console.error('❌ Errore salvataggio lead:', error);
    }
}

// Get user's lead data
async function getUserLeadData() {
    const user = getCurrentUser();
    if (!user) return null;

    try {
        const doc = await firebaseDb.collection('users').doc(user.uid).get();
        if (doc.exists) {
            return doc.data().leadData || null;
        }
        return null;
    } catch (error) {
        console.error('❌ Errore caricamento lead:', error);
        return null;
    }
}

// Protect page - redirect to login if not authenticated
function protectPage() {
    firebaseAuth.onAuthStateChanged((user) => {
        if (!user) {
            // Not logged in, redirect to login
            window.location.href = 'login.html';
        }
    });
}

// Redirect if already logged in (for login/register pages)
function redirectIfLoggedIn() {
    firebaseAuth.onAuthStateChanged((user) => {
        if (user) {
            // Already logged in, redirect to home
            window.location.href = 'index.html';
        }
    });
}

// Get user email
function getUserEmail() {
    const user = getCurrentUser();
    return user ? user.email : null;
}

// Format Firebase error messages in Italian
function getItalianErrorMessage(errorCode) {
    const errors = {
        'auth/email-already-in-use': 'Questa email è già registrata',
        'auth/invalid-email': 'Email non valida',
        'auth/weak-password': 'La password deve essere di almeno 6 caratteri',
        'auth/user-not-found': 'Utente non trovato',
        'auth/wrong-password': 'Password errata',
        'auth/too-many-requests': 'Troppi tentativi. Riprova più tardi',
        'auth/network-request-failed': 'Errore di connessione. Verifica la tua rete'
    };

    return errors[errorCode] || 'Si è verificato un errore. Riprova.';
}
