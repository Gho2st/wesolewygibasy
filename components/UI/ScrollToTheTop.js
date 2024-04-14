'use client'
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import classes from './StyleToTopButton.module.css';
import { useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Show the button when scrolling down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button className={classes.scrollToTopButton} onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
