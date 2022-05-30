import styled from "styled-components";


export const TopLine= styled.p`
color: #78A1BB;
font-size: 25px;
line-height: 20px;
letter-spacing: 1.5px;
text-transform: uppercase;
margin-top:50px;
margin-bottom: 20px;
margin-right: 800px;
text-align: center;
`

export const Heading = styled.h1`
color: #283044;
margin-top:100px;
font-size: 60px;
text-align: center;
max-width: 600px;
margin-left: 200px;


@media screen and (max-width:768px){
    font-size: 40px;
}

@media screen and (max-width:480px){
    font-size: 32px;
}
`

export const Subtitle = styled.p`
color: #000;
max-width: 1000px;
font-size: 20px;
line-height: 30px 
margin-right: 50px;
margin-top: 10px;
margin-bottom: 10px;


`
export const InfoContainer = styled.div`
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
export const Infocontent = styled.h1 `
z-index: 100%;
max-width: 1200px;
position: relative;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`
