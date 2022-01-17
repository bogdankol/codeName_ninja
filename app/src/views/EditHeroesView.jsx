import React, {useState} from 'react';
import AddNewHeroForm from '../components/AddNewHeroForm';
import ChooseHeroToEdit from '../components/ChooseHeroToEdit';
import s from './EditHeroesView.module.css';


function EditHeroesView() {
    const [addHeroNeeded, setAddHeroNeeded] = useState('');
    const [firstBtnClasses, setFirstBtnClasses] = useState(s.btn)
    const [secondBtnClasses, setSecondBtnClasses] = useState(s.btn)

    return (
        <div>
            <div>
                <button type="button" className={firstBtnClasses} onClick={() => {
                    setAddHeroNeeded(true)
                    setFirstBtnClasses(s.active)
                    setSecondBtnClasses(s.btn)
                    }}>register new hero</button>
                <button type="button" className={secondBtnClasses} onClick={() => {
                    setAddHeroNeeded(false)
                    setFirstBtnClasses(s.btn)
                    setSecondBtnClasses(s.active)
                    }}>edit a hero</button>
            </div>
            {addHeroNeeded ? <AddNewHeroForm /> : <ChooseHeroToEdit />}
        </div>
    )
}

export default EditHeroesView
