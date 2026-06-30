// after installing server-only package, you can use server-only functions in client components, but they will throw an error if called on the client side. This is because server-only functions are meant to be executed on the server side only, and cannot be executed in the browser.
import "server-only";


export const serverSideFunction = ()=>{
    console.log(`
        use multiple libraries,
        use environment variables,
        interact with database,
        process confidential information,
        `);
        return "server side function result";
};



