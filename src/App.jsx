import './App.scss'
import Header from "../src/components/Header/Header.jsx"
import VideoList from './components/VideoList/VideoList.jsx'
import Video from './components/Video/Video.jsx'
import VideosData from "./data/video-details.json"
import { useState } from "react"

console.log(VideosData);
function App() {
  const [selectedVideo, setSelectedVideo] = useState(VideosData[0]);
  // const [activeVideoId, setActiveVideoId] = useState(null)

  const handleSelectVideo = (ClickedId)=> {
    console.log(ClickedId);

    const displayVideo = VideosData.find((video)=> ClickedId === video.id)
    console.log(displayVideo)
    setSelectedVideo(displayVideo)
  }

  const filteredVideos = VideosData.filter((video) => {
    return video.id !== selectedVideo.id
  })

  return (
      <>
        <Header />
        <Video selectedVideo={selectedVideo} />
        <VideoList filteredVideos = {filteredVideos} handleSelectVideo={handleSelectVideo} />
      
      </>
  )
}

export default App
