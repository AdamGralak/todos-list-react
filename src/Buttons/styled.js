import styled, { css } from "styled-components";

export const StyledOptionButton = styled.button`
    display: inline;
    margin: 0 auto;
    border: none;
    background-color: #fff;
    color: teal;
    font-size: 16px;
    transition: 0.5s;
    cursor: pointer;
    
    &:hover {
        color: hsl(180, 100%, 35%);
    }

    ${({ disabled }) => disabled && css`
        color: grey;
        transition: none;
        pointer-events: none; // Dodanie tego, aby uniemożliwić interakcje
    `}
`;

export const StyledDiv = styled.div`
    padding: 10px;
    display: inline;
`;
