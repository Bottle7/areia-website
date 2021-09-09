import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #673CA8;
    background: ${({ darkBg }) => (darkBg ? '#000' : '#673CA8')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 70px 24px;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 35px 12px;
    }
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const SectionName = styled.p`
    color: ${({ sectionNameBlack }) => (sectionNameBlack ? '#000' : '#673ca8')};
    font-size: 1em;
    line-height: 1em;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    background: #fff;
    /* background: linear-gradient(90deg, rgba(103,60,168,1) 47.5%, rgba(0,99,255,0.65) 100%); */
    color: ${({ lightText }) => (lightText ? '#fff' : '#000')};
    font-size: 48px;
    margin-bottom: 24px;
    line-height: 1.1;
    font-weight: 600;
    text-align: ${({ alignLeft }) => (alignLeft ? 'start' : 'center')};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    margin-bottom: 35px;
    color: ${({ darkText }) => (darkText ? '#000' : '#fff')};
    line-height: 1.6;
    font-size: 1.12em;
    max-width: 440px;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
`