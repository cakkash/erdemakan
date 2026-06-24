import { getDesignerData } from "../../../services";
import { designerStoreData } from "../../../store/store";

export const load = async ({ fetch }) => {
    let designerData = null;
    try {
        const result = await getDesignerData(fetch);
        if (result && result.success) {
            designerData = result.success;
            designerStoreData.update( result => result = designerData)
        }
    } catch (e) {
        console.error("Designer data yüklenemedi:", e);
    }
    return {
        designerData
    };
};