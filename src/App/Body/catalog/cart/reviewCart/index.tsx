import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MinusIcon from "../../../../../Assets/minusIcon";
import PlusIcon from "../../../../../Assets/plusIcon";
import TrashIcon from "../../../../../Assets/trashIcon";

interface CartProps{
    movies: Movie[],
    selectId: number[],
    add: ((id: number) => void),
    remove: ((id: number) => void) | ((id: number, removeAll: boolean) => void),
    finish: (() => void)
}

interface Movie{
    id: number,
    title: string,
    price: number,
    image: string,
    unit: number
};

const CartDiv = styled.div`
    width: 950px;
    margin-left: 250px;
    margin-right: 240px;
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
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
    margin-right: 279px;
    text-align: start;
`

const Amount = styled.p`
    width: 171.21px;
    margin-top: 25px;
    text-align: start;
`

const Subtotal = styled.p`
    width: 73px;
    margin-top: 25px;
    text-align: start;
`
const ProductDiv = styled.div`
    margin-left: 24px;
    margin-bottom: 21px;
    display: flex;
    flex-direction: row;
`

const InfoDiv = styled.div`
    margin-left: 52px;
    width: 253px;
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: center;
`

const Description = styled.p`
    margin-bottom: 8px;
    margin-top: 0;
`

const Price = styled.p`
    margin: 0;
`

const AmountDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 52px;
    align-items: center;
`
const AmountBox = styled.div`
    border: 1px solid #D9D9D9;
    margin: 0 11px;
    width: 62px;
    height: 26px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 400; 
`
const AmountNumber = styled.p`
    margin: 0;
    text-align: start;
    display: flex;
    align-items: center;
    height: 26px;
    padding-left: 16px;
`
const FuncButtons = styled.div`
    min-width: 18px;
    height: 18px;
    cursor: pointer;
`
const SubtotalDiv = styled.div`
    width: 213.69px;
    margin-left: 52px;
    font-size: 16px;
    font-weight: 700;
    text-align: start;
    display: flex;
    align-items: center;
    color: #2F2E41;
`

const TrashButton = styled.div`
    width: 18.13px;
    height: auto;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 52px;
    margin-right: 24px;
    justify-content: flex-end;
`
const HR = styled.hr`
    margin: 0px 24px 21px;
    height: 1px;
    color: #999999;
`

const FinishDiv = styled.div`
    margin: 0px 24px 21px;
    display: flex;
    justify-content: space-between;
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
`

const TotalDiv = styled.div`
    height: 21px;
    margin: 9.5px 0;
    display: flex;
    align-items: center;
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
    color: #2F2E41
`

const ReviewCart = (props: CartProps) => {
    const [total, setTotal] = useState(0);
    
    useEffect(() => {
        let temp = 0;
        props.movies.map((item) => {
            temp = temp + (item.unit * item.price)
        })
        setTotal(temp)
    }, [props.add, props.remove])

    return(
        <CartDiv>
            <ColumnTextDiv>
                <Product>PRODUTO</Product> 
                <Amount>QTD</Amount> 
                <Subtotal>SUBTOTAL</Subtotal> 
            </ColumnTextDiv>
            {props.movies.map((item) => {
                if(props.selectId.includes(item.id))
                return(
                    <ProductDiv>
                        <img src={item?.image} alt="" width={89} height={114}/>
                        <InfoDiv>
                            <Description>{item.title}</Description>
                            <Price>{item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Price>
                        </InfoDiv>
                        <AmountDiv>
                            <FuncButtons onClick={() => props.remove(item.id, false)}><MinusIcon/></FuncButtons>
                            <AmountBox>
                                <AmountNumber>{item.unit}</AmountNumber>
                            </AmountBox>
                            <FuncButtons onClick={() => props.add(item.id)}><PlusIcon/></FuncButtons>
                        </AmountDiv>
                        <SubtotalDiv>
                            {(item.price*item.unit).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                        </SubtotalDiv>
                        <TrashButton onClick={() => props.remove(item.id, true)}><TrashIcon/></TrashButton>
                    </ProductDiv>
                )
            })}
            <HR/>
            <FinishDiv>
                <Finish onClick={props.finish}>FINALIZAR PEDIDO</Finish>
                <TotalDiv>
                    <TotalTitle>TOTAL</TotalTitle>
                    <TotalPrice>{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</TotalPrice>
                </TotalDiv>
            </FinishDiv>
        </CartDiv>
    )
}

export default ReviewCart