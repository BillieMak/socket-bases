<template>
    <div class="w-full border-t-2 border-gray-400 flex p-2">
        <input type="text" class="bg-white p-2 outline-none w-full" placeholder="Write Something" v-model="msg"
            @keypress.enter="sendMessage">
        <button class="p-2 text-white font-semibold tracking-wide bg-cyan-500 btn-send w-10 h-10 rounded-full shadow-sm shadow-cyan-400"
            @click="sendMessage">
            <v-icon name="io-send" />
        </button>
    </div>
</template>
<script setup>

import { toRef, defineProps, defineModel } from 'vue';


const props = defineProps({
    sendMessage: Function
})

const msg = defineModel()

const sendMessage = toRef(props, 'sendMessage').value
</script>
