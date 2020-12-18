import React from "react";
import { connect, styled } from "frontity";
import ReCAPTCHA from "react-google-recaptcha";
import mountains from '../../images/contact-section.jpg';

import fbIcon from '../../images/facebook.png';
import phoneIcon from '../../images/smartphone.png';
import emailIcon from '../../images/email.png'

const ContactPage = ({ state, libraries }) => {
    const data = state.source.get("/contact");
    
    const contactForm = state.source.page[data.id];

    const Html2React = libraries.html2react.Component;

    return (
      <>
        <ContactWrapper>
                <ContactFormWrapper>
                    <ContactForm>
                        <Html2React html={contactForm.content.rendered} />
                        {/* <ReCAPTCHA
                        sitekey="Your client site key"
                        onChange={onChange}
                    /> */}
                    </ContactForm>
                </ContactFormWrapper>
                <ContactInfoWrapper>
                    <ContactInfoHeader>Napisz <span>do mnie</span></ContactInfoHeader>
                    <ContactEmail>
                        <img src={emailIcon} alt=""/>
                        <ContactP>skiba27@wp.pl</ContactP>
                    </ContactEmail>
                    <ContactPhone>
                        <img src={ phoneIcon} alt=""/>
                        <ContactP>+48 508 602 881</ContactP>
                    </ContactPhone>
                    <ContactFb>
                        <img src={fbIcon} alt=""/>
                        <ContactP>facebook.com/go.podlasie</ContactP>
                    </ContactFb>
                    <img src={mountains}/>
                </ContactInfoWrapper>
        </ContactWrapper>
      </>
    );
};

export default connect(ContactPage);

const ContactWrapper = styled.div`
    max-width: 1500px;
    margin: 30px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    padding: 0;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ContactFormWrapper = styled.div`
    width: 100%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ContactForm = styled.div`
    width: 400px;
    padding: 24px;
    color: #000;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 100%;
    }

`;

const ContactInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;

    & > img {
        width: 100%;
        height: auto;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 24px;
    }
`;

const ContactInfoHeader = styled.h3`
    font-size: 60px;
    color: #87949e;
    font-weight: 600;
    margin-bottom: 50px;
    margin-top: 24px;

    & > span {
        font-weight: 200;
    }

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const ContactEmail = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    font-size: 24px;

    & > svg {
        font-size: 34px;
        fill:  #87949e;
    }

    @media (max-width: 768px) {
        font-size: 18px;
    }
`
    
const ContactPhone = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    font-size: 24px;

    & > svg {
        font-size: 34px;
        fill:  #87949e;
    }

    @media (max-width: 768px) {
        font-size: 18px;
    }
`

const ContactFb = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    margin-bottom: 100px;

    & > svg {
        font-size: 34px;
        fill:  #87949e;
    }

    @media (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 10px;
    }
`

const ContactP = styled.p`
    margin-left: 10px;
    color: #87949e;

`;
// const ContactA = styled.a`
//     color: #87949e !important;
//     margin-left: 10px;
// `;