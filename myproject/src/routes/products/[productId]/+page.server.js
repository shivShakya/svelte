import { error } from '@sveltejs/kit';
export const load = async (serverloadEvent) => {
     const { fetch , params } =  serverloadEvent;
     const {productId} = params;

     if(productId > 20){
            throw error('Product not found');
     }
     const response = await fetch(`http://localhost:4000/products/${productId}`);
     const products = await response.json();
     return {
          products
     }
}