import { ref } from "vue";

export const componentItems = [
    { component: 'paragraph', icon: 'material-symbols:format-paragraph-rounded', text : '' },
    { component: 'image', icon: 'teenyicons:image-outline', url : '' },
    { component: 'title', icon: 'subway:title', text : '' },
]

export const alignments = ['left', 'center', 'right']
export const titleVariant = ['H1', 'H2', 'H3']

export const filterArrayByKey = (array, key, value) => {
    return array.filter(item => item[key].startsWith(value));
}

export const templateRef = ref({
    subject: "",
    bannerImageUrl: "",
    showBannerImage : false,
    showSocialCampaign: true,
    body : []
})

export const removeKeyValueFromArray = (arr, key) => {
    arr.forEach(obj => {
      delete obj[key];
    });
  }