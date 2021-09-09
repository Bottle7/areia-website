import React from 'react';
import { Button } from '../Button/ButtonElement';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, SectionName, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';

const InfoSection = ({darkBg, id, sectionNameBlack, alignLeft, imgStart, secTitle, lightText , headline, darkText, description, buttonLabel, img, alt, primary, dark, hideBtn}) => {
    return (
        <InfoContainer dark={dark} darkBg={darkBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <SectionName sectionNameBlack={sectionNameBlack}>{secTitle}</SectionName>
                            <Heading lightText={lightText} alignLeft={alignLeft}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={true}
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                hideBtn={hideBtn}>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
};

export default InfoSection;
