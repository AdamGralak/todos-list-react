import styled from "styled-components";

export const StyledNav = styled.nav`
    background-color: teal;
    color: white;
    width: 100%;
    padding: 5px;

    & > ul {
        list-style: none;
        display: flex;
        justify-content: center;
    }

    & a {
        color: white;
        text-decoration: none;
        margin : 0px 15px;
        padding: 5px;
        transition: 0.5s;
    }

    & a:hover{
        color: gold;
    }

    & .active{
        border-radius: 2px;
        box-shadow: 1px 1px 5px white;
    }
`;