import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import s from "./EditHeroForm.module.css";
import { nanoid } from "nanoid";
import LeftDiv from "../LeftDiv";

function EditHeroForm({ data, string }) {

  const [nickname, setNickname] = useState("");
  const [realName, setRealName] = useState("");
  const [originDescription, setOriginDescription] = useState("");
  const [superpowers, setSuperpowers] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [images, setImages] = useState(null);
  const [filteredImages, setFilteredImages] = useState(null);
  const formRef = useRef(null)

  useEffect(() => {
    setFilteredImages(data.images);
  }, []);

  const onDeleteImageHandler = async (e) => {
    const str = `${string}/deleteImage`;
    setFilteredImages(
      filteredImages.filter((el) => el.imageUrl !== e.currentTarget.dataset.src)
    );
    await axios.patch(str, {
      imageToDelete: { imageUrl: e.currentTarget.dataset.src },
    });
  };

  const reset = () => {
    setNickname('')
    setRealName('')
    setOriginDescription('')
    setSuperpowers('')
    setCatchPhrase('')
    formRef.current.reset()
}

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    if (images) data.append("images", images);
    if (nickname) data.append("nickname", nickname);
    if (realName) data.append("realName", realName);
    if (originDescription) data.append("originDescription", originDescription);
    if (catchPhrase) data.append("catchPhrase", catchPhrase);
    if (superpowers) data.append("superpowers", superpowers);

    try {
      const response = await axios.patch(string, data);
      console.log(response);
      alert('changes are accepted! Reload page to see them')
      
      return reset()
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={s.mainDiv}>

      <LeftDiv data={data} filteredImages={filteredImages} onDeleteImageHandler={onDeleteImageHandler}/>

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className={s.form}
        ref={formRef}>
        <label>choose new nickname of the hero</label>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.currentTarget.value)}
        ></input>

        <label>choose new realName of the hero</label>
        <input
          type="text"
          value={realName}
          onChange={(e) => setRealName(e.currentTarget.value)}
        ></input>

        <label>choose new origin of the hero</label>
        <input
          type="text"
          value={originDescription}
          onChange={(e) => setOriginDescription(e.currentTarget.value)}
        ></input>

        <label>choose new superpowers of the hero (this will rewrite existing superpowers)</label>
        <input
          type="text"
          value={superpowers}
          onChange={(e) => setSuperpowers(e.currentTarget.value)}
        ></input>

        <label>choose new catch phrase</label>
        <input
          type="text"
          value={catchPhrase}
          onChange={(e) => setCatchPhrase(e.currentTarget.value)}
        ></input>

        <label>choose an image to add to hero's profile</label>
        <input
          type="file"
          name="file"
          multiple
          onChange={(e) => setImages(e.target.files[0])}
        ></input>
        <button type="submit" className={s.submitBtn}>submit changes</button>
      </form>
    </div>
  );
}

export default EditHeroForm;
