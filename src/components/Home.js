import React from 'react'
import '../styles/home.css'
import Counter from './Counter';
import ExamPrepCarausel from './ExamPrepCarausel';


const Home = () => {
  return (
    <>
      <div className='home1'>
        <div className='welcomepage'>
          <h1>Nurturing The Uniqueness Of Every Student</h1>
          <img src="mainboy-v1.png" alt="" id='student' />
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
            <div className='video'>
              <img src="" alt="" />
            </div>
            <div className='text'>
              <h2>Rotary English Medium School is a K-12 co-educational school established in 2007, with a view to offering world-class educational opportunities in the city of Khed.Rotary Education Group has, from the very beginning been focussed driven and motivated by the traditional Indian values of honesty, integrity and service.REMS provides a learning environment that encourages children
                to bring out the best in themselves and enables their all-round
                development through the joy of learning, enduring values and
                the celebration of diversity.
                We welcome you to join the Rotary family and to give your child the best when it comes to an integrated, holistic and empowering learning experience.
                Choose what you'd like to learn from us & grab it from our family who is passionate about
                teaching students to chase their dreams & dive into the sea of success.</h2> <br />
              <a href="/">Read More</a>
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
            <div className='basicinfo'>
              <div className='basicinfoimg'>
                <img src="icon-admission.png" alt="" />
              </div>
              <div className='basicinfohead'>
                <h1>Admission Process</h1>
              </div>
            </div>
            <div className='basicinfo'>
              <div className='basicinfoimg'>
                <img src="icon-fee.png" alt="" />
              </div>
              <div className='basicinfohead'>
                <h1>Fee Structure</h1>
              </div>
            </div>
            <div className='basicinfo'>
              <div className='basicinfoimg'>
                <img src="location-icon.png" alt="" />
              </div>
              <div className='basicinfohead'>
                <h1>Location</h1>
              </div>
            </div>
            <div className='basicinfo'>
              <div className='basicinfoimg'>
                <img src="enquiry-form.png" alt="" />
              </div>
              <div className='basicinfohead'>
                <h1>Enquiry Form</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Counter/>
     <ExamPrepCarausel />

      <div className='home6'>
        <div className='home6info'>
          <div className='info'>
            <h1>Quick Links</h1>
          </div>
          <div className='links'>
            <div className='basicinfo'>
              <div className='basicinfoimg'>
                <img src="icon-testimonials.png" alt="" />
              </div>
              <div className='basicinfohead'>
                <h1>About Us</h1>
              </div>
            </div>
            <div className='basicinfo'>
              <div className='basicinfoimg'>
                <img src="icon-social-outreach.png" alt="" />
              </div>
              <div className='basicinfohead'>
                <h1>REMS Initiatives</h1>
              </div>
            </div>
            <div className='basicinfo'>
              <div className='basicinfoimg'>
                <img src="transport-policy.png" alt="" />
              </div>
              <div className='basicinfohead'>
                <h1>Transport Facility</h1>
              </div>
            </div>
            <div className='basicinfo'>
              <div className='basicinfoimg'>
                <img src="icon-globe.png" alt="" />
              </div>
              <div className='basicinfohead'>
                <h1>Careers</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='main-footer'>
          <div className='heading-1'>
            <div className='sub1'>
              <h2>Rotary Pratishthan's</h2>
            </div>
            <div className='sub2'>
              <h1> Rotary English Medium School</h1>
            </div>
          </div>
          <div className='heading-2'>
            <h2>Learn from an elite community of instructors, experts, and thought leaders with high-quality education.
              Hands-on learning experiences provide the most engaging and effective way to learn real-world
              concepts and skills that you need to be successful.</h2>
          </div>
          <div className='footer-links'>
            <div className='actuallinks'>
              <div className='pages'>
                <div className='foothead'>
                  <h2>Pages</h2>
                </div>
                <div className='footpages'>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Teachers</a></li>
                    <li><a href="/">Admission</a></li>
                    <li><a href="/">Academics</a></li>
                    <li><a href="/">Infrasturcture</a></li>
                  </ul>
                </div>
              </div>
              <div className='utility-pages'>
                <div className='foothead'>
                  <h2>Utility Pages</h2>
                </div>
                <div className='footpages'>
                  <ul>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Licenses</a></li>
                  </ul>
                </div>
              </div>
              <div className='contact'>
                <div className='foothead'>
                  <h2>Contact</h2>
                </div>
                <div className='footpages'>
                  <div className='address'>
                    <img src="attherate.jpg" alt="" id='add' />
                    <h3>Baitwadi,Khed, <br />Dist. Ratnagiri.</h3>
                  </div>
                  <div className='phone'>
                    <img src="phone.jpg" alt="" id='add' />
                    <h3>9607067192 <br />
                      8552028802</h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='copyright'>
            <h3>Copyright © REMS | Designed by SARS</h3>
          </div>
        </div>


      </div>
    </>
  )
}

export default Home
