import { getCollectionsData } from "../../../services";
import { collectionStoreData } from "../../../store/store";

export const load = async ({params}) => {
    let collectionData = null;
    await getCollectionsData().then( result => {
        if(result && result.data && result.data.success){
            collectionData = result.data.success[params.detail];
            collectionStoreData.update(result =>  result = collectionData)
        }
    })
    return {
        collectionData
    };
};