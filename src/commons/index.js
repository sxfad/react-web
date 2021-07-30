export function toLogin() {
    // TODO
    console.log('toLogin');
}

export function setToken(token) {
    if (typeof window !== 'undefined') window.sessionStorage.setItem('token', token);
}

export function getToken() {
    if (typeof window !== 'undefined') return window.sessionStorage.getItem('token');
}
