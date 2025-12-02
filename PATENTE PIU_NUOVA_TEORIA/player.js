// Import video data (same as in app.js) - All 17 videos from folders
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

// State
let currentVideoIndex = 0;
let autoplayEnabled = false;

// Get URL Parameters
function getVideoIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const videoId = parseInt(params.get('video')) || 1;
    return videoId;
}

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

function getAutoplayPreference() {
    return localStorage.getItem('autoplay') === 'true';
}

function setAutoplayPreference(enabled) {
    localStorage.setItem('autoplay', enabled.toString());
}

// Load Video
function loadVideo(videoId) {
    const video = videos.find(v => v.id === videoId);
    if (!video) return;

    currentVideoIndex = videos.findIndex(v => v.id === videoId);

    // Check if this is a YouTube video
    const videoPlayer = document.getElementById('videoPlayer');
    const playerWrapper = videoPlayer.parentElement;

    if (video.isYouTube) {
        // Hide HTML5 video player
        videoPlayer.style.display = 'none';

        // Create or update YouTube iframe
        let youtubeIframe = document.getElementById('youtubePlayer');
        if (!youtubeIframe) {
            youtubeIframe = document.createElement('iframe');
            youtubeIframe.id = 'youtubePlayer';
            youtubeIframe.className = 'video-player';
            youtubeIframe.setAttribute('allowfullscreen', '');
            youtubeIframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            playerWrapper.insertBefore(youtubeIframe, videoPlayer);
        }

        // Set YouTube URL with autoplay and minimal controls
        youtubeIframe.src = video.videoUrl + '?autoplay=1&rel=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3';
        youtubeIframe.style.display = 'block';

        // Hide YouTube message if it exists
        const youtubeMessage = document.getElementById('youtubeMessage');
        if (youtubeMessage) {
            youtubeMessage.style.display = 'none';
        }
    } else {
        // Show HTML5 video player
        videoPlayer.style.display = 'block';

        // Hide YouTube iframe if it exists
        const youtubeIframe = document.getElementById('youtubePlayer');
        if (youtubeIframe) {
            youtubeIframe.style.display = 'none';
        }

        // Hide YouTube message if it exists
        const youtubeMessage = document.getElementById('youtubeMessage');
        if (youtubeMessage) {
            youtubeMessage.style.display = 'none';
        }

        // Update video source for local files
        const videoSource = document.getElementById('videoSource');
        videoSource.src = video.videoUrl;
        videoPlayer.load();
    }

    // Update UI
    document.getElementById('videoTitle').textContent = video.title;
    document.getElementById('videoDescription').textContent = video.description;

    // Update progress
    updateProgress();

    // Update navigation buttons
    updateNavigationButtons();

    // Update page title
    document.title = `${video.title} - PATENTE+`;

    // Update resource download buttons
    updateResourceButtons();
}

// Download PDF
function downloadPdf(pdfUrl, videoTitle) {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${videoTitle.replace(/[^a-z0-9]/gi, '_')}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Download Infographic
function downloadInfographic(videoId, videoTitle) {
    const infographicUrl = `${videoId}/unnamed (1).png`;
    const link = document.createElement('a');
    link.href = infographicUrl;
    link.download = `${videoTitle.replace(/[^a-z0-9]/gi, '_')}_Infografica.png`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Download Mind Map
function downloadMindMap(videoId, videoTitle) {
    const mindMapUrl = `${videoId}/NotebookLM Mind Map (3).png`;
    const link = document.createElement('a');
    link.href = mindMapUrl;
    link.download = `${videoTitle.replace(/[^a-z0-9]/gi, '_')}_Mappa_Mentale.png`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Update Resource Buttons
function updateResourceButtons() {
    const currentVideo = videos[currentVideoIndex];
    const pdfBtn = document.getElementById('downloadPdfBtn');
    const infographicBtn = document.getElementById('downloadInfographicBtn');
    const mindMapBtn = document.getElementById('downloadMindMapBtn');

    // PDF Button
    if (currentVideo && currentVideo.pdfUrl) {
        pdfBtn.disabled = false;
        pdfBtn.onclick = () => downloadPdf(currentVideo.pdfUrl, currentVideo.title);
    } else {
        pdfBtn.disabled = true;
    }

    // Infographic Button
    if (currentVideo) {
        infographicBtn.disabled = false;
        infographicBtn.onclick = () => downloadInfographic(currentVideo.id, currentVideo.title);
    } else {
        infographicBtn.disabled = true;
    }

    // Mind Map Button
    if (currentVideo) {
        mindMapBtn.disabled = false;
        mindMapBtn.onclick = () => downloadMindMap(currentVideo.id, currentVideo.title);
    } else {
        mindMapBtn.disabled = true;
    }
}

// User Functions
function isUserLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

function isLeadCaptured() {
    return localStorage.getItem('leadCaptured') === 'true';
}

function showLeadCaptureModal() {
    const modal = document.getElementById('leadCaptureModal');
    modal.classList.add('active');
    
    // Start playing the welcome video
    const welcomeVideo = document.getElementById('welcomeVideo');
    if (welcomeVideo) {
        welcomeVideo.currentTime = 0;
        welcomeVideo.muted = true; // Ensure muted for autoplay
        welcomeVideo.play().catch(err => console.log('Video autoplay:', err));
    }
}

function hideLeadCaptureModal() {
    const modal = document.getElementById('leadCaptureModal');
    modal.classList.remove('active');
    
    // Pause the welcome video
    const welcomeVideo = document.getElementById('welcomeVideo');
    if (welcomeVideo) {
        welcomeVideo.pause();
    }
}

// ⚠️ IMPORTANTE: Inserisci qui l'URL del tuo Google Apps Script
// Segui le istruzioni in GOOGLE_SHEETS_SETUP.md per ottenere l'URL
const GOOGLE_SHEETS_URL = 'INSERISCI_QUI_IL_TUO_URL_GOOGLE_SCRIPT';

async function handleLeadFormSubmit(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // Validate phone number (10 digits)
    if (!/^[0-9]{10}$/.test(phone)) {
        alert('⚠️ Il numero di cellulare deve contenere esattamente 10 cifre.');
        return;
    }

    // Validate username
    if (username.length < 4) {
        alert('⚠️ Username deve essere di almeno 4 caratteri.');
        return;
    }

    // Check if username already exists
    const existingUsers = JSON.parse(localStorage.getItem('allUsers') || '{}');
    if (existingUsers[username]) {
        alert('⚠️ Questo username è già in uso. Scegline un altro.');
        return;
    }

    // Validate password
    if (password.length < 6) {
        alert('⚠️ La password deve essere di almeno 6 caratteri.');
        return;
    }

    const userData = {
        firstName,
        lastName,
        phone,
        username,
        password, // In produzione, usare hashing!
        createdAt: new Date().toISOString(),
        videoProgress: { video_1_completed: true }
    };

    // Save user to "database"
    existingUsers[username] = userData;
    localStorage.setItem('allUsers', JSON.stringify(existingUsers));

    // Set current logged in user
    localStorage.setItem('currentUser', username);
    localStorage.setItem('leadData', JSON.stringify(userData));
    localStorage.setItem('leadCaptured', 'true');

    // Send to Google Sheets
    if (GOOGLE_SHEETS_URL && GOOGLE_SHEETS_URL !== 'INSERISCI_QUI_IL_TUO_URL_GOOGLE_SCRIPT') {
        try {
            const submitBtn = event.target.querySelector('button[type="submit"]');
            submitBtn.textContent = '⏳ Creazione account...';
            submitBtn.disabled = true;

            await fetch(GOOGLE_SHEETS_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    phone,
                    username
                })
            });

            console.log('✅ Lead inviato a Google Sheets');
        } catch (error) {
            console.error('❌ Errore invio a Google Sheets:', error);
        }
    }

    hideLeadCaptureModal();
    alert('✅ Account creato! Benvenuto ' + firstName + '!');
    updateNavigationButtons();
    
    // Refresh page to show logged in state
    window.location.reload();
}

// Update Progress Bar
function updateProgress() {
    const watchedVideos = getWatchedVideos();
    const totalVideos = videos.length;
    const completedCount = watchedVideos.length;
    const progressPercent = Math.round((completedCount / totalVideos) * 100);

    document.getElementById('progressText').textContent = `${completedCount} / ${totalVideos}`;
    document.getElementById('progressFill').style.width = progressPercent + '%';
}

// Update Navigation Buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentVideo = videos[currentVideoIndex];

    // Previous button - always enabled if not first video
    prevBtn.disabled = currentVideoIndex === 0;

    // Next button logic:
    const isLastVideo = currentVideoIndex === videos.length - 1;
    const isCurrentVideoCompleted = isVideoCompleted(currentVideo.id);
    const hasLeadData = isLeadCaptured();

    // For YouTube videos, we can't track completion automatically, so enable the button
    const canProceed = currentVideo.isYouTube || isCurrentVideoCompleted;

    // For video 1: only need to complete the video (or it's YouTube)
    // For videos 2+: need to complete video AND have submitted lead form
    let isNextDisabled = isLastVideo || !canProceed;

    if (currentVideo.id === 1 && canProceed && !hasLeadData) {
        // Video 1 completed but no lead data - next is enabled to trigger popup
        isNextDisabled = false;
        nextBtn.title = 'Clicca per continuare';
    } else if (currentVideo.id >= 1 && !hasLeadData) {
        // Any video but no lead data - shouldn't happen but safety check
        isNextDisabled = true;
        nextBtn.title = 'Devi compilare il form per accedere ai video successivi';
    } else if (!isLastVideo && !canProceed) {
        nextBtn.title = 'Completa questo video per sbloccare il successivo';
    } else {
        nextBtn.title = '';
    }

    nextBtn.disabled = isNextDisabled;
}

// Check if a video is completed (watched 100%)
function isVideoCompleted(videoId) {
    const completed = localStorage.getItem(`video_${videoId}_completed`);
    return completed === 'true';
}

// Mark video as completed (100% watched)
function markVideoAsCompleted(videoId) {
    localStorage.setItem(`video_${videoId}_completed`, 'true');
    // Also mark as watched for progress tracking
    markVideoAsWatched(videoId);

    // Show lead capture popup after completing video 1
    if (videoId === 1 && !isLeadCaptured()) {
        setTimeout(() => {
            showLeadCaptureModal();
        }, 500); // Small delay for better UX
    }
}

// Navigate to Previous Video
function navigateToPrevious() {
    if (currentVideoIndex > 0) {
        const prevVideo = videos[currentVideoIndex - 1];
        window.location.href = `player.html?video=${prevVideo.id}`;
    }
}

// Navigate to Next Video
function navigateToNext() {
    const currentVideo = videos[currentVideoIndex];

    // For video 1, check if lead has been captured before allowing navigation
    if (currentVideo.id === 1 && !isLeadCaptured()) {
        // Mark video 1 as completed
        markVideoAsCompleted(1);
        // Show lead capture popup instead of navigating
        showLeadCaptureModal();
        return;
    }

    // For YouTube videos, mark as completed when clicking next
    if (currentVideo.isYouTube) {
        markVideoAsCompleted(currentVideo.id);
    }

    if (currentVideoIndex < videos.length - 1) {
        const nextVideo = videos[currentVideoIndex + 1];
        window.location.href = `player.html?video=${nextVideo.id}`;
    }
}

// Toggle Autoplay
function toggleAutoplay() {
    autoplayEnabled = !autoplayEnabled;
    setAutoplayPreference(autoplayEnabled);

    const toggle = document.getElementById('autoplayToggle');
    if (autoplayEnabled) {
        toggle.classList.add('active');
    } else {
        toggle.classList.remove('active');
    }
}

// Handle Video End
function handleVideoEnd() {
    const currentVideo = videos[currentVideoIndex];
    markVideoAsWatched(currentVideo.id);
    updateProgress();

    if (autoplayEnabled && currentVideoIndex < videos.length - 1) {
        setTimeout(() => {
            navigateToNext();
        }, 1500); // Wait 1.5 seconds before auto-advancing
    }
}

// Keyboard Shortcuts
function handleKeyboard(e) {
    // Don't intercept keys when user is typing in an input field
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }

    const videoPlayer = document.getElementById('videoPlayer');

    switch (e.key) {
        case ' ':
            e.preventDefault();
            if (videoPlayer.paused) {
                videoPlayer.play();
            } else {
                videoPlayer.pause();
            }
            break;
        case 'ArrowLeft':
            videoPlayer.currentTime -= 10;
            break;
        case 'ArrowRight':
            videoPlayer.currentTime += 10;
            break;
        case 'f':
            if (videoPlayer.requestFullscreen) {
                videoPlayer.requestFullscreen();
            }
            break;
        case 'n':
            if (currentVideoIndex < videos.length - 1) {
                navigateToNext();
            }
            break;
        case 'p':
            if (currentVideoIndex > 0) {
                navigateToPrevious();
            }
            break;
        case 'd':
            // Download PDF with 'd' key
            const currentVideo = videos[currentVideoIndex];
            if (currentVideo && currentVideo.pdfUrl) {
                downloadPdf(currentVideo.pdfUrl, currentVideo.title);
            }
            break;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const videoId = getVideoIdFromUrl();

    // Security Check: Prevent access to locked videos via URL
    if (videoId > 1) {
        // Must be logged in for videos 2+
        if (!isUserLoggedIn()) {
            alert("⚠️ Devi registrarti per accedere a questo video!");
            window.location.href = 'index.html';
            return;
        }
        
        const prevVideoId = videoId - 1;
        const isPrevCompleted = localStorage.getItem(`video_${prevVideoId}_completed`) === 'true';

        if (!isPrevCompleted) {
            alert("⚠️ Devi completare i video precedenti in sequenza!");
            window.location.href = 'index.html';
            return;
        }
    }

    loadVideo(videoId);

    // Setup autoplay preference
    autoplayEnabled = getAutoplayPreference();
    const toggle = document.getElementById('autoplayToggle');
    if (autoplayEnabled) {
        toggle.classList.add('active');
    }

    // Event Listeners
    const videoPlayer = document.getElementById('videoPlayer');

    videoPlayer.addEventListener('ended', handleVideoEnd);

    // Track video progress and mark as completed at 100%
    videoPlayer.addEventListener('timeupdate', () => {
        const progress = (videoPlayer.currentTime / videoPlayer.duration) * 100;
        const currentVideo = videos[currentVideoIndex];

        // Mark as watched at 90% for progress tracking
        if (progress >= 90) {
            markVideoAsWatched(currentVideo.id);
            updateProgress();
        }

        // Mark as completed at 100% (or very close to end)
        if (progress >= 99.5 || videoPlayer.currentTime >= videoPlayer.duration - 0.5) {
            if (!isVideoCompleted(currentVideo.id)) {
                markVideoAsCompleted(currentVideo.id);
                updateNavigationButtons(); // Re-enable next button
            }
        }
    });

    document.getElementById('prevBtn').addEventListener('click', navigateToPrevious);
    document.getElementById('nextBtn').addEventListener('click', navigateToNext);
    document.getElementById('autoplayToggle').addEventListener('click', toggleAutoplay);
    document.addEventListener('keydown', handleKeyboard);

    // Lead capture form
    document.getElementById('leadCaptureForm').addEventListener('submit', handleLeadFormSubmit);

    // Unmute button for welcome video
    document.getElementById('unmuteBtn').addEventListener('click', function() {
        const welcomeVideo = document.getElementById('welcomeVideo');
        if (welcomeVideo) {
            welcomeVideo.muted = false;
            this.textContent = '🔊 Audio attivo';
            this.classList.add('hidden');
        }
    });

    // Download buttons - explicit event listeners
    document.getElementById('downloadPdfBtn').addEventListener('click', function(e) {
        e.preventDefault();
        const currentVideo = videos[currentVideoIndex];
        if (currentVideo && currentVideo.pdfUrl) {
            window.open(currentVideo.pdfUrl, '_blank');
        }
    });

    document.getElementById('downloadInfographicBtn').addEventListener('click', function(e) {
        e.preventDefault();
        const currentVideo = videos[currentVideoIndex];
        if (currentVideo) {
            window.open(currentVideo.id + '/unnamed (1).png', '_blank');
        }
    });

    document.getElementById('downloadMindMapBtn').addEventListener('click', function(e) {
        e.preventDefault();
        const currentVideo = videos[currentVideoIndex];
        if (currentVideo) {
            window.open(currentVideo.id + '/NotebookLM Mind Map (3).png', '_blank');
        }
    });
});
