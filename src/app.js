let videos = [...allVideos]
let start = 0 //video sayaçı

playRandomButton.addEventListener("click", () => {
  let turId = Number(videoType.options.selectedIndex)
  let count = Number(videoCount.value)

  playRandomVideo(turId, count)

  videoPlayer.addEventListener("ended", () => {
    if (start < count) {
      console.log(start, "video oynat")
      playRandomVideo(turId)
      start++
    } else {
      console.log("bitti")
      videoPlayer.pause()
    }
  })
})

function playRandomVideo(turId = 0, count = 0) {
  let videoListCount = 0
  switch (turId) {
    case 0:
      videoPlayer.src = videos.random()
      videoListCount = videos.length
      break
    case 1:
      videoPlayer.src = calmVideos.random()
      videoListCount = calmVideos.length
      break
    case 2:
      videoPlayer.src = angryVideos.random()
      videoListCount = angryVideos.length
      break
    case 3:
      videoPlayer.src = sadVideos.random()
      videoListCount = sadVideos.length
      break
    default:
      videoPlayer.src = videos.random()
      videoListCount = videos.length
      break
  }

  if (videoListCount < count) {
    videoErrorCount.innerHTML = videoListCount.toString()
    errorBox.hidden = false
  } else {
    errorBox.hidden = true
    videoPlayer.play()
  }
}
