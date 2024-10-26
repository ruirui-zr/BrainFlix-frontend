export default function VideoDetails(){
    return(
        <>
            <VideoTitle></VideoTitle>
            <div className="video-info">
                <Channel></Channel>
                <Date>
                
                </Date>
                <Views></Views>
                <Likes></Likes>
                <Divider></Divider>
            </div>
            <Description></Description>
        </>
    )
}