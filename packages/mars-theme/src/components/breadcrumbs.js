import React from 'react'
import { connect, styled } from 'frontity';
import Link from "./link";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function Breadcrumbs({state}) {
    // getting current page 
    const pageBreadCrumb = state.router.link;
    // deleting '/' on start and end;
    const newBreadCrumb = pageBreadCrumb.slice(1, -1);


    return (
        <>
        {pageBreadCrumb != '/' ? <BreadStartLink href="/">Start <ArrowRightIcon/></BreadStartLink> : null }
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
`;

const BreadStartLink = styled.a`
    height: 40px;

    & > svg {
        position: relative;
        top: 46%;
        transform: translateY(-50%);
    }
`;