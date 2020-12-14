import React from 'react';
import img from '../../images/hero-photo.jpg';
import { connect, styled } from 'frontity';
import aboutimg1 from '../../images/about1.jpg'
import aboutimg2 from '../../images/about2.jpg'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import tree from '../../images/cooperate1.jpg'
import desert from '../../images/cooperate2.jpg'
import StarIcon from '@material-ui/icons/Star';
import mountains from '../../images/contact-section.jpg';

function Home({state}) {
    return (
        <>
            <HomeSectionBg>
                <HeroContentWrapper>
                    <HeroTitle>Film i fotografia <HeroTitleSpan>woj. Podlaskie</HeroTitleSpan></HeroTitle>
                    <HeroText>Zapraszamy do współpracy</HeroText>
                    <HeroButtonsWrapper>
                            <HeroButton href="/">Fotografia</HeroButton>
                            <HeroButton href="/">Film</HeroButton>
                    </HeroButtonsWrapper> 
                </HeroContentWrapper>  
            </HomeSectionBg>
            <AboutSection>
                <SectionTitle>O mnie</SectionTitle>
                <AboutContentWrapper>
                    <AboutRow>
                        <AboutPhoto src={aboutimg1}/>
                        <AboutTextWrapper>
                            <AboutTitle>Szczepan Skibicki</AboutTitle>
                            <AboutText>
                                Jestem mieszkańcem Podlasia. 
                                Ruch na świeżym powietrzu to moja największa pasja. Kolarstwo MTB, jazda na nartach BC oraz skitour, trekking górski, wędrowanie po podlaskich zabagnionych zalesionych dolinach daje mi ogromne poczucie wolności i swobody. Wszystko to w kontakcie ze zmieniającą się nieustannie przyrodą inspiruje mnie do działalności twórczych. Inną pasją, którą posiadam to astronomia. Świadomość ogromu wszechświata połączona z pięknem nocnego nieba jest niesamowicie inspirująca.  Wszystkie te zainteresowania jednoczy fotografia oraz film. Zamiłowanie do sportów oraz astronomii w połączeniu z pasją do słuchania muzyki popycha mnie do tworzenia obrazów w rytm muzyki. Ruch, rytm, harmonia, różnorodność, piękno jest tym, co bym chciał pokazać w swoich utworach.
                            </AboutText>
                        </AboutTextWrapper>
                    </AboutRow>
                </AboutContentWrapper>
            </AboutSection>


            <MyStorySection>
                <AboutContentWrapper>
                    <AboutRow>
                        <AboutTextWrapper>
                            <AboutText>
                                Przygodę z fotografią zacząłem w roku 1996 od aparatu typu Zenith. Potem przez wiele lat szkoliłem się w tej dziedzinie. Po przejściu na fotografię cyfrową, naturalną konsekwencją było rozszerzenie swojej działalności o filmy poklatkowe, które były naturalnym przedłużeniem fotografii. W 2010 roku po zakupie lustrzanki umożliwiającej filmowanie zacząłem wykonywać klasyczne filmy.
                                W ciągu ostatnich siedmiu lat ponad pięćdziesiąt dwie prace zostały nagrodzone bądź wyróżnione na różnych konkursach krajowych i międzynarodowych. Poniżej lista wybranych konkursów i festiwali:
                            </AboutText>
                        </AboutTextWrapper>
                        <AboutPhoto src={aboutimg2} />
                    </AboutRow>
                </AboutContentWrapper>
            </MyStorySection>



            <CompetitionSection>
                <SectionTitle>Wybrane konkursy i festiwale</SectionTitle>

                <CompetitionWrapper>
                    <CompetitionLeft>
                        <CompetitionTextWrapper> 
                            <CheckCircleIcon />
                            <CompetitionText>
                                Złoty Palladin na międzynarodowym festiwalu Sport Film Fesiwal Palermo 2017 za najlepsze zdjęcia do filmu „Go-Podlasie”. Film Go – Podlasie był nominowany w sześciu  kategoriach: najlepsze ujęcia, najlepszy edytor dźwięku, najlepszy short, najlepszy cudzoziemiec, najlepszy montażysta oraz nagroda publiczności. Film wykonany z Piotrem Ejsmontem.
                            </CompetitionText>
                        </CompetitionTextWrapper>
                        <CompetitionTextWrapper> 
                            <CheckCircleIcon />
                            <CompetitionText>
                                FSC Piękno lasu III miejsce 2013 r. III miejsce za „ Gwiazdy na Krzemiance”
                            </CompetitionText>
                        </CompetitionTextWrapper>
                        <CompetitionTextWrapper> 
                            <CheckCircleIcon />
                            <CompetitionText>
                                Time Frame Festiwal za film „Step Owy” 2014 r. I miejsce
                            </CompetitionText>
                        </CompetitionTextWrapper>
                    </CompetitionLeft> 
                    <CompetitionRight>
                        <CompetitionTextWrapper> 
                            <CheckCircleIcon />
                            <CompetitionText>
                                Festiwal filmów astronomicznych OFAFA 2015 r. II miejsce za film poklatkowy 
                                „Step Owy”. W 2016 w kat. time lapse za filmy: „Sklepienie Niebieskie” I miejsce; „Astrofotografowie” III miejsce 
                            </CompetitionText>
                        </CompetitionTextWrapper> 
                        <CompetitionTextWrapper> 
                            <CheckCircleIcon />
                            <CompetitionText>
                                Konkurs fotograficzny PKPK i LGD Puszcza Knyszyńska I miejsce „Ognisko”
                            </CompetitionText>
                        </CompetitionTextWrapper> 
                        <CompetitionTextWrapper> 
                            <CheckCircleIcon />
                            <CompetitionText>
                                Wielokrotny laureat międzynarodowego Konkursu Astrocamera w latach 2012- 2014 r. I, II, III miejsca i 6 wyróżnień.
                            </CompetitionText>  
                        </CompetitionTextWrapper>   
                    </CompetitionRight> 

                </CompetitionWrapper>

            </CompetitionSection>

            <PublicationSection>
                <PublicationText>Wiele moich filmów oraz fotografii było publikowanych w telewizji i prasie oraz pokazywanych w różnych kinach w Polsce. </PublicationText>
                <PublicationText>Film Go-Podlasie w Hollywood na XVIII Polish Film Festival Los Angeles w roku 2017</PublicationText>
                <PublicationText>12 grudnia 2016 odbyła się uroczysta premiera filmu Go-Podlasie w kinie Helios w Białymstoku w Galerii Handlowej Alfa.</PublicationText>
                <PublicationText>Projekcja w kinie Forum w Białymstoku filmu Go-podlasie</PublicationText>
                <PublicationText>Projekcja filmu na XV Outdorfilm Festival w Czechach w 2017 roku</PublicationText>
          
            </PublicationSection>

            <CooperateSection>
                <CooperateWraper>
                    <CooperateLeft>
                        <CooperatePhoto src={tree}/>
                        <CooperatePhotoTwo src={desert}/>
                    </CooperateLeft>
                    <CooperateRight>
                        <AboutTitle>Współpracowałem przy wykonaniu filmów z wieloma instytucjami i firmami prywatnymi m.in.:</AboutTitle>
                        <CooperateText>
                            - Nadleśnictwo Supraśl oraz Park Krajobrazowy Puszczy Knyszyńskiej przy wykonaniu filmu Go-Podlasie
                        </CooperateText>
                        <CooperateText>
                            - Nadleśnictwo Supraśl i Dojlidy oraz Park Krajobrazowy Puszczy Knyszyńskiej przy wykonaniu filmu na 30-lecie Parku Krajobrazowego Puszczy Knyszyńskiej
                        </CooperateText>
                        <CooperateText>
                            Napalm Records i zespół Korpiklaani oraz Atrocity przy pierwszym trailerze i filmie Go-Podlasie
                        </CooperateText>
                        <CooperateText>
                            - Discovery Channel Polska i Urząd Marszałkowski województwa Podlaskiego przy wykonaniu filmu promocyjnego dla województwa Podlaskiego emitowanego na targach Expo w Mediolanie w 2015 roku oraz na kanale Discovery Channel Polska
                        </CooperateText>
                        <CooperateText>
                            - Nadleśnictwo Krynki oraz fundacja Team 360° przy wykonaniu filmu 
                            z Międzynarodowego Rajdu na Orientację MTBO 2014 r.
                        </CooperateText>
                        <CooperateText>
                            World Mountain Bike OrienteeringChampionships 2014 
                            Official Trailer
                        </CooperateText>
                        <CooperateText>
                            - Nadleśnictwo Krynki XXVIII Rajd leśnika
                        </CooperateText>
                        <CooperateText>
                            - Uniwersytet w Białymstoku przy filmie o stacji naukowo - terenowej w Gugnach w 2016 roku. 
                        </CooperateText>
                        <CooperateText>- Kapelą Ze Wsi Warszawa przy wykonaniu filmu Step Owy</CooperateText>
                        <CooperateText>- Zespół Polscy Gregorianie przy filmie Sklepienie Niebieskie</CooperateText>
                        <CooperateText>- Zespół Naked Mind przy teledysku Kongurei</CooperateText>
                        <CooperateText>- Studio muzyczne Existence Music przy wykonaniu klipów oraz okładek do płyt m.in. Podlaska noc
                        </CooperateText>
                        <CooperateText>
                        - Damian Basiński malarz designer przy wykonaniu ujęć do teledysku dla Eljot Planet Mroczny Rycerz oraz w Brukseli dla Cira Sound
                        </CooperateText>
                        <CooperateText>
                        i inni wykonawcy muzyki jak np.: Byron Metcalf, Village Kollektiv, Marek Papaj, Liquid Molly, Joanna Zubycka, Tara Putra, Paul Kwitek, Olsen WNB, Tempelhoff, Alu Bambu Pikczu i inne
                        oraz firmamy prywatne, np.: Crosso, Podlaskie Centrum Rowerowe Sprint, Łukaszówka, Design Lab, Alterstudio, BD Sklep i inne Instytucje np.: Teatr Dramatyczny w Białymstoku im. Aleksandra Węgierki, Wojewódzką Komendą Policji w Białymstoku, Stowarzyszeniem Pomocy Niesłyszącym MIGIEM, Białostockim Muzeum Wsi, Sanktuarium św. Antoniego Padewskiego i bł. O. Rafała Chylinskiego, Podlaska Regionalna Organizacja Turystyczna i inne.

                        </CooperateText>
                    </CooperateRight>
                </CooperateWraper>
            </CooperateSection>

            <StarSection>
                <StarSectionWrapper>
                <StarIcon />
                <StartSectionText>
                    Stypendysta Marszałka Województwa Podlaskiego na rok 2020. Roczne stypendium w dziedzinie twórczości artystycznej, upowszechnianiem kultury i opieką nad zabytkami. Wykonanie filmu Podlaska Noc 2.0
                </StartSectionText>
                </StarSectionWrapper>
            </StarSection>

            <ContactSection>
                <ContactSectionWrapper>
                    <ContactSectionTitle>Zapraszam do <span>współpracy</span></ContactSectionTitle>
                    <ContactButton href="kontakt">Kontakt</ContactButton>
                </ContactSectionWrapper>

            </ContactSection>
        </>
    )
}
export default connect(Home)

const HomeSectionBg = styled.div`
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    position: relative;
    top: 0;
    z-index: 0;
`;

const HeroContentWrapper = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 30%;

    @media (max-width: 560px) {
        width: 100%;
    }
`;

const HeroTitle = styled.h1`
    font-size: 60px;
    font-weight: 400;
    color: #fff;
    text-align: center;

    @media (max-width: 560px) {
        font-size: 21px;
    }
`;
    
const HeroTitleSpan = styled.span`
    font-size: 60px;
    font-weight: 100;
    color: #fff;

    @media (max-width: 560px) {
        font-size: 21px;
    }
`;

const HeroText = styled.h3`
    font-size: 24px;
    font-weight: 100;
    text-align: center;
    color: #fff;

    @media (max-width: 560px) {
        font-size: 21px;
        margin-top: 20px;
    }
`;

const HeroButtonsWrapper = styled.div`
    margin: 30px auto;
    display: flex;
    justify-content: center;

    @media (max-width: 560px) {
        flex-direction: column
    }
`;

const HeroButton = styled.a`
    display: inline-block;
    border: 2px solid white;
    background: transparent;
    outline: none;
    color: #fff;
    border-radius: 55px;
    padding: 8px 16px;
    min-width: 150px;
    text-align: center;
    margin-right: 10px;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;

    @media (max-width: 560px) {
        margin: 0 auto 20px;
        max-width: 150px;
    }
`;

const AboutSection = styled.section`
    width: 100%;

`;

const SectionTitle = styled.h3`
    font-size: 60px;
    padding: 30px 0;
    color: #87949e;
    text-align: center;
    position: relative;
    font-weight: 200;

    &:after {
        content: '';
        background: #1976d2;
        position: absolute;
        width: 30px;
        height: 2px;
        left: 50%;
        bottom: 0%;
        transform: translateX(-50%);
    }

    @media (max-width: 768px) {
        font-size: 24px;
        font-weight: 400;
    }
`;

const AboutContentWrapper = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 40px;
`;
const MyStorySection = styled.div`

    background: #f9f9fa;
`;

const AboutRow = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 50px;
    gap: 40px;
    padding-top: 50px;
    padding-bottom: 50px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;


const AboutPhoto = styled.img`
    width: 100%;
    height: auto;

    @media (max-width: 768px) {
        order: 1;
    }
`;

const AboutTextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Nunito Sans', sans-serif;

    @media (max-width: 768px) {
        order: 2;
    }
`;

const AboutTitle = styled.h2`
    color: #87949e;
    margin-bottom: 30px;
    font-family: 'Railway', sans-serif;
`;

const AboutText = styled.p`
    color: #87949e;
    line-height: 1.8;
    width: 90%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const CompetitionSection = styled.div`
    width: 100%;
`;

const CompetitionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    max-width: 1500px;
    padding: 0 40px;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 0px;
    }
`;

const CompetitionLeft = styled.div`
    width: 100%;
    `;

const CompetitionRight = styled.div`
    width: 100%;
`;

const CompetitionTextWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 40px 0;

    & > svg {
        fill: #1976d2;
    }
`;

const CompetitionText = styled.p`
    color: #87949e;
    line-height: 1.8;
    width: 80%;
`;

const PublicationSection = styled.section`
    max-width: 1500px;
    margin: 70px auto;
    padding: 0 40px;
    text-align: center;
`;

const PublicationText = styled.p`
    width: 50%;
    color: #87949e;
    line-height: 1.8;
    font-family: 'Nunito Sans', sans-serif;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const CooperateSection = styled.section`
    width: 100%;
    margin-top: 70px;
    background: #f9f9fa;
    padding-top: 20px;
`;

const CooperateWraper = styled.div`
    max-width: 1500px;
    margin: 70px auto;
    padding: 0 40px;
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const CooperateLeft = styled.div`
    @media (max-width: 768px) {
        order: 2;
    }
`;
const CooperateRight = styled.div``;

const CooperatePhoto = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 50px;

    @media (max-width: 768px) {
        display: none;
    }
`;
const CooperatePhotoTwo = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 50px;

`;

const CooperateText = styled.p`
    color: #87949e;
    line-height: 1.8;
    font-family: 'Nunito Sans', sans-serif;
    margin: 30px 0;
`;

const StarSection = styled.section`
    max-width: 1500px;
    padding: 0 40px;
    margin: 50px auto;
    text-align: center

`;

const StarSectionWrapper = styled.div`
    width: 50%;
    margin: 0 auto;

    & > svg {
        fill: #1976d2
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const StartSectionText = styled.h3`
    margin-top: 40px;
    color: #87949e;
    font-size: 21;
    line-height: 1.8;
    font-family: 'Railway', sans-serif;
`;

export const ContactSection = styled.section`
    background-image: url(${mountains});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 60vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
`;

export const ContactSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;

export const ContactSectionTitle = styled.h3`
    color: #fff;
    font-size: 60px;
    line-height: 1.8;
    font-weight: 100;
 
    & > span {
        font-weight: 600;
    }

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const ContactButton = styled.a`
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
}
`;
