
import React from "react";
import styled, { keyframes } from 'styled-components';

export default function LoadSpinner() {
    const spinner = require("./loadspinner.png") as string;

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
        <Spinner src={spinner} alt="" width={64} height={63}/>
    )
}