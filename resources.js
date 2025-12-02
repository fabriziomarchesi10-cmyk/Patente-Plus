// Shared resources data for PATENTE+
const resources = [
    {
        id: 1,
        title: "Il Linguaggio della Strada",
        pdfUrl: "1/Il_Codice_Visivo_della_Strada.pdf",
        infographicUrl: "1/unnamed (1).png",
        mindMapUrl: "1/NotebookLM Mind Map (3).png"
    },
    {
        id: 2,
        title: "Segnali di Pericolo",
        pdfUrl: "2/Decodificare_la_Strada_Guida_Visiva_ai_Segnali.pdf",
        infographicUrl: "2/unnamed (1).png",
        mindMapUrl: "2/NotebookLM Mind Map (3).png"
    },
    {
        id: 3,
        title: "Segnali di Divieto",
        pdfUrl: "3/Italian_Prohibition_Signs_Decoded.pdf",
        infographicUrl: "3/unnamed (1).png",
        mindMapUrl: "3/NotebookLM Mind Map (3).png"
    },
    {
        id: 4,
        title: "Segnali di Obbligo",
        pdfUrl: "4/I_Segnali_Blu.pdf",
        infographicUrl: "4/unnamed (1).png",
        mindMapUrl: "4/NotebookLM Mind Map (3).png"
    },
    {
        id: 5,
        title: "Segnali di Precedenza",
        pdfUrl: "5/Precedenza_Strade_Guida_Visiva_Italiana.pdf",
        infographicUrl: "5/unnamed (1).png",
        mindMapUrl: "5/NotebookLM Mind Map (3).png"
    },
    {
        id: 6,
        title: "Segnali Orizzontali",
        pdfUrl: "6/Silencio_stradale_decodificato.pdf",
        infographicUrl: "6/unnamed (1).png",
        mindMapUrl: "6/NotebookLM Mind Map (3).png"
    },
    {
        id: 7,
        title: "Semafori e Gerarchia dei Segnali",
        pdfUrl: "7/Gerarchia_Dei_Segnali_Stradali.pdf",
        infographicUrl: "7/unnamed (1).png",
        mindMapUrl: "7/NotebookLM Mind Map (3).png"
    },
    {
        id: 8,
        title: "Segnaletica Stradale Italiana",
        pdfUrl: "8/Silently_generating_the_title_based_on_the_Italian_core_concept.pdf",
        infographicUrl: "8/unnamed (1).png",
        mindMapUrl: "8/NotebookLM Mind Map (3).png"
    },
    {
        id: 9,
        title: "Pannelli Integrativi",
        pdfUrl: "9/Road_Sign_Context.pdf",
        infographicUrl: "9/unnamed (1).png",
        mindMapUrl: "9/NotebookLM Mind Map (3).png"
    },
    {
        id: 10,
        title: "Segnali Complementari e Cantieri",
        pdfUrl: "10/Road_Language_Complementary_And_Construction_Signs.pdf",
        infographicUrl: "10/unnamed (1).png",
        mindMapUrl: "10/NotebookLM Mind Map (3).png"
    },
    {
        id: 11,
        title: "Manuale del Guidatore Proattivo",
        pdfUrl: "11/Guida_Strategica_Velocità_Pericolo_Consapevolezza.pdf",
        infographicUrl: "11/unnamed (1).png",
        mindMapUrl: "11/NotebookLM Mind Map (3).png"
    },
    {
        id: 12,
        title: "La Scienza della Frenata",
        pdfUrl: "12/Spazio_di_Sicurezza_e_Distanza_di_Arresto.pdf",
        infographicUrl: "12/unnamed (1).png",
        mindMapUrl: "12/NotebookLM Mind Map (3).png"
    },
    {
        id: 13,
        title: "Le Regole della Strada",
        pdfUrl: "13/Il_Dominio_della_Strada_Guida_Pratica_alla_Circolazione.pdf",
        infographicUrl: "13/unnamed (1).png",
        mindMapUrl: "13/NotebookLM Mind Map (3).png"
    },
    {
        id: 14,
        title: "Precedenza - Chi Passa Per Primo?",
        pdfUrl: "14/Precedenza_Zero_Errori.pdf",
        infographicUrl: "14/unnamed (1).png",
        mindMapUrl: "14/NotebookLM Mind Map (3).png"
    },
    {
        id: 15,
        title: "Le Regole del Sorpasso",
        pdfUrl: "15/The_Overtaking_Playbook.pdf",
        infographicUrl: "15/unnamed (1).png",
        mindMapUrl: "15/NotebookLM Mind Map (3).png"
    },
    {
        id: 16,
        title: "Guidare in Italia",
        pdfUrl: "16/Mastering_The_Road_Vehicle_Control_and_Rules.pdf",
        infographicUrl: "16/unnamed (1).png",
        mindMapUrl: "16/NotebookLM Mind Map (3).png"
    },
    {
        id: 17,
        title: "Guidare in Italia - Le Regole",
        pdfUrl: "17/Il_Viaggio_del_Guidatore_Consapevole.pdf",
        infographicUrl: "17/unnamed (1).png",
        mindMapUrl: "17/NotebookLM Mind Map (3).png"
    }
];

// Download file function
function downloadFile(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || url.split('/').pop();
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Lightbox functionality
let currentLightboxIndex = 0;
let lightboxImages = [];

function openLightbox(imageUrl, images = null, index = 0) {
    if (images) {
        lightboxImages = images;
        currentLightboxIndex = index;
    } else {
        lightboxImages = [imageUrl];
        currentLightboxIndex = 0;
    }

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');

    lightboxImg.src = lightboxImages[currentLightboxIndex];
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    updateLightboxNav();
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function navigateLightbox(direction) {
    currentLightboxIndex += direction;

    if (currentLightboxIndex < 0) {
        currentLightboxIndex = lightboxImages.length - 1;
    } else if (currentLightboxIndex >= lightboxImages.length) {
        currentLightboxIndex = 0;
    }

    const lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.src = lightboxImages[currentLightboxIndex];
    updateLightboxNav();
}

function updateLightboxNav() {
    const counter = document.getElementById('lightboxCounter');
    if (counter && lightboxImages.length > 1) {
        counter.textContent = `${currentLightboxIndex + 1} / ${lightboxImages.length}`;
        counter.style.display = 'block';
    }
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.style.display === 'flex') {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            if (lightboxImages.length > 1) navigateLightbox(-1);
        } else if (e.key === 'ArrowRight') {
            if (lightboxImages.length > 1) navigateLightbox(1);
        }
    }
});
