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
    place-items: center;

    @media screen and (max-width: 480px) {
        padding: 35px 12px;
    }
`

export const ProductsRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (min-width: 480px) {
        flex-direction: column;
    }
`