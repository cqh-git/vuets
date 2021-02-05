import Cookies from "js-cookie";

const token = "ggggggggggggg";

export function setToken(v: string) {
    // const inFifteenMinutes = new Date(new Date().getTime() + 1 * 60 * 1000);
    const inFifteenMinutes = 1;
    return Cookies.set(token, v, {expires: inFifteenMinutes,path: '/'})
}

export function setUuid(v: string) {
    return Cookies.set('uuid', v)
}

export function getToken() {
    return Cookies.get(token)
}

export function clearData() {
    Cookies.remove(token)
    Cookies.remove('uuid')
    Object.keys(localStorage).forEach((item: string) => {
        if (item !== 'theme_color') localStorage.removeItem(item)
    })
}

export function setSelectMenu(val: any) {
    return localStorage.setItem('selectMenu', val)
}

export function getSelectMenu() {
    return localStorage.getItem('selectMenu')
}
