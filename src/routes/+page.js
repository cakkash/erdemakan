import {getHomeData} from "../services/index";
import { homeStoreData } from "../store/store";

export const load = async ({ fetch }) => {
    let homeData = null;
    try {
        const result = await getHomeData(fetch);
        if (result && result.success) {
            homeData = result.success;
            homeStoreData.update(r => r = homeData);
        }
    } catch (e) { console.error("Home data yüklenemedi:", e); }
    return { homeData };
};
