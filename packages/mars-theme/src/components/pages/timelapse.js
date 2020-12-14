import React, { useEffect, useState, useCallback} from 'react';
import { connect, styled } from 'frontity';
import parse from 'html-react-parser';


const TimelapsePage = ({ state, libraries }) => {
 

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
   
    console.log('poka co masz', nowatablica[0][0]);

    console.log('typ tablicy', typeof(nowatablica[0][0]))
    let parseHtml = null;
    if(nowatablica[0][0] != undefined) {
        parseHtml = parse(nowatablica[0][0])
    }

  return (
    <>
        <GalleryWrapper>
          {parseHtml}
        </GalleryWrapper>
    </>
  );
};

export default connect(TimelapsePage)

const getMedia = async ( libraries, state, setData) => {

  // Get other images
  const response = await libraries.source.api.get({
    endpoint: "pages/25",

  });

  const entitiesAdded = await libraries.source.populate({ response, state });
  await setData({
    isReady: true,
    items: entitiesAdded
  });

};

export const GalleryWrapper = styled.div`
  margin: 30px auto;
  max-width: 1300px;
  display: grid;
  gap: 20px;
  grid-template-columns: 50% 50%;
  justify-content: center;
  position: relative;

  & > div {
    display: none;
  }

  & > figure > div {
    width: auto;
    height: auto ;
  }

   & > figure > div > iframe {
     position: relative;
     left: 50%;
     transform: translate(-50%);
   }

   @media (min-width: 769px) and (max-width: 1224px ){
    display: flex;
    flex-direction: column;
   }
  
  
  @media (min-width: 401px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 15px;

    & > figure > div > iframe {
      width: 100%;
    }
  } 

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding: 0 30px;
    gap: 10px;

    & > figure > div > iframe {
      width: 100%;
      height: auto;
    }
  }

`;
