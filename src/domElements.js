//arraydan rastgele item döndürmek için gereken methodun eklenmesi
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)]
}

//Dom elementlerinin koddaki referanslarının oluşturulmaası
let videoPlayer = document.getElementById("videoPlayer")
let playButton = document.getElementById("playButton")
let pauseButton = document.getElementById("pauseButton")
let volumeControlButton = document.getElementById("volume-control")
let playVideoButton = document.getElementById("playVideoButton")
let playRandomButton = document.getElementById("playRandomButton")
let videoCount = document.getElementById("videoCount")
let videoType = document.getElementById("select-video-type")
let errorBox = document.getElementById("error-box")
let videoErrorCount = document.getElementById("video-sayisi-span")
let anketController = document.getElementById("anketController")
let kaydetButton = document.getElementById("kaydetButonu")

