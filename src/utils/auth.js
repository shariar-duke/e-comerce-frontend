export const authenticate = (token, cb) => {
    if (typeof window !== "undefined") {
        localStorage.setItem('jwt', JSON.stringify(token))
        cb()
    }
}

// authenticate name er ei function ta peramter hisebe ekta token nibe and ekta function input hisebe nibe
// if(typeof window !=="undefined")  etar mnae holo kaj gula sob browser theke kora hoitse naki ... jode browser theke hy tahle egula kaj hbe

// localStore.setItem('jwt', JSON.stringify(token)) // er mane holo jwt key er under a token ta rakhlam