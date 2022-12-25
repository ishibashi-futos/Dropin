<script setup>
import { ref } from 'vue'
import Api from '../../api/api.js'
import NewsList from '../../components/NewsList.vue'

const examples = ref([
  { 
    imageUrl: 'src/assets/images/main/Dropin_ex01.png',
    title: "コスプレ服作りたい！"
  },
  { 
    imageUrl: 'src/assets/images/main/Dropin_ex02.png',
    title: "バンド組みたい！"
  },
  { 
    imageUrl: 'src/assets/images/main/Dropin_ex03.png',
    title: "アプリ開発したい！"
  }
])

const whatWeCanDo = ref([
  { 
    title: "やりたいこと応援",
    content: "やってみたいことがあれば全力でお手伝いしたり一緒にやったりします！（コスプレ衣装つくりたいとか、コンサートやりたいとか、絵を描きたいとか、アプリ作りたいとかなんでも！）"
  },
  { 
    title: "もくもく作業OK",
    content: "勉強・読書・ゲームなどひたすらやってたい！という方もどうぞ好きなだけどうぞ！（本やゲームはご自身のものをお持ちください）"
  },
  { 
    title: "プログラミング学習",
    content: "プログラミング学習アプリを無料で学習できます。運営者はエンジニアなのでおお手伝いできます。"
  },
])

const news = ref([]);

Api.fetchNews().then((data) => {
  news.value = data.contents;
});
</script>

<template>
  <main>
    <div class="kv">
      <div class="kv_inner">
        <div class="kv_title">
          <h1 class="font-pixel kv_title_main text-white">不登校はフリーランス</h1>
          <p class="font-pixel kv_title_sub text-white mt-5">学校に行かずに楽しく過ごしてますが何か!?</p>
        </div>
        <div class="logo">
          <img src="src/assets/images/main/Dropin_logo_w.png" />
        </div>
      </div>
    </div>
    <img src="src/assets/images/main/Dropin_logo_color.png" class="pt-5 logoImg"/>
    <p class="font-pixel text-center mt-5">てなに?</p>
    <img src="src/assets/images/main/sky_border.png" class="mt-10"/>
    <div class="sky">
      <section class="section pt-10">
        <p class="text-base text-center">陰キャ・元陰キャ専用。学校に行ってない時間を楽しい時間に変える</p>
        <h2 class="text-2xl text-center font-bold">学校だけじゃない選択肢を見つける場所</h2>
        <ul class="md:flex mt-20 pb-20">
          <li v-for="(exe, index) in examples" :key="index" 
            class="px-6 mt-12 pb-12 sm:px-20 md:mt-0 md:flex-1 md:px-1 exmaple_item">
            <p class="text-center text-slate-700 font-bold text-base">たとえば</p>
            <p class="text-center text-slate-700 font-bold text-lg">
              {{ exe.title }}
            </p>
            <img :src="exe.imageUrl" class="md:p-2" />
            <p class="text-center text-slate-700 font-bold text-base">とか</p>
          </li>
        </ul>
        <div class="mt-30">
          <p class="text-base text-center">知恵を絞って実現する方法を考えて</p>
          <p class="text-3xl text-center font-bold">一緒に挑戦します！</p>
        </div>
      </section>
      <img src="src/assets/images/main/Dropin_ground.png" class="sky_ground"/>
    </div>
    <section class="section pt-20">
      <h2 class="font-pixel text-slate-500 text-4xl text-center">CONCEPT</h2>
      <p class="text-base text-slate-500　text-center">何のための場所なの？</p>
      <div class="mt-12">
        <p>刹那的な意味ではなく、今楽しいことが一番大事。</p>
        <p>なんのために学校に行くのか？それは将来のために今我慢して、将来幸せになろう！という側面があると思います。</p>
        <p>でも将来の幸せって、なんだかわからないままのひとが多いはず。</p>
        <p>そのよくわからない将来の幸せのために、今を犠牲にするのって結構リスキーかもしれない。</p>
        <p>
          今楽しいと思うことをやって、「私ってこういう時に幸せを感じるんだな」ってわかれば、その幸せ時間を作るための努力はきっと楽しくなるはず。
          そして人生の中の多くの時間が「楽しい」時間になるのが幸せってことなのではないか思ってます。
        </p>
      </div>
    </section>
    <div class="bg_dropin-green">
      <div class="section">
        <h2 class="font-pixel text-white text-4xl text-center">WHAT</h2>
        <p class="text-base text-white　text-center">何ができるの？</p>
        <ul class="md:flex mt-20">
          <li v-for="(item, index) in whatWeCanDo" :key="index" 
            class="px-6 mt-12 sm:px-20 md:mt-0 md:flex-1 md:px-1">
            <p class="text-center text-white font-bold text-lg">
              {{ item.title }}
            </p>
            <p class="text-white text-base mt-5">
              {{ item.content }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="section">
      <h2 class="text-center text-xl font-bold py-16">お知らせ</h2>
      <NewsList :newsList="news" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.kv {
  width: 100%;
  background-image: url('../../assets/images/main/Dropin_kv.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  @media (min-width: 1001px) {
    background-position: 0, 1300px;
    height: 1000px;
  }
  @media (max-width: 1000px) {
    height: 900px;
  }
  @media (max-width: 800px) {
    height: 800px;
  }
  @media (max-width: 700px) {
    height: 700px;
  }
  @media (max-width: 600px) {
    height: 600px;
  }
  @media (max-width: 500px) {
    height: 500px;
  }
  &_inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 250px 10% 200px;
    @media (min-width: 1000px) {
      padding: 250px 15% 200px;
    }
    @media (max-width: 700px) {
      padding: 200px 10%;
    }
    @media (max-width: 600px) {
      padding: 150px 10%;
    }
    @media (max-width: 500px) {
      display: block;
      padding: 120px 50px 0;
    }
  }
  &_title {
    width: calc(100% - 21vw);
    @media (max-width: 500px) {
      text-align: center;
      width: 100%
    }
    &_main {
      font-size: 2em;
      @media (max-width: 800px) {
        font-size: 1.6em;
      }
    }
    &_sub {
      font-size: 1.5em;
      @media (max-width: 800px) {
        font-size: 1.3em;
      }
      @media (max-width: 650px) {
        font-size: 1em;
      }
      @media (max-width: 500px) {
        font-size: 0.8em;
      }
    }
  }
}
.logo {
  width: 20vw;
  @media (max-width: 500px) {
    display: none;
  }
  &img {
    width: 100%;
  }
}
.logoImg {
  width: 200px;
  margin: 0 auto;
}
.sky {
  background-color: #D4EFF5;
  position: relative;
  padding: 35px 0 65px;
  &_ground {
    position: absolute;
    bottom: 0;
  }
}
.bg_dropin-green {
  background-color: var(--dropin-green);
}
.exmaple_item {
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    padding-bottom: 100%;
    background-color: white;
    top: 0;
    z-index: -1;
    border-radius: 50%;
    transform: scale(0.9) translate(0, -15%);
  }
  @media (max-width: 767px) {
    &::after {
      width: 55%;
      padding-bottom: 55%;
      left: 50%;
      top: -15%;
      transform: translate(-50%, 0);
    }
  }
  @media (max-width: 620px) {
    &::after {
      width: 65%;
      padding-bottom: 65%;
      left: 50%;
      top: -15%;
      transform: translate(-50%, 0);
    }
  }
}
</style>
