"use client";
import { useEffect, useState } from "react";
// import { Icon } from "@iconify/react";

export default function TopToBottom() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = document.getElementById("scrollButton");
      const scrollIcon = scrollButton.querySelector(".iconify");
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setShowButton(true);
        if (currentScrollTop > lastScrollTop) {
          // Scrolling down
          scrollIcon.setAttribute("data-icon", "mdi:arrow-down");
          setIsAtBottom(false);
        } else {
          // Scrolling up
          scrollIcon.setAttribute("data-icon", "mdi:arrow-up");
          setIsAtBottom(true);
        }
      } else {
        setShowButton(false);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); 

      // Clear any existing timeout and set a new one to hide the button after 2 seconds
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      const newTimeoutId = setTimeout(() => {
        setShowButton(false);
      }, 2000);
      setTimeoutId(newTimeoutId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastScrollTop, timeoutId]);

  const scrollToPosition = () => {
    const scrollIcon = document.querySelector("#scrollButton .iconify");
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      scrollIcon.setAttribute("data-icon", "mdi:arrow-down");
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      scrollIcon.setAttribute("data-icon", "mdi:arrow-up");
    }
    setIsAtBottom(!isAtBottom);
  };

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <button
          id="scrollButton"
          style={{
            ...styles.scrollButton,
            ...(showButton ? styles.show : styles.hide),
          }}
          onClick={scrollToPosition}
        >
          
          <span
            className="iconify"
            data-icon="mdi:arrow-down"
            data-inline="false"
            style={{ fontSize: "26px" }}
          ></span>
        </button>
      </main>

      <script src="https://code.iconify.design/2/2.0.3/iconify.min.js"></script>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
  },

  scrollButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    display: "none", // Initially hidden
    height: "50px",
    width: "50px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "100px",
    cursor: "pointer",
    transition: "opacity 0.3s, transform 0.3s",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "9999999999999999",
  },
  show: {
    display: "block", 
    opacity: "1", 
  },
  hide: {
    display: "none", 
    opacity: "0", 
  },
  iconify: {
    transition: "transform 0.3s",
  },
};
