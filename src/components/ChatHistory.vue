<template>
    <div v-for="{ user, msg } in received_messages" :key="user">
        <p class="p-3" :class="isCurrentUser(user) ? 'text-right' : 'text-left'">
            <span class="font-semibold">{{ isCurrentUser(user) ? 'me' : user + ' said' }}</span>: {{ msg }}
        </p>
    </div>
    <!-- {{ received_messages }} -->
</template>

<script>
import { toRefs, defineComponent } from 'vue';
import useChat from '@/composables/useChat';

export default defineComponent({
    props: {
        received_messages: {
            type: Array,
            required: true
        }
    },
    setup(props) {
        const { received_messages: receivedMessages } = toRefs(props); // Renombramos la propiedad para evitar conflictos

        const { isCurrentUser } = useChat();

        return { receivedMessages, isCurrentUser }; // Devolvemos el objeto con el nuevo nombre de propiedad
    }
});
</script>
