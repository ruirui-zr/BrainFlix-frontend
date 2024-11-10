import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import Video from '../../components/Video/Video'
import VideoList from '../../components/VideoList/VideoList.jsx'
import { useParams } from "react-router-dom";
import './VideoDetailPage.scss'
import { useState, useEffect } from "react"
import axios from 'axios';

function VideoDetailPage({videosData}) {
    if (videosData.length === 0) {
        return <div>No videos available...</div>
    }
    let { videoId } = useParams();
    if (videoId == null) {
        videoId = videosData[0].id;
    }
    const [video, setVideo] = useState({});

    // Filter videos excluding the currently selected video ID
    const filteredVideos = videosData.filter((video) => video.id !== videoId);

    useEffect(() => {
        if (videoId) {
            getVideoById();
        }
    }, [videoId]);

    async function getVideoById(){
        try{
            const response = await axios.get(`http://localhost:8686/videos/${videoId}`)
            console.log(response.data)
            setVideo(response.data)
        } catch (error) {
            console.error("Error Fetching videos", error);
        }
    }
    
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