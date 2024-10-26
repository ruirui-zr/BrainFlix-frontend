import './App.scss'
import Header from "../src/components/Header/Header.jsx"
import VideoList from './components/VideoList/VideoList.jsx'
import Video from './components/Video/Video.jsx'
import Videos from "./data/video-details.json"
import { useState } from "react"

console.log(Videos);
function App() {
  const [selectedVideo, setSelectedVideo] = useState(Videos[0]);

  return (
      <>
        <Header />
        <Video selectedVideo={selectedVideo} />
        <VideoList />
        
        
        {/* <VideoDetails />
        <Comments /> */}
      </>
  )
}

export default App
