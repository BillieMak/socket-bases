<template>
    <div v-for="{ user, msg } in received_messages" :key="user">
        <p class="p-3" :class="isCurrentUser(user) ? 'text-right' : 'text-left'">
            <span class="font-semibold">{{ isCurrentUser(user) ? 'me' : user + ' said' }}</span>: {{ msg }}
        </p>
    </div>
    <!-- {{ received_messages }} -->
</template>
<script setup>
import { toRefs } from 'vue';
import useChat from '@/composables/useChat';

// Define las propiedades directamente dentro del bloque <script setup>
const props = {
    received_messages: {
        type: Array,
        required: true
    }
};

const { received_messages } = toRefs(props);

const { isCurrentUser } = useChat();
</script>
