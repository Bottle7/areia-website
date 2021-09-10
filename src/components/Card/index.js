import React from 'react'
import { CardContainer, CardContent, CardTitle, CardBody } from './CardElements'

const Card = (title, imgURL, body) => {
    return (
        <CardContainer imgURL={imgURL}>
            <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardBody>{body}</CardBody>
            </CardContent>
        </CardContainer>
    )
}

export default Card
