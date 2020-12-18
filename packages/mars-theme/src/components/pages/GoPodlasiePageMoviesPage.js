import React, { useEffect, useState } from 'react';
import { connect, styled } from 'frontity';
import parse from 'html-react-parser';
import {GalleryWrapper} from './timelapse'
import CircularProgress from '@material-ui/core/CircularProgress';


const GoPodlasiePage = ({ state, libraries }) => {
 
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
        <>
          <DescriptionWrapper>
            <DescriptionText>
              Film ukazujący piękno Podlasia z perspektywy możliwości jakie przestrzeń ta daje osobom aktywnym, poszukującym wyzwań, przygody, chcących realizować swoje pasje i rozwijać zainteresowania. Dzięki wykorzystaniu różnych technik filmowych oraz dynamicznych ujęć wyeksponowano te walory które decydują o ponadregionalnej i ponadczasowej atrakcyjności Podlasia. Miejsca dla ludzi twórczych, z pomysłami, pełnych pasji i energii. Niekomercyjny charakter projektu pozwolił na zbliżenie wielu społeczności uprawiających różne sporty. Udział w filmie wzięli bohaterowie prawdziwi, bez charakteryzacji, tu mieszkający i uzurpujący sobie prawo by Podlasie nazywać wspólnym domem. Poznaj ich historię.
            </DescriptionText>
          </DescriptionWrapper>
          <GalleryWrapper>
            {parseHtml}
          </GalleryWrapper>
        </>
      }
    </>
  );
};

export default connect(GoPodlasiePage)

const getMedia = async ( libraries, state, setData) => {

  // Get other images
  const response = await libraries.source.api.get({
    endpoint: "pages/320",

  });

  const entitiesAdded = await libraries.source.populate({ response, state });
  await setData({
    isReady: true,
    items: entitiesAdded
  });

};

const DescriptionWrapper  = styled.div`
  display: block !important;
  max-width: 1500px;
  margin: 50px auto;

  @media (max-width: 768px) {
    margin: 20px auto;
  
  }
`;

const DescriptionText = styled.p`
  color: #87949e;
  width: 70%;
  margin: 0 auto;
  text-align: center;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 21px;
  padding: 0 30px;


  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    padding: 0 15px;
  }
`;


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