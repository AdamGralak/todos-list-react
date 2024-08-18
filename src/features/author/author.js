import React from "react";
import { GlobalStyle } from "../../global.styled";
import Section from "../../common/Section";
import Container from "../../common/Container";
import Header from "../../common/Header";

const Author = () => (
    <>
        <GlobalStyle />
        <Container>
            <Header title="O autorze" />
            <Section
                title="Kilka zdań o mnie"
                body={<>nsadhbyas</>}
            />
        </Container>
    </>
);

export default Author;