import "./Video.scss"
import ViewsIcon from "../../assets/icons/views.svg"
import LikesIcon from "../../assets/icons/likes.svg"
import Comments from "../Comments/Comments.jsx"

export default function Video({selectedVideo, formatDate}){
    console.log(selectedVideo)
console.log(selectedVideo.comments)


    return(
        <main className="selected-video" key = {selectedVideo.id}>
            <div className="layout">
                <div className="video-info--desktop">
                    <p className="selected__title">{selectedVideo.title}</p>

                    <hr className="divider divider--mobile"></hr>

                    <div className="video-meta">
                        <div className="channel-date">
                            <p className="selected__channel">{`By ${selectedVideo.channel}`}</p>
                            <p className="selected__timestamp">{formatDate(selectedVideo.timestamp)}</p>    
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

                    <hr className="divider divider--tablet"></hr>
                    <p className="selected__description">{selectedVideo.description}</p>
                    <Comments comments={selectedVideo.comments} formatDate={formatDate}/>
                </div>
            </div>
        </main>
    )
}
