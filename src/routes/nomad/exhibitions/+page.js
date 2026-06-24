import {getNomadData} from "../../../services/index";
import { nomadStoreData } from "../../../store/store";


export const load = async ({ fetch }) => {
    let nomadData = null;
    try {
        const result = await getNomadData(fetch);
        if (result && result.success) {
            nomadData = result.success;
            nomadStoreData.update( result => result = nomadData)
        }
    } catch (e) {
        console.error("Nomad data yüklenemedi:", e);
    }
    return {
        nomadData
    };
};