"use client";

import { useEffect, useState } from "react";
import ImagesItem from "./ImageItem";
import classes from "./ImagesContainer.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import Modal from "react-modal";
import Gallery from "./Gallery";
import { IoMdClose } from "react-icons/io";

export default function ImagesContainer(props) {
  const [showModal, setShowModal] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState("");
  const [folders, setFolders] = useState([]);

  console.log(props.folder);

  useEffect(() => {
    console.log("Fetching folders for:", props.folder);

    async function fetchFolders() {
      try {
        const response = await fetch(`/api/get_folders/${props.folder}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setFolders(data);
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    }

    fetchFolders();
  }, [props.folder]);

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
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
      <Slider {...carouselSettings} className={classes.slider}>
        {folders.map((folder) => (
          <ImagesItem
            key={folder}
            onClick={() => handleImageClick(folder)} // to jest poprawne
            src={`${props.folder}${folder}/${folder}.jpg`} // assuming each folder has a representative image with the same name as the folder
            text={folder.replace(/-/g, " ")} // converts hyphens to spaces for display
          />
        ))}
      </Slider>

      {/* Modal to display the gallery */}
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Gallery Modal"
        className={classes.modal}
        overlayClassName={classes.modalOverlay}
      >
        <div className={classes.modalContent}>
          <button onClick={closeModal} className={classes.closeButton}>
            <IoMdClose />
          </button>
          <h3>{selectedFolder}</h3>
          {selectedFolder && (
            <Gallery folder={`${props.folder}${selectedFolder}`} />
          )}
        </div>
      </Modal>
    </div>
  );
}
