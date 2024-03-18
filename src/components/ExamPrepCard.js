import Carousel from 'react-multi-carousel';
import Card from './Card';
import 'react-multi-carousel/lib/styles.css';
import '../styles/card.css';
import '../styles/examprep.css';
import { motion } from "framer-motion";


function ExamPrepCard() {

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

  const data = [
    { title: 'Olampiads', subtitle: 'National & International Olampiads', img: 'olampiad.jpg', desc: 'Homibhabha couching to give opportunity for students to involve in scientific activities' },
    { title: 'Elementary', subtitle: 'Drawing Examination', img: 'elementary.jpg', desc: 'Homibhabha couching to give opportunity for students to involve in scientific activities' },
    { title: 'Intermediate', subtitle: 'Drawing Examination', img: 'intermediate.jpg', desc: 'Homibhabha couching to give opportunity for students to involve in scientific activities' },
    { title: 'HomiBhaba', subtitle: 'Bal Vaidnyanik exam', img: 'homibhabha2.jpg', desc: 'Homibhabha couching to give opportunity for students to involve in scientific activities' },
    { title: 'NTSE', subtitle: 'National Talent Search Exam', img: 'homibhabha2.jpg', desc: 'Homibhabha couching to give opportunity for students to involve in scientific activities' },
    { title: 'CS', subtitle: 'Company Secretary', img: 'cs.jpg', desc: 'Homibhabha couching to give opportunity for students to involve in scientific activities' },
    { title: 'CA', subtitle: 'Chartered Accountant', img: 'ca2.jpg', desc: 'Homibhabha couching to give opportunity for students to involve in scientific activities' },
    { title: 'CLAT', subtitle: 'Common Law Admission Test', img: 'clat4.png', desc: 'ATL (Atal Tinkering Lab) is a work space where young minds can give shape to their ideas through hands on do-it-yourself mode' },
    { title: 'JEE', subtitle: 'Joint Entrance Exam', img: 'jeenew2.jpg', desc: "We have best faculty to guide about JEE entrance exam" },
    { title: 'NATA', subtitle: 'National Aptitude Test in Architecture', img: 'nata-barch.jpg', desc: "We have best faculty and couching material to guide about NATA entrance exam" },
    { title: 'NEET', subtitle: 'National Eligibility cum Entrance Test', img: 'neetnew.jpg', desc: "We have best faculty to guide about NEET entrance exam" },
    { title: 'NDA', subtitle: 'National Defence Academy', img: 'nda-pop.jpg', desc: "We have best faculty to guide about NEET entrance exam" }
  ]
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

            data.map((curElem, index) => {
              return <Card key={index} head={curElem} />
            })
          }
        </Carousel>
      </motion.div>
    </>
  );
}

export default ExamPrepCard;


