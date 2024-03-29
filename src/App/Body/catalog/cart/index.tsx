import React from "react";
import styled from "styled-components";
import EmptyArt from "../../../../Assets/emptyArt";
import ReviewCart from "./reviewCart";

interface CartProps {
    movies: Movie[],
    selectedId: number[],
    add: ((id: number) => void),
    remove: ((id: number) => void),
    setPage: React.Dispatch<React.SetStateAction<string>>,
    finish: (() => void)
}

interface Movie {
    id: number,
    title: string,
    price: number,
    image: string,
    unit: number
};

const EmptyCart = styled.div`
    width: 100%;
    margin: 0 240px;
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;

    svg{
        overflow: hidden;
    }

    @media (max-width: 1020px) {
        margin: 0 16px;
        max-width: calc(100% - 32px);
    }
`
const WarningText = styled.p`
    margin-top: 64px;
    margin-bottom: 32px;
    font-size: 20px;
    font-weight: 700;
    color: #2F2E41;

    @media (max-width: 1020px) {
        padding: 0 75px;
    }
`

const Return = styled.button`
    background-color:#009EDD;
    width: 180px;
    height: 40px;
    margin-top: 32px;
    margin-bottom: 64px;
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Cart = (props: CartProps) => {
    return (
        <>
            {props.selectedId.length === 0 ?
                <EmptyCart>
                    <WarningText>Parece que não {window.innerWidth < 800 && (<br />)}há nada por aqui :(</WarningText>
                    <EmptyArt />
                    <Return onClick={() => props.setPage('catalog')}>VOLTAR</Return>
                </EmptyCart> :
                <ReviewCart
                    movies={props?.movies}
                    selectId={props.selectedId}
                    add={props.add}
                    remove={props.remove}
                    finish={props.finish}
                />
            }
        </>
    )
}

export default Cart