import React from 'react'
import { connect, styled } from 'frontity';
import Link from "./link";
import ArrowRight from '../images/right-arrow.png'

function Breadcrumbs({state}) {
    // getting current page 
    const pageBreadCrumb = state.router.link;
    // deleting '/' on start and end;
    const newBreadCrumb = pageBreadCrumb.slice(1, -1);


    return (
        <>
        {pageBreadCrumb != '/' ? <BreadStartLink href="/">Start <img src={ArrowRight}/></BreadStartLink> : null }
        {
        newBreadCrumb == 'wspolpraca' ? <BreadLink href={pageBreadCrumb}>Współpraca</BreadLink> : <BreadLink href={pageBreadCrumb}>{newBreadCrumb}</BreadLink> && 
        newBreadCrumb == 'gory' ? <BreadLink href={pageBreadCrumb}>Góry</BreadLink> : <BreadLink href={pageBreadCrumb}>{newBreadCrumb }</BreadLink>
}
        </>
    )
}

export default connect(Breadcrumbs)

const BreadLink = styled.a`
    text-transform: capitalize;
    color: white;
    height: 40px;

`;

const BreadStartLink = styled.a`
    height: 40px;

    & > img {
        height: 10px;
        margin: 0 5px;
    }
`;