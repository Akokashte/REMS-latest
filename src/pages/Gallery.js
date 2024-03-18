import React, { useState, useEffect } from 'react'
import GalleryImageCard from '../components/GalleryImageCard'
import "../styles/gallery.css";
import GalleryCategory from '../components/GalleryCategory';
import { HiOutlineDownload } from 'react-icons/hi';
// import { GalleryImages } from '../api/GalleryImages.api';
import axios from 'axios'
import UserContextProvider from '../Contexts/UserContextProvider';

const Gallery = () => {
    const [galleryImages, setGalleryImages] = useState([])
    const [tempGalleryImages, setTempGalleryImages] = useState([])

    const fetchAllImages = async () => {
        try {
            const images = await axios.get("http://localhost:5000/api/v1/gallery/fetch/all/images")
            // console.log(images.data.data)
            setGalleryImages(images.data.data)
            setTempGalleryImages(images.data.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchAllImages()
    }, [])

    console.log({ par: tempGalleryImages })


    const totalImageArrayLength = tempGalleryImages.length
    const arrayThreeParts = Math.floor(tempGalleryImages.length / 3)
    const firstPart = tempGalleryImages.slice(0, arrayThreeParts)
    const newDivision = (totalImageArrayLength - arrayThreeParts) / 2
    const secondPart = tempGalleryImages.slice(arrayThreeParts, arrayThreeParts + newDivision)
    const thirdPart = tempGalleryImages.slice(arrayThreeParts + newDivision,)



    return (
        <UserContextProvider>

            <section className='gallery_outer_container'>
                <h2 className='gallery_head'>Gallery</h2>
                <GalleryCategory galleryImages={galleryImages} setGalleryImages={setGalleryImages} setTempGalleryImages={setTempGalleryImages} />
                <div className='gallery_inner_wrapper'>
                    <div className='first_gallery_inner_container'>
                        {
                            thirdPart.map((curElem, index) => {
                                return (
                                    <GalleryImageCard key={index} image={curElem.image_url} />
                                )
                            })
                        }
                    </div>
                    <div className='second_gallery_inner_container'>
                        {
                            secondPart.map((curElem, index) => {
                                return (
                                    <GalleryImageCard key={index} image={curElem.image_url} />
                                )
                            })
                        }
                    </div>
                    <div className='third_gallery_inner_container'>
                        {
                            firstPart.map((curElem, index) => {
                                return (
                                    <GalleryImageCard key={index} image={curElem.image_url} />
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
        </UserContextProvider>
    )
}

export default Gallery
