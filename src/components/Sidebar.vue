<template lang="">
    <div class="my-10">
      <n-input
        type="text"
        size="large"
        placeholder="Search Component"
        :clearable="true"
        @input="filterBy"
      />
      <div class="grid grid-cols-2 gap-4 mt-8">
        <div
          class="bg-gray-200 p-4 rounded-md cursor-pointer hover:bg-gray-500"
          v-for="(item, index) in sideBarItems"
          :key="index"
          @click="addToTemplate(item)"
        >
          <Icon :icon="item.icon" style="font-size: 32px" class="mx-auto" />
          <h2 class="text-center mt-3 md:text-lg font-bold capitalize">
            {{ item.component }}
          </h2>
        </div>
      </div>

      <div
        class="flex justify-center absolute bottom-5 left-0 w-full px-5 gap-4"
      >
        <n-button size="large" @click="saveTemplate" type="info"
          >Save Template</n-button
        >
      </div>
    </div>
</template>
<script setup>
import { componentItems, templateRef, removeKeyValueFromArray,  } from "../utils";
import { Icon } from "@iconify/vue";
import { NInput, NButton, useNotification } from "naive-ui";
import { ref } from "vue";
import { filterArrayByKey } from "../utils";

let sideBarItems = ref(componentItems);

const filterBy = (e) => {
  sideBarItems.value = filterArrayByKey(componentItems, "component", e);
};
const emit = defineEmits(["close", "notice"]);

const addToTemplate = (item) => {
  let data = {};
  if (item.component == "paragraph") {
    data = {
      component: "paragraph",
      icon: "material-symbols:format-paragraph-rounded",
    };
  } else if (item.component == "title") {
    data = { component: "title", icon: "subway:title" };
  } else {
    data = { component: "image", icon: "teenyicons:image-outline" };
  }
  templateRef.value.body.push(data);
  emit("close");
  console.log;
};

const saveTemplate = () => {
  removeKeyValueFromArray(templateRef.value.body, "icon");
  console.log(templateRef.value);
  emit('notice', {message : 'done'})
};
</script>
