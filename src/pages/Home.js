import '../styles/home.css'
import Counter from '../components/Counter';
import ExamPrepCarausel from '../components/ExamPrepCarausel';
import { NavLink } from 'react-router-dom';
import { links_data } from '../components/links_data';
import YtVideo from '../components/YtVideo';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <div className='home1'>
        <div className='welcomepage'>
          <div className='left_section'>
            <div className='left_inner_section'>
              <h1>Nurturing The Uniqueness Of Every Student</h1>
              <div className='admission_btn'><p>admissions open for AY 2023-24</p> </div>
            </div>
          </div>
          <div className='right_section'>
            <div className='inner_section'>
              <img src="herosection.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='home2'>
        <div className='vertical'>
          <img src="icon-hat-gradient.png" alt="" />
          <div className='line'></div>
          <img src="icon-testtube.png" alt="" />
        </div>
        <div className='heading1'>
          <h1>REMS <br />Education Network</h1>
        </div>
        <div className='heading2'>
          <h1>MORE THAN GRADES</h1>
        </div>
        <div className='homevideo'>
          <div className='textvideo'>
            <div className='innervideodiv'>
              <YtVideo />
              <div className='text'>
                <h2>Rotary English Medium School is a K-12 co-educational school established in 2007, with a view to offering world-class educational opportunities in the city of Khed.Rotary Education Group has, from the very beginning been focussed driven and motivated by the traditional Indian values of honesty, integrity and service.REMS provides a learning environment that encourages children
                  to bring out the best in themselves and enables their all-round
                  development through the joy of learning, enduring values and
                  the celebration of diversity.
                  We welcome you to join the Rotary family and to give your child the best when it comes to an integrated, holistic and empowering learning experience.
                  Choose what you'd like to learn from us & grab it from our family who is passionate about
                  teaching students to chase their dreams & dive into the sea of success.</h2> <br />
                <NavLink to="/" className="read_btn">Read More</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home3'>
        <div className='home3info'>
          <div className='info'>
            <h1>Have a look</h1>
          </div>
          <div className='links'>
            {
              links_data.map((curElem, index) => (
                <div className='basicinfo' key={index}>
                  <div className='basicinfoimg'>
                    {curElem.img}
                  </div>
                  <div className='basicinfohead'>
                    <h1>{curElem.headline}</h1>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Counter />
      <ExamPrepCarausel />
    </>
  )
}

export default Home
