import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 4fr 1fr;
    padding: 10px 20px;
    margin-top: 2px;
    grid-column-gap: 20px;

    @media (max-width: 767px) 
    {
        grid-template-columns: 1fr;
        grid-row-gap: 10px;
    }
`;

export const StyledInput = styled.input`
    display: grid;
    width: 100%;
    padding: 10px;
`;

export const StyledDiv = styled.div`
    text-align: center;
`;

export const StyledButton = styled.button`
    border: 2px solid teal;
    background-color: teal;
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    padding: 10px 10px;
    cursor: pointer;
    width: 100%;
    transition: 1s;

    @media (max-width: 767px) 
    {
        grid-template-columns: 1fr;
        font-size: 14px;
        padding: 10px;
    }
    
    &:hover {
        border: 2px solid hsl(180, 100%, 35%);
        background-color: hsl(180, 100%, 35%);
        transform: scale(1.05);
    }
`;