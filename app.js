// ======================================
// HALAMAN
// ======================================

const halamanAwal =
    document.getElementById("halamanAwal");

const petaGalaksi =
    document.getElementById("petaGalaksi");

const halamanBilangan =
    document.getElementById("halamanBilangan");

    const halamanAljabar =
    document.getElementById("halamanAljabar");

const halamanMisi =
    document.getElementById("halamanMisi");

    const halamanMisiAljabar =
document.getElementById("halamanMisiAljabar");

const halamanFungsi =
document.getElementById("halamanFungsi");

const halamanMisiFungsi =
document.getElementById("halamanMisiFungsi");

const halamanGeometri =
document.getElementById("halamanGeometri");

const halamanMisiGeometri =
document.getElementById("halamanMisiGeometri");

// ======================================
// TOMBOL
// ======================================

const tombolMulai =
    document.getElementById("tombolMulai");

const tombolKembali =
    document.getElementById("tombolKembali");

const planetBilangan =
    document.getElementById("planetBilangan");

const planetAljabar =
    document.getElementById("planetAljabar");

const planetFungsi =
    document.getElementById("planetFungsi");

    const planetGeometri =
document.getElementById("planetGeometri");

const mulaiMisiGeometri =
document.getElementById("mulaiMisiGeometri");

// ======================================
// MEMULAI MISI GEOMETRI
// ======================================

mulaiMisiGeometri.addEventListener(
    "click",
    function () {

        halamanGeometri.classList.remove("aktif");

        halamanMisiGeometri.classList.add("aktif");

        soalGeometriSekarang = 0;

        skorGeometri = 0;

        energiGeometri = 3;

        skorGeometriTeks.textContent =
            skorGeometri;

        energiGeometriTeks.textContent =
            energiGeometri;

        tampilkanSoalGeometri();

    }
);
    const kembaliDariFungsi =
document.getElementById("kembaliDariFungsi");

const mulaiMisiFungsi =
document.getElementById("mulaiMisiFungsi");

const keluarMisiFungsi =
document.getElementById("keluarMisiFungsi");

const kembaliKePeta =
    document.getElementById("kembaliKePeta");

    const kembaliDariAljabar =
    document.getElementById("kembaliDariAljabar");

const mulaiMisiAljabar =
    document.getElementById("mulaiMisiAljabar");

const mulaiMisiBilangan =
    document.getElementById("mulaiMisiBilangan");

const keluarMisi =
    document.getElementById("keluarMisi");

// ======================================
// KEMBALI DARI MISI FUNGSI KE PETA
// ======================================

keluarMisiFungsi.addEventListener(
    "click",
    function () {

        halamanMisiFungsi.classList.remove("aktif");

        petaGalaksi.classList.add("aktif");

    }
);

// ======================================
// MULAI PETUALANGAN
// ======================================

tombolMulai.addEventListener("click", function () {

    halamanAwal.classList.remove("aktif");

    petaGalaksi.classList.add("aktif");

});


// ======================================
// KEMBALI KE HALAMAN AWAL
// ======================================

tombolKembali.addEventListener("click", function () {

    petaGalaksi.classList.remove("aktif");

    halamanAwal.classList.add("aktif");

});


// ======================================
// MASUK PLANET BILANGAN
// ======================================

planetBilangan.addEventListener("click", function () {

    petaGalaksi.classList.remove("aktif");

    halamanBilangan.classList.add("aktif");

});


// ======================================
// KEMBALI DARI MATERI
// ======================================

kembaliKePeta.addEventListener("click", function () {

    halamanBilangan.classList.remove("aktif");

    petaGalaksi.classList.add("aktif");

});


// ======================================
// PLANET YANG MASIH TERKUNCI
// ======================================

planetAljabar.addEventListener(
    "click",
    function () {

        if (planetBilanganSelesai) {

            petaGalaksi.classList.remove(
                "aktif"
            );

            halamanAljabar.classList.add(
                "aktif"
            );

        } else {

            alert(
                "🔒 Planet Aljabar masih terkunci.\n\n" +
                "Selesaikan Misi Bilangan terlebih dahulu!"
            );

        }

    }
);


// ======================================
// PLANET FUNGSI
// ======================================

planetFungsi.addEventListener(
    "click",
    function () {

        if (planetAljabarSelesai) {

            petaGalaksi.classList.remove("aktif");

            halamanFungsi.classList.add("aktif");

        } else {

            alert(
                "🔒 Planet Fungsi masih terkunci.\n\n" +
                "Selesaikan Misi Aljabar terlebih dahulu!"
            );

        }

    }
);

planetGeometri.addEventListener(
    "click",
    function () {

        if (planetFungsiSelesai) {

            petaGalaksi.classList.remove("aktif");

            halamanGeometri.classList.add("aktif");

        } else {

            alert(
                "🔒 Planet Geometri masih terkunci.\n\n" +
                "Selesaikan Misi Fungsi terlebih dahulu!"
            );

        }

    }
);
// ======================================
// DATA SOAL
// ======================================

const daftarSoal = [

    {
        soal: "Berapakah hasil dari 2³?",
        pilihan: ["6", "8", "10", "12"],
        jawaban: "8",
        penjelasan:
            "2³ berarti 2 × 2 × 2. Jadi hasilnya adalah 8."
    },

    {
        soal: "Berapakah hasil dari 3²?",
        pilihan: ["6", "9", "12", "15"],
        jawaban: "9",
        penjelasan:
            "3² berarti 3 × 3. Jadi hasilnya adalah 9."
    },

    {
        soal: "Berapakah hasil dari 5²?",
        pilihan: ["10", "15", "20", "25"],
        jawaban: "25",
        penjelasan:
            "5² berarti 5 × 5. Jadi hasilnya adalah 25."
    },

    {
        soal: "Berapakah hasil dari 2⁴?",
        pilihan: ["8", "12", "16", "20"],
        jawaban: "16",
        penjelasan:
            "2⁴ berarti 2 × 2 × 2 × 2. Jadi hasilnya adalah 16."
    },

    {
        soal: "Berapakah hasil dari 10²?",
        pilihan: ["20", "50", "100", "200"],
        jawaban: "100",
        penjelasan:
            "10² berarti 10 × 10. Jadi hasilnya adalah 100."
    }

];

// ======================================
// DATA SOAL GEOMETRI
// ======================================

const daftarSoalGeometri = [

    {
        soal:
            "Berapakah jumlah besar sudut dalam sebuah segitiga?",

        pilihan:
            ["90°", "180°", "270°", "360°"],

        jawaban:
            "180°",

        penjelasan:
            "Jumlah besar ketiga sudut dalam sebuah segitiga adalah 180°.",

        tingkat:
            "Mudah"
    },

    {
        soal:
            "Sebuah persegi memiliki panjang sisi 6 cm. Berapakah kelilingnya?",

        pilihan:
            ["12 cm", "18 cm", "24 cm", "36 cm"],

        jawaban:
            "24 cm",

        penjelasan:
            "Keliling persegi = 4 × sisi. Jadi 4 × 6 = 24 cm.",

        tingkat:
            "Mudah"
    },

    {
        soal:
            "Sebuah persegi panjang memiliki panjang 8 cm dan lebar 5 cm. Berapakah luasnya?",

        pilihan:
            ["13 cm²", "26 cm²", "40 cm²", "80 cm²"],

        jawaban:
            "40 cm²",

        penjelasan:
            "Luas persegi panjang = panjang × lebar. Jadi 8 × 5 = 40 cm².",

        tingkat:
            "Mudah"
    },

    {
        soal:
            "Sebuah persegi memiliki sisi 9 cm. Berapakah luasnya?",

        pilihan:
            ["18 cm²", "36 cm²", "72 cm²", "81 cm²"],

        jawaban:
            "81 cm²",

        penjelasan:
            "Luas persegi = sisi × sisi. Jadi 9 × 9 = 81 cm².",

        tingkat:
            "Sedang"
    },

    {
        soal:
            "Sebuah persegi panjang memiliki panjang 12 cm dan lebar 7 cm. Berapakah kelilingnya?",

        pilihan:
            ["19 cm", "28 cm", "38 cm", "84 cm"],

        jawaban:
            "38 cm",

        penjelasan:
            "Keliling persegi panjang = 2 × (panjang + lebar). Jadi 2 × (12 + 7) = 38 cm.",

        tingkat:
            "Tantangan"
    }

];
// ======================================
// VARIABEL GAME
// ======================================

let soalSekarang = 0;

let skor = 0;

let energi = 3;

let sudahMenjawab = false;


// ======================================
// ELEMEN GAME
// ======================================

const skorTeks =
    document.getElementById("skor");

const energiTeks =
    document.getElementById("energi");

const nomorSoal =
    document.getElementById("nomorSoal");

const teksSoal =
    document.getElementById("teksSoal");

const pilihanJawaban =
    document.getElementById("pilihanJawaban");

const hasilJawaban =
    document.getElementById("hasilJawaban");

const tombolLanjut =
    document.getElementById("tombolLanjut");

const pesanTawakkal =
    document.getElementById("pesanTawakkal");


// ======================================
// MULAI MISI
// ======================================

mulaiMisiBilangan.addEventListener(
    "click",
    function () {

        halamanBilangan.classList.remove("aktif");

        halamanMisi.classList.add("aktif");

        soalSekarang = 0;

        skor = 0;

        energi = 3;

        tampilkanSoal();

    }
);


// ======================================
// MENAMPILKAN SOAL
// ======================================

function tampilkanSoal() {

    const soal = daftarSoal[soalSekarang];


    sudahMenjawab = false;


    nomorSoal.textContent =
        "Tantangan " +
        (soalSekarang + 1) +
        " dari " +
        daftarSoal.length;


    teksSoal.textContent =
        soal.soal;


    skorTeks.textContent =
        skor;


    energiTeks.textContent =
        energi;


    hasilJawaban.innerHTML = "";

    hasilJawaban.className =
        "hasil-jawaban";


    tombolLanjut.style.display =
        "none";


    pilihanJawaban.innerHTML = "";


    soal.pilihan.forEach(function (pilihan) {

        const tombol =
            document.createElement("button");


        tombol.className =
            "jawaban";


        tombol.textContent =
            pilihan;


        tombol.dataset.jawaban =
            pilihan;


        tombol.addEventListener(
            "click",
            function () {

                periksaJawaban(
                    pilihan
                );

            }
        );


        pilihanJawaban.appendChild(
            tombol
        );

    });

}


// ======================================
// MEMERIKSA JAWABAN
// ======================================

function periksaJawaban(jawabanUser) {

    if (sudahMenjawab) {

        return;

    }


    sudahMenjawab = true;


    const soal =
        daftarSoal[soalSekarang];


    const semuaTombol =
        document.querySelectorAll(".jawaban");


    semuaTombol.forEach(
        function (tombol) {

            tombol.disabled = true;

        }
    );


    if (jawabanUser === soal.jawaban) {

        // =========================
        // JAWABAN BENAR
        // =========================

        skor += 10;


        skorTeks.textContent =
            skor;


        hasilJawaban.className =
            "hasil-jawaban muncul hasil-benar";


        hasilJawaban.innerHTML =

            "<strong>🎉 Jawabanmu benar!</strong>" +

            "<br>" +

            "⭐ Kamu mendapatkan +10 poin." +

            "<br><br>" +

            "Hebat! Teruskan perjalananmu, Penjelajah 🚀";


    } else {

        // =========================
        // JAWABAN SALAH
        // =========================

        energi--;


        energiTeks.textContent =
            energi;


        hasilJawaban.className =
            "hasil-jawaban muncul hasil-salah";


        hasilJawaban.innerHTML =

            "<strong>🌙 Tidak apa-apa, Penjelajah.</strong>" +

            "<br><br>" +

            "Jawaban yang tepat adalah " +

            "<strong>" +

            soal.jawaban +

            "</strong>." +

            "<br><br>" +

            "💡 <strong>Pembahasan:</strong><br>" +

            soal.penjelasan +

            "<br><br>" +

            "Kamu sudah berusaha. " +

            "Belajarlah dari kesalahan, " +

            "terus berusaha, kemudian " +

            "bertawakkallah kepada Allah.";

    }


    tombolLanjut.style.display =
        "block";

}


// ======================================
// TOMBOL LANJUT
// ======================================

tombolLanjut.addEventListener(
    "click",
    function () {

        soalSekarang++;


        if (
            soalSekarang >=
            daftarSoal.length
        ) {

            selesaiMisi();

        } else {

            tampilkanSoal();

        }

    }
);


// ======================================
// SELESAI MISI
// ======================================

function selesaiMisi() {

    planetBilanganSelesai = true;

    simpanProgres();

    teksSoal.textContent =
        "🎉 Misi Bilangan Selesai!";


    nomorSoal.textContent =
        "Perjalananmu telah selesai";


    pilihanJawaban.innerHTML = "";


    hasilJawaban.className =
        "hasil-jawaban muncul hasil-benar";


    hasilJawaban.innerHTML =

        "<strong>🚀 Selamat, Penjelajah!</strong>" +

        "<br><br>" +

        "Kamu berhasil menyelesaikan " +

        daftarSoal.length +

        " tantangan." +

        "<br><br>" +

        "⭐ Skor akhir: " +

        "<strong>" +

        skor +

        "</strong>" +

        "<br><br>" +

        "🌙 Teruslah belajar, berusaha, " +

        "dan bertawakkal.";


    tombolLanjut.style.display =
        "none";

}


// ======================================
// KELUAR DARI MISI
// ======================================

keluarMisi.addEventListener(
    "click",
    function () {

        halamanMisi.classList.remove(
            "aktif"
        );

        petaGalaksi.classList.add(
            "aktif"
        );

    }
);

// ======================================
// SISTEM PROGRES MATH QUEST
// ======================================

let planetBilanganSelesai = false;

let planetAljabarSelesai = false;

let planetFungsiSelesai = false;

let planetGeometriSelesai = false;

// ======================================
// MENYIMPAN PROGRES
// ======================================

function simpanProgres() {

    localStorage.setItem(
        "planetBilanganSelesai",
        "true"
    );

    if (planetAljabarSelesai) {

        localStorage.setItem(
            "planetAljabarSelesai",
            "true"
        );

    }

if (planetFungsiSelesai) {

    localStorage.setItem(
        "planetFungsiSelesai",
        "true"
    );

}

}


// ======================================
// MEMBACA PROGRES
// ======================================

function bacaProgres() {

    const progresBilangan =
        localStorage.getItem(
            "planetBilanganSelesai"
        );


    if (progresBilangan === "true") {

        planetBilanganSelesai = true;

    }


    const progresAljabar =
        localStorage.getItem(
            "planetAljabarSelesai"
        );


    if (progresAljabar === "true") {

        planetAljabarSelesai = true;

    }

}

const progresFungsi =
    localStorage.getItem(
        "planetFungsiSelesai"
    );


if (progresFungsi === "true") {

    planetFungsiSelesai = true;

}

// Jalankan saat game dibuka

bacaProgres();

// ======================================
// CEK STATUS PLANET
// ======================================

function perbaruiStatusPlanet() {

    // ==============================
    // BACA PROGRES DARI LOCALSTORAGE
    // ==============================

    const progresBilangan =
        localStorage.getItem(
            "planetBilanganSelesai"
        );

    const progresAljabar =
        localStorage.getItem(
            "planetAljabarSelesai"
        );

    const progresFungsi =
        localStorage.getItem(
            "planetFungsiSelesai"
        );

    const progresGeometri =
        localStorage.getItem(
            "planetGeometriSelesai"
        );


    // ==============================
    // PERBARUI NILAI PROGRES
    // ==============================

    if (progresBilangan === "true") {
        planetBilanganSelesai = true;
    }

    if (progresAljabar === "true") {
        planetAljabarSelesai = true;
    }

    if (progresFungsi === "true") {
        planetFungsiSelesai = true;
    }

    if (progresGeometri === "true") {
        planetGeometriSelesai = true;
    }


    // ==============================
    // AMBIL STATUS PLANET
    // ==============================

    const statusBilangan =
        planetBilangan.querySelector(
            ".status-planet"
        );

    const statusAljabar =
        document.getElementById(
            "statusAljabar"
        );

    const statusFungsi =
        planetFungsi.querySelector(
            ".status-planet"
        );

    const statusGeometri =
        planetGeometri.querySelector(
            ".status-planet"
        );


    // ==============================
    // BILANGAN
    // ==============================

    statusBilangan.textContent =
        "🔓 TERBUKA";


    // ==============================
// ALJABAR
// ==============================

if (planetBilanganSelesai) {

    statusAljabar.textContent =
        "🔓 TERBUKA";

    planetAljabar.classList.remove(
        "terkunci"
    );

    console.log(
    "Class Aljabar:",
    planetAljabar.className
);

} else {

    statusAljabar.textContent =
        "🔒 TERKUNCI";

    planetAljabar.classList.add(
        "terkunci"
    );

}


    // ==============================
// FUNGSI
// ==============================

if (planetAljabarSelesai) {

    statusFungsi.textContent =
        "🔓 TERBUKA";

    planetFungsi.classList.remove(
        "terkunci"
    );

} else {

    statusFungsi.textContent =
        "🔒 TERKUNCI";

    planetFungsi.classList.add(
        "terkunci"
    );

}
 // ==============================
// GEOMETRI
// ==============================

if (planetFungsiSelesai) {


    console.log(
        "✅ Fungsi selesai, membuka Geometri"
    );

    statusGeometri.textContent =
        "🔓 TERBUKA";

    planetGeometri.classList.remove(
        "terkunci"
    );

    console.log(
    "Class Geometri:",
    planetGeometri.className
);

} else {

    console.log(
        "🔒 Fungsi belum selesai"
    );

    statusGeometri.textContent =
        "🔒 TERKUNCI";

    planetGeometri.classList.add(
        "terkunci"
    );

}

}
// ======================================
// KEMBALI DARI PLANET ALJABAR
// ======================================
perbaruiStatusPlanet();

kembaliDariAljabar.addEventListener(
    "click",
    function () {

        halamanAljabar.classList.remove(
            "aktif"
        );

        petaGalaksi.classList.add(
            "aktif"
        );

    }
);

// ======================================
// MULAI MISI ALJABAR
// ======================================

mulaiMisiAljabar.addEventListener(
    "click",
    function () {

        halamanAljabar.classList.remove("aktif");

        halamanMisiAljabar.classList.add("aktif");

        mulaiMisiAljabarGame();

    }
);

// ======================================
// DATA SOAL ALJABAR
// ======================================

const daftarSoalAljabar = [

    {
        soal: "Jika x = 5, berapakah nilai dari x + 3?",
        pilihan: ["6", "7", "8", "9"],
        jawaban: "8",
        penjelasan:
            "Karena x = 5, maka x + 3 = 5 + 3 = 8.",
        tingkat: "Mudah"
    },

    {
        soal: "Jika x = 4, berapakah nilai dari 2x?",
        pilihan: ["6", "8", "10", "12"],
        jawaban: "8",
        penjelasan:
            "2x berarti 2 × x. Karena x = 4, maka 2 × 4 = 8.",
        tingkat: "Mudah"
    },

    {
        soal: "Jika x = 6, berapakah nilai dari 3x + 2?",
        pilihan: ["18", "20", "22", "24"],
        jawaban: "20",
        penjelasan:
            "3x + 2 = 3(6) + 2 = 18 + 2 = 20.",
        tingkat: "Sedang"
    },

    {
        soal: "Sederhanakan: 3x + 2x",
        pilihan: ["5", "5x", "6x", "x⁵"],
        jawaban: "5x",
        penjelasan:
            "3x dan 2x merupakan suku sejenis. Jadi 3x + 2x = 5x.",
        tingkat: "Sedang"
    },

    {
        soal: "Jika 2x + 4 = 12, berapakah nilai x?",
        pilihan: ["2", "3", "4", "5"],
        jawaban: "4",
        penjelasan:
            "Kurangi 4 dari kedua sisi: 2x = 8. Kemudian bagi 2, sehingga x = 4.",
        tingkat: "Tantangan"
    }

];

// ======================================
// VARIABEL GAME ALJABAR
// ======================================

let soalAljabarSekarang = 0;

let skorAljabar = 0;

let energiAljabar = 3;

let sudahMenjawabAljabar = false;

// ======================================
// ELEMEN GAME ALJABAR
// ======================================

const skorAljabarTeks =
document.getElementById("skorAljabar");

const energiAljabarTeks =
document.getElementById("energiAljabar");

const nomorSoalAljabar =
document.getElementById("nomorSoalAljabar");

const teksSoalAljabar =
document.getElementById("teksSoalAljabar");

const pilihanJawabanAljabar =
document.getElementById("pilihanJawabanAljabar");

const hasilJawabanAljabar =
document.getElementById("hasilJawabanAljabar");

const tombolLanjutAljabar =
document.getElementById("tombolLanjutAljabar");

const keluarMisiAljabar =
document.getElementById("keluarMisiAljabar");

// ======================================
// MULAI PERMAINAN ALJABAR
// ======================================

function mulaiMisiAljabarGame() {

    soalAljabarSekarang = 0;

    skorAljabar = 0;

    energiAljabar = 3;

    tampilkanSoalAljabar();

}

// ======================================
// MENAMPILKAN SOAL
// ======================================

function tampilkanSoalAljabar() {

    const soal =
        daftarSoalAljabar[
            soalAljabarSekarang
        ];


    sudahMenjawabAljabar = false;


    nomorSoalAljabar.textContent =
        "Tantangan " +
        (soalAljabarSekarang + 1) +
        " dari " +
        daftarSoalAljabar.length;


    teksSoalAljabar.textContent =
        soal.soal;


    skorAljabarTeks.textContent =
        skorAljabar;


    energiAljabarTeks.textContent =
        energiAljabar;


    hasilJawabanAljabar.innerHTML =
        "";


    hasilJawabanAljabar.className =
        "hasil-jawaban";


    tombolLanjutAljabar.style.display =
        "none";


    pilihanJawabanAljabar.innerHTML =
        "";


    soal.pilihan.forEach(
        function (pilihan) {

            const tombol =
                document.createElement("button");


            tombol.className =
                "jawaban";


            tombol.textContent =
                pilihan;


            tombol.addEventListener(
                "click",
                function () {

                    periksaJawabanAljabar(
                        pilihan
                    );

                }
            );


            pilihanJawabanAljabar.appendChild(
                tombol
            );

        }
    );

}

// ======================================
// MEMERIKSA JAWABAN ALJABAR
// ======================================

function periksaJawabanAljabar(jawabanUser) {

    // Mencegah siswa mengklik jawaban berkali-kali

    if (sudahMenjawabAljabar) {

        return;

    }


    sudahMenjawabAljabar = true;


    // Mengambil soal yang sedang dikerjakan

    const soal =
        daftarSoalAljabar[
            soalAljabarSekarang
        ];


    // Mengambil semua tombol jawaban

    const semuaTombol =
        document.querySelectorAll(
            "#pilihanJawabanAljabar .jawaban"
        );


    // Menonaktifkan semua pilihan

    semuaTombol.forEach(
        function(tombol) {

            tombol.disabled = true;

        }
    );


    // ==================================
    // JIKA JAWABAN BENAR
    // ==================================

    if (jawabanUser === soal.jawaban) {

        skorAljabar += 10;


        skorAljabarTeks.textContent =
            skorAljabar;


        hasilJawabanAljabar.className =
            "hasil-jawaban muncul hasil-benar";


        hasilJawabanAljabar.innerHTML =

            "<strong>🎉 Jawabanmu benar!</strong>" +

            "<br><br>" +

            "⭐ +10 poin" +

            "<br><br>" +

            "🚀 Hebat! Teruskan perjalananmu.";


    }


    // ==================================
    // JIKA JAWABAN SALAH
    // ==================================

    else {

        energiAljabar--;


        energiAljabarTeks.textContent =
            energiAljabar;


        hasilJawabanAljabar.className =
            "hasil-jawaban muncul hasil-salah";


        hasilJawabanAljabar.innerHTML =

            "<strong>🌙 Tidak apa-apa, Penjelajah.</strong>" +

            "<br><br>" +

            "Jawaban yang benar adalah " +

            "<strong>" +
            soal.jawaban +
            "</strong>." +

            "<br><br>" +

            "💡 <strong>Pembahasan:</strong><br>" +

            soal.penjelasan +

            "<br><br>" +

            "Kamu sudah berusaha. " +

            "Belajarlah dari kesalahan, " +

            "terus berusaha, kemudian " +

            "bertawakkallah kepada Allah.";

    }


    // Menampilkan tombol lanjut

    tombolLanjutAljabar.style.display =
        "block";

}

// ======================================
// TOMBOL LANJUT SOAL ALJABAR
// ======================================

tombolLanjutAljabar.addEventListener(
    "click",
    function () {

        soalAljabarSekarang++;

        if (
            soalAljabarSekarang >=
            daftarSoalAljabar.length
        ) {

            selesaiMisiAljabar();

        } else {

            tampilkanSoalAljabar();

        }

    }
);

// ======================================
// SELESAI MISI ALJABAR
// ======================================

function selesaiMisiAljabar() {

    planetAljabarSelesai = true;

simpanProgres();

    teksSoalAljabar.textContent =
        "🏆 Misi Aljabar Selesai!";


    nomorSoalAljabar.textContent =
        "Perjalananmu berhasil diselesaikan";


    pilihanJawabanAljabar.innerHTML =
        "";


    hasilJawabanAljabar.className =
        "hasil-jawaban muncul hasil-benar";


    hasilJawabanAljabar.innerHTML =

        "<strong>🚀 Selamat, Penjelajah!</strong>" +

        "<br><br>" +

        "Kamu berhasil menyelesaikan " +

        daftarSoalAljabar.length +

        " tantangan Aljabar." +

        "<br><br>" +

        "⭐ Skor akhir: " +

        "<strong>" +
        skorAljabar +
        "</strong>" +

        "<br><br>" +

        "🌙 Teruslah berusaha dan bertawakkal kepada Allah.";

}

// ======================================
// KEMBALI DARI HALAMAN FUNGSI
// ======================================

kembaliDariFungsi.addEventListener(
    "click",
    function () {

        petaGalaksi.classList.add("aktif");

    }
);

// ======================================
// MULAI MISI FUNGSI
// ======================================

(
    "click",
    function () {

        halamanFungsi.classList.remove("aktif");

        halamanMisiFungsi.classList.add("aktif");

    }
);

// ======================================
// DATA SOAL FUNGSI
// ======================================

const daftarSoalFungsi = [

    {
        soal: "Jika f(x) = 2x + 1, berapakah nilai f(3)?",
        pilihan: ["5", "6", "7", "8"],
        jawaban: "7",
        penjelasan:
            "f(3) = 2(3) + 1 = 6 + 1 = 7.",
        tingkat: "Mudah"
    },

    {
        soal: "Jika f(x) = x + 4, berapakah nilai f(5)?",
        pilihan: ["7", "8", "9", "10"],
        jawaban: "9",
        penjelasan:
            "Masukkan x = 5 ke fungsi. f(5) = 5 + 4 = 9.",
        tingkat: "Mudah"
    },

    {
        soal: "Diketahui f(x) = 3x - 2. Berapakah f(4)?",
        pilihan: ["8", "10", "12", "14"],
        jawaban: "10",
        penjelasan:
            "f(4) = 3(4) - 2 = 12 - 2 = 10.",
        tingkat: "Sedang"
    },

    {
        soal: "Jika f(x) = 2x + 3 dan f(a) = 11, berapakah nilai a?",
        pilihan: ["3", "4", "5", "6"],
        jawaban: "4",
        penjelasan:
            "2a + 3 = 11. Kurangi 3: 2a = 8. Jadi a = 4.",
        tingkat: "Sedang"
    },

    {
        soal: "Diketahui f(x) = 3x - 5. Jika f(x) = 16, berapakah x?",
        pilihan: ["5", "6", "7", "8"],
        jawaban: "7",
        penjelasan:
            "3x - 5 = 16. Tambahkan 5: 3x = 21. Bagi 3, sehingga x = 7.",
        tingkat: "Tantangan"
    }

];

// ======================================
// VARIABEL GAME FUNGSI
// ======================================

let soalFungsiSekarang = 0;

let skorFungsi = 0;

let energiFungsi = 3;

let sudahMenjawabFungsi = false;

// ======================================
// VARIABEL GAME GEOMETRI
// ======================================

let soalGeometriSekarang = 0;

let skorGeometri = 0;

let energiGeometri = 3;

let sudahMenjawabGeometri = false;

// ======================================
// ELEMEN GAME FUNGSI
// ======================================

const skorFungsiTeks =
document.getElementById("skorFungsi");

const energiFungsiTeks =
document.getElementById("energiFungsi");

const nomorSoalFungsi =
document.getElementById("nomorSoalFungsi");

const teksSoalFungsi =
document.getElementById("teksSoalFungsi");

const pilihanJawabanFungsi =
document.getElementById("pilihanJawabanFungsi");

const hasilJawabanFungsi =
document.getElementById("hasilJawabanFungsi");

const tombolLanjutFungsi =
document.getElementById("tombolLanjutFungsi");

// ======================================
// ELEMEN GAME GEOMETRI
// ======================================

const nomorSoalGeometri =
document.getElementById("nomorSoalGeometri");

const teksSoalGeometri =
document.getElementById("teksSoalGeometri");

const pilihanJawabanGeometri =
document.getElementById("pilihanJawabanGeometri");

const hasilJawabanGeometri =
document.getElementById("hasilJawabanGeometri");

const tombolLanjutGeometri =
document.getElementById("tombolLanjutGeometri");

const skorGeometriTeks =
document.getElementById("skorGeometri");

const energiGeometriTeks =
document.getElementById("energiGeometri");

// ======================================
// MENAMPILKAN SOAL FUNGSI
// ======================================

function tampilkanSoalFungsi() {

    const soal =
        daftarSoalFungsi[soalFungsiSekarang];

    nomorSoalFungsi.textContent =
        "Tantangan " +
        (soalFungsiSekarang + 1) +
        " dari " +
        daftarSoalFungsi.length;

    teksSoalFungsi.textContent =
        soal.soal;

    pilihanJawabanFungsi.innerHTML = "";

    hasilJawabanFungsi.innerHTML = "";

    tombolLanjutFungsi.style.display =
        "none";

    sudahMenjawabFungsi = false;


    soal.pilihan.forEach(function (pilihan) {

        const tombol =
            document.createElement("button");

        tombol.textContent = pilihan;

        tombol.classList.add(
            "tombol-jawaban"
        );

        tombol.addEventListener(
            "click",
            function () {

                periksaJawabanFungsi(
                    pilihan,
                    tombol
                );

            }
        );

        pilihanJawabanFungsi.appendChild(
            tombol
        );

    });

}

// ======================================
// MENAMPILKAN SOAL GEOMETRI
// ======================================

function tampilkanSoalGeometri() {

    const soal =
        daftarSoalGeometri[soalGeometriSekarang];


    nomorSoalGeometri.textContent =
        "Tantangan " +
        (soalGeometriSekarang + 1) +
        " dari " +
        daftarSoalGeometri.length;


    teksSoalGeometri.textContent =
        soal.soal;


    pilihanJawabanGeometri.innerHTML = "";

    hasilJawabanGeometri.innerHTML = "";

    hasilJawabanGeometri.classList.remove("muncul");


    tombolLanjutGeometri.style.display =
        "none";


    sudahMenjawabGeometri = false;


    soal.pilihan.forEach(function (pilihan) {

        const tombol =
            document.createElement("button");


        tombol.textContent =
            pilihan;


        tombol.classList.add(
            "tombol-jawaban"
        );


        tombol.addEventListener(
            "click",
            function () {

                periksaJawabanGeometri(
                    pilihan,
                    tombol
                );

            }
        );


        pilihanJawabanGeometri.appendChild(
            tombol
        );

    });

}

// ======================================
// MEMERIKSA JAWABAN GEOMETRI
// ======================================

function periksaJawabanGeometri(
    jawaban,
    tombolDipilih
) {

    if (sudahMenjawabGeometri) {
        return;
    }

    sudahMenjawabGeometri = true;


    const soal =
        daftarSoalGeometri[soalGeometriSekarang];


    const semuaTombol =
        pilihanJawabanGeometri.querySelectorAll(
            ".tombol-jawaban"
        );


    semuaTombol.forEach(function (tombol) {

        tombol.disabled = true;

    });


    if (jawaban === soal.jawaban) {

        skorGeometri += 10;

        skorGeometriTeks.textContent =
            skorGeometri;


        hasilJawabanGeometri.innerHTML =
            `
            <div class="jawaban-benar">

                🎉 Jawaban benar!

                <p>
                    ${soal.penjelasan}
                </p>

                <p>
                    🌙 Kamu sudah berusaha
                    dengan baik. Teruskan
                    langkahmu dan bertawakkal.
                </p>

            </div>
            `;

    } else {

        energiGeometri--;

        energiGeometriTeks.textContent =
            energiGeometri;


        hasilJawabanGeometri.innerHTML =
            `
            <div class="jawaban-salah">

                <strong>
                    🌙 Belum tepat, Penjelajah.
                </strong>

                <p>
                    Tidak apa-apa.
                    Kesalahan adalah kesempatan
                    untuk belajar.
                </p>

                <p>
                    <strong>Pembahasan:</strong><br>
                    ${soal.penjelasan}
                </p>

                <p>
                    Tetap berusaha,
                    tenang, dan bertawakkal.
                </p>

            </div>
            `;

    }


    hasilJawabanGeometri.classList.add(
        "muncul"
    );


    tombolLanjutGeometri.style.display =
        "block";

}

// ======================================
// TOMBOL LANJUT GEOMETRI
// ======================================

tombolLanjutGeometri.addEventListener(
    "click",
    function () {

        soalGeometriSekarang++;


        if (
            soalGeometriSekarang <
            daftarSoalGeometri.length
        ) {

            tampilkanSoalGeometri();

        } else {

            planetGeometriSelesai = true;

            hasilJawabanGeometri.innerHTML =
                `
                <div class="jawaban-benar">

                    🎉 Petualangan Math Quest Selesai!

                    <p>
                        Selamat, Penjelajah!
                        Kamu telah menaklukkan seluruh
                        planet matematika.
                    </p>

                    <p>
                        🔵 Planet Bilangan ✓
                    </p>

                    <p>
                        🪐 Planet Aljabar ✓
                    </p>

                    <p>
                        🟣 Planet Fungsi ✓
                    </p>

                    <p>
                        🌕 Planet Geometri ✓
                    </p>

                    <p>
                        ⭐ Skor akhir:
                        <strong>${skorGeometri}</strong>
                    </p>

                    <p>
                        🌙 Teruslah belajar,
                        berusaha, dan bertawakkal.
                    </p>

                    <button
    id="kembaliKePetaSetelahSelesai"
    class="tombol-mulai-misi"
>
    🏠 Kembali ke Peta Galaksi
</button>

                </div>
                `;


            hasilJawabanGeometri.classList.add(
                "muncul"
            );

        tombolLanjutGeometri.style.display =
            "none";


        const tombolKembaliSelesai =
            document.getElementById(
                "kembaliKePetaSetelahSelesai"
            );


        tombolKembaliSelesai.addEventListener(
            "click",
            function () {

                halamanMisiGeometri.classList.remove(
                    "aktif"
                );

                petaGalaksi.classList.add(
                    "aktif"
                );

            }
        );

    }

}
);
// ======================================
// MEMERIKSA JAWABAN FUNGSI
// ======================================

function periksaJawabanFungsi(
    jawaban,
    tombolDipilih
) {

    if (sudahMenjawabFungsi) {
        return;
    }

    sudahMenjawabFungsi = true;


    const soal =
        daftarSoalFungsi[soalFungsiSekarang];


    const semuaTombol =
        pilihanJawabanFungsi.querySelectorAll(
            ".tombol-jawaban"
        );


    semuaTombol.forEach(function (tombol) {

        tombol.disabled = true;

    });


    if (jawaban === soal.jawaban) {

        skorFungsi += 10;

        skorFungsiTeks.textContent =
            skorFungsi;


        hasilJawabanFungsi.innerHTML =
            `
            <div class="jawaban-benar">

                🎉 Jawaban benar!

                <p>
                    ${soal.penjelasan}
                </p>

                <p>
                    🌙 Kamu sudah berusaha
                    dengan baik. Teruskan
                    langkahmu dan bertawakkal.
                </p>

            </div>
            `;

    } else {

        energiFungsi--;

        energiFungsiTeks.textContent =
            energiFungsi;


        hasilJawabanFungsi.innerHTML =
            `
            <div class="jawaban-salah">

                <strong>
                    🌙 Belum tepat, Penjelajah.
                </strong>

                <p>
                    Tidak apa-apa.
                    Kesalahan adalah kesempatan
                    untuk belajar.
                </p>

                <p>
                    <strong>Pembahasan:</strong><br>
                    ${soal.penjelasan}
                </p>

                <p>
                    Tetap berusaha,
                    tenang, dan bertawakkal.
                </p>

            </div>
            `;

    }


    tombolLanjutFungsi.style.display =
        "block";

}
// ======================================
// TOMBOL LANJUT MISI FUNGSI
// ======================================

tombolLanjutFungsi.addEventListener(
    "click",
    function () {

        soalFungsiSekarang++;

        if (
            soalFungsiSekarang <
            daftarSoalFungsi.length
        ) {

            tampilkanSoalFungsi();

        } else {

            planetFungsiSelesai = true;

            hasilJawabanFungsi.innerHTML =
                `
                <div class="jawaban-benar">

                    🎉 Misi Fungsi selesai!

                    <p>
                        Selamat, Penjelajah!
                        Kamu telah menyelesaikan
                        semua tantangan Fungsi.
                    </p>

                    <p>
                        ⭐ Skor akhir:
                        ${skorFungsi}
                    </p>

                </div>
                `;

            tombolLanjutFungsi.style.display =
                "none";

        }

    }
);

// ======================================
// MENJALANKAN SOAL PERTAMA
// ======================================

mulaiMisiFungsi.addEventListener(
    "click",
    function () {

        // Membuka halaman Misi Fungsi
        halamanFungsi.classList.remove("aktif");
        halamanMisiFungsi.classList.add("aktif");


        soalFungsiSekarang = 0;

        skorFungsi = 0;

        energiFungsi = 3;

        skorFungsiTeks.textContent =
            skorFungsi;

        energiFungsiTeks.textContent =
            energiFungsi;

        tampilkanSoalFungsi();

    }
);