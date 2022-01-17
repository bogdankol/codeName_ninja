import React, {useState, useRef} from 'react';
import axios from 'axios';
import s from './AddNewHeroForm.module.css';

function AddNewHeroForm() {
    const [nickname, setNickname] = useState('');
    const [realName, setRealName] = useState('');
    const [originDescription, setOriginDescription] = useState('');
    const [superpowers, setSuperpowers] = useState('');
    const [catchPhrase, setCatchPhrase] = useState('');
    const [images, setImages] = useState(null);
    const nicknameRef = useRef(null)
    const realNameRef = useRef(null)
    const originDescriptionRef = useRef(null)
    const superpowersRef = useRef(null)
    const catchPhraseRef = useRef(null)

    const validationData = (data, refs) => {
        if(!data.nickname) return refs.nicknameRef.current.focus()
        if(!data.realName) return refs.realNameRef.current.focus()
        if(!data.originDescription) return refs.originDescriptionRef.current.focus()
        if(!data.superpowers) return refs.superpowersRef.current.focus()
        if(!data.catchPhrase) return refs.catchPhraseRef.current.focus()
        if(!data.images) return alert('choose a heroic image of the heroic hero')
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const dataToValidate = {
            nickname, realName, originDescription, catchPhrase, superpowers, images
        }
        const refs = {
            nicknameRef,realNameRef, originDescriptionRef, superpowersRef, catchPhraseRef
        }
        const validationResult = validationData(dataToValidate, refs)

        if(!validationResult) return

        const data = new FormData()
        data.append("images", images)
        data.append("nickname", nickname)
        data.append("realName", realName)
        data.append("originDescription", originDescription)
        data.append("catchPhrase", catchPhrase)
        data.append("superpowers", superpowers)

        try {
            await axios.post("http://localhost:5000/api/supers", data)
            alert('Hero has been created! You can see it in *Heroes* page')
        } catch(err) {
            console.log(err.message)
            alert(err.message)
        }
    }
    return (
        <>
        <br />
        This form will help you to create a new superhero.
        <div className={s.mainDiv}>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className={s.form}>
                <label>Choose hero's nickname</label>
                <input type="text" ref={nicknameRef} value={nickname} onChange={(e) => setNickname(e.currentTarget.value)}></input>
                <label>Choose hero's real name</label>
                <input type="text" ref={realNameRef} value={realName} onChange={(e) => setRealName(e.currentTarget.value)}></input>
                <label>Create hero's origin story</label>
                <input type="text" ref={originDescriptionRef} value={originDescription} onChange={(e) => setOriginDescription(e.currentTarget.value)}></input>
                <label>Choose some powers for hero</label>
                <input type="text" ref={superpowersRef} value={superpowers} onChange={(e) => setSuperpowers(e.currentTarget.value)}></input>
                <label>Choose catch phrase</label>
                <input type="text" ref={catchPhraseRef} value={catchPhrase} onChange={(e) => setCatchPhrase(e.currentTarget.value)}></input>
                <label>Download an image of hero</label>
                <input type="file" name="file" multiple onChange={(e) => setImages(e.target.files[0])}></input>
                <button type="submit" className={s.btn}>submit</button>
            </form>
        </div>
        </>
    )
}

export default AddNewHeroForm;