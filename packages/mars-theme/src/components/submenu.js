import React from 'react';
import { connect, styled } from 'frontity';
import Link from './link';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


const SubMenuLinkWrapper = styled.div`
    padding: 10px 0px;
    color: #fff;
    height: 30px;
    display: flex;
    align-items: center;

    & > svg {
        display: none;
    }
    
    & > a:hover {
        color: #b9b9b9;
    }

    @media screen and (max-width: 560px) {
        display: flex;
        height: 30px;
        padding: 10px;

        & > svg {
            display: block;
        }
  }

`;

function Submenu({name, link}) {
    return (
        <SubMenuLinkWrapper>
            <ArrowRightIcon/><Link link={link}>{name}</Link>    
        </SubMenuLinkWrapper>
    )
}

export default Submenu
