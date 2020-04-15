import React from 'react';
import App from './App';
import { useState } from 'react';

function MultiApps(props) {

    const keys = Object.keys(localStorage);

    const[appList, setAppList] = useState(keys);

    function ajouter() {
        appList.push(Date.now());
        setAppList([...appList]);
    }

    return (
        <div>

            <h1 className="text-center">Todolist React</h1>
            <p className="text-center">Une todolist avec React JS</p>
            <button className="btn btn-info mb-3" onClick={ajouter}>Créer une liste</button>

            {appList.map(key => <App storageKey={key} key={key}/>)}
        
        </div>
    );
}

export default MultiApps;