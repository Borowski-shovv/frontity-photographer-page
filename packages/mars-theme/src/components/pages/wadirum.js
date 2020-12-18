import React, { useEffect, useState, useCallback, useLayoutEffect} from 'react';
import { connect, styled } from 'frontity';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import CircularProgress from '@material-ui/core/CircularProgress';

const WadirumPage = ({ state, libraries }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const [data, setData] = useState({
    isReady: false,
    items: []
  });
  
  useLayoutEffect(() => {
    getMedia( libraries, state, setData);
    console.log()
  }, [])

  const images = data.isReady && data.items.map(({ type, id }) => state.source[type][id])


  let imageLinks = [];
  let imageSmall = [];

   images && images.map(image => {
     imageLinks.push({
         src: image.media_details.sizes.full.source_url,
             width: 4,
            height: 3
       })
     });

     images && images.map(image => {
      imageSmall.push({
         src: image.media_details.sizes.medium.source_url,
         width: 4,
         height: 3
       })
  });

  

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

 

  return (
    <>
      {data.items.length === 0 ? 

<BackdropWrapper>
  <Indicator color="inherit" />
</BackdropWrapper>

:

<GalleryWrapper>
  <Gallery photos={imageSmall} onClick={openLightbox}/>
  <ModalGateway>
    {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={imageLinks.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>) 
            : null}
    </ModalGateway> 
  </GalleryWrapper>
  }
</>
  );
};

export default connect(WadirumPage)

const getMedia = async ( libraries, state, setData) => {

  // Get other images
  const response = await libraries.source.api.get({
    endpoint: "media",
    params: { 
        parent: "275",
        per_page: '100'
    }, 
  });

  const entitiesAdded = await libraries.source.populate({ response, state });
  await setData({
    isReady: true,
    items: entitiesAdded
  });

};

const GalleryWrapper = styled.div`
  max-width: 1500px;
  margin: 30px auto;
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