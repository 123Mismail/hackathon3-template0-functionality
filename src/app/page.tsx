
 
import React from 'react'
import Herosection from './components/Herosection'
 
import InstagramComp from './components/InstagramComp'
import HeroChairs from './components/HeroChairs'
import OurBlogs from './components/OurBlogs'
import TopPicks from './components/TopPicks'
import Hero1 from './components/Hero1'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  return (
     
      
      <div >
      <Herosection/>
      <Hero1/>
      <TopPicks/>

      <HeroChairs/>
      <OurBlogs/>
      <InstagramComp/>

    </div>
   
   
  )
}

export default HomePage