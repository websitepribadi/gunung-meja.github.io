// Fungsi Utama untuk mengontrol Tab Menu Navigasi Kategori
function openTab(evt, tabName) {
    // Ambil semua elemen dengan class="tab-content" lalu sembunyikan
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Ambil semua elemen dengan class="tab-btn" lalu hilangkan class "active"
    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    // Tampilkan tab yang dipilih saat ini secara aktif
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Fungsi Sub-Tab untuk mengganti Tampilan Itinerary (Half-Day / Full-Day)
function toggleItinerary(itineraryType) {
    // Ambil komponen pembungkus itinerary section
    const sections = document.getElementsByClassName("itinerary-section");
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("active");
    }

    // Ambil semua tombol kontrol sub-tab itinerary
    const subBtns = document.getElementsByClassName("sub-tab-btn");
    for (let i = 0; i < subBtns.length; i++) {
        subBtns[i].classList.remove("active");
    }

    // Aktifkan element target yang ditekan user
    document.getElementById(itineraryType).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Efek interaktif kelancaran scroll saat menekan tombol "Mulai Menjelajah"
document.querySelector('.btn-explore').addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    document.querySelector(targetID).scrollIntoView({
        behavior: 'smooth'
    });
});