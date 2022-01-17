import React, { useEffect, useState } from "react";
import s from "./Modal.module.css";
import { createPortal } from "react-dom";
import { nanoid } from "nanoid";
import axios from "axios";

const modalRoot = document.querySelector("#modal-root");
function Modal({ data, onCloseModalWindow }) {
  const [filteredImages, setFilteredImages] = useState(null);

  useEffect(() => {
    setFilteredImages(data.images);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onCloseModalWindow(e);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onCloseModalWindow(e);
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <h3 className={s.nickname}>{data.nickname}</h3>
        <ul className={s.list}>
          {filteredImages &&
            filteredImages.map((image) => {
              return (
                <li key={nanoid()} className={s.listItem}>
                  <img
                    src={image.imageUrl}
                    alt={image.nickname}
                    className={s.listItemImage}
                  ></img>
                </li>
              );
            })}
        </ul>
        <p>Real name: {data.realName}</p>
        <p>Catch phrase: {data.catchPhrase}</p>
        <p>Origin: {data.originDescription}</p>
        <p>superpowers: {data.superpowers}</p>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
