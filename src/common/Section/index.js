import React from "react";
import {StyledSection, StyledSectionHeader} from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <StyledSectionHeader>
            <h2>{title}</h2> 
            {extraHeaderContent}
        </StyledSectionHeader>
        {body}
    </StyledSection>
);

export default Section;