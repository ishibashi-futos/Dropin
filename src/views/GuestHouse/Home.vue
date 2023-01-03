<script setup>
import { ref } from 'vue'
import Api from '../../api/api.js'
import NewsList from '../../components/NewsList.vue'

const features = [
  { 
    imageUrl: '/images/GH/kv.jpg',
    title: "海まで徒歩10分"
  },
  { 
    imageUrl: '/images/GH/kv.jpg',
    title: "筋トレマシンあります"
  },
  { 
    imageUrl: '/images/GH/kv.jpg',
    title: "1日1組のみ"
  }
]
const facilities = [
  { 
    imageUrl: '/images/GH/kv.jpg',
    title: "宿泊ルーム",
    content: `宿泊用のお部屋は1つだけ（最大４名様）。
      疲れをゆっくり癒せるエママットレスのベッドを用意しています。
      `
  },
  { 
    imageUrl: '/images/GH/kv.jpg',
    title: "開発スペース",
    content: `階の開発スペースにはモニタも用意しています。
    （開発スペースには時期によって宿泊のお客様以外のお客様が使用されている場合があります）
      `
  },
  { 
    imageUrl: '/images/GH/kv.jpg',
    title: "筋トレルーム",
    content: `エンジニアには筋トレがつきもの。
      カラダとアタマを鍛えるための筋トレマシンのあるお部屋も自由にご利用いただけます。
      `
  },
  { 
    imageUrl: '/images/GH/kv.jpg',
    title: "バス＆アメニティ",
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
      <h2 class="text-center text-slate-700 text-2xl font-bold pt-16 sm:pb-16">施設案内</h2>
      <div class="facility">
        <div class="facility_content facility_content_01">
          <h3 class="font-bold text-teal-600 text-lg facility_title">宿泊ルーム</h3>
          <p class="text-base mt-4">
            宿泊用のお部屋は1つだけ（最大４名様）。<br>
            疲れをゆっくり癒せるエママットレスのベッドを用意しています。
          </p>
        </div>
        <img src="/images/GH/facility_01.jpg" class="facility_img"/>
      </div>
      <div class="facility">
        <div class="facility_content facility_content_02">
          <h3 class="font-bold text-white text-lg facility_title">宿泊ルーム</h3>
          <p class="text-white text-base mt-4">
            宿泊用のお部屋は1つだけ（最大４名様）。<br>
            疲れをゆっくり癒せるエママットレスのベッドを用意しています。
          </p>
        </div>
        <img src="/images/GH/facility_02.jpg" class="facility_img"/>
      </div>
      <div class="facility">
        <div class="facility_content facility_content_01">
          <h3 class="font-bold text-teal-600 text-lg facility_title">宿泊ルーム</h3>
          <p class="text-base mt-4">
            宿泊用のお部屋は1つだけ（最大４名様）。<br>
            疲れをゆっくり癒せるエママットレスのベッドを用意しています。
          </p>
        </div>
        <img src="/images/GH/facility_03.jpg" class="facility_img"/>
      </div>
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
    width: 120%;
    max-width: 120%;
    height: auto;
    @media (min-width: 640px) {
      width: 100%;
    }
  }
  &_content {
    padding: 35px 10%;
    width: 100%;
    z-index: 2;
    @media (min-width: 640px) {
      position: absolute;
      padding: 0 10%;
    }
    &_01 {
      background-color: rgba(255,255,255,.5);
      top: 80px;
      @media (min-width: 640px) {
        top: 70px;
        background-color: transparent;
      }
    }
    &_02 {
      background-color: rgba(0,0,0,.5);
      top: 80px;
      @media (min-width: 640px) {
        top: auto;
        bottom: 50px;
        background-color: transparent;
      }
    }
  }
  &_title {
    position: relative;
    &::after {
      content: '';
      display: block;
      width: 100%;
      border-bottom: solid 1px var(--primary);
      position: absolute;
      left: 30%;
      top: 50%;
    }
  }
}
</style>
