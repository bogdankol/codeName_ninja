import React, {useState} from 'react';
import List from '../components/List';

function ListOfHeroesView() {

    return (
        <div>
            <h2>On this page you can observe created heroes.</h2>
            <List />
        </div>
    )
}

export default ListOfHeroesView
