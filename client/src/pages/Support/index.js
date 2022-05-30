import React from 'react'
import { FormGroup } from 'react-bootstrap'
import {HeroContainer,  HeroContent, HeroH1} from './SupportEle'
import { Form } from 'react-bootstrap'
import { VideoBg,HeroBg,HeroP } from '../Main/HeroEle'
import { Card } from 'react-bootstrap'
import video from "../../videos/v3.mp4"

function Support() {
  
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4"/>
      </HeroBg>
        <HeroContent>
        <p  style={{fontSize:"120px" ,color:"purple", fontWeight:"900", textShadow:"2px 2px gray"}}>Having an issue ?</p>
          <HeroP style={{fontSize:"50px"}} >
           How can we help you ?
          </HeroP>
          
          <Card>
            <Card.Body >
            <input className="text-center" type="text" placeholder="Search Here ..." />
            </Card.Body>

          </Card>
           
          
        </HeroContent>
    </HeroContainer>

    
  )
}

export default Support