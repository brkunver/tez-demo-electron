let sorular = [
  "İlgili",
  "Sıkıntılı",
  "Heyecanlı",
  "Mutsuz",
  "Güçlü",
  "Suçlu",
  "Ürkmüş",
  "Düşmanca",
  "Hevesli",
  "Gururlu",
  "Asabi",
  "Uyanık",
  "Utanmış",
  "İlhamlı",
  "Sinirli",
  "Kararlı",
  "Dikkatli",
  "Tedirgin",
  "Aktif",
  "Korkmuş",
]

for (let soru of sorular) {
  let soruNode = document.createElement("div")
  soruNode.innerHTML = `<h3 class="mt-4"> ${soru} </h3>  <input class="w-50 form-range soru-degeri" type="range" value="1" name="${soru}" id="${soru}" max="5" min="1" step="1" />`
  anketController.appendChild(soruNode)
}

kaydetButton.addEventListener("click", kaydetButonunaTikla)
function kaydetButonunaTikla() {
  let sonuçMetni = ""
  let anketCevaplari = document.getElementsByClassName("soru-degeri")
  for (let cevap of anketCevaplari) {
    sonuçMetni += cevap.name + " : " + cevap.value + "\n"
  }

  let metinIcerik = sonuçMetni

  let dosya = new Blob([metinIcerik], { type: "text/plain" })

  // Kaydetme dialogunu aç
  let link = document.createElement("a")
  link.href = URL.createObjectURL(dosya)
  link.download = "cevaplar.txt"
  link.style.display = "none"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
