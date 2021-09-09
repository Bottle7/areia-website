import styled from "styled-components"

/* <ProductsContainer>
<ProductsWrapper>
    <Column1>
        <CardWrapper>
            <CardImg></CardImg>
            <CardContent></CardContent> */

export const ProductsContainer = styled.div`
    background: #000;
    line-height: 1.6;
`

export const ProductsWrapper = styled.div`
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

export const ProductsRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
`

export const Card1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: card1;
`
export const Card2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: card2;
`
export const Card3 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: card3;
`

export const CardImg = styled.img`
    width: 100%;
`

export const CardContent = styled.div`
    padding: 15px;
`