import styled from "styled-components"

export const ProductsContainer = styled.div`
    background: #000;
    line-height: 1.6;
`

export const ProductsWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    padding: 70px 24px;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 35px 12px;
    }
`

export const ProductsRow = styled.div`
    display: grid;
    width: 100%;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'card1 card2 card3';

    @media screen and (min-width: 480px) {
        grid-template-areas: 'card1' 'card2' 'card3';
    }
`