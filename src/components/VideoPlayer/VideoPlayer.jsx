import "./VideoPlayer.scss"

export default function Video({selectedVideo}){
    console.log(selectedVideo)
    return(
        <div className="selected__image--container" key = {selectedVideo.id}>
                <video className="selected__image" controls poster={selectedVideo.image}> </video>
        </div>
    )
}