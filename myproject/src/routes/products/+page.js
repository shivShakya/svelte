export const load = async (loadEvent) => {
       const { fetch } =  loadEvent;
        const title = "List of Avilable products";
        console.log('page.js');
        const response = await fetch("http://localhost:4000/products");
        const products = await response.json();
        return {
             title,
             products
        }
}

export const ssr = true;
 export const csr  = true;