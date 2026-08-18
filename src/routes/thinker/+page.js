import { getThinker } from "../../services";
import { thinkerStoreData } from "../../store/store";

export const load = async ({}) => {
    let thinkerData = null;
    await getThinker().then( result => {
        if (result && result.data && result.data.success) {
            thinkerData = result.data.success;
            thinkerStoreData.update( result => result = thinkerData)
        }
    })
    return {
        thinkerData
    };
};