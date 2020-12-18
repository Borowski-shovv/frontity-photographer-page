import React, { useEffect, useState } from 'react';
import { connect, styled } from 'frontity';
import parse from 'html-react-parser';
import {GalleryWrapper} from './timelapse'
import CircularProgress from '@material-ui/core/CircularProgress';

const ComercialMoviesPage = ({ state, libraries }) => {
 
  const [data, setData] = useState({
    isReady: false,
    items: []
  });
  
  useEffect(() => {
    getMedia( libraries, state, setData);
  }, [])

  const youtubeMovies = data.isReady && data.items.map(({ type, id }) => state.source[type][id])

  let youtubeGetMovies = [];
  
  youtubeMovies && youtubeMovies.map(movie => {
      const movies =  movie.content.rendered 
      youtubeGetMovies.push(movies)
  });

  const nowatablica = [youtubeGetMovies];
   
    // console.log('poka co masz', nowatablica[0][0]);

    // console.log('typ tablicy', typeof(nowatablica[0][0]))
  let parseHtml = null;

    if(nowatablica[0][0] != undefined) {
        parseHtml = parse(nowatablica[0][0])
    }

  return (
    <>
        {data.items.length === 0 ? 

        <BackdropWrapper>
          <Indicator color="inherit" />
        </BackdropWrapper>

        :

      <GalleryWrapper>
        {parseHtml}
      </GalleryWrapper>}
    </>
  );
};

export default connect(ComercialMoviesPage)

const getMedia = async ( libraries, state, setData) => {

  // Get other images
  const response = await libraries.source.api.get({
    endpoint: "pages/315",

  });

  const entitiesAdded = await libraries.source.populate({ response, state });
  await setData({
    isReady: true,
    items: entitiesAdded
  });

};


const BackdropWrapper = styled.div`
background: black;
  opacity: 0.5;
  width: 100%;
  height: 100vh;
  position: relative;
  padding-top: 100px;
`;

const Indicator = styled(CircularProgress)`
height: 100px;
color: white;
position:relative;
left: 50%;
transfrom: translateX(-50%);

`;