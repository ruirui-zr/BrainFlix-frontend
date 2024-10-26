import Video from "../Video/Video.jsx"
import { useState } from "react"
import Videos from "../../data/video-details.json"
import "./VideoList.scss"

export default function VideoList(){

    // const [activeVideoId, setActiveVideoId] = useState(null)

    // function changeActiveVideoId(id) {
    //     setActiveVideoId(id)
    // }

    return (
        <section className="video-list">
            {Videos.map((video) => (
                <div key = {video.id}>
                    <div className="Video__title">{video.id}</div>
                    <div className="poster-container">
                        <video controls poster={video.image}> </video>
                    </div>
                    <div className="Video__title">{video.title}</div>
                    <div className="Video__channel">{video.channel}</div>
                    
                </div>
))}
        </section>
    )
}  
