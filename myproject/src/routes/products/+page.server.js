export const load = async (serverloadEvent) => {
    const { fetch } =  serverloadEvent;
     const title = "List of Avilable products";
     console.log('page.server.js');
     const response = await fetch("http://localhost:4000/products");
     const products = await response.json();
     return {
          title,
          products
     }
}