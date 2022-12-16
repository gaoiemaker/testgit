<template>
  <!-- 国际化页面 -->
  <div>
    <span>通过切换语言按钮，来改变当前内容的语言</span>
    <button type="primary" @click="changeLang('en')">英文</button>
    <button type="primary" @click="changeLang('zhCN')">中文</button>
    <div>
      <span>{{ $t("messages.common['过去30天数据']") }}</span>
    </div>
  </div>
</template>
 
<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
 
const changeLang = (val) => {
  locale.value = val;
  localStorage.setItem("lang", val);
  // 
};
</script>
<style scoped lang='less'>
</style>