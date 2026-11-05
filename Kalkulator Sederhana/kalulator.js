function hitung(operator) {
    let val1 = parseFloat(document.getElementById("angka1").value);
    let val2 = parseFloat(document.getElementById("angka2").value);
    let elemHasil = document.getElementById("hasil");

    if (isNaN(val1) || isNaN(val2)) {
        elemHasil.textContent = "Hasil: Harap masukkan kedua angka!";
        return;
    }

    let hasil = 0;
    if (operator === "+") {
        hasil = val1 + val2;
    } else if (operator === "-") {
        hasil = val1 - val2;
    } else if (operator === "*") {
        hasil = val1 * val2;
    } else if (operator === "/") {
        if (val2 === 0) {
        elemHasil.textContent = "Hasil: Tidak dapat dibagi dengan 0";
        return;
        }
        hasil = val1 / val2;
    }

    elemHasil.textContent = "Hasil: " + hasil;
}
