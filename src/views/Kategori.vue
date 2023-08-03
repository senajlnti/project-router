<template>
    <center>
    <h1>Kategori</h1>
    <div class="flex-container">
        <div v-for="kategori in state" :key="kategori.id" class="card">
            <router-link class="container" :to="{name: 'KategoriProduk', params:{ id_kategori: kategori.id}}">
              <h4> {{ kategori.nama }}</h4>
            </router-link>
        </div>
    </div>
</center>
</template>
<script>
import { onMounted, reactive } from 'vue';
import { Kategori } from '@/assets/Kategori';



export default {
    setup(props, context)
    {
        const state = reactive(Kategori["Kategori"]);
       
        onMounted(() =>{
            context.emit("id-menu", 5);
        });

        return {
            state,
            
            
        }
    }
}
</script>
<style scoped>
.flex-container {
    display: grid;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: 10px;
    min-width: 200px;
    cursor: pointer;
    text-align: center;
}

.card:hover {
    box-shadow: 0 0px 16px 0 rgba(0,0,0,0.2);
}
.container {
    padding: 2px 16px;
}
</style>