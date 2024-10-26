import "./Comments.scss"
import Avatar from "../Avatar/Avatar.jsx"

export default function Comments({comments}) {
    return (
    <>
    <form class="form" method="GET">
        <h1 class="form__title main__subtitle">Comments</h1>
        <div class="form__content">
        <Avatar />
        <div class="form__comment">
            <label class="form__label form__label--modified" htmlFor="comment">JOIN THE CONVERSATION</label>
            <textarea class="form__input--modified" name="comment" id="comment"
                    placeholder="Add a new comment"></textarea>

            <button class="form__comment-button" type="submit">COMMENT</button>
        </div>
        </div>
        <hr class="divider"></hr>
    </form>

    <div key={comments.id}>
        {comments.map((comment) => (
        <div className="comment__section" key= {comment.id}>
            <Avatar />
            <div className="comment__detail">
                <div className="comment__info">
                    <p className="comment__name">{comment.name}</p>
                    <p className="comment__date">{comment.timestamp}</p>
                </div>
                <p className="comment__content">{comment.comment}</p>
            </div>
            <hr class="divider"></hr>
        </div>
        ))}

    </div>
    </>
    )
}
