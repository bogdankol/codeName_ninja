import React, {useEffect, useState} from 'react';
import axios from "axios";
import s from './List.module.css';
import Modal from '../Modal';

function List() {
    const [heroes, setHeroes] = useState(null)
    const [limit, setLimit] = useState(5)
    const [modalOpened, setModalOpened] = useState(false)
    const [data, setData] = useState(null)

    const onCloseModalWindow = () => {
        setModalOpened(false)
    }

    const onDetailsButtonHandler = (e, heroData) => {
        setModalOpened(true)
        setData(heroData)
    }

    useEffect(() => {
        (async function() {
            const {data: {heroesList}} = await axios.get('http://localhost:5000/api/supers')
            setHeroes(heroesList)
        })()
    }, [])

    return heroes ? (
        <div className={s.div}>
            <ul className={s.list}>
                {heroes.slice(0, limit).map(hero => {
                    return (
                    <li className={s.listItem} key={hero.nickname}>
                        <h3>{hero.nickname}</h3>
                        <div className={s.listInnerDiv}>
                        <img src={hero.images[0].imageUrl} alt={hero.nickname} className={s.img}/>
                        </div>
                        <button type="button" onClick={(async() => {
                            await axios.delete(`http://localhost:5000/api/supers/${hero.nickname}`)
                            setHeroes(prev => prev.filter(el => el.nickname != hero.nickname))
                            })}>delete hero
                        </button>
                        <button type="button" onClick={(e) => onDetailsButtonHandler(e, hero)}>Hreo details</button>
                    </li>
                    )
                })}
            </ul>
            <button className={s.btn} type="button" onClick={() => setLimit(prev => prev + 5)}>load more</button>
            {modalOpened && <Modal data={data} onCloseModalWindow={onCloseModalWindow}/>}
        </div>
    ) :  (
        <h3>gathering info about heroes (its quite a challenge because its a top secret data. wait a moment please...)</h3>
    )
}

export default List
