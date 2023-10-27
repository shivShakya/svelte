<script>
      import {goto} from '$app/navigation';
      export let data ;
      const products = data.products;

      function handleClick(id){
           goto(`products/${id}`)
      }
</script>
<h1>{data.title}</h1>
{#each products as product }
<div>
    <h3><b>{product.title}</b></h3>
    <p>{product.description}</p>
    <button on:click={()=>handleClick(product.id)}>Get Details</button>
    <hr>
</div>
{/each}