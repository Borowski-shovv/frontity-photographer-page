import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import AstroPage from "./astrofoto";
import PodlasiePage from './podlasie';
import Home from './pages/home';
import WadirumPage from './pages/wadirum';
import img from '../images/hero-photo.jpg';
import TimelapsePage from './pages/timelapse';
import ComercialMoviesPage from './pages/ComercialMoviesPage';
import GoPodlasiePage from './pages/GoPodlasiePageMoviesPage';
import Footer from './footer';
import ColaboPage from './pages/collaborationPage';
import ContactPage from './pages/contact';
import CookieConsent from "react-cookie-consent";
import PrivacyPolicyPage from './pages/privacyPolicyPage';
import GoryPage from './pages/goryPage';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="pl" />
        <meta property="og:title" content="Fotografia - Szczepan Skibicki" />
        <meta property="og:description" content="Fotografia - Film - Szczepan Skibicki" />
        <meta property="og:image" content="http://api-tech.pl/static/images/about1-d5bf13e68e8c85b517c7bad0814c2203.jpg" />

      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer currentPage={state.router.link}>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Home when={data.isFrontPage}/>

          <TimelapsePage when={data.isTimelapsePage}/>
          <ComercialMoviesPage when={data.isCommercialPage}/>
          <GoPodlasiePage when={data.isGoPodlasiePage}/>

          <AstroPage when={data.isAstroPage} />
          <GoryPage  when={data.isGoryPage}/>
          <PodlasiePage when={data.isPodlasiePage}/>
          <WadirumPage when={data.isWadirumPage}/>

          <ColaboPage when={data.isColaboPage} />
          <ContactPage when={data.isContactPage}/>
          <PrivacyPolicyPage  when={data.isPolitykaPage}/>

          {/* <Loading when={data.isFetching} /> */}
        
          <List when={data.isArchive} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      <Footer />
      <CookieConsent acceptOnScroll={true}
            acceptOnScrollPercentage={50} contentStyle={{flex: "0 auto", margin: "0px", padding: "0px 15px", textAlign: "center"}}  buttonText="ZGODA" style={{alignItems: "center", justifyContent:"center", background: "#1976d2", fontSize: '12px'}}  buttonStyle={{margin: '5px', display: 'flex', background: "#fff", color: "#87949e", fontSize: "13px" }}>
            Ta strona korzysta z plików cookie, aby świadczyć usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza zgodę na ich użycie.   
      </CookieConsent>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
  }
  a,
  a:visited {
    color: #fff;
    text-decoration: none;
  }

  input {
    height: 30px;
    margin: 10px 0;
    padding: 8px 16px;
    border: 1px solid  #87949e;
    font-size: 18px;
    color: #87949e;
    font-family: 'Raleway', sans-serif;
    width: 100%;
  }
  
  textarea {
    margin: 10px 0;
    padding: 16px 16px;
    font-size: 18px;
    font-family: 'Raleway', sans-serif;
    border: 1px solid  #87949e;
    color: #87949e;
    resize: none;
    width: 100%;
  }

  label {
    color: #87949e
  }

  input[type="submit"] {
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
    height: auto;
  }

  .css-xwf3m5-SuccessMessage {
    margin-top: 30px;
  }
    
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  position:  ${({currentPage}) => currentPage === '/' ? 'absolute' : 'relative'};
  left: 0;
  right: 0;
  background: ${({currentPage}) => currentPage === '/' ? 'none' : `url(${img})`};
  height: ${({currentPage}) => currentPage === '/' ? 'auto' : '40vh'};
  background-size: ${({currentPage}) => currentPage === '/' ? '' : 'cover'};
  background-position: ${({currentPage}) => currentPage === '/' ? '' : 'bottom'};
  
`;

const Main = styled.div`
`;
