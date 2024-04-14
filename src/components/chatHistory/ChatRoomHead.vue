<template>
    <div class="border-b-2 border-gray-500">
        <h2 class="absolute text-lg p-3 font-arial font-semibold uppercase  text-start">history chat
            <v-icon name="bi-people-fill" />
        </h2>
        <h2 class=" text-lg p-3  font-arial font-semibold text-end">Usuario : {{ user?.name }} <span
                class="drop-shadow-md shadow-green-500"> {{ connected ? '🟢' : '🔴' }}</span></h2>
    </div>
</template>
<script setup>

import { defineProps, toRef } from 'vue';

const props = defineProps({
    user: Object,
    connected: Boolean
})

const user = toRef(props, 'user')
const connected = toRef(props, 'connected')

</script>
