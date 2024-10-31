import "./VideoPlayer.scss"

export default function Video({selectedVideo}){
    return(
        <div className="selected__image--container">
                <video className="selected__image" controls poster={selectedVideo.image}> </video>
        </div>
    )
}