import React, { useState } from "react";
import "../styles/gallerycategory.css";
import {Gallerycat} from "../api/GalleryCat.api";

const GalleryCategory = () => {
    const [activeCatCount, setActiveCatCount] = useState(0);

    const activeCategory = (id) => {
        setActiveCatCount(id)
    }
    return (
        <>
            <div className="gallery_category_outer_div">
                <div className="gallery_category_inner_div">
                    {
                        Gallerycat.map((curElem, index) => {
                            return (
                                <div className="icon_text" key={curElem.id} style={{ backgroundColor: curElem.id === activeCatCount ? "black" : "white", color: curElem.id === activeCatCount ? "white" : "black" }} onClick={() => activeCategory(curElem.id)}>
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
