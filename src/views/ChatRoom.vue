<template>
  <div class="flex flex-col justify-start items-end bg-gray-100 p-4 dark:bg-zinc-900 h-screen">
    <div class="w-full absolute  inline-flex flex-row-reverse bottom-4 right-2 xl:right-20 self-end">

      <button class="p-2 font-mono text-white rounded-full bg-red-500  shadow-md shadow-red-500 active:translate-y-1"
        @click="disconnect">
       Disconnect
      </button>
      <button
        class="p-2 text-white font-mono text rounded-full bg-green-600 mr-2 shadow-md shadow-green-600 active:translate-y-1"
        @click="connect">
       Connect
      </button>

    </div>
    <div class="w-full">
      <h1 class="text-xl p-2 font-arial font-semibold dark:text-white ">Bienvenido</h1>
    </div>

    <main
      class="bg-white rounded-md shadow shadow-slate-200 inline-block w-11/12 sm:w-4/5 md:w-5/6 lg:w-3/4 2xl:w-1/2 xl:w-1/2 h-3/4 overflow-y-auto p-1 self-center">
      <div class="chat">
        <ChatRoomHead :user="user" :connected="connected" />
        <ChatHistoryBody :received_messages="received_messages" />
      </div>
      <ChatRoomFooter v-model="msg" :sendMessage="sendMessage" />

    </main>
  </div>
</template>
<script setup>

import ChatHistoryBody from '@/components/chatHistory/ChatHistoryBody.vue';
import ChatRoomFooter from '@/components/chatHistory/ChatRoomFooter.vue';
import ChatRoomHead from '@/components/chatHistory/ChatRoomHead.vue';


import useChat from '@/composables/useChat';

const { user, connected, msg, received_messages, sendMessage, connect, disconnect } = useChat();

</script>
<style scoped>
.chat {
  height: 91%;
  max-height: 91%;
}
</style>