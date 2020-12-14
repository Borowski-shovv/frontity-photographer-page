import React from 'react';
import { connect, styled } from 'frontity';

function PageTitle({state}) {
    // const data = state.source.get(state.router.link)
    // console.log("tytul", state.router.link)
    
    const pagetitle = state.router.link;
    const newtitle = pagetitle.slice(1, -1);
    // console.log('nowy tytul', newtitle)

    return (
     newtitle == 'wspolpraca' ? <Tytul>Współpraca</Tytul> : <Tytul>{newtitle}</Tytul> && 
     newtitle == 'gory' ? <Tytul>Góry</Tytul> : <Tytul>{newtitle}</Tytul>
    )           
}

export default connect(PageTitle);


const Tytul = styled.h1`
    text-transform: capitalize;
    color: #fff;
    margin-left: 24px;
`;