import React from 'react';
import { styled } from 'frontity';
import shovv from '../images/shovv.png';

function Footer() {
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterCopyRights>
                    Wszelkie prawa zastrzeżone © SkibickiFoto
                </FooterCopyRights>
                <FooterMenu>
                    <FooterMenuItems>
                        <FooterMenuLink href="/polityka-prywatnosci">Polityka Prywatności</FooterMenuLink>
                    </FooterMenuItems>
                    <FooterMenuItems>
                        <FooterMenuLink href="/">O mnie</FooterMenuLink>
                    </FooterMenuItems>
                    <FooterMenuItems>
                        <FooterMenuLink href="/timelapse">Film</FooterMenuLink>
                    </FooterMenuItems>
                    <FooterMenuItems>
                        <FooterMenuLink href="/astrofoto">Fotografia</FooterMenuLink>
                    </FooterMenuItems>
                    <FooterMenuItems>
                        <FooterMenuLink href="/wspolpraca">Współpraca</FooterMenuLink>
                    </FooterMenuItems>
                    <FooterMenuItems>
                        <FooterMenuLink href="/kontakt">Kontakt</FooterMenuLink>
                    </FooterMenuItems>
                </FooterMenu>
            </FooterContent>
            <Manufacturer>WDROŻENIE: <ShovvLogoLink href="https://shovv.pl" target="_blank"
          title="Fotografia reklamowa i strony internetowe Białystok"><ShovvLogo src={shovv}
            alt="SHOVV - Fotografia" /></ShovvLogoLink></Manufacturer>
        </FooterWrapper>
    )
}

export default Footer

const FooterWrapper = styled.footer`
    width: 100%;
    height: 10vh;

    
    @media (max-width: 768px) {
        height: auto;
    }
`; 

const FooterContent = styled.div`
    max-width: 1500px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;


    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const FooterCopyRights = styled.p`
    color: #87949e;

    
    @media (max-width: 768px) {
        order: 2;
        margin: 10px 0;
        font-size: 10px;
    }
`;

const FooterMenu = styled.ul`
    list-style: none;
    display: flex;

    @media (max-width: 768px) {
        order: 1;
        flex-direction: column;
        margin: 10px 0 0 0;
    }
`;

const FooterMenuItems = styled.li`
    text-align: center;
    margin: 0px 5px;
    
    @media (max-width: 768px) {
        margin: 5px 0;
    }
`;

const FooterMenuLink = styled.a`
    text-transform: uppercase;
    color: #87949e !important;
    padding: 0 16px;
    opacity: 0.7;

    &:hover {
        opacity: 1;
    }

    &:visited {
        font-weight: bold;
    }
`;

const Manufacturer = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    text-align:right;
    line-height:21px;
    font-size:11px;
    padding:10px 0px;
    letter-spacing:1px;
    color: #87949e;
    font-family: 'Raleway', sans-serif;


    @media (max-width: 768px) {
        text-align: center;
    }
`;

const ShovvLogoLink = styled.a`
    display:inline-block;
    margin:0;
    padding:0;
    opacity:0.5;

    &:hover {
        opacity: 1;
    }
`;

const ShovvLogo = styled.img`
    display:inline-block;
    margin:0;
    padding:0;
    vertical-align:middle;
    margin-top:-5px;
    margin-right: 16px;
`;


