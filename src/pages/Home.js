import {React, useEffect} from 'react'
import Lottie from 'lottie-react'
import homePage from '../assets/homePage.json'
import 'aos/dist/aos.css';
import Aos from 'aos';
import "../styles/Home.css"

function Home() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className='home'>
      <div className = 'about'>
        <h2 data-aos = "fade-down">Phuc's Portfolio Website</h2>
          <div className='prompt'>
            <div className = 'introduction' data-aos = "fade-up">
              <p>Hello there. My name is Phuc Nguyen, and this is my portfolio website.</p>
              <p>I'm currently a CS major and aspiring software engineer at the University of Massachusetts, Amherst.</p>
            </div>

            {/* Lottie animation, lags for some reason */}
            {/* <div className = 'homeAnimation'>
              <Lottie loop = {true} animationData = {homePage}/>
            </div> */}
          </div>
      </div>
    </div>
  )
}

export default Home