// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import {getHomeData} from "../services/index";
import { homeStoreData } from "../store/store";


export const load = async ({}) => {
    let homeData = null;
    await getHomeData().then( result => {
        if (result && result.data && result.data.success) {
            homeData = result.data.success;
            homeStoreData.update( result => result = homeData)
        }
    })
    return {
        homeData
    };
};