// DOM'dan elementleri koda çekme
let videoPlayer = document.getElementById("videoPlayer")
let playButton = document.getElementById("playButton")
let pauseButton = document.getElementById("pauseButton")
let nextButton = document.getElementById("nextButton")
let prevButton = document.getElementById("prevButton")
let videoIDText = document.getElementById("videoID")
let playVideoButton = document.getElementById("playVideoButton")
let selectVideoRange = document.getElementById("selectVideo")

//ilk videoyu ayarlama
let videoIndex = 0
// alttaki seçim barının max değerini ayarlayan satır
selectVideoRange.max = neutralVideos.length - 1

//ilk videoyu yerleştiren ve oynatan satır
videoPlayer.src = neutralVideos[videoIndex]
videoPlayer.play()

//video bittiğinde çalışan fonksiyon ve ataması
videoPlayer.addEventListener("ended", () => {
  playNextVideo()
})

//videoyu oynatan fonksiyon ve ataması
playButton.addEventListener("click", () => videoPlayer.play())

//videoyu duraklatan fonksiyon ve ataması
pauseButton.addEventListener("click", () => videoPlayer.pause())

//sonraki videoyu oynatan fonksiyon ve ataması
nextButton.addEventListener("click", () => {
  playNextVideo()
})

//önceki videoyu oynatan fonksiyon
prevButton.addEventListener("click", () => {
  if (videoIndex == 0) {
    videoIndex = neutralVideos.length - 1
  } else {
    videoIndex--
  }
  setVideoIDText(videoIndex)
  videoPlayer.src = neutralVideos[videoIndex]
  videoPlayer.play()
})

//sıradaki videoyu oynayan fonksiyon
function playNextVideo() {
  if (videoIndex == neutralVideos.length - 1) {
    videoIndex = 0
  } else {
    videoIndex++
  }
  setVideoIDText(videoIndex)
  videoPlayer.src = neutralVideos[videoIndex]
  videoPlayer.play()
}

// ekrandaki bilgilendirmeleri ayarlayan fonksiyon
function setVideoIDText(id) {
  videoIDText.innerHTML = (id + 1).toString()
  selectVideoRange.value = id
}

// seçilen videoyu oynatan fonksiyon ve butona ataması
playVideoButton.addEventListener("click", () => {
  let id = selectVideoRange.value
  videoPlayer.src = neutralVideos[id]
  setVideoIDText(id)
  videoPlayer.play()
})
