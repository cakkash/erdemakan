import { getDesignerData } from "../../../services";
import { designerStoreData } from "../../../store/store";

export const load = async ({}) => {
    let designerData = null;
    await getDesignerData().then( result => {
        if (result && result.data && result.data.success) {
            designerData = result.data.success;
            designerStoreData.update( result => result = designerData)
        }
    })
    return {
        designerData
    };
};