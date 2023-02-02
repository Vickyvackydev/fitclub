import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter'

const Hero = () => {
  const mobile = window.innerWidth<= 768 ? true: false;
  const transition = {type : 'spring', duration: 3}
  return (
    <div className='hero' id='home'>
      <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>
            <div className="the-best-ad">
              <motion.div
              initial = {{left: mobile? '165px': '238px'}}
              whileInView = {{left: '8px'}}
              transition = {{...transition, type: 'tween'}}
              ></motion.div>
              <span> The best fitness club in the town</span>
            </div>

            {/* hero heading */}
            <div className="hero-text">
              <div>
                  <span className='stroke-text'>Shape </span>
                  
                  <span>Your</span>
                </div>
                <div>
                  <span>
                    Ideal body
                  </span>
                </div>
                <div>
                  <span>

                  in here we will help you to shape and build your ideal body and live up tour life to fullest
                  </span>
                </div>
            </div>

            {/* figures */}

            <div className="figures">
              <div>
                <span>
                  < NumberCounter end={140} start={100} delay="4" prefix="+" />
                </span>
                <span>expert coaches</span>
              </div>
              <div>
                <span> < NumberCounter end={978} start={800} delay="4" prefix="+" /></span>
                <span>members joined</span>
              </div>
              <div>
                <span> < NumberCounter end={50} start={0} delay="4" prefix="+" /></span>
                <span>fitness programme</span>
              </div>
            </div>
            {/* hero butons */}
            <div className="hero-buttons">
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
            </div>
        </div>
        <div className="right-h">
          <button className='btn'>Join Now</button>
          <motion.div 
          initial = {{ right: '-1rem'}}
          whileInView = {{ right: '4rem'}}
          transition = {transition}
          className="heart-rate">
            <img src={heart} alt="" />
            <span style={{color: 'gray'}}>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>
          {/* hero images */}
          <img src={hero_image} alt="" className='hero-image'/>
          <motion.img
          initial= {{ right: '11rem'}}
          whileInView= {{right: '20rem'}}
          transition={transition} 
          src={hero_image_back} alt="" className='hero-image-back'/>
          {/* calories */}

          <motion.div 
          initial= {{ right: '37rem'}}
          whileInView= {{ right: '28rem'}}
          transition={transition}
          className="calories">
            <img src={calories} alt="" />
              <div>
                <span>calories Burned</span>
                <span>220 Kcal</span>
              </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Hero