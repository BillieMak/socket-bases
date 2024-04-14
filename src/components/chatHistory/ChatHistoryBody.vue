<template>
    <div v-for="{ user, msg } in received_messages" :key="user" class="flex flex-col p-2">
        <div class="p-2 inline-block rounded-lg" :class="isCurrentUser(user) ? 'self-end bg-cyan-600' : 'self-start bg-gray-600'">
            <p class="text-white font-mono text-sm font-semibold">
                 {{ msg }}
            </p>
        </div>
    </div>
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
