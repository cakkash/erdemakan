import axios from "axios";
import { DATA_URL } from "../constans/urls";


export const getThinker = () => {
    return axios.get(`${DATA_URL}/thinker.json`)
}
export const getHomeData = () =>{
    return axios.get(`${DATA_URL}/home.json`)
}
export const getContactData = () =>{
    return axios.get(`${DATA_URL}/contact.json`)
}
export const getDesignerData = () =>{
    return axios.get(`${DATA_URL}/theDesigner.json`)
}
export const getCollectionsData = () =>{
    return axios.get(`${DATA_URL}/collections.json`)
}
export const getNomadData = () =>{
    return axios.get(`${DATA_URL}/nomad.json`)
}
