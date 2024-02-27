import React from "react";
import styled from "styled-components";
import ProductItem from "./productItem";
import useTotal from "../../../../../hooks/useTotal";

interface CartProps {
    movies: Movie[],
    selectId: number[],
    add: ((id: number) => void),
    remove: ((id: number) => void) | ((id: number, removeAll: boolean) => void),
    finish: (() => void),
}

interface Movie {
    id: number,
    title: string,
    price: number,
    image: string,
    unit: number
};

const CartDiv = styled.div`
    width: 100%;
    margin: 0 240px;
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;

    @media (max-width: 1020px) {
        min-width: 270px;
        padding: 16px;
        margin: 0 16px;
        max-width: calc(100% - 64px);
    }
`
const ColumnTextDiv = styled.div`
    margin-left: 24px;
    margin-bottom: 21px;
    font-size: 14px;
    font-weight: 700;
    color: #999999;
    display: flex;
    align-items: flex-start;

`
const Product = styled.p`
    margin-top: 24px;
    width: 167px;
    text-align: start;
    margin-right: auto;
`

const Amount = styled.p`
    width: 171.21px;
    margin-top: 25px;
    margin-left: 65px;
    text-align: start;
`

const Subtotal = styled.p`
    width: 73px;
    margin-top: 25px;
    text-align: start;
    margin-right: auto;

    @media (max-width: 1020px){
        margin: 0;
        color: #999999;
        font-size: 12px;
        text-align: end;
        margin-right: 0;
    }
`

const Hr = styled.hr`
    margin: 0px 24px 21px;
    height: 1px;
    color: #999999;

    @media (max-width: 1020px){
        margin: 0px 0px 21px;
    }
`

const FinishDiv = styled.div`
    margin: 0px 24px 21px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1020px) {
        margin: 0px 0px 16px;
        flex-direction: column-reverse;
        align-items: center;
    }
`

const Finish = styled.button`
    background-color:#009EDD;
    width: 235.42px;
    height: 40px;
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (max-width: 1020px){
        width: 100%;
    }
`

const TotalDiv = styled.div`
    height: 21px;
    margin: 9.5px 0;
    display: flex;
    align-items: center;

    @media (max-width: 1020px){
        margin-left: auto;
    }
`

const TotalTitle = styled.p`
    width: 61.47px;
    font-size: 14px;
    font-weight: 700;
    color: #999999;
`
const TotalPrice = styled.p`
    width: 130.79px;
    font-size: 24px;
    color: #2F2E41;
`

const ReviewCart = (props: CartProps) => {
    const {total, mobile} = useTotal(props);

    return (
        <CartDiv>
            {!mobile &&
                <ColumnTextDiv>
                    <Product>PRODUTO</Product>
                    <Amount>QTD</Amount>
                    <Subtotal>SUBTOTAL</Subtotal>
                </ColumnTextDiv>}
            <ProductItem
                movies={props?.movies}
                selectId={props.selectId}
                add={props.add}
                remove={props.remove}
                finish={props.finish}
                mobile={mobile}
            />
            <Hr />
            <FinishDiv>
                <Finish onClick={props.finish}>FINALIZAR PEDIDO</Finish>
                <TotalDiv>
                    <TotalTitle>TOTAL</TotalTitle>
                    <TotalPrice>{total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TotalPrice>
                </TotalDiv>
            </FinishDiv>
        </CartDiv>
    )
}

export default ReviewCart