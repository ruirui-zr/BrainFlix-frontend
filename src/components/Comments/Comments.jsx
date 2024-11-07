import "./Comments.scss"
import Form from "../Form/Form.jsx"
import { format } from 'timeago.js';


export default function Comments({comments = []}) {
    return (
    <>
    <Form comments={comments}/>
    <div key={comments.id}>
        {comments.map((comment) => (
        <div className="comment__section" key= {comment.id}>
            <div className="avatar"/>
            <div className="comment__detail">
                <div className="comment__info">
                    <p className="comment__name">{comment.name}</p>
                    <p className="comment__date">{format(comment.timestamp)}</p>
                </div>
                <p className="comment__content">{comment.comment}</p>
            </div>
        </div>
        ))}
    </div>
    </>
    )
}
