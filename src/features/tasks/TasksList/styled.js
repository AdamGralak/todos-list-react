import styled, { css } from "styled-components";

export const List = styled.ul`
    padding-inline-start: 0px;
    list-style: none;
    padding: 20px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    border-bottom: solid 2px #efefef;
    padding: 20px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const TaskContent = styled.span`
    word-break: break-word;
    padding: 0px 20px;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const StyledButton = styled.button`
    background-color: ${({ remove }) => remove ? 'hsl(0, 100%, 50%)' : 'hsl(120, 70%, 42%)'};
    color: #fff;
    padding-inline: 0px;
    border: 1px solid grey;
    height: 25px;
    width: 25px;
    margin-right: 15px;
    transition: 0.5s;

    &:hover {
        background-color: ${({ remove }) => remove ? 'hsl(0, 100%, 70%)' : 'hsl(120, 70%, 55%)'};
    }
`;
