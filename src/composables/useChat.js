import { computed, ref, watch } from 'vue';
import SockJS from 'sockjs-client'
import Stomp from "webstomp-client";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import audio from '@/assets/noti.mp3';


const useSocket = () => {

    const msg = ref('');
    const received_messages = ref([]);
    const store = useStore();
    const router = useRouter()

    let socket;
    let stompClient;

    const connected = ref(false);

    const user = computed(() => store.getters['auth/getUser']);

    // const currentUser = computed(() => store.getters['auth/getUser']);
    watch(user, () => {
        if (!user.value) {
            router.push({ name: 'login' })
        }
    });

    const connect = () => {
        socket = new SockJS('https://servechat-production.up.railway.app/chat');
        // socket = new SockJS('http://localhost:8080/chat');
        stompClient = Stomp.over(socket,{
            debug: false
        });


        stompClient.connect({}, () => {
            connected.value = true;
            
            stompClient.subscribe('/topic/greetings', message => {
                const usu = JSON.parse(message.body);
                if (usu && usu.user !== user.value.name) {
                    notification();
                }
                received_messages.value.push(usu);

            })
        }, error => {
            
            alert('Error: ' + JSON.stringify(error));
       
            connected.value = false;
        });

    }
    const disconnect = () => {
        if (stompClient) {
            stompClient.disconnect();
            store.commit('auth/logout');
        }
        connected.value = false;
    }

    const sendMessage = () => {

        if(msg.value === '') return

        if (stompClient && stompClient.connected) {
           stompClient.send("/app/hello", JSON.stringify({ user: user.value.name, msg: msg.value }), {});
           msg.value = '';
        }
    }

    const notification = () => {
        const sound = new Audio(audio);
        sound.play();
    }

    const isCurrentUser = computed(() => {
        return (name) => user.value?.name === name
    });

    return {
        msg,
        user,
        received_messages,
        connected,
        isCurrentUser,
        connect,
        disconnect,
        sendMessage,
        notification,
    }

}

export default useSocket