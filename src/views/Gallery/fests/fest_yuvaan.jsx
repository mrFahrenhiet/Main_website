import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import axios from 'axios';


const YuvaanFest= () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [data,setData] = useState({})
  const [load,setLoad] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  useEffect(() => {
    document.body.classList.add("index-page")
    const fetchData = async () => {
      const result = await axios(
        'https://api.dtutimes.live/v1/gallery/yuvaan-2019-159',
      );
      setData(result.data);
      setLoad(true);
    };
    fetchData();
  }, []);
  const x = data.image_info
  const y = []
  console.log(typeof(x))
  
  if(load===true || !!x===true) {
    for(var i=0;i<x.length;i++) {
        y.push(x[i].url)
    }
    console.log(y)
  
  const photos = [
    {
      src: y[0],
      width: 4,
      height: 3,
    },
    {
      src: y[1],
      width: 1,
      height: 1
    },
    {
      src: y[2],
      width: 3,
      height: 4
    },
    {
        src: y[3],
        width: 4,
        height: 3,
      },
      {
        src: y[4],
        width: 1,
        height: 1
      },
      {
        src: y[5],
        width: 3,
        height: 4
      },
      {
        src: y[6],
        width: 4,
        height: 3,
      },
      {
        src: y[7],
        width: 1,
        height: 1
      },
      {
        src: y[8],
        width: 3,
        height: 4
      },
      {
        src: y[9],
        width: 4,
        height: 3,
      },
      {
        src: y[10],
        width: 1,
        height: 1
      },
      {
        src: y[11],
        width: 3,
        height: 4
      },
      {
        src: y[12],
        width: 4,
        height: 3,
      },
      {
        src: y[13],
        width: 1,
        height: 1
      },
      {
        src: y[14],
        width: 3,
        height: 4
      },
      {
        src: y[15],
        width: 4,
        height: 3,
      },
      {
        src: y[16],
        width: 1,
        height: 1
      },
      {
        src: y[17],
        width: 3,
        height: 4
      },
      {
        src: y[18],
        width: 4,
        height: 3,
      },
      {
        src: y[19],
        width: 1,
        height: 1
      },
      {
        src: y[20],
        width: 3,
        height: 4
      },
      {
        src: y[21],
        width: 4,
        height: 3,
      }
    ]
  return (
    <>
    <div className="container black">
      <h1 className="text-center" style={{marginTop:'100px'}}>{data.name}</h1>
      <h3 className="text-center">{data.biliner}</h3>
      <div className="galImg">
      <Gallery photos={photos} onClick={openLightbox} targetRowHeight={480}  margin={0} />
      </div>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
    </>
  );} else {
    return(<div>

      <p>Loadong...</p>
    </div>)
  }
}
export default YuvaanFest;