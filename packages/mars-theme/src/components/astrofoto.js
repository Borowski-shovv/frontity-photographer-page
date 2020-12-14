import React, { useEffect, useState, useCallback} from 'react';
import { connect, styled } from 'frontity';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const AstroPage = ({ state, libraries }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const [data, setData] = useState({
    isReady: false,
    items: []
  });
  
  useEffect(() => {
    getMedia( libraries, state, setData);
  }, [])

  const images = data.isReady && data.items.map(({ type, id }) => state.source[type][id])


  let imageLinks = [];

   images && images.map(image => {
     imageLinks.push({
         src: image.media_details.sizes.large.source_url,
             width: 4,
            height: 3
       })
     });

  console.log('zawartość tablicy imageLinks', imageLinks)

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
      <GalleryWrapper>
        <Gallery photos={imageLinks} onClick={openLightbox}/>
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
          </Modal>
        ) : null}
      </ModalGateway> 
    </GalleryWrapper>
    </>
  );
};

export default connect(AstroPage)

const getMedia = async ( libraries, state, setData) => {

  // Get other images
  const response = await libraries.source.api.get({
    endpoint: "media",
    params: { 
        parent: "43",
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
  margin: 0 auto;
`;