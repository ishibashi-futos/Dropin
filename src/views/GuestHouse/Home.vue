<script setup>
import { ref } from 'vue'
import Api from '../../api/api.js'
import NewsList from '../../components/NewsList.vue'

const features = [
  { 
    imageUrl: '/images/GH/feature_01.jpg',
    title: "海まで徒歩10分"
  },
  { 
    imageUrl: '/images/GH/feature_02.jpg',
    title: "筋トレマシンあります"
  },
  { 
    imageUrl: '/images/GH/feature_03.jpg',
    title: "1日1組のみ"
  }
]
const facilities = [
  { 
    imageUrl: '/images/GH/facility_01.jpg',
    title: "宿泊ルーム",
    class: "facility_content_01",
    content: `宿泊用のお部屋は1つだけ（最大４名様）。
      疲れをゆっくり癒せるエママットレスのベッドを用意しています。
      `
  },
  { 
    imageUrl: '/images/GH/facility_02.jpg',
    title: "開発スペース",
    class: "facility_content_02",
    content: `2階の開発スペースにはモニタも用意しています。
    （開発スペースには時期によって宿泊のお客様以外のお客様が使用されている場合があります）
      `
  },
  { 
    imageUrl: '/images/GH/facility_03.jpg',
    title: "筋トレルーム",
    class: "facility_content_01",
    content: `エンジニアには筋トレがつきもの。
      カラダとアタマを鍛えるための筋トレマシンのあるお部屋も自由にご利用いただけます。
      `
  },
  { 
    imageUrl: '/images/GH/facility_04.jpg',
    title: "バス＆アメニティ",
    class: "facility_content_02",
    content: `宿泊ルームのある1階にお風呂とトイレがありますので、ご自由にご利用ください。
    `
  }
]
const news = ref([]);

Api.fetchNewsIndex('guest_house_top').then((data) => {
  news.value = data.contents;
});
</script>

<template>
  <main>
    <div class="kv">
      <div class="logo">
        <img src="/images/GH/Dropin_logo.png" class="logoImg"/>
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
          <p class="text-center font-bold text-teal-600 text-base">
            {{ feature.title }}
          </p>
          <img :src="feature.imageUrl" class="rounded-full aspect-square mt-5 md:p-2" />
        </li>
      </ul>
    </section>
    <section ic="facilities">
      <h2 class="text-slate-700 text-4xl text-center">ROOM</h2>
      <p class="text-base text-slate-700　text-center">施設案内</p>
      <ul class="sm:mt-16">
        <li v-for="(facility, index) in facilities" :key="index" class="facility mt-10">
          <div class="facility_content sm:w-6/12 md:w-5/12 lg:w-4/12 py-12 px-10" :class="facility.class">
            <h3 class="font-bold text-lg facility_title">{{ facility.title }}</h3>
            <p class="text-sm mt-4 whitespace-pre-line">
              {{ facility.content }}
            </p>
          </div>
          <img :src="facility.imageUrl" class="facility_img"/>
        </li>
      </ul>
    </section>
    <div class="section">
      <h2 class="text-center text-slate-700 text-2xl font-bold py-16">お知らせ</h2>
      <NewsList :newsList="news" :parentRoute="'guest_house'"/>
      <div class="flex justify-center mt-10">
        <a href="/guest_house/news" class="btn w-fit bg-teal-600 text-white px-6 py-3 text-sm">お知らせ一覧へ</a>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.kv {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  background-image: url('/images/GH/kv.jpg');
  height: 700px;
  background-attachment: fixed;
  background-size: 100%;
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
.facility {
  position: relative;
  overflow: hidden;
  width: 100%;
  &_img {
    width: 100%;
    height: auto;
    @media (min-width: 640px) {
      width: 100%;
    }
  }
  &_content {
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.8);
    @media (min-width: 640px) {
      position: absolute;
    }
    &_01 {
      @media (min-width: 640px) {
        left: 10%;
      }
    }
    &_02 {
      @media (min-width: 640px) {
        right: 10%;
      }
    }
  }
  &_title {
    position: relative;
    &::after {
      content: '';
      display: block;
      width: 80%;
      border-bottom: solid 1px black;
      position: absolute;
      left: 50%;
      top: 50%;
    }
  }
}
</style>
