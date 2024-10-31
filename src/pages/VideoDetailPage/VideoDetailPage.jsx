import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import Video from '../../components/Video/Video'
import VideoList from '../../components/VideoList/VideoList.jsx'
import { useParams } from "react-router-dom";
import './VideoDetailPage.scss'
import { useState, useEffect } from "react"
import axios from 'axios';

function VideoDetailPage({videosData}) {
    const { videoId } = useParams();
    const [video, setVideo] = useState({});
    const filteredVideos = videosData.filter((video) => {return video.id !== videoId})

    const API_KEY ="9ab57832-674c-44eb-92ef-84bb809f032e";

    async function getVideoById(){
      try{
          const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key=${API_KEY}`)
          console.log(response.data)
          setVideo(response.data)
      } catch (error) {
          console.error("Error Fetching videos", error);
      }
    }

    useEffect(() => {
        getVideoById();
      }, [videoId]);
    
    return (
        <>
        <VideoPlayer selectedVideo={video} />
        <div className="desktop-layout">
            <Video className= "video--desktop" selectedVideo={video} />
            <VideoList className= "videolist--desktop" filteredVideos={filteredVideos} />
        </div>
        </>
    )
}

export default VideoDetailPage;