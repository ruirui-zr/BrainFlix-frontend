import './App.scss'
import Header from "../src/components/Header/Header.jsx"
import VideoList from './components/VideoList/VideoList.jsx'
import Video from './components/Video/Video.jsx'
import VideosData from "./data/video-details.json"
import { useState } from "react"
import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx'

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

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const month = date.getMonth() + 1; 
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
};

  return (
      <>
        <Header />
        <VideoPlayer selectedVideo={selectedVideo} />
        <div className="desktop-layout">
          <Video className= "video--desktop" selectedVideo={selectedVideo} formatDate={formatDate} />
          <VideoList className= "videolist--desktop" filteredVideos = {filteredVideos} handleSelectVideo={handleSelectVideo} />
        </div>
      </>
  )
}

export default App
