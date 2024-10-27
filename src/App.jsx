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


  const handleSelectVideo = (ClickedId)=> {
    console.log(ClickedId);

    const displayVideo = VideosData.find((video)=> ClickedId === video.id)
    console.log(displayVideo)
    setSelectedVideo(displayVideo)
  }

  const filteredVideos = VideosData.filter((video) => {
    return video.id !== selectedVideo.id
  })

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     const month = date.getMonth() + 1; 
//     const day = date.getDate();
//     const year = date.getFullYear();
//     return `${month}/${day}/${year}`;
// };

  function convertToDateString(timestamp){
    const now = new Date();
    const commentDate = new Date(timestamp); 

    const timeDifference = Math.abs(now - commentDate);

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 3) {
        return 'Just now'
    } else if (seconds < 60) {
        return `${seconds} seconds ago`;
    } else if (minutes < 60) {
        return `${minutes} minutes ago`;
    } else if (hours < 24) {
        return `${hours} hours ago`;
    } else if (days < 7) {
        return `${days} days ago`;
    } else if (weeks < 5) {
        return `${weeks} weeks ago`;
    } else if (months <= 12) {
        return `${months} months ago`;
    } else {
        return `${years} years ago`;
    }
  }

  return (
      <>
        <Header />
        <VideoPlayer selectedVideo={selectedVideo} />
        <div className="desktop-layout">
          <Video className= "video--desktop" selectedVideo={selectedVideo} convertToDateString={convertToDateString} />
          <VideoList className= "videolist--desktop" filteredVideos = {filteredVideos} handleSelectVideo={handleSelectVideo} />
        </div>
      </>
  )
}

export default App
