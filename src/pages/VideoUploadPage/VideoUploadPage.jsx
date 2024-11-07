import thumbnailImage from "../../assets/images/Upload-video-preview.jpg"
import uploadIcon from "../../assets/icons/upload.svg"
import "./VideoUploadPage.scss"
import { Link } from 'react-router-dom'
import React, { useState } from 'react';


function VideoUploadPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const isFormValid = title.trim() !== '' && description.trim() !== '';
    return (
        <>
            <hr className="divider--uploadpage"></hr>
            <div className="layout">
                <h1 className="title">Upload Video</h1>
                <hr className="divider--uploadvideo"></hr>
                <div className = "videoupload--desktop-layout">
                    <div>
                        <p className="thumbnail__label" >VIDEO THUMBNAIL</p>
                        <div className="thumbnail__image--container">
                            <img className="thumbnail__image" src={thumbnailImage} alt="Thumbnail Image" />
                        </div>
                    </div>
                    <div className = "videoupload-section">
                        <div>
                            <label className="title__label" htmlFor="title">TITLE YOUR VIDEO</label>
                            <textarea className="form__input--title" name="title" id="title"
                                    placeholder="Add a title to your video" onChange={(e) => setTitle(e.target.value)}></textarea>
                        </div>

                        <div>
                            <label className="title__label" htmlFor="title">ADD A VIDEO DESCRIPTION</label>
                            <textarea className="form__input--des" name="title" id="title"
                                    placeholder="Add a description to your video" onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                    </div>
                </div>

                <hr className="divider--uploadvideo divider-display"></hr>

                <div className="buttons" >
                <Link to="/" className="link-no-underline">
                    <button className = "form__publish-button"
                    onClick={() => alert('Video uploaded successfully.')} disabled={!isFormValid}><img className = "form__publish-button__icon" src={uploadIcon} />UPLOAD</button>
                </Link>

                <Link to="/" className="link-no-underline">
                    <button className = "form__cancel-button" type="submit">CANCEL</button>
                </Link>
                </div>
            </div>
        </>
    )
}

export default VideoUploadPage