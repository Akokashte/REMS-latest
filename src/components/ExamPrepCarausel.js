import Carousel from 'react-multi-carousel';
import Card from './Card';
import 'react-multi-carousel/lib/styles.css';
import '../styles/card.css';

function ExamPrepCarausel() {

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
    { title: 'HomiBhaba', img: 'homibhabha.jpg', desc: 'Homibhabha couching to give opportunity for students to involve in scientific activities' },
    { title: 'ATL Lab', img: 'atl.png', desc: 'ATL (Atal Tinkering Lab) is a work space where young minds can give shape to their ideas through hands on do-it-yourself mode' },
    { title: 'JEE', img: 'jee.jpg', desc: "We have best faculty to guide about JEE entrance exam" },
    { title: 'NATA', img: 'nata.jpg', desc: "We have best faculty and couching material to guide about NATA entrance exam" },
    { title: 'NEET', img: 'neet.jpeg', desc: "We have best faculty to guide about NEET entrance exam" }
  ]
  return (
    <>
      <Carousel className='cardcarousel'
        itemClass="carousel-item-padding-2-px"
        responsive={responsive} focusOnSelect={true} showDots={false} infinite={true} arrows={false} autoPlay={true} rewindWithAnimation={true}
        swipeable={false} ssr={true} sliderClass='myslider' draggable={false} autoPlaySpeed={3000} transitionDuration={2000} customTransition="all 1s linear" >
        {

          data.map((curElem, index) => {
            return <Card key={index} head={curElem} />
          })
        }
      </Carousel>
    </>
  );
}

export default ExamPrepCarausel;
