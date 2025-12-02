// Video Data - All 17 videos from folders
const videos = [
    {
        id: 1,
        title: "Il Linguaggio della Strada",
        description: "Introduzione al codice visivo della strada e ai principi fondamentali della segnaletica",
        duration: "12:30",
        thumbnail: "thumbnails/video1.jpg",
        videoUrl: "https://www.youtube.com/embed/4RHI5gFVwQ4",
        isYouTube: true,
        pdfUrl: "1/Il_Codice_Visivo_della_Strada.pdf"
    },
    {
        id: 2,
        title: "Segnali di Pericolo",
        description: "Impara a riconoscere e interpretare tutti i segnali di pericolo italiani",
        duration: "18:45",
        thumbnail: "thumbnails/video2.jpg",
        videoUrl: "https://www.youtube.com/embed/thsonSTEoo8",
        isYouTube: true,
        pdfUrl: "2/Decodificare_la_Strada_Guida_Visiva_ai_Segnali.pdf"
    },
    {
        id: 3,
        title: "Segnali di Divieto",
        description: "Guida completa ai segnali di divieto e le loro applicazioni pratiche",
        duration: "15:20",
        thumbnail: "thumbnails/video3.jpg",
        videoUrl: "https://www.youtube.com/embed/IdPPjnFKkQA",
        isYouTube: true,
        pdfUrl: "3/Italian_Prohibition_Signs_Decoded.pdf"
    },
    {
        id: 4,
        title: "Segnali di Obbligo",
        description: "Tutti i segnali blu di obbligo che devi conoscere per l'esame",
        duration: "14:10",
        thumbnail: "thumbnails/video4.jpg",
        videoUrl: "https://www.youtube.com/embed/Sr2H2d_MYro",
        isYouTube: true,
        pdfUrl: "4/I_Segnali_Blu.pdf"
    },
    {
        id: 5,
        title: "Segnali di Precedenza",
        description: "Regole fondamentali sulla precedenza e segnaletica dedicata",
        duration: "20:15",
        thumbnail: "thumbnails/video5.jpg",
        videoUrl: "https://www.youtube.com/embed/j0AxL4B98t0",
        isYouTube: true,
        pdfUrl: "5/Precedenza_Strade_Guida_Visiva_Italiana.pdf"
    },
    {
        id: 6,
        title: "Segnali Orizzontali",
        description: "La segnaletica orizzontale: strisce, zebre e marcature stradali",
        duration: "11:30",
        thumbnail: "thumbnails/video6.jpg",
        videoUrl: "https://www.youtube.com/embed/Tj2xfNdOPzU",
        isYouTube: true,
        pdfUrl: "6/Silencio_stradale_decodificato.pdf"
    },
    {
        id: 7,
        title: "Semafori e Gerarchia dei Segnali",
        description: "Come interpretare i semafori e la gerarchia della segnaletica stradale",
        duration: "13:45",
        thumbnail: "thumbnails/video7.jpg",
        videoUrl: "https://www.youtube.com/embed/wiE1ik9dHRE",
        isYouTube: true,
        pdfUrl: "7/Gerarchia_Dei_Segnali_Stradali.pdf"
    },
    {
        id: 8,
        title: "Segnaletica Stradale Italiana",
        description: "Panoramica completa della segnaletica stradale in Italia",
        duration: "16:20",
        thumbnail: "thumbnails/video8.jpg",
        videoUrl: "https://www.youtube.com/embed/e9wlxv5psQE",
        isYouTube: true,
        pdfUrl: "8/Silently_generating_the_title_based_on_the_Italian_core_concept.pdf"
    },
    {
        id: 9,
        title: "Pannelli Integrativi",
        description: "Guida ai pannelli integrativi e al contesto dei segnali stradali",
        duration: "10:15",
        thumbnail: "thumbnails/video9.jpg",
        videoUrl: "https://www.youtube.com/embed/HBIW9rNEv8w",
        isYouTube: true,
        pdfUrl: "9/Road_Sign_Context.pdf"
    },
    {
        id: 10,
        title: "Segnali Complementari e Cantieri",
        description: "Segnali complementari, di cantiere e temporanei sulla strada",
        duration: "12:40",
        thumbnail: "thumbnails/video10.jpg",
        videoUrl: "10/Eroi_Nascosti_della_Strada.mp4",
        pdfUrl: "10/Road_Language_Complementary_And_Construction_Signs.pdf"
    },
    {
        id: 11,
        title: "Manuale del Guidatore Proattivo",
        description: "Guida strategica su velocità, pericolo e consapevolezza alla guida",
        duration: "17:30",
        thumbnail: "thumbnails/video11.jpg",
        videoUrl: "11/Manuale_del_Guidatore_Proattivo.mp4",
        pdfUrl: "11/Guida_Strategica_Velocità_Pericolo_Consapevolezza.pdf"
    },
    {
        id: 12,
        title: "La Scienza della Frenata",
        description: "Spazio di sicurezza, distanza di arresto e tecniche di frenata",
        duration: "14:50",
        thumbnail: "thumbnails/video12.jpg",
        videoUrl: "12/La_Scienza_della_Frenata.mp4",
        pdfUrl: "12/Spazio_di_Sicurezza_e_Distanza_di_Arresto.pdf"
    },
    {
        id: 13,
        title: "Le Regole della Strada",
        description: "Guida pratica alla circolazione e al dominio della strada",
        duration: "19:20",
        thumbnail: "thumbnails/video13.jpg",
        videoUrl: "13/Le_Regole_della_Strada.mp4",
        pdfUrl: "13/Il_Dominio_della_Strada_Guida_Pratica_alla_Circolazione.pdf"
    },
    {
        id: 14,
        title: "Precedenza - Chi Passa Per Primo?",
        description: "Regole di precedenza senza errori: chi passa per primo in ogni situazione",
        duration: "15:45",
        thumbnail: "thumbnails/video14.jpg",
        videoUrl: "14/Chi_Passa_Per_Primo_.mp4",
        pdfUrl: "14/Precedenza_Zero_Errori.pdf"
    },
    {
        id: 15,
        title: "Le Regole del Sorpasso",
        description: "Guida completa alle regole e tecniche del sorpasso sicuro",
        duration: "13:25",
        thumbnail: "thumbnails/video15.jpg",
        videoUrl: "15/Le_Regole_del_Sorpasso.mp4",
        pdfUrl: "15/The_Overtaking_Playbook.pdf"
    },
    {
        id: 16,
        title: "Guidare in Italia",
        description: "Controllo del veicolo e regole fondamentali per guidare in Italia",
        duration: "18:10",
        thumbnail: "thumbnails/video16.jpg",
        videoUrl: "16/Guidare_in_Italia.mp4",
        pdfUrl: "16/Mastering_The_Road_Vehicle_Control_and_Rules.pdf"
    },
    {
        id: 17,
        title: "Guidare in Italia - Le Regole",
        description: "Il viaggio del guidatore consapevole: regole complete di guida",
        duration: "16:55",
        thumbnail: "thumbnails/video17.jpg",
        videoUrl: "17/Guidare_in_Italia__Le_Regole.mp4",
        pdfUrl: "17/Il_Viaggio_del_Guidatore_Consapevole.pdf"
    }
];

// Local Storage Functions
function getWatchedVideos() {
    const watched = localStorage.getItem('watchedVideos');
    return watched ? JSON.parse(watched) : [];
}

function markVideoAsWatched(videoId) {
    const watched = getWatchedVideos();
    if (!watched.includes(videoId)) {
        watched.push(videoId);
        localStorage.setItem('watchedVideos', JSON.stringify(watched));
    }
}

// Get completed videos (100% watched)
function getCompletedVideos() {
    const completed = [];
    for (let i = 1; i <= videos.length; i++) {
        if (localStorage.getItem(`video_${i}_completed`) === 'true') {
            completed.push(i);
        }
    }
    return completed;
}

function updateStats() {
    const totalVideos = videos.length;
    const completedVideos = getCompletedVideos();
    const completedCount = completedVideos.length;
    const progressPercent = Math.round((completedCount / totalVideos) * 100);

    // Update header stats if they exist
    const totalVideosEl = document.getElementById('totalVideos');
    const completedVideosEl = document.getElementById('completedVideos');
    const progressPercentEl = document.getElementById('progressPercent');
    
    if (totalVideosEl) totalVideosEl.textContent = totalVideos;
    if (completedVideosEl) completedVideosEl.textContent = completedCount;
    if (progressPercentEl) progressPercentEl.textContent = progressPercent + '%';

    // Update global progress bar
    updateGlobalProgress(completedCount, totalVideos, progressPercent);
}

function updateGlobalProgress(completed, total, percent) {
    const progressFillEl = document.getElementById('globalProgressFill');
    const progressPercentEl = document.getElementById('globalProgressPercent');
    const progressTextEl = document.getElementById('globalProgressText');

    if (progressFillEl) {
        progressFillEl.style.width = percent + '%';
    }
    if (progressPercentEl) {
        progressPercentEl.textContent = percent + '%';
    }
    if (progressTextEl) {
        progressTextEl.textContent = `${completed} di ${total} video completati`;
    }
}

// Check if user is logged in
function isUserLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

// Check if a video is unlocked
function isVideoUnlocked(videoId) {
    // Video 1 is always unlocked for everyone
    if (videoId === 1) return true;

    // For videos 2+, user must be logged in
    if (!isUserLoggedIn()) return false;

    // Check if previous video is completed
    const prevVideoId = videoId - 1;
    return localStorage.getItem(`video_${prevVideoId}_completed`) === 'true';
}

// Render Video Grid
function renderVideoGrid() {
    const grid = document.getElementById('videoGrid');
    if (!grid) return;
    
    const loggedIn = isUserLoggedIn();

    grid.innerHTML = videos.map(video => {
        const isUnlocked = isVideoUnlocked(video.id);
        
        // Only show progress status if logged in
        let statusBadge = '';
        if (loggedIn) {
            const isCompleted = localStorage.getItem(`video_${video.id}_completed`) === 'true';
            const watchedVideos = getWatchedVideos();
            const isWatched = watchedVideos.includes(video.id);
            
            if (isCompleted) {
                statusBadge = '<div class="duration-badge" style="background: var(--success)">✅ Completato</div>';
            } else if (isWatched) {
                statusBadge = '<div class="duration-badge" style="background: var(--gold)">▶️ Iniziato</div>';
            } else {
                statusBadge = `<div class="duration-badge">${video.duration}</div>`;
            }
        } else {
            // Not logged in - just show duration
            statusBadge = `<div class="duration-badge">${video.duration}</div>`;
        }

        // Locked state class and click handler
        const lockedClass = !isUnlocked ? 'locked' : '';
        const clickAction = isUnlocked ? `window.location.href='player.html?video=${video.id}'` : '';

        // Lock overlay message depends on why it's locked
        let lockMessage = '';
        if (video.id >= 2 && !loggedIn) {
            lockMessage = 'Registrati per sbloccare';
        } else if (video.id >= 2) {
            lockMessage = 'Completa il video precedente';
        }

        const lockOverlay = !isUnlocked ? `
            <div class="lock-overlay">
                <div class="lock-icon">🔒</div>
                <div class="lock-text">${lockMessage}</div>
            </div>
        ` : '';

        return `
            <div class="video-card ${lockedClass}" onclick="${clickAction}">
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
                    ${!isUnlocked ? lockOverlay : '<div class="play-overlay"></div>'}
                    ${statusBadge}
                </div>
                <div class="video-info">
                    <h3 class="video-title">${video.title}</h3>
                    <p class="video-description">${video.description}</p>
                    <div class="video-meta">
                        <span>⏱️ ${video.duration}</span>
                        <span>📄 PDF incluso</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Navigate to Video Player
function playVideo(videoId) {
    window.location.href = `player.html?video=${videoId}`;
}

// Smooth Scroll Animation
function animateOnScroll() {
    const cards = document.querySelectorAll('.video-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });
}

// Get current user data
function getCurrentUserData() {
    const username = localStorage.getItem('currentUser');
    if (!username) return null;
    
    const allUsers = JSON.parse(localStorage.getItem('allUsers') || '{}');
    return allUsers[username] || null;
}

// Update user area UI
function updateUserArea() {
    const loginForm = document.getElementById('loginFormHeader');
    const userInfo = document.getElementById('userInfoHeader');
    const userNameDisplay = document.getElementById('userNameDisplay');
    
    if (!loginForm || !userInfo) return;
    
    if (isUserLoggedIn()) {
        const userData = getCurrentUserData();
        loginForm.style.display = 'none';
        userInfo.style.display = 'flex';
        if (userData && userNameDisplay) {
            userNameDisplay.textContent = userData.firstName;
        }
    } else {
        loginForm.style.display = 'flex';
        userInfo.style.display = 'none';
    }
}

// Handle login
function handleLogin() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    if (!username || !password) {
        alert('⚠️ Inserisci username e password.');
        return;
    }
    
    const allUsers = JSON.parse(localStorage.getItem('allUsers') || '{}');
    const user = allUsers[username];
    
    if (!user) {
        alert('⚠️ Username non trovato.');
        return;
    }
    
    if (user.password !== password) {
        alert('⚠️ Password errata.');
        return;
    }
    
    // Login successful
    localStorage.setItem('currentUser', username);
    localStorage.setItem('leadCaptured', 'true');
    
    // Restore user's video progress
    if (user.videoProgress) {
        Object.keys(user.videoProgress).forEach(key => {
            localStorage.setItem(key, 'true');
        });
    }
    
    alert('✅ Benvenuto ' + user.firstName + '!');
    window.location.reload();
}

// Handle logout
function handleLogout() {
    // Save current progress to user data before logout
    const username = localStorage.getItem('currentUser');
    if (username) {
        const allUsers = JSON.parse(localStorage.getItem('allUsers') || '{}');
        if (allUsers[username]) {
            // Save video progress
            const videoProgress = {};
            for (let i = 1; i <= 17; i++) {
                if (localStorage.getItem(`video_${i}_completed`) === 'true') {
                    videoProgress[`video_${i}_completed`] = true;
                }
            }
            allUsers[username].videoProgress = videoProgress;
            localStorage.setItem('allUsers', JSON.stringify(allUsers));
        }
    }
    
    // Clear session data
    localStorage.removeItem('currentUser');
    localStorage.removeItem('leadCaptured');
    localStorage.removeItem('leadData');
    
    // Clear video progress from localStorage
    for (let i = 1; i <= 17; i++) {
        localStorage.removeItem(`video_${i}_completed`);
    }
    localStorage.removeItem('watchedVideos');
    
    alert('👋 Arrivederci!');
    window.location.reload();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateStats();
    renderVideoGrid();
    animateOnScroll();
    updateUserArea();
    
    // Login button event
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', handleLogin);
    }
    
    // Allow Enter key to login
    const loginPassword = document.getElementById('loginPassword');
    if (loginPassword) {
        loginPassword.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleLogin();
        });
    }
    
    // Logout button event
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
});
