import React from "react";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <div className="section__header">
            <h2>{title}</h2> {extraHeaderContent}
        </div>
        {body}
    </section>
);

export default Section;