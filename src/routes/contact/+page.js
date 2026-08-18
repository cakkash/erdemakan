import {getContactData} from "../../services/index";
import { contactStoreData } from "../../store/store";


export const load = async ({}) => {
    let contactData = null;
    await getContactData().then( result => {
        if (result && result.data && result.data.success) {
            contactData = result.data.success;
            contactStoreData.update( result => result = contactData)
        }
    })
    return {
        contactData
    };
};