<template>
    <div
      class="md:flex justify-between w-screen h-screen overflow-auto bg-gray-50"
    >
      <div class="mobile">
        <n-drawer
          placement="left"
          class="bg-gray-700"
          v-model:show="showDrawer"
          :width="300"
        >
          <n-drawer-content closable>
            <Sidebar @close="closer" />
          </n-drawer-content>
        </n-drawer>
      </div>
      <div
        class="md:w-[350px] fixed md:block hidden w-0 top-0 h-screen bg-gray-700 px-3 py-10"
      >
        <Sidebar @notice="showNotice" />
      </div>
      <div class="flex w-screen">
        <div class="md:w-[480px] w-0"></div>
        <div class="w-full bg-none md:px-5 px-1">
          <h2
            @click="showDrawer = true"
            class="md:hidden absolute right-2 top-5"
          >
            <Icon icon="carbon:menu" style="font-size: 32px" />
            Menu
          </h2>
          <TemplateSetup />
          <Canvas />
        </div>
      </div>
    </div>
</template>
<script setup>
import Sidebar from "./components/Sidebar.vue";
import Canvas from "./components/Canvas.vue";
import TemplateSetup from "./components/TemplateSetup.vue";
import { NDrawer, NDrawerContent } from "naive-ui";
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import api from "./utils/api";
import { templateRef } from "./utils";

let showDrawer = ref(false);
const closer = () => {
  showDrawer.value = false;
};


const showNotice = ({ message }) => {
  console.log(message);
  let data = {
    "template": JSON.stringify({'template': templateRef.value})
}
  api.post('/template', data, {
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
  }).then(res => {
    window.alert(res.data.message)
    window.location.reload()
  }).catch(err => {
    console.log(err)
  })

};
</script>
