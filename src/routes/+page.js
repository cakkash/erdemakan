// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import {getHomeData} from "../services/index";
import { homeStoreData } from "../store/store";


export const load = async ({ fetch }) => {
    let homeData = null;
    try {
        const result = await getHomeData(fetch);
        if (result && result.success) {
            homeData = result.success;
            homeStoreData.update( result => result = homeData)
        }
    } catch (e) {
        console.error("Home data yüklenemedi:", e);
    }
    return {
        homeData
    };
};