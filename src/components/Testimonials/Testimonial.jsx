import React from 'react'
import './testimonial.css'
import {testimonialsData} from '../../data/testimonialsData'
import RightArrow from '../../assets/rightArrow.png'
import LeftArrow from '../../assets/leftArrow.png'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Testimonial = () => {
  const transition = { type: 'spring', duration: 3}

  const [Selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className="Testimonials" id='testimonials'>
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            <motion.span
            key={Selected}
            initial={{ opacity: 0, x: 1}}
            animate= {{ opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={transition}
            >
              {testimonialsData[Selected].review}
            </motion.span>
            <span>
              <span style={{ color: 'var(--orange)'}}>
                {testimonialsData[Selected].name}
              </span>
              - {testimonialsData[Selected].status}
            </span>
        </div>
        <div className="right-t">
          <motion.div
          initial={{ opacity: 0, x: -100}}
          transition= {{...transition, duration: 2}}
          whileInView= {{ opacity: 1, x: 0 }}>
          </motion.div>
          <motion.div
           initial={{ opacity: 0, x: 100}}
          transition= {{...transition, duration: 2}}
          whileInView= {{ opacity: 1, x: 0 }}>
          </motion.div>
            <motion.img 
            key={Selected}
            initial={{ opacity: 0, x: 1}}
            animate= {{ opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={transition}
            src={testimonialsData[Selected].image} alt="" />
            <div className="arrows">
              <img 
              onClick={()=> {
                Selected === 0
                ? setSelected(tLength -1 )
                : setSelected((prev)=> prev -1);
              }}
              
              src={LeftArrow}alt="" />
              <img 
              onClick={()=> {
                Selected === tLength -1 ? setSelected(0) :
                setSelected((prev)=> prev + 1);
              }}
              
              src={RightArrow}alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonial