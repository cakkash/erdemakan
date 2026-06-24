import { getThinker } from "../../services";
import { thinkerStoreData } from "../../store/store";

export const load = async ({ fetch }) => {
    let thinkerData = null;
    try {
        const result = await getThinker(fetch);
        if (result && result.success) {
            thinkerData = result.success;
            thinkerStoreData.update( result => result = thinkerData)
        }
    } catch (e) {
        console.error("Thinker data yüklenemedi:", e);
    }
    return {
        thinkerData
    };
};