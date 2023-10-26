import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/facilities.css"

const HeroSectionCarousel = () => {
    const img_arr = ['carrom.jpg', 'dance.jpeg', 'carrom.jpg', 'yoga.jpg']
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <>
            <Carousel className="facility_image_carousel" itemClass="carousel-item-padding-2-px"
                responsive={responsive} focusOnSelect={true} showDots={false}
                infinite={true} arrows={false} autoPlay={true} slidesToSlide={0}
                swipeable={false} ssr={true} sliderClass='myslider' draggable={false}
                autoPlaySpeed={2500} transitionDuration={2500} customTransition="transform 300ms ease-in-out" >
                {
                    img_arr.map((curElem, id) => {
                        return (
                            <div className="content_box">
                                <div className="content_wrapper">
                                    <img src={`./${curElem}`} className="carousel_img" alt="school img here" />
                                </div>
                                <div className="text_content">
                                <div className="inner_text_div">
                                    <h2>Our Facilities</h2>
                                    <p>The building current, and future, provide the background, which is the way that it should be. The school is, primarily, the people</p>
                                    <button className="btn">Explore Campus</button>
                                </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
        </>
    )
}

export default HeroSectionCarousel;