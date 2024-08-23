import React from "react";
import { GlobalStyle } from "../../global.styled";
import Section from "../../common/Section";
import Container from "../../common/Container";
import Header from "../../common/Header";
import { StyledAuthorInfo } from "./styled";

const Author = () => (
    <>
        <GlobalStyle />
        <Container>
            <Header title="O autorze" />
            <Section
                title="Kilka zdań o mnie"
                body={
                    <>
                        <StyledAuthorInfo>
                            <h3>Nazywam się Adam Gralak </h3>
                            Jestem studentem Politechniki Łódzkiej na kierunku Automatyka i Sterowanie Robotów <br />
                            Do moich zainteresowań należy: <br /> wędkarstwo, pilotowanie BSP, oraz poznawanie nowych technologi.
                        </StyledAuthorInfo>
                    </>
                }
            />
        </Container>
    </>
);

export default Author;