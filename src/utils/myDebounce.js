export const myDebounce = (value,delay)=>{
    let timer
    return (...args)=>{
        clearTimeout(timer)
        timer = setTimeout(() => {
            value.apply(this,args)                
        }, delay);
    }
}


