export function getFromStorage(key){
    if(!key){
        return null;
    }
    

    try {
        const value = localStorage.getItem(key);
        if(value){
            return JSON.parse(value);
        }
        return null;
    }
    catch(_){
        return null;
    }
}
export function setInStorage(key, val){
    if(!key){
        return;
    }
    try {
        localStorage.setItem(key, JSON.stringify(val));
    }
    catch(err){
        return;
    }
}