import React, { useState } from "react";
import "../styles/gallerycategory.css";
import { Gallerycat } from "../api/GalleryCat.api";

const GalleryCategory = ({ galleryImages, setTempGalleryImages }) => {
    const [activeCatCount, setActiveCatCount] = useState(0);
    const activeCategory = (id, text) => {
        setActiveCatCount(id)
        if (text === 'all') {
            setTempGalleryImages(galleryImages)
        }
        else {
            const categorywisefilterImage = galleryImages.filter((curElem) => {
                return curElem.category === text
            })
            setTempGalleryImages(categorywisefilterImage)
        }
    }
    return (
        <>
            <div className="gallery_category_outer_div">
                <div className="gallery_category_inner_div">
                    {
                        Gallerycat.map((curElem, index) => {
                            return (
                                <div className="icon_text" key={curElem.id} style={{ backgroundColor: curElem.id === activeCatCount ? "black" : "white", color: curElem.id === activeCatCount ? "white" : "black" }} onClick={() => activeCategory(curElem.id, curElem.text)}>
                                    <span className="category_title">{curElem.text}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default GalleryCategory;