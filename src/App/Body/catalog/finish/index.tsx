import React from "react";
import styled from "styled-components";
import FinishArt from "../../../../Assets/finishArt";

interface CartProps {
    setPage: React.Dispatch<React.SetStateAction<string>>,
}

const FinishCard = styled.div`
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
const SuccessText = styled.p`
    margin-top: 64px;
    margin-bottom: 32px;
    font-size: 20px;
    font-weight: 700;
    color: #2F2E41;
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

const Finish = (props: CartProps) => {
    return (
        <FinishCard>
            <SuccessText>Compra realizada {window.innerWidth < 800 && (<br />)}com sucesso!</SuccessText>
            <FinishArt />
            <Return onClick={() => props.setPage('catalog')}>VOLTAR</Return>
        </FinishCard>
    )
}

export default Finish