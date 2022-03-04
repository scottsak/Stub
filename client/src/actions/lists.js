import {FETCH_ALL, CREATE, UPDATE, DELETE, ADD, REMOVE, EDIT} from '../constants/actionTypes';

import * as api from '../api/index.js';
import list from '../components/ListsFolder/List/List';

export const getLists = () => async(dispatch) => {
    try {
        const{data} = await api.fetchLists();
        dispatch({type: FETCH_ALL, payload: data})
    }
    catch(error){
        console.log('ACTIONS/LIST GETLISTS(): ' + error.message);
    }
}

export const createList = (list) => async(dispatch) => {
    try {
        const {data} = await api.createList(list);

        console.log(list.ownerID);
        dispatch({type: CREATE, payload: data});
    }
    catch(error){
        console.log('ACTIONS/LIST CREATELIST(): ' + error.message);
    }
}
//Created updatelist information within for the try
export const updateList = () => async(dispatch) => {
    try {
        const {data} = await api.updateList(list);
        console.log(list.ownerID);
        dispatch({type: UPDATE, payload: data});
    }
    catch(error) {
        console.log('ACTIONS/LIST UPDATELIST(): ' + error.message);
    }
}

export const addShow = () => async(dispatch) => {
    try {

    }
    catch(error) {
        console.log(error.message);
    }
}

export const removeShow = () => async(dispatch) => {
    try {

    }
    catch(error) {
        console.log(error.message);
    }
}

export const editName = () => async(dispatch) => {
    try {
        const {data} = await api.updateList(list);
        console.log(list.ownerID);
        dispatch({type: EDIT, payload: data});
    }
    catch(error) {
        console.log('ACTIONS/LIST EDITNAME(): ' + error.message);
    }
}

export const deleteList = (id) => async(dispatch) => {
    try {
        await api.deleteList(id);
        dispatch({type: REMOVE, payload: id});
    }
    catch(error) {
        console.log(error.message);
    }
}