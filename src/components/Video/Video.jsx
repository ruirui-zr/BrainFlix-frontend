import "./Video.scss"

export default function Video({selectedVideo}){
    return(
        <main key = {selectedVideo.id}>
                <video className="selected-video__image" controls poster={selectedVideo.image}> </video>
                <p>{selectedVideo.title}</p>
                <p>{selectedVideo.channel}</p>
                <p>{selectedVideo.timestamp}</p>
                <p>{selectedVideo.views}</p>
                <p>{selectedVideo.likes}</p>
                <p>{selectedVideo.description}</p>
                {/* <p>{selectedVideo.comments}</p> */}
        </main>
    )
}
