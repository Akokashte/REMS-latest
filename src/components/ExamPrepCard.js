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
    { title: 'Olampiads', subtitle: 'National & International Olampiads', img: 'olampiad.jpg', desc: 'Comprehensive and rigorous preparation for Olympiad exams tailored to challenge and elevate students critical thinking and problem-solving skills.' },
    { title: 'Elementary', subtitle: 'Drawing Examination', img: 'elementary.jpg', desc: 'Comprehensive Elementary Drawing Exam preparation fostering creativity and foundational skills through guided practice and personalized feedback.' },
    { title: 'Intermediate', subtitle: 'Drawing Examination', img: 'intermediate.jpg', desc: 'Comprehensive preparation for intermediate drawing exams, integrating theory and practical skills to foster artistic proficiency and confidence.' },
    { title: 'HomiBhaba', subtitle: 'Bal Vaidnyanik exam', img: 'homibhabha14.jpg', desc: 'Homibhabha couching to give opportunity for students to involve in scientific activities' },
    { title: 'NTSE', subtitle: 'National Talent Search Exam', img: 'ntse.webp', desc: 'The National Talent Search Examination (NTSE) is a prestigious scholarship program in India for secondary school students to identify and nurture talent by providing financial assistance for higher education.' },
    { title: 'CS', subtitle: 'Company Secretary', img: 'cs.jpg', desc: 'The Company Secretary exam assesses candidates knowledge and skills in corporate governance, legal compliance, and strategic management to qualify and excel in the role of a company secretary.' },
    { title: 'CA', subtitle: 'Chartered Accountant', img: 'ca2.jpg', desc: 'The Chartered Accountant exam rigorously evaluates candidates knowledge and competence in accounting principles and business laws to confer the prestigious CA designation.' },
    { title: 'CLAT', subtitle: 'Common Law Admission Test', img: 'clat4.png', desc: ' CLAT (Common Law Admission Test) is a centralized entrance exam in India for admission to undergraduate and postgraduate programs in law offered by 22 prestigious national law universities.' },
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


