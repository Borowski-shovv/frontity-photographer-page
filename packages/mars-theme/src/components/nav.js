import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import SubMenu from './submenu';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import arrowDown from '../images/down-chevron.png'

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

const Nav = ({ state }) => (
  <NavContainer>
    {state.theme.menu.map(([name, link, submenuArr]) => {
      // Check if the link matched the current page url
      const isCurrentPage = state.router.link === link;
      return (
        <NavItem key={name}>
          {/* If link url is the current page, add `aria-current` for a11y */}
          <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
            {name}
          </Link>
          {submenuArr.length > 0 ? <img src={arrowDown} /> : null}
          <SubMenuWrapper>
            {
              submenuArr.length > 0 ? submenuArr.map((subitem) => {
              return <SubMenu 
                key={subitem.name} 
                name={subitem.name} 
                link={subitem.href} 
              />
              }) : null
            }
            </SubMenuWrapper>
        </NavItem>
      );
    })}
  </NavContainer>
);

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  max-width: 100%;
  box-sizing: border-box;
  z-index: 1;
  margin: 0;
  align-self: flex-start;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const SubMenuWrapper = styled.div`
  z-index: 1;
  display: none;
  position: absolute;
  width: 180px;
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
 

  &:hover {
    color: #b9b9b9;

    ${SubMenuWrapper} {
    display: block;
    margin-top: 25px;
    }
  }

  & > img {
    height: 12px;
    width: 12px;
    margin: 8px 0 0 5px;
  }

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #b9b9b9;
    }
  }

  & > a:hover {
    color: #b9b9b9;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;


// &[aria-current="page"] {
//   border-bottom-color: #fff;
// }