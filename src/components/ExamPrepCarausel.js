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

  const data = ['HomiBhaba', 'ATL Lab', 'JEE', 'NATA', 'NEET']
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
