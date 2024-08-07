import { jwtDecode } from "jwt-decode"; // jwt_decode package install kroa hoilo.

export const authenticate = (token, cb) => {
    if (typeof window !== "undefined") {
        localStorage.setItem('jwt', JSON.stringify(token));
        cb();
    }
}

// authenticate name er ei function ta peramter hisebe ekta token nibe and ekta function input hisebe nibe
// if(typeof window !=="undefined")  etar mnae holo kaj gula sob browser theke kora hoitse naki ... jode browser theke hy tahle egula kaj hbe

// localStore.setItem('jwt', JSON.stringify(token)) // er mane holo jwt key er under a token ta rakhlam

// ekhn ekta function lekhbo authentication er jnno ...

export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
    }

    else if (localStorage.getItem('jwt')) {
        const { exp } = jwtDecode(JSON.parse(localStorage.getItem('jwt')));
        return (new Date()).getTime() < exp * 1000;
    }
    else return false;
}

// now function to get user Data 

export const userInfo = () => {
    const jwt = JSON.parse(localStorage.getItem('jwt'));
    const decoded = jwtDecode(jwt);

    return {
        ...decoded, token: jwt
    }
}

// return hisebe decode howa information gula as well as token tao send kroe dbo...

// now I will write the signOut function 

export const signOut = (cb) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem('jwt');
        cb();
    }
}
