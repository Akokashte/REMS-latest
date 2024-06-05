import Carousel from 'react-multi-carousel';
import Card from './Card';
import 'react-multi-carousel/lib/styles.css';
import '../styles/card.css';
import '../styles/examprep.css';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import axios from 'axios';


function ExamPrepCard() {
  const [exampPrepApiData, setExamPrepApiData] = useState([])

  const getExamPrepData = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/examprep/get/all")
    setExamPrepApiData(res.data.data)
  }

  useEffect(() => {
    getExamPrepData()
  }, [exampPrepApiData])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <motion.div className='examprep_outer'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <div className='carousal_heading'>
          <h1>Our Offered Exam Preparations</h1>
        </div>

        <Carousel className='my_actual_cards'
          itemClass="carousel-item-padding-2-px"
          responsive={responsive} focusOnSelect={true} showDots={false} infinite={true} arrows={false} autoPlay={true} rewindWithAnimation={true}
          swipeable={false} ssr={true} sliderClass='myslider' draggable={false} autoPlaySpeed={3000} transitionDuration={2000} customTransition="all 1s linear" >
          {

            exampPrepApiData.map((curElem, index) => {
              return <Card key={index} examApiData={curElem} />
            })
          }
        </Carousel>
      </motion.div>
    </>
  );
}

export default ExamPrepCard;


