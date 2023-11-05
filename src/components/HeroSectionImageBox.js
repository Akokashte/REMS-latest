import "../styles/facilities.css"

const HeroSectionImageBox = () => {
    return (
        <>
            <div className="content_box">
                <div className="content_wrapper">
                    <img src='library.jpg' className="carousel_img" alt="school img here" />
                </div>
                <div className="text_content">
                    <div className="inner_text_div">
                        <h2>Our Facilities</h2>
                        <p>We give best facilities of education to our students</p>
                        <button className="btn">Explore Campus</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSectionImageBox;