import "./Comments.scss"
import Form from "../Form/Form.jsx"


export default function Comments({comments, convertToDateString}) {
    return (
    <>
    <Form comments={comments}/>
    <div key={comments.id}>
        {comments.map((comment) => (
        <div className="comment__section" key= {comment.id}>
            <div className="avatar" alt="user-avatar" />
            <div className="comment__detail">
                <div className="comment__info">
                    <p className="comment__name">{comment.name}</p>
                    <p className="comment__date">{convertToDateString(comment.timestamp)}</p>
                </div>
                <p className="comment__content">{comment.comment}</p>
            </div>
        </div>
        ))}
    </div>
    </>
    )
}
