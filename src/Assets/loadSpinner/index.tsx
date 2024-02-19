
import React from "react";
import styled, { keyframes } from 'styled-components';

export default function LoadSpinner() {
    const spinner = require("./loadspinner.png") as string;

    const LoadingDiv = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `

    const rotate = keyframes`
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    `;

    const Spinner = styled.img`
        animation: ${rotate} 2s linear infinite;
    `

    return(
        <LoadingDiv>
            <Spinner src={spinner} alt="" width={64} height={63}/>
        </LoadingDiv>
    )
}