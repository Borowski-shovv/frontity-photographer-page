import React from 'react';
import { ContactSection, ContactSectionWrapper, ContactSectionTitle } from './home';
import {styled} from 'frontity';
import StarIcon from '../../images/star.png';
import Link from "../link";

function ColaboPage() {
    return (
        <>
            <ColaboWrapperText>
                <img src={StarIcon} alt=""/>
                <ColaboText>
                    Zapraszam do współpracy przy tworzeniu filmów fabularnych, dokumentów, teledysków, filmów reklamowych i innych. Wykonuję również fotografie na zlecenie.
                </ColaboText>
            </ColaboWrapperText>
           <ContactSection>
                <ContactSectionWrapper>
                    <ContactSectionTitle>Zapraszam do <span>współpracy</span></ContactSectionTitle>
                    <ContactButton link="kontakt">Kontakt</ContactButton>
                </ContactSectionWrapper>
            </ContactSection>
        </>
    )
}

export default ColaboPage;

const ColaboWrapperText = styled.div`
    max-width: 1500px;
    padding: 30px 40px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 768px) {
        height: auto;
        padding: 30px 15px;
    }
`;

const ColaboText = styled.h3`
    width: 50%;
    text-align: center;
    margin-top: 40px;
    color: #87949e;
    font-size: 24px;
    line-height: 1.8;
    font-family: 'Railway', sans-serif;

    @media (max-width: 768px) {
        width: 100%;
        font-size: 16px;
        margin-top: 20px;
    }
`;


export const ContactButton = styled(Link)`
    border: none;
    background: #1976d2;
    outline: none;
    color: #fff;
    border-radius: 55px;
    padding: 8px 16px;
    width: 150px;
    text-align: center;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    margin: 40px auto 0;
`;