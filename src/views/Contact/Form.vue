<script setup>
import { ref } from 'vue';
import Api from '../../api/api.js';
import {useRouter} from "vue-router" 
const router = useRouter()

const postData = ref({
  email: '',
  name: '',
  message: '',
  type: '',
});
postData.value.type = router.currentRoute._value.path.startsWith('/guest_house') ? 'guest_house' : 'drop_in';

function handleSubmit() {
  Api.postContact(postData.value).then((data) => {
  console.log(data);
  postData.value = {}
});
}
</script>

<template>
  <div class="section">
    <h2 class="text-center text-xl font-bold py-16">お問い合わせ</h2>
    <form>
      <dl>
        <dd>
          <label for="subject">
            <span class="text-md font-bold">Eメールアドレス</span>
            <span class="text-sm pl-3">(こちらに返信いたします)</span>
          </label>
        </dd>
        <dt>
          <input
            id="email"
            v-model="postData.email"
            name="email"
            type="text"
            class="form-input w-full px-4 py-3 rounded border-slate-300"
          />
        </dt>
      </dl>
      <dl class="mt-10">
        <dd>
          <label for="name" class="text-md font-bold">お名前</label>
        </dd>
        <dt>
          <input
            id="name"
            v-model="postData.name"
            name="name"
            type="text"
            class="form-input w-full px-4 py-3 rounded border-slate-300"
          />
        </dt>
      </dl>
      <dl class="mt-10">
        <dd>
          <label for="message" class="text-md font-bold">お問い合わせ内容</label>
        </dd>
        <dt>
          <textarea
            id="message"
            v-model="postData.message"
            name="message"
            class="form-textarea w-full px-4 py-3 rounded border-slate-300" />
        </dt>
      </dl>
      <div class="flex justify-center">
        <div class="btn submitBtn w-fit bg-teal-600 text-white px-8 py-4 text-xl" @click="handleSubmit">送信する</div>
      </div>
      
    </form>
  </div>
</template>

<style lang="scss" scoped>
.submitBtn {

}
</style>