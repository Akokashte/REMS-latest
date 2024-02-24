import React from 'react'
import GalleryImageCard from '../components/GalleryImageCard'
import "../styles/gallery.css";
import GalleryCategory from '../components/GalleryCategory';
import { HiOutlineDownload } from 'react-icons/hi';
import { GalleryImages } from '../components/GalleryImages';

const Gallery = () => {
    const totalImageArrayLength = GalleryImages.length
    const arrayThreeParts = Math.floor(GalleryImages.length / 3)
    const firstPart = GalleryImages.slice(0, arrayThreeParts)
    const newDivision = (totalImageArrayLength - arrayThreeParts) / 2
    const secondPart = GalleryImages.slice(arrayThreeParts, arrayThreeParts + newDivision)
    const thirdPart = GalleryImages.slice(arrayThreeParts + newDivision,)
    console.log(firstPart)
    console.log(secondPart)
    console.log(thirdPart)

    return (
        <section className='gallery_outer_container'>
            <h2 className='gallery_head'>Gallery</h2>
            <GalleryCategory />
            <div className='gallery_inner_wrapper'>
                <div className='first_gallery_inner_container'>
                    {
                        thirdPart.map((curElem, index) => {
                            return (
                                <GalleryImageCard key={index} image={curElem} />
                            )
                        })
                    }
                </div>
                <div className='second_gallery_inner_container'>
                    {
                        secondPart.map((curElem, index) => {
                            return (
                                <GalleryImageCard key={index} image={curElem} />
                            )
                        })
                    }
                </div>
                <div className='third_gallery_inner_container'>
                    {
                        firstPart.map((curElem, index) => {
                            return (
                                <GalleryImageCard key={index} image={curElem} />
                            )
                        })
                    }
                </div>
            </div>
            <div className='load_more_btn_container'>
                <div className='load_more_btn'>load more</div>
                <HiOutlineDownload className='load_more_icon' />
            </div>
        </section>
    )
}

export default Gallery
