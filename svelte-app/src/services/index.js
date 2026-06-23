import { DATA_URL } from "../constans/urls";

// Bu fonksiyonlar SvelteKit'in load() fonksiyonundan gelen `fetch` parametresini
// kullanır. Bu fetch hem sunucu (SSR) hem de tarayıcı tarafında doğru çalışır;
// axios ile relative path kullanmak sunucu tarafında (SSR) hataya yol açar
// çünkü orada "geçerli sayfa" diye bir bağlam yoktur.
//
// Eski axios tabanlı koddan farkı: response.data yerine artık parsed JSON
// doğrudan dönüyor, response.data.success yerine direkt result.success kullanılıyor.

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
