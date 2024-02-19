import React from "react";
import styled from "styled-components";
import MinusIcon from "../../../../../../Assets/minusIcon";
import PlusIcon from "../../../../../../Assets/plusIcon";
import TrashIcon from "../../../../../../Assets/trashIcon";

interface CartProps {
    movies: Movie[],
    selectId: number[],
    add: ((id: number) => void),
    remove: ((id: number, removeAll: boolean) => void),
    finish: (() => void)
}

interface Movie {
    id: number,
    title: string,
    price: number,
    image: string,
    unit: number
};

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
const ProductDiv = styled.div`
    margin-left: 24px;
    margin-bottom: 21px;
    display: flex;
    flex-direction: row;

    @media (max-width: 1020px){
        margin: 0 0 21px;
    }
`
const MobileDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: -webkit-fill-available;
`


const InfoDiv = styled.div`
    margin-left: 52px;
    min-width: 80px;
    width: 150px;
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: center;

    @media (max-width: 1020px){
        flex-direction: row;
        margin: 0px;
        margin-left: 16px;
        height: min-content;
        justify-content: space-between;
        width: auto;
    }

    @media (min-width: 1020px) and (max-width: 1100px){
        width: 100px;
        padding-left: 6px;
        margin-left: auto;
    }
`

const Description = styled.p`
    margin-bottom: 8px;
    margin-top: 0;

    @media (max-width: 1020px){
        width: 80px;
        margin-bottom: 0px;
    }
`

const Price = styled.p`
    margin: 0;
`

const AmountDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    align-items: center;

    @media (max-width: 1020px){
        margin-top: 16px;
        margin-left: 16px;
        justify-content: space-around;
    }
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
    margin-right: 24px;
    margin-left: 52px;
    font-size: 16px;
    font-weight: 700;
    text-align: start;
    display: flex;
    align-items: center;
    color: #2F2E41;

    @media (max-width: 1020px){
        display: flex;
        flex-direction: column;
        width: fit-content;
        margin: 0;
        margin-left: auto;
        justify-content: flex-end;
        text-align: end;
    }
`

const SubtotalPrice = styled.p`
    text-align: end;
    margin: 0;
    width: -webkit-fill-available;
`

const TrashButton = styled.div`
    width: 18.13px;
    height: auto;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 24px;
    justify-content: flex-end;

    @media (max-width: 1020px){
        margin: 0px;
    }
`

const ProductItem = (props: CartProps) => {

    return (
        props.movies.map((item) => {
            if (props.selectId.includes(item.id)) {
                if (window.innerWidth > 1020)
                    return (
                        <ProductDiv>
                            <img src={item?.image} alt="" width={89} height={114} />
                            <InfoDiv>
                                <Description>{item.title}</Description>
                                <Price>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Price>
                            </InfoDiv>
                            <AmountDiv>
                                <FuncButtons onClick={() => props.remove(item.id, false)}><MinusIcon /></FuncButtons>
                                <AmountBox>
                                    <AmountNumber>{item.unit}</AmountNumber>
                                </AmountBox>
                                <FuncButtons onClick={() => props.add(item.id)}><PlusIcon /></FuncButtons>
                            </AmountDiv>
                            <SubtotalDiv>
                                {(item.price * item.unit).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                            </SubtotalDiv>
                            <TrashButton onClick={() => props.remove(item.id, true)}><TrashIcon /></TrashButton>
                        </ProductDiv>
                    )
                else
                    return (
                        <ProductDiv>
                            <img src={item?.image} alt="" width={64} height={82} />
                            <MobileDiv>
                                <InfoDiv>
                                    <Description>{item.title}</Description>
                                    <Price>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Price>
                                    <TrashButton onClick={() => props.remove(item.id, true)}><TrashIcon /></TrashButton>
                                </InfoDiv>
                                <AmountDiv>
                                    <FuncButtons onClick={() => props.remove(item.id, false)}><MinusIcon /></FuncButtons>
                                    <AmountBox>
                                        <AmountNumber>{item.unit}</AmountNumber>
                                    </AmountBox>
                                    <FuncButtons onClick={() => props.add(item.id)}><PlusIcon /></FuncButtons>
                                    <SubtotalDiv>
                                        <Subtotal>SUBTOTAL</Subtotal>
                                        <SubtotalPrice>
                                            {(item.price * item.unit).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                                        </SubtotalPrice>
                                    </SubtotalDiv>
                                </AmountDiv>
                            </MobileDiv>
                        </ProductDiv>
                    )
            }
            return null;
        })
    )
}

export default ProductItem