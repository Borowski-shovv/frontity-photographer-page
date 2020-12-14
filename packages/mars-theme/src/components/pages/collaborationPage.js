import React from 'react';
import { ContactSection, ContactSectionWrapper, ContactSectionTitle, ContactButton } from './home';
import {styled} from 'frontity';
import StarIcon from '@material-ui/icons/Star';

function CollaborationPage() {
    return (
        <>
            <ColaboWrapperText>
                <StarIcon />
                <ColaboText>
                    Zapraszam do współpracy przy tworzeniu filmów fabularnych, dokumentów, teledysków, filmów reklamowych i innych. Wykonuję również fotografie na zlecenie.
                </ColaboText>
            </ColaboWrapperText>
           <ContactSection>
                <ContactSectionWrapper>
                    <ContactSectionTitle>Zapraszam do <span>współpracy</span></ContactSectionTitle>
                    <ContactButton href="kontakt">Kontakt</ContactButton>
                </ContactSectionWrapper>
            </ContactSection>
        </>
    )
}

export default CollaborationPage;

const ColaboWrapperText = styled.div`
    max-width: 1500px;
    height: 30vh;
    padding: 0 40px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > svg {
        fill: #1976d2
    }
`;

const ColaboText = styled.h3`
    width: 50%;
    text-align: center;
    margin-top: 40px;
    color: #87949e;
    font-size: 21;
    line-height: 1.8;
    font-family: 'Railway', sans-serif;

    @media (max-width: 768px) {
        width: 100%;
    }
`;
