import Header from "../src/components/Header/Header.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import VideoDetailPage from "./pages/VideoDetailPage/VideoDetailPage";
import axios from 'axios';

function App() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function getVideos() {
    axios.get(`http://localhost:8686/videos`)
      .then((response) => {
        console.log(response.data);
        setVideos(response.data);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching videos", error);
        setIsLoading(false); // Set loading to false in case of error
      });
  }

  useEffect(() => {
    getVideos();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading message or spinner
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<VideoDetailPage videosData={videos} />} />
          <Route path="/videos/:videoId" element={<VideoDetailPage videosData={videos} />} />
          <Route path="/upload" element={<VideoUploadPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
