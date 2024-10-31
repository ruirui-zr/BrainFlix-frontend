import "./VideoList.scss"
import { Link } from "react-router-dom"

export default function VideoList({filteredVideos}){
    return (
        <section className="video-list">
            <h3 className="section-header">NEXT VIDEOS</h3>
            {filteredVideos.map((video) => (
                <Link to={`/videos/${video.id}`} className = "individual-video" key={video.id}>
                    <div className="video-container">
                        <img className = "list__image" src={video.image} />
                    </div>
                    <div className="list-meta">
                        <div className = "list__title">{video.title}</div>
                        <div className = "list__channel">{video.channel}</div>
                    </div>
                </Link>
            ))}
        </section>
    )
}  
