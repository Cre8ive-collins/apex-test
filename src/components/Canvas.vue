<template lang="">
  <div
    class="flex items-center justify-center mt-5 border-2 border-dashed w-full overflow-auto rounded-md"
  >
    <div>
      <div v-if="!templateRef.body.length" class="m-10">
        <h2 class="text-center">No component added yet</h2>
        <h2 class="text-center">Select a component from the sidebar</h2>
      </div>
      <div
        v-else
        class="border-dashed border  rounded-md md:m-3 m-0 p-0 py-5 md:p-2 relative"
        v-for="(item, index) in templateRef.body"
        :key="index"
      >
        <Icon
          icon="subway:delete"
          style="color: red"
          class="mx-auto absolute top-0 -right-10 cursor-pointer"
          @click="templateRef.body.splice(index, 1)"
        />
        <div class="flex md:gap-4 gap-2 items-center">
          <div class="border md:w-28 w-20 py-3">
            <Icon :icon="item.icon" style="font-size: 32px" class="mx-auto" />
            <p class="font-bold capitalize text-center">{{ item.component }}</p>
          </div>
          <div>
            <n-input
              placeholder="Enter Image URL"
              v-if="item.component == 'image'"
              @input="updateImgUrl"
              @focus="setpointer(index)"
            />
            <n-input
              placeholder="Enter Text"
              @input="updateText"
              @focus="setpointer(index)"
              v-else
            />
            <div class="mx-auto mt-3">
              
                <div class="md:flex gap-3">
                    <div class="flex" v-if="item.component !== 'image'">
                      <div
                        :class="[
                          'p-2 border cursor-pointer',
                          i == templateRef.body[index].alignment && 'bg-green-500',
                        ]"
                        v-for="i in alignments"
                        :key="i"
                        @mouseenter="setpointer(index)"
                        @click="updateAlignment(i)"
                      >
                        {{ i }}
                      </div>
                    </div>
                    <div class="flex" v-if="item.component == 'title'">
                      <div
                        :class="[
                          'p-2 border cursor-pointer',
                          i == templateRef.body[index].size && 'bg-green-500',
                        ]"
                        v-for="i in titleVariant"
                        :key="i"
                        @mouseenter="setpointer(index)"
                        @click="setSize(i)"
                      >
                        {{ i }}
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { templateRef, alignments, titleVariant } from "../utils";
import { Icon } from "@iconify/vue";
import { NRadioGroup, NRadioButton, NInput } from "naive-ui";
import { ref } from "vue";

let pointer = ref();
const setpointer = (index) => {
  pointer.value = index;
};

const updateText = (e) => {
  templateRef.value.body[pointer.value].text = e;
};
const updateImgUrl = (e) => {
  templateRef.value.body[pointer.value].imageUrl = e;
};

const updateAlignment = (i) => {
  templateRef.value.body[pointer.value].alignment = i;
};
const setSize = (i) => {
  templateRef.value.body[pointer.value].size = i;
};
</script>
