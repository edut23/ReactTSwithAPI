import React from 'react';
import styled from 'styled-components'
import AddCartIcon from '../../../Assets/addCartIcon';
import useCart from '../../../hooks/useCart';

interface MovieProps{
    id: number,
    title: string,
    price: number,
    image: string,
    unit: number,
    selected: boolean,
    add: ((id: number) => void)
};

const Section = styled.div`
    padding: 10px 11px 10px 11px;
    background-color: #FFFFFF;
    border-radius: 4px;
`

const Title = styled.h1`
    margin: 7px 0px 0px 0px;
    font-size: 12px;
    font-weight: 700;
`

const Price = styled.h2`
    margin: 2px  0px 0px 0px;
    font-size: 16px;
    font-weight: 700;
`

const IconDiv = styled.div`
    display: flex;
    align-items: center;
    margin-right: 12px;
`

const TotalNum = styled.p`
    margin-left: 3.4px;
`

const Movie = (props: MovieProps) => {
    const AddCart = styled.button`
        background-color: ${!props.selected ? "#009EDD" : "#039B00" } ;
        height: 40px;
        width: 100%;
        margin-top: 8px;
        border-radius: 4px;
        border: none;
        color: #FFFFFF;
        font-size: 12px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
    `

    return(
        <Section>
            <img src={props?.image} alt="" width={147} height={188}/>
            <Title>{props?.title}</Title>
            <Price>{props?.price?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Price>
            <AddCart onClick={() => props?.add(props.id)}>
                <IconDiv>
                    <AddCartIcon/>
                    <TotalNum>{props.unit}</TotalNum>
                </IconDiv>
                ADICIONAR AO CARRINHO
            </AddCart>
        </Section>
    )
}

export default Movie;