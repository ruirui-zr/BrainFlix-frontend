import "./Form.scss"
import Avatar from "../Avatar/Avatar.jsx"
import CommentIcon from "../../assets/icons/add_comment.svg"

export default function Form({comments}){
    const numberOfComments = comments.length;
    
    return(
        <form className="form" method="GET">
            <h1 className="form__title">{numberOfComments + ' '}Comments</h1>
            <div className="form__section">
                <div className="avatar--posting">
                    <Avatar className="avatar--comment" />
                </div>
                <div className="form__comment">
                    <label className="form__label" htmlFor="comment">JOIN THE CONVERSATION</label>
                    <div className="input-button">
                    <textarea className="form__input" name="comment" id="comment"
                            placeholder="Add a new comment"></textarea>
                    <button className = "form__comment-button" type="submit">
                        <img className = "form__comment-button__icon" src={CommentIcon} />COMMENT</button>
                    </div>
                </div>
            </div>
            <hr class="divider divider-layout"></hr>
        </form>
    )
}