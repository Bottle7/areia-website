import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { GrAmazon } from 'react-icons/gr';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`

export const HeroBg = styled.div`
    background: linear-gradient(90deg, rgba(103,60,168,1) 47.5%, rgba(0,99,255,0.65) 100%);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #234a34;
`

export const HeroContent = styled.div`
    display: flex;
    position: absolute;
    padding: 8px 24px;
    z-index: 3;
    max-width: 1200px;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    background: #fff;
    /* background: linear-gradient(90deg, rgba(103,60,168,1) 47.5%, rgba(0,99,255,0.65) 100%); */
    font-size: 48px;
    text-align: center;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

export const AmazonLogo = styled(GrAmazon)`
    margin-right: 12px;
    font-size: 20px;
`