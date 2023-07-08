<template>
  <div class="about">
    <h1>Chatroom</h1>
    <input type="text" placeholder="Enter your name" v-model="text">
    <button @click="sendMessage">Send</button>
  </div>
  <br>
  {{ connected }}
  <br>
  <button @click="connect">Connect</button>
  <button @click="disconnect">Disconnect</button>
  <div>
    <h2>history chat</h2>
    <div>
      <div v-for="msg in received_messages" :key="msg">{{ msg }}</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import SockJS from 'sockjs-client'
import Stomp from "webstomp-client";

const text = ref('');
const received_messages = ref([]);

let socket ;
let stompClient;

const connected = ref(false);


const connect = () => {
  socket = new SockJS('http://localhost:8080/chat');
  stompClient = Stomp.over(socket);
  stompClient.connect({}, frame => {
    connected.value = true;
    console.log('Connected ');
    console.log(frame);
    stompClient.subscribe('/topic/greetings', message => {
      console.log(message);
      received_messages.value.push(JSON.parse(message.body));
    })
  }, error => {
    console.log(error);
  });

}
const disconnect = () => {
  if (stompClient) {
    stompClient.disconnect();
  }
  connected.value = false;
}

const sendMessage = () => {
  if (stompClient && stompClient.connected) {
    const msg = { name: text.value };
    stompClient.send("/app/hello", JSON.stringify(msg), {});
    text.value = '';
  }
}

</script>
