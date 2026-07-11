import "client-only"

export const clientSideFunction = ()=>{
    console.log(
        `use window object, use localstorage, use document object, use browser APIs, use client side libraries, use client side routing, use client side state management, use client side event listeners`
    );
    return "client side function result";
}