import React from 'react'
import { HeroBg } from '../Main/HeroEle'
import { VideoBg } from '../Main/HeroEle'
import { HeroH1, HeroContainer , HeroP, HeroContent} from '../Main/HeroEle'
import video from "../../videos/v3.mp4"


function About() {
  
  return (
    <> 
    <HeroContainer>
        <HeroBg >
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <br />
          <HeroH1 style={{fontSize:"80px" ,color:"mediumvioletred", fontWeight:"700", textShadow:"2px 2px gray"}}>In case you missed anything.</HeroH1>
          <HeroP style={{fontSize:"70px",textShadow:"2px 2px gray"}}>
          About us
          </HeroP>
          <HeroP style={{fontSize:"20px"}}>
          With Samma3ni, it’s easy to find the right music or podcast for every moment – on your phone, your computer, your tablet and more.
                Soundtrack your life. Subscribe or listen for free.
          </HeroP>
          <HeroP style={{fontSize:"70px",textShadow:"2px 2px gray"}}>
          Services 
          </HeroP>
          <HeroP style={{fontSize:"20px"}}>
          1.Help site. Check out our help site for answers to your questions and to learn how to get the most out of your music.
          </HeroP>
          <HeroP style={{fontSize:"20px"}}>
          2.Community. Get fast support from expert Samma3ni users. If there isn’t already an answer there to your question, 
          post it and someone will quickly answer. You can also suggest and vote on new ideas for Samma3ni or simply discuss music with other fans.
          </HeroP>
          
                
               
        </HeroContent>
    </HeroContainer>

    </>
  )
}

export default About

