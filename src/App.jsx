// import './App.scss'
import Header from "../src/components/Header/Header.jsx"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import VideoDetailPage from "./pages/VideoDetailPage/VideoDetailPage"
import axios from 'axios';

function App() {
  const API_KEY ="9ab57832-674c-44eb-92ef-84bb809f032e";
  const [videos, setVideos] = useState([]);

  async function getVideos(){
    try{
        const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${API_KEY}`)
        console.log(response.data)
        setVideos(response.data)
    } catch (error) {
        console.error("Error Fetching videos", error);
    }
  }

  useEffect(() =>{
    getVideos();
  },[])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage defaultVideo={videos?.[0]}/>} />
          <Route path="/videos/:videoId" element={<VideoDetailPage videosData={videos}/>} />
          <Route path="/upload" element={<VideoUploadPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
