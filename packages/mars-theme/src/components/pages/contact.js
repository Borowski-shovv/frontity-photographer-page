import React from "react";
import { connect, styled } from "frontity";

const ContactPage = ({ state, libraries }) => {
    const data = state.source.get("/kontakt");
    
    const contactForm = state.source.page[data.id];

    const Html2React = libraries.html2react.Component;

    return (
      <>

        <ContactFormWrapper>
            <ContactForm>
                <Html2React html={contactForm.content.rendered} />
            </ContactForm>
        </ContactFormWrapper>
      </>
    );
};

export default connect(ContactPage);

const ContactFormWrapper = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0
`;

const ContactForm = styled.div`
    width: 50%;
    padding: 24px;
    color: #000;
    background: blue;

`;