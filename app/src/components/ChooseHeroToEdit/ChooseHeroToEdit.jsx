import React, {useState, useEffect} from 'react';
import axios from "axios";
import s from './ChooseHeroToEdit.module.css';
import EditHeroForm from '../EditHeroForm';

function ChooseHeroToEdit() {
    const [heroes, setHeroes] = useState(null)
    const [input, setInput] = useState('')
    const [hero, setHero] = useState('')
    const [string, setString] = useState(null)

    useEffect(() => {
        (async function() {
            const {data: {heroesList}} = await axios.get('http://localhost:5000/api/supers')
            setHeroes(heroesList)
        })()
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        const heroChecked = heroes.filter(hero => hero.nickname === input)
        if(heroChecked.length === 0) return alert('No hero with such nickname was found')
        setString(`http://localhost:5000/api/supers/${input}`)
        setHero(heroChecked[0])
    }

    return (
        <>
        <br />
        This page will help you to choose and change a hero data.

        <div className={s.div}>
            Write hero's nickname here:
            <form onSubmit={submitHandler}>
                <input type="text" value={input} onChange={ e => (setInput(e.currentTarget.value))}></input>
                <button type="submit">check hero avaibility</button>
            </form>
            {string && <EditHeroForm data={hero} string={string} />}
        </div>
        </>
    )
}

export default ChooseHeroToEdit
