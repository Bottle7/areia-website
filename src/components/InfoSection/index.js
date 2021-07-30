import React from 'react';
import { Button } from 'react-scroll';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap } from './InfoElements';

const InfoSection = () => {
    return (
        <InfoContainer darkBg='true'>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                        <TopLine>
                        <Heading>
                        <Subtitle>
                        <BtnWrap>
                            <Button to='home'></Button>
                        </BtnWrap>
                        </Subtitle>
                        </Heading>
                        </TopLine>
                    </TextWrapper>
                    </Column1>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
};

export default InfoSection;
