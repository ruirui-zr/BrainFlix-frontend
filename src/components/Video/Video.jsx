import "./Video.scss"
import ViewsIcon from "../../assets/icons/views.svg"
import LikesIcon from "../../assets/icons/likes.svg"
import Comments from "../Comments/Comments.jsx"

export default function Video({selectedVideo}){
    console.log(selectedVideo)
console.log(selectedVideo.comments)
    return(
        <main className="selected-video" key = {selectedVideo.id}>
                <video className="selected__image" controls poster={selectedVideo.image}> </video>
                <p className="selected__title">{selectedVideo.title}</p>

                <hr class="divider"></hr>

                <div className="video-meta">
                    <div className="channel-date">
                        <p className="selected__channel">{`By ${selectedVideo.channel}`}</p>
                        <p className="selected__timestamp">{selectedVideo.timestamp}</p>    
                    </div>

                    <div className="views-likes">
                        <div className="views">
                            <img src={ViewsIcon} alt="views-icon"></img>
                            <p className="selected__views">{selectedVideo.views}</p>
                        </div>
                        <div className="likes">
                            <img src={LikesIcon} alt="likes-icon"></img>
                            <p className="selected__likes">{selectedVideo.likes}</p>    
                        </div>
                    </div>
                </div>

                <hr class="divider"></hr>
                <p className="selected__description">{selectedVideo.description}</p>
                <Comments comments={selectedVideo.comments}/>
        </main>
    )
}
