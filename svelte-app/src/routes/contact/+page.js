import {getContactData} from "../../services/index";
import { contactStoreData } from "../../store/store";


export const load = async ({ fetch }) => {
    let contactData = null;
    try {
        const result = await getContactData(fetch);
        if (result && result.success) {
            contactData = result.success;
            contactStoreData.update( result => result = contactData)
        }
    } catch (e) {
        console.error("Contact data yüklenemedi:", e);
    }
    return {
        contactData
    };
};