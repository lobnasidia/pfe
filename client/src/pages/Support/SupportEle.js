import styled from "styled-components"


export const HeroContainer = styled.div `
 background: #FFF;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0 30px;
 height: 800px;
 position: relatives;
 z-index:1;

 :before {
     content: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background: linear-gradient(180deb, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
                 linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%)
     z-index: 2;
 }
`
export const HeroContent = styled.h1 `
z-index: 100%;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`
export const HeroH1 = styled.h1`
color: #C5D86D;
font-size: 110px;
text-align: center;

@media screen and (max-width:768px){
    font-size: 40px;
}

@media screen and (max-width:480px){
    font-size: 32px;
}
`


export const SearchBox = styled.div`
margin-top: 60px;
font-size: 50px;
display: flex;
`


export const SearchIcon = styled.div`
margin-top: 10px;
margin-left: 10px;
position: absolute;
font-size: 70px;


`



