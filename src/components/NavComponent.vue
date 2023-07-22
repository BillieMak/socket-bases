<template>
    <div class="flex justify-between items-center p-3 w-full bg-indigo-700 gap-3 ">
        <h2 class="text-gray-100 font-semibold tracking-widest ">ChatRoom</h2>
        <!-- <button class="bg-red-500 p-2 rounded-md shadow-md shadow-red-400/70">asd</button> -->
        <label class="switch scale-75">
            <input type="checkbox" @change="changeTheme" :checked="isDark">
            <span class="slider round"></span>
        </label>
    </div>
</template>
<script setup>
import { ref } from 'vue';


const isDark = ref(localStorage.theme === 'dark' ? true : false);

const changeTheme = () => {

    if (isDark.value) {
        document.documentElement.classList.remove('dark')
        isDark.value = false
        localStorage.theme = 'light'
    } else {
        localStorage.theme = 'dark'
        isDark.value = true
        document.documentElement.classList.add('dark')
    }
}
</script>
<style scoped>
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    filter: drop-shadow(0px 0px 2px rgba(240, 240, 240, 0.702));
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #10426c;
}

input:focus+.slider {
    box-shadow: 0 0 1px #10426c;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

</style>