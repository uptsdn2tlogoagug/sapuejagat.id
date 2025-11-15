// Inisialisasi AOS (Animate On Scroll)
// Ini akan mencari semua elemen dengan atribut 'data-aos' 
// dan menganimasikannya saat muncul di layar.

AOS.init({
    duration: 1000, // Durasi animasi dalam milidetik (1 detik)
    once: true,     // Apakah animasi hanya berjalan sekali saat di-scroll
    easing: 'ease-in-out', // Jenis animasi
    offset: 100,    // Jarak dari bawah layar sebelum animasi dimulai
});