import React, { SetStateAction } from 'react';
import styled from 'styled-components'
import Cart from '../../Assets/cartIcon';

interface HeaderProps {
    total: Number
    setPage: React.Dispatch<SetStateAction<string>>
}

const AppHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    font-size: calc(10px + 2vmin);
    color: white;
    justify-content: space-between;
    margin: 0px 240px;
    height: 74px;

    @media (max-width: 1020px){
        min-width: 270px;
        margin: 0 10px;
    }
`

const Title = styled.h1`
    font-size: 20px;
    margin: 24.5px 10px;
    font-weight: 700;
`

const CartDiv = styled.div`
    margin: 18px 10px;
    display: flex;
    flex-direction: row;
`

const CartText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const CartTitle = styled.h2`
    margin: 0px;
    font-size: 14px;
    line-height: 19px;
    font-weight: 600;
`
const Itens = styled(CartTitle)`
    font-size: 12px;
    color: #999999;
`

const Svg = styled.div`
    align-self: center;
    margin-left: 9.33px;
    width: 29.32px;
    height: 25.31px;
    cursor: pointer;
`

const Header = (props: HeaderProps) => {

    return (
        <AppHeader>
            <Title>
                WeMovies
            </Title>
            <CartDiv>
                <CartText>
                    <CartTitle>Meu Carrinho</CartTitle>
                    <Itens>{props.total} itens</Itens>
                </CartText>
                <Svg onClick={() => props.setPage('cart')}>
                    <Cart />
                </Svg>
            </CartDiv>
        </AppHeader>
    );
}

export default Header;