"use client";
import React, { useEffect, useState } from "react";
import ImagesItem from "./ImageItem";
import classes from "./ImagesContainer.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import Modal from "react-modal";
import Gallery from "./Gallery";
import { IoMdClose } from "react-icons/io";

function normalizeText(text) {
  return text.normalize("NFC");
}

export default function ImagesContainer(props) {
  const [showModal, setShowModal] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState("");
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFolders() {
      try {
        const response = await fetch(`/api/get_folders_aws/${props.folder}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFolders(data);
      } catch (error) {
        console.error("Error fetching folders:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchFolders();
  }, [props.folder]);

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 250,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    initialSlide: 0,
    nextArrow: (
      <div>
        <div className={classes.rightArrow}>
          <IoIosArrowForward />
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className={classes.rotate}>
          <IoIosArrowForward />
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleImageClick = (folder) => {
    setSelectedFolder(folder);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedFolder("");
  };

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h2>Galeria z wydarzeń</h2>
        <p className={classes.galleryText}>
          Przekonajcie się sami, jak radośnie i twórczo spędzają czas Wasze
          maluszki w naszym żłobku <span>Wesołe Wygibasy</span> w Krakowie.
          <br />
          Zapraszamy do obejrzenia tych pięknych chwil, które pokazują miłość,
          radość i rozwój naszych dzieci. <br />
          Zdjęcia ukazują różnorodne wydarzenia i chwile z życia maluszków w
          naszej placówce.
        </p>
      </div>
      {loading && <p>Wczytywanie galerii zdjęć...</p>}
      {error && <p>Wystąpił błąd przy wczytywaniu galerii.</p>}
      {!loading && !error && (
        <Slider {...carouselSettings} className={classes.slider}>
          {folders.map((folder) => (
            <ImagesItem
              key={folder.folderName}
              onClick={() => handleImageClick(folder.folderName)}
              src={folder.imageUrl}
              text={normalizeText(folder.folderName)}
              alt={folder.folderName}
            />
          ))}
        </Slider>
      )}

      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Gallery Modal"
        className={classes.modal}
        overlayClassName={classes.modalOverlay}
        ariaHideApp={false}
      >
        <div className={classes.modalContent}>
          <button onClick={closeModal} className={classes.closeButton}>
            <IoMdClose />
          </button>
          <h3>{normalizeText(selectedFolder)}</h3>
          {selectedFolder && (
            <Gallery folder={`${props.folder}/${selectedFolder}`} />
          )}
        </div>
      </Modal>
    </div>
  );
}
