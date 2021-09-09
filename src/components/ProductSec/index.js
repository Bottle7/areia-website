import React from 'react'
import { ProductsContainer, ProductsWrapper, ProductsRow, Card1, Card2, Card3, CardImg, CardContent } from './ProductElements'

const ProductSec = () => {
    return (
        <ProductsContainer>
            <ProductsWrapper>
                <ProductsRow>
                    <Card1>
                        <CardImg></CardImg>
                        <CardContent></CardContent>
                    </Card1>
                    <Card2>
                        <CardImg></CardImg>
                        <CardContent></CardContent>
                    </Card2>
                    <Card3>
                        <CardImg></CardImg>
                        <CardContent></CardContent>
                    </Card3>
                </ProductsRow>
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default ProductSec
