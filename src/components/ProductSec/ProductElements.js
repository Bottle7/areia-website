import styled from "styled-components"

export const ProductsContainer = styled.div`
    background: #000;
    line-height: 1.6;
`

export const ProductsWrapper = styled.div`
    z-index: 1;
    height: 860px;
    width: 100%;
    padding: 70px 24px;
    

    @media screen and (max-width: 480px) {
        padding: 35px 12px;
    }
`

export const ProductsRow = styled.div`
    display: grid;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    grid-auto-columns: minmax(auto, 1fr);

    @media screen and (min-width: 480px) {
        grid-template-areas: '';
    }
`