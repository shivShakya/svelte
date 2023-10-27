<script>
       export let data ;
       const product = data.products;
</script>
<div>
    <h4>Product No. {product.id}</h4>
    <h2>{product.title} - {product.price}</h2>
    <h3>{product.description}</h3>
</div>
