//videoyu oynatan fonksiyon ve ataması
playButton.addEventListener("click", () => videoPlayer.play())

//videoyu duraklatan fonksiyon ve ataması
pauseButton.addEventListener("click", () => videoPlayer.pause())

volumeControlButton.addEventListener("click", () => {
  if (videoPlayer.muted) {
    videoPlayer.muted = false
    volumeControlButton.innerText = "Sesi Kapat"
  } else {
    videoPlayer.muted = true
    volumeControlButton.innerText = "Sesi Aç"
  }
})
