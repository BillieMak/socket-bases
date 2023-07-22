<template>
    <div class="pt-4">
        <input class="bg-gray-200 p-2 rounded-md shadow-md shadow-gray-300 outline-none mr-2" 
        type="text" v-model="name" @keypress.enter="join">
        <button @click="join" 
        class="p-2 bg-green-500 text-white font-semibold tracking-wide rounded-md shadow-sm shadow-green-500/95 active:translate-y-1">Ingresar</button>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const name = ref()

const router = useRouter()
const store = useStore()

const join = () => {
    store.commit('auth/setUser', name.value)
    router.push({ name: 'chat' })
}

</script>
