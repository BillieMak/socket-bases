<template>
    <div class="chat overflow-y-auto scroll-smooth" ref="chatContainer" id="chat">
        <div class="flex flex-col p-2  gap-2">
            <div ref="chatContainer" v-for="message in received_messages" :key="message.id"
                :class="getMessageClass(message)">
                <p class="text-white font-mono text-sm font-semibold text-start">{{ message.msg }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { toRefs, defineProps, watch, ref } from 'vue';
import useChat from '@/composables/useChat';

const props = defineProps({
    received_messages: Array
})

const { received_messages } = toRefs(props)
const { isCurrentUser } = useChat();

const chatContainer = ref(null)

watch(received_messages.value, () => {
    chatContainer.value.scroll(0, chatContainer.value.scrollHeight);
})


const getMessageClass = (message) => ({
    'p-2 inline-block rounded-lg': true,
    'self-end bg-cyan-600': isCurrentUser.value(message.user),
    'self-start bg-gray-600': !isCurrentUser.value(message.user),
});
</script>

<style scoped>
.chat {
    height: 84%;
    max-height: 84%;
}
</style>