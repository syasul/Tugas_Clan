const fs = require('fs')
const readline = require('readline')
const process = require('process')

const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let data = []

function tambahBuku() {
    readl.question('Masukkan nama buku: ', (namaBuku) => {
        readl.question('Masukkan penerbit buku : ', (penerbitBuku) => {
            data.push({ namaBuku, penerbitBuku })
            console.log('Data menambahkan data buku')
            pilihan()
        })
    })
}

function simpanBuku() {
    const jsonData = JSON.stringify(data, null, 2)
    fs.writeFile('buku.json', jsonData, (err) => {
        if (err) throw err
        console.log('berhasil menyimpan data buku')
        pilihan()
    })
}

function tampilkanBuku() {
    if (data.length === 0) {
        console.log('kosong')
    } else {
        console.log('data:')
        data.map((item) => {
            console.log(`${item.namaBuku} - ${item.penerbitBuku}`)
        })
    }
    pilihan()
}

function pilihan() {
    console.log('Menu:')
    console.log('1. Tambah data buku')
    console.log('2. Simpan data buku')
    console.log('3. Tampilkan data buku')
    console.log('4. Keluar')

    readl.question('Pilih menu: ', (choice) => {
        if (choice === '1') {
            tambahBuku()
        } else if (choice === '2') {
            simpanBuku()
        } else if (choice === '3') {
            tampilkanBuku()
        } else if (choice === '4') {
            console.log('Program selesai')
            process.exit()
        } else {
            console.log('pilihan yang anda masukkan tidak tersedia')
            pilihan()
        }
    })
}

pilihan()