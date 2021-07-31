import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import Video from '../../videos/HeroSectionVideo.mp4';
import { Button } from '../Button/ButtonElement';

const HeroSec = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Life Peripherals.</HeroH1>
                <HeroBtnWrapper>
                    <Button href="https://www.amazon.com/s?me=A2YP5SEV09M8T2&marketplaceID=ATVPDKIKX0DER" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'>
                        Amazon {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSec;
