import { getCollectionsData } from "../../../services";
import { collectionStoreData } from "../../../store/store";

export const load = async ({ params, fetch }) => {
    let collectionData = null;
    try {
        const result = await getCollectionsData(fetch);
        if (result && result.success) {
            collectionData = result.success[params.detail];
            collectionStoreData.update(r => r = collectionData);
        }
    } catch (e) { console.error("Collection data yüklenemedi:", e); }
    return { collectionData };
};
