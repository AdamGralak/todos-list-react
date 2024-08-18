import styled, { css } from "styled-components";

export const StyledOptionButton = styled.button`
    display: inline;
    margin: 0 auto;
    border: none;
    background-color: #fff;
    color: teal;
    font-size: 14px;
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
    
    @media (max-width: 767px){
        margin-left: 0;
        font-size: 16px;
        padding: 8px;
    }
`;

export const StyledDiv = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;

    @media (max-width: 767px){
        flex-direction: column;
    }
`;
