import styled from "styled-components";

export const CardContainer = styled.div`
    background-image: 'https://picsum.photos/200';
    background-size: cover;
    padding: 10rem 0 0;
    line-height: 1.6;
    max-width: 45ch;
`

export const CardContent = styled.div`
    padding: 1.5rem;
    background: linear-gradient(
        hsl(0 0 0% / 0),
        hsl(0 0 0% / 0.3) 20%,
        hsl(0 0 0% / 1)
    );
`

export const CardTitle = styled.h2`
    color: #FFF;
    font-size: 1.5rem;
    font-weight: 700;
`

export const CardBody = styled.p`
    color: #FFF;
    line-height: 1.6;
    font-family: sans-serif;
`