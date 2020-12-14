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
import GoryPage from './gory';
import Home from './pages/home';
import WadirumPage from './pages/wadirum';
import img from '../images/hero-photo.jpg';
import TimelapsePage from './pages/timelapse';
import ComercialMoviesPage from './pages/ComercialMoviesPage';
import GoPodlasiePage from './pages/GoPodlasiePageMoviesPage';
import Footer from './footer';
import CollaborationPage from './pages/collaborationPage';
import ContactPage from './pages/contact';

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
        {data.isFrontPage && <Home />}
        {data.isAstroPage && <AstroPage />}
        {data.isPodlasiePage && <PodlasiePage />}
        {data.isGoryPage && <GoryPage />}
        {data.isWadirumPage && <WadirumPage />}
        {data.isTimelapsePage && <TimelapsePage />}
        {data.isCommercialPage && <ComercialMoviesPage />}
        {data.isGoPodlasiePage && <GoPodlasiePage />}
        {data.isColaboPage && <CollaborationPage />}
        {data.isContactPage && <ContactPage />} 
        
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      <Footer />
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;700&display=swap');
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
