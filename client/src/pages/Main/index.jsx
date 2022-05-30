import React, {useState} from 'react'
import Button from "../../components/Button";
import { Link} from "react-router-dom"
import { VideoBg } from './HeroEle'
import {HeroContainer, HeroBg, HeroContent, HeroH1, HeroP} from './HeroEle'
import video from "../../videos/v3.mp4"
import styles from "./styles.module.scss";
import logo from "../../images/yay.png"


const Main=()=> {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  const navLinks = [
    { name: "About", link: "/about" },
    { name: "Download", link: "/download" },
    { name: "Support", link: "/support" },
    { name: "Sign up", link: "/signup" },
    { name: "Log in", link: "/login" },
  ];
  
 
  return (
  
    <><div className={styles.container} >
    <nav className={styles.navbar_container}>
      <Link to="/" className={styles.nav_logo}>
        <img src={logo} alt="logo" />
      </Link>
      <div className={styles.nav_links}>
        {navLinks.map((link, index) => (
          <Link key={index} to={link.link} className={styles.links}>
            {link.name}
          </Link>
        ))}
      </div>
      </nav></div>
      <HeroContainer>
      
        <HeroBg >
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </HeroBg>
        <HeroContent className="w-100" style={{ maxWidth: "500px" }}>
          
          <HeroH1 style={{textShadow:"2px 2px gray", width: "90rem", fontSize: "10rem"}}>Bring Music To Life</HeroH1>
          <HeroP  style={{ color: "black", width: "50rem", fontSize: "5rem" }}>
            Listen and discover.
            In perfect harmony.
          </HeroP>
          <Link to="/signup">
						<Button
							label="GET SAMMA3NI FREE"
							style={{ color: "plum", width: "25rem", fontSize: "1.75rem" }}
						/>
					</Link>
        </HeroContent>
    </HeroContainer>

    
    </>
  )
}

export default Main;