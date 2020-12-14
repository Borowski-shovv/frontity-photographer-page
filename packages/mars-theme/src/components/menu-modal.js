import React from "react";
import { styled, connect } from "frontity";
import Link from "./link";
import SubMenu from './submenu';


const MenuModal = ({ state }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;

  return (
    <>
      <MenuOverlay />
      <MenuContent as="nav">
        {isThereLinks &&
          menu.map(([name, link, submenuArr]) => (
          <>
            <MenuLink
              key={name}
              link={link}
              aria-current={state.router.link === link ? "page" : undefined}
            >
              {name}
            </MenuLink>
             {
              submenuArr.length > 0 ? submenuArr.map((subitem) => {
              return <SubMenu 
                key={subitem.name} 
                name={subitem.name} 
                link={subitem.href} 
              />
              }) : null
            }
          </>
          ))}
      </MenuContent>
    </>
  );
};

const MenuOverlay = styled.div`
  background-color: #000f30;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 3;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 20px;
  
  padding: 10px 0;

  &:hover,
  &:focus {
    color: #b9b9b9;
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: #eee;
    font-weight: bold;
    /* border-bottom: 4px solid yellow; */
  }
`;

export default connect(MenuModal);
