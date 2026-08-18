import {getNomadData} from "../../../services/index";
import { nomadStoreData } from "../../../store/store";


export const load = async ({}) => {
    let nomadData = null;
    await getNomadData().then( result => {
        if (result && result.data && result.data.success) {
            nomadData = result.data.success;
            nomadStoreData.update( result => result = nomadData)
           
        }
    })
    return {
        nomadData
    };
};