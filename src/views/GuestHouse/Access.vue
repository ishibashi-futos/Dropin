<script setup>

const gallary = [
  { 
    imageUrl: '/images/GH/gallary_01.jpg',
    title: "淀の松原"
  },
  { 
    imageUrl: '/images/GH/gallary_02.jpg',
    title: "蕪嶋"
  },
  { 
    imageUrl: '/images/GH/gallary_03.jpg',
    title: "蕪嶋神社"
  }
]
</script>
<template>
  <section class="section mt-16">
    <h2 class="text-slate-700 text-4xl text-center">ACCESS</h2>
    <p class="text-base text-slate-700　text-center">アクセス</p>
    <div class="text-lg font-bold mt-16 text-center">
      JR八戸線鮫駅から徒歩10分の場所です。<br>
      坂道が多くてちょっと大変だけど、心と体が元気になります！
    </div>
    <div class="md:flex mt-10">
      <div class="w-full md:w-4/12 pr-10">
        <img src="/images/GH/view.jpg"/>
        <p class="text-sm">031-0841</p>
        <p class="text-base">青森県八戸市鮫町蟻子5-11</p>
      </div>
      <iframe class="w-full md:w-8/12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.3875340852933!2d141.55981181544885!3d40.533026579351784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9b53ec98cdcf25%3A0x14bcb5913c798170!2z44CSMDMxLTA4NDEg6Z2S5qOu55yM5YWr5oi45biC6a6r55S66J-75a2Q77yV4oiS77yR77yR!5e0!3m2!1sja!2sjp!4v1671948702823!5m2!1sja!2sjp" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
  <div class="bg-slate-100" id="access">
    <section class="section">
      <h2 class="text-slate-700 font-bold text-2xl text-center">近くのおすすめスポット</h2>
      <ul class="md:flex mt-20">
        <li v-for="(item, index) in gallary" :key="index" 
          class="md:flex-1 p-1">
          <img :src="item.imageUrl" class="aspect-square" />
          <p class="text-center font-bold text-base">
            {{ item.title }}
          </p>
        </li>
      </ul>
    </section>
  </div>
</template>