import React from 'react'
import { ProductsContainer, ProductsWrapper, ProductsRow } from './ProductElements'
import { CardContainer, CardContent, CardTitle, CardBody } from './CardElements'

const ProductSec = (props1, props2, props3) => {
    return (
        <ProductsContainer>
            <ProductsWrapper>
                <ProductsRow>
                <CardContainer>
                    <img src={props1.imgURL} alt='' />
                    <CardContent>
                        <CardTitle>{props1.title}</CardTitle>
                        <CardBody>{props1.body}</CardBody>
                    </CardContent>
                </CardContainer>
                <CardContainer>
                    <img src={props2.imgURL} alt='' />
                    <CardContent>
                        <CardTitle>{props2.title}</CardTitle>
                        <CardBody>{props2.body}</CardBody>
                    </CardContent>
                </CardContainer>
                </ProductsRow>
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default ProductSec;
