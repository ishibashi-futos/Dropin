<script setup>
import { ref } from 'vue'

</script>
<template>
  <section class="section mt-16">
    <h2 class="text-slate-700 text-4xl text-center">RESERVE</h2>
    <p class="text-base text-slate-700　text-center">ご予約</p>
    <div class="bg-slate-200 px-10 py-6 mt-16">
      <h3 class="text-center text-lg font-bold text-slate-700 underline">ご予約の手順</h3>
      <ol class="mt-6">
        <li class="font-bold">1.<a href="#calendar" class="font-bold underline">宿泊カレンダー</a>で予約可能な日程の確認をお願いします。</li>
        <li class="font-bold mt-2">2.希望の日程が「宿泊可能」となっていたら、下の<a href="#form" class="font-bold underline">申し込みフォーム</a>に記入の上送信をお願いします。</li>
        <li class="font-bold mt-2">3.管理人から確認のメールを返信させていただき、メール上で予約確定となります。</li>
      </ol>
    </div>
    <h2 class="mt-24 text-slate-700 text-xl font-bold text-center" id="calendar">宿泊カレンダー</h2>
    <iframe class="w-full mt-6" src="https://calendar.google.com/calendar/embed?src=5356a96979ffcf0121994713790eae1853bae432772501b7beca32ac4fdf1166%40group.calendar.google.com&ctz=Asia%2FTokyo" style="border: 0" height="600" frameborder="0" scrolling="no"></iframe>
  </section>
  <div class="bg-slate-100">
    <section class="section" id="form">
      <h2 class="text-slate-700 font-bold text-xl text-center">申し込みフォーム</h2>
      <iframe class="w-full" src="https://docs.google.com/forms/d/e/1FAIpQLSfVfmJqvZoKZa13vGnt2Ho6ZuWUvrQnGZVwQE69gbBxdSyZkw/viewform?embedded=true" height="1850" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
    </section>
  </div>
</template>