import React from 'react'
import { ProductsContainer, ProductsWrapper, ProductsRow } from './ProductElements'
import { cardOne, cardTwo, cardThree } from './Data'
import Card from '../Card/index'

const ProductSec = ({title, imgURL, body}) => {
    return (
        <ProductsContainer>
            <ProductsWrapper>
                <ProductsRow>
                    <Card {...cardOne}/>
                    <Card {...cardTwo}/>
                    <Card {...cardThree}/>
                </ProductsRow>
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default ProductSec;
