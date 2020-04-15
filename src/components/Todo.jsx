import React from 'react';

function Todo (props) {
    return (
        <li className="list-group-item d-flex align-items-center">
            <input type="checkbox" id={'t'+props.id} checked={props.tache.faite} onChange={() => props.onCheck(props.tache)} />{' '}
            <label htmlFor={'t'+props.id} className="mb-0 ml-1">{props.tache.intitule}</label>
    <button className="btn btn-danger ml-auto" onClick={() => props.onDelete(props.tache)}>Supprimer</button>
        </li>
    )
}

export default Todo;