import React from "react";
import "../styles/gallerycategory.css";

const GalleryCategory = () => {
    const Gallerycat = [
        "all",
        "sports",
        "dancing",
        "singing",
        "sketting",
    ]
    return (
        <>
            <div className="gallery_category_outer_div">
                <div className="gallery_category_inner_div">
                    {
                        Gallerycat.map((curElem, index) => {
                            return (
                                <div className="icon_text" key={index}>
                                    <span className="category_title">{curElem}</span>
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