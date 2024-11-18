// Fungsi untuk toggle menyembunyikan atau menampilkan konten
function toggleContent(id) {
    let content = document.getElementById(id);
    
    // Jika konten sedang ditampilkan
    if (content.style.display === 'block' || content.style.display === '') {
        if (confirm("Apakah Anda ingin menyembunyikan konten ini?")) {
            content.style.display = 'none'; // Menyembunyikan konten
        }
    }
    // Jika konten sedang disembunyikan
    else if (content.style.display === 'none') {
        if (confirm("Apakah Anda ingin menampilkan konten ini lagi?")) {
            content.style.display = 'block'; // Menampilkan konten
        }
    }
}

// Fungsi untuk toggle antara mode rapi dan berantakan
function toggleMode() {
    document.body.classList.toggle('messy-mode');
}
