import React from "react";
import "../styles/gallery_card.css";
import { HiOutlineDownload } from 'react-icons/hi';

const GalleryImageCard = (props) => {
    const { image } = props;

    return (
        <>
            <div className="gallery_image_card_container">
                <div className="gallery_image_container">
                    <img src={image} alt="gallery photo here" />
                </div>
                <div className="gallery_icon_btn">
                    <div className="download_btn"><HiOutlineDownload />Download</div>
                </div>
            </div>
        </>
    )
}

export default GalleryImageCard;