<template>
    <center>
    <h1>{{ KategoriProduk.nama }}</h1>
    <div class="flex-container">
        <div v-for="produk in detail" :key="produk.id" class="card">
            <img :src="getImgSrc(produk.img)" alt="Category Image" />
            <router-link class="container" :to="{name: 'Detail', params:{ id_produk: produk.id}}">
              <h4> {{ produk.nama }}</h4>
            </router-link>
        </div>
    </div>
</center>
    </template>
<script>
import { Kategori } from '@/assets/Kategori'
import { Produk } from '@/assets/Produk'
export default {
    props: [
        "id_kategori"
    ],
    setup(props)
    {
        const KategoriProduk = Kategori["Kategori"].find(function(item){
            return item.id == props.id_kategori;
        });
        const detail = Produk["Produk"].filter(function(item){
            return item.id_kategori == props.id_kategori;
        });
        const getImgSrc = (imgFileName) => {
            return '../src/assets/img/' + imgFileName + '';
        }

       
        return{
            detail,
            KategoriProduk,
            getImgSrc
        }
    }
}
</script>
<style scoped>
.flex-container {
    display: flex;
    flex-wrap: wrap;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: 10px;
    min-width: 200px;
    cursor: pointer;
    text-align: center;
}
.card img{
    width: 100%;
    height: 200px;
    object-fit: cover;
}
.card:hover {
    box-shadow: 0 0px 16px 0 rgba(0,0,0,0.2);
}
.container {
    padding: 2px 16px;
}
</style>