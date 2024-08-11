import styled from "styled-components";

export const StyledSection = styled.section`
background-color: #fff;
`;

export const StyledSectionHeader = styled.div`
    padding: 10px 20px;
    border-bottom: solid 2px #efefef;
    margin-block: 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 767px) 
    {
        grid-template-columns: 1fr;
    }
    

    & > h2{
        padding: 10px;
        margin: 0px;
    }

`;