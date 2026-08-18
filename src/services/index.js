import { DATA_URL } from "../constans/urls";

const getJson = async (fetchFn, path) => {
    const res = await fetchFn(`${DATA_URL}/${path}`);
    if (!res.ok) {
        throw new Error(`Veri çekilemedi: ${path} (HTTP ${res.status})`);
    }
    return res.json();
}

export const getThinker = (fetchFn) => getJson(fetchFn, "thinker.json");
export const getHomeData = (fetchFn) => getJson(fetchFn, "home.json");
export const getContactData = (fetchFn) => getJson(fetchFn, "contact.json");
export const getDesignerData = (fetchFn) => getJson(fetchFn, "theDesigner.json");
export const getCollectionsData = (fetchFn) => getJson(fetchFn, "collections.json");
export const getNomadData = (fetchFn) => getJson(fetchFn, "nomad.json");
