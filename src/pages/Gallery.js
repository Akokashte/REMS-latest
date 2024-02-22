import React from 'react'
import GalleryImageCard from '../components/GalleryImageCard'
import "../styles/gallery.css";
import GalleryCategory from '../components/GalleryCategory';

const Gallery = () => {
  
    return (
        <section className='gallery_outer_container'>
        <h2 className='gallery_head'>Gallery</h2>
        <GalleryCategory />
        <div className='gallery_inner_wrapper'>
        <div className='first_gallery_inner_container'>
                <GalleryImageCard image={"https://cdn.pixabay.com/photo/2024/01/05/13/59/ship-8489587_640.jpg"}/>
                <GalleryImageCard image={"https://cdn.pixabay.com/photo/2023/12/18/14/30/winter-8456170_640.png"}/>
                <GalleryImageCard image={"https://cdn.pixabay.com/photo/2023/12/08/05/38/cat-8436843_640.jpg"}/>
                <GalleryImageCard image={"https://cdn.pixabay.com/photo/2023/09/30/18/25/goose-8286275_640.jpg"}/>
                <GalleryImageCard image={"https://cdn.pixabay.com/photo/2023/07/17/12/13/bird-8132549_640.jpg"}/>
            </div>
            <div className='second_gallery_inner_container'>
                <GalleryImageCard image={"https://cdn.pixabay.com/photo/2023/12/18/14/30/winter-8456170_640.png"}/>
                <GalleryImageCard image={"https://cdn.pixabay.com/photo/2023/09/30/18/25/goose-8286275_640.jpg"}/>
                <GalleryImageCard image={"https://cdn.pixabay.com/photo/2023/12/08/05/38/cat-8436843_640.jpg"}/>
                <GalleryImageCard image={"https://cdn.pixabay.com/photo/2024/01/05/13/59/ship-8489587_640.jpg"}/>
                <GalleryImageCard image={"https://cdn.pixabay.com/photo/2023/07/17/12/13/bird-8132549_640.jpg"}/>
            </div>
            <div className='third_gallery_inner_container'>
                <GalleryImageCard image={"https://cdn.pixabay.com/photo/2023/09/30/18/25/goose-8286275_640.jpg"}/>
                <GalleryImageCard image={"https://cdn.pixabay.com/photo/2024/01/05/13/59/ship-8489587_640.jpg"}/>
                <GalleryImageCard image={"https://cdn.pixabay.com/photo/2023/12/18/14/30/winter-8456170_640.png"}/>
                <GalleryImageCard image={"https://cdn.pixabay.com/photo/2023/07/17/12/13/bird-8132549_640.jpg"}/>
                <GalleryImageCard image={"https://cdn.pixabay.com/photo/2023/12/08/05/38/cat-8436843_640.jpg"}/>
            </div>
        </div>
          
        </section>
    )
}

export default Gallery
