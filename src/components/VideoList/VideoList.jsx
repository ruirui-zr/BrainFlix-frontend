import Video from "../Video/Video.jsx"
import { useState } from "react"
import Videos from "../../data/video-details.json"
import "./VideoList.scss"

export default function VideoList({filteredVideos, handleSelectVideo}){


    return (
        <section className="video-list">
            <h3 className="section-header">NEXT VIDEOS</h3>
            {filteredVideos.map((video) => (
                <div className = "individual-video" key = {video.id} onClick={ () => handleSelectVideo(video.id)}>
                    <div className="video-container">
                        <video className = "list__image" controls poster={video.image}> </video>
                    </div>
                    <div className="list-meta">
                        <div className = "list__title">{video.title}</div>
                        <div className = "list__channel">{video.channel}</div>
                    </div>
                </div>
            ))}
        </section>
    )
}  
