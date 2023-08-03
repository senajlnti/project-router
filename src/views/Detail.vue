<template>
    <center>
    <h1>Detail {{ detail.nama }}</h1>
    <h4>Harga : {{ detail.harga }}</h4>
    {{ detail.deskripsi }}
</center>
</template>
<script>
import { Produk } from '@/assets/Produk'

export default {
    props: [
        "id_produk"
        
    ],
    setup(props)
    {
        const detail = Produk["Produk"].find(function(item){
            return item.id == props.id_produk;
        });
        
        return{
            detail
        }
    }
}
</script>