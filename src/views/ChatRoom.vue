<template>
  <div class="bg-gray-100 dark:bg-gray-800 h-screen">
    <div>
    <h1 class="text-lg p-2 font-arial font-semibold dark:text-white ">Chatroom User : {{ user?.name }} <span
        class="drop-shadow-md shadow-green-500"> {{ connected ? '🟢' : '🔴' }}</span></h1>
    <input type="text" class="bg-gray-100 p-2 shadow-sm shadow-gray-300 rounded-lg outline-none"
      placeholder="Write Something" v-model="text" @keypress.enter="sendMessage">
    <button
      class="p-2 text-white font-semibold tracking-wide ml-2  bg-green-500 shadow-sm shadow-green-500 rounded-lg active:translate-y-1"
      @click="sendMessage">Send</button>
  </div>
  <div class="mt-6">
    <button
      class="p-2 text-white font-semibold bg-green-600 mr-2 rounded-md shadow-md shadow-green-500 dark:shadow-green-600/70 active:translate-y-1"
      @click="connect">Connect</button>
    <button class="p-2 text-white font-semibold bg-red-500 rounded-md shadow-md shadow-red-400 dark:shadow-red-500/75 active:translate-y-1"
      @click="disconnect">Disconnect</button>
  </div>
  <div class="mt-6 bg-slate-200 rounded-xl shadow shadow-slate-200 inline-block w-2/4 h-80 overflow-y-auto">
    <h2 class="text-lg p-2 font-arial font-semibold ">history chat</h2>
    <ChatHistory :received_messages="received_messages" />
  </div>
  </div>
</template>
<script setup>

import ChatHistory from '@/components/ChatHistory.vue';

import useChat from '@/composables/useChat';

const { user, connected, text, sendMessage, received_messages, connect, disconnect } = useChat();

</script>
