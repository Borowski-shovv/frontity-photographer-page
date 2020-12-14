import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import PageTitle from './pagetitle';
import BreadCrumb from './breadcrumbs';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const Header = ({ state, currentPage }) => {
  // console.log('currentPage', state.router.link)
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>Skibicki <TitleSpan>Foto</TitleSpan></Title>
        </StyledLink>
        <MobileMenu />
       <Nav />
      </Container>
      <PageTitleWrapper>  {currentPage !== '/' ? <PageTitle/> : null}

      
      <BreadCrumbsWrapper>
        {currentPage !== '/' ?  <BreadCrumb/> : null}
      </BreadCrumbsWrapper>
    

      {/* <BreadCrumbsWrapper><a href="/">Start</a> <ArrowRightIcon/> {currentPage !== '/' ? ( <BreadCrumb/>) : null}</BreadCrumbsWrapper> */}

      </PageTitleWrapper>


    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);



const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  max-width: 1500px;
  margin: 0 auto;
  align-self: flex-start;
`;

const Title = styled.h2`
margin: 0;
display: flex;
flex-wrap: nowrap;

`;

const TitleSpan = styled.span`
    font-size: 24px;
    font-weight: 100;
    color: #fff;
`;


const StyledLink = styled(Link)`
  text-decoration: none;
  z-index: 1;
`;

const PageTitleWrapper = styled.div`
  width: 100%;
  height: 200px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 10%;
  max-width: 1500px;

  @media screen and (max-width: 560px) {
    width: 100%;
    height: auto;

  }
`;

const BreadCrumbsWrapper = styled.p`
  color: #fff;
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-top: 30px;
  font-weight: 100;



  `;
