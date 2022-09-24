<script setup>
import { ref } from 'vue'
// import TheWelcome from '../components/TheWelcome.vue'
const features = ref([
  { 
    imageUrl: 'src/assets/images/kv.jpg',
    title: "海まで徒歩10分"
  },
  { 
    imageUrl: 'src/assets/images/kv.jpg',
    title: "筋トレマシンあります"
  },
  { 
    imageUrl: 'src/assets/images/kv.jpg',
    title: "1日1組のみ"
  }
])
const facilities = ref([
  { 
    imageUrl: 'src/assets/images/kv.jpg',
    title: "宿泊ルーム",
    content: `宿泊用のお部屋は1つだけ（最大４名様）。
      疲れをゆっくり癒せるエママットレスのベッドを用意しています。
      `
  },
  { 
    imageUrl: 'src/assets/images/kv.jpg',
    title: "開発スペース",
    content: `階の開発スペースにはモニタも用意しています。
    （開発スペースには時期によって宿泊のお客様以外のお客様が使用されている場合があります）
      `
  },
  { 
    imageUrl: 'src/assets/images/kv.jpg',
    title: "筋トレルーム",
    content: `エンジニアには筋トレがつきもの。
      カラダとアタマを鍛えるための筋トレマシンのあるお部屋も自由にご利用いただけます。

      `
  },
  { 
    imageUrl: 'src/assets/images/kv.jpg',
    title: "バス＆アメニティ",
    content: `宿泊ルームのある1階にお風呂とトイレがありますので、ご自由にご利用ください。
    `
  }
])
</script>

<template>
  <main>
    <div class="kv">
      <div class="logo">
        <img src="src/assets/images/Dropin_logo.png" class="logoImg"/>
        <h1 class="text-white text-base text-center">
          つくるひとのためのいえ
        </h1>
      </div>
    </div>
    <section class="section mt-10">
      <h2 class="text-2xl text-center font-bold">Drop inは、開発合宿・ワーケーション特化型ゲストハウスです</h2>
      <p class="text-base mt-10">
        何にも邪魔されず、目の前の作りたいものに没頭できる環境を目指しています。
        開発用の作業ルームで作業するもよし、宿泊ルームで作業するもよし。
        宿泊利用は1日1組様のためオンラインミーティングも可能です。(モニタやWiFiもご自由にご利用ください。）
      </p>
      <ul class="md:flex mt-20">
        <li v-for="(feature, index) in features" :key="index" 
          class="px-12 mt-12 sm:px-20 md:mt-0 md:flex-1 md:px-1">
          <p class="text-center font-bold text-green text-base">
            {{ feature.title }}
          </p>
          <img :src="feature.imageUrl" class="rounded-full aspect-square mt-5 md:p-2" />
        </li>
      </ul>
    </section>
    <section class="bg-slate-100">
      <div class="section mt-10">
        <h2 class="text-center text-xl font-bold py-16">施設案内</h2>
        <ul class="">
          <li v-for="(facility, index) in facilities" :key="index" 
            class="sm:flex mb-8">
            <img :src="facility.imageUrl" class="aspect-square facility_img" />
            <div class="sm:pl-8">
              <h3 class="font-bold text-green text-lg">
              {{ facility.title }}
              </h3>
              <p class="text-base mt-4">
                {{ facility.content }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.kv {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  background-image: url('../assets/images/kv.jpg');
  height: 700px;
  background-attachment: fixed;
  background-size: 100%;
  /* background-position: center; */
  padding: 0 10%;
  @media (max-width: 700px) {
    height: 500px;
  }
}
.logo {
  width: 300px;
  &Img {
    width: 100%;
  }
}
.facility_img {
  /* width: 40%; */
  @media (min-width: 640px) {
    width: 40%;
  }
}
</style>
