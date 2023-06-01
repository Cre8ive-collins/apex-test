<template lang="">
  <div class="w-full shadow-md border mt-5 p-3">
      <h2 class="text-lg mb-8">Template Configuration</h2>
    <p class="mb-3">Email Subject</p>
    <n-input
      v-model:value="templateRef.subject"
      type="text"
      placeholder="Email Subject"
    />
    <div class="flex  items-center mt-5 gap-5">
        <div class="w-1/2">
          <span class="mr-4">Show social campaign</span>
          <n-switch size="large" :checked-value="true" :value="templateRef.showSocialCampaign" @update:value="setshowSocialCampaign" />
      </div>
      <div class="w-1/2">
          <span class="mr-4">Show Banner Image</span>
          <n-switch size="large" :checked-value="true" :value="templateRef.showBannerImage" @update:value="setshowBannerImage" />
      </div>
     
    </div>
    <div class="w-full mt-5" v-if="templateRef.showBannerImage">
      <p class="mb-3">Banner image url </p>
  <n-input
    v-model:value="templateRef.bannerImageUrl"
    type="text"
    placeholder="Banner image url"
  />
    </div>
  </div>
</template>

<script setup>
import { NInput, NSwitch, NButton } from "naive-ui";
import { templateRef } from "../utils";

const setshowBannerImage = (e) => {
    templateRef.value.showBannerImage = e
}
const setshowSocialCampaign = (e) => {
    templateRef.value.showSocialCampaign = e
}
</script>
