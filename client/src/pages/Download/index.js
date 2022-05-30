import React, {useState} from 'react'
import Button from "../../components/Button";
import { HeroBg } from '../Main/HeroEle'
import {HeroContainer,  HeroContent, HeroH1, HeroP, HeroBtnWrapper} from './DownloadEle'
import { VideoBg } from '../Main/HeroEle'
import video from "../../videos/v3.mp4"

function Download() {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
        <HeroBg >
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1 style={{fontSize:"120px" ,color:"midnightblue", fontWeight:"900", textShadow:"2px 2px gray"}}>Download Samma3ni</HeroH1>
          <HeroP style={{fontSize:"50px"}}>
          Play millions of songs and podcasts on your device.
          </HeroP>
          <HeroBtnWrapper>
            <Button style={{background:"steelblue", boxShadow:"2px 2px 10px 15 px gray"}} to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
            primary="true" dark="true" 
            >
              Download {hover }
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>

    
  )
}

export default Download