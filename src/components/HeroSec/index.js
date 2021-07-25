import React from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1 } from './HeroElements';
import Video from '../../videos/video2.mp4';

const HeroSec = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Life Peripherals.</HeroH1>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSec;
