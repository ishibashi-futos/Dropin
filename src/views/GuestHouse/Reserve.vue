<script setup>
import { ref } from 'vue'

</script>
<template>
  <section class="section mt-16">
    <h2 class="text-slate-700 text-4xl text-center">RESERVE</h2>
    <p class="text-base text-slate-700　text-center">ご予約</p>
    <h3 class="text-center text-lg font-bold text-red-600">2023年3月頃オープン予定です。現在ご予約はいただけません。</h3>
    <div class="text-center mt-16">
      <span class="text-xs font-bold text-red-500">オープン記念価格</span><br>
      <span class="text-lg font-bold">料金:</span>
      <span class="text-2xl font-bold">4,500</span>
      <span class="text-sm font-bold">円(税込)</span>
    </div>
    <div class="text-center mt-1">
      <span class="text-xs font-bold">お一人あたり / 一泊あたり / 最大4名様</span><br>
      <span class="text-xs">※ベッドが不要が小学生以下のお子様は無料</span>
    </div>
    <div class="bg-slate-200 px-10 py-6 mt-16">
      <h3 class="text-center text-lg font-bold text-slate-700 underline">ご予約の手順</h3>
      <ol class="mt-6">
        <li class="font-bold">1.<a href="#calendar" class="font-bold underline">宿泊カレンダー</a>で予約可能な日程の確認をお願いします。</li>
        <li class="font-bold mt-2">2.希望の日程が「宿泊可能」となっていたら、下の<a href="#form" class="font-bold underline">申し込みフォーム</a>に記入の上送信をお願いします。</li>
        <li class="font-bold mt-2">3.管理人から確認のメールを返信させていただき、メール上で予約確定となります。</li>
      </ol>
    </div>
    <h2 class="mt-24 text-slate-700 text-xl font-bold text-center" id="calendar">宿泊カレンダー</h2>
    <iframe class="w-full mt-6" src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FTokyo&showTitle=0&showTz=0&showCalendars=0&src=NTM1NmE5Njk3OWZmY2YwMTIxOTk0NzEzNzkwZWFlMTg1M2JhZTQzMjc3MjUwMWI3YmVjYTMyYWM0ZmRmMTE2NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23C0CA33" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
  </section>
  <div class="bg-slate-100">
    <section class="section" id="form">
      <h2 class="text-slate-700 font-bold text-xl text-center">申し込みフォーム</h2>
      <iframe class="w-full" src="https://docs.google.com/forms/d/e/1FAIpQLSfVfmJqvZoKZa13vGnt2Ho6ZuWUvrQnGZVwQE69gbBxdSyZkw/viewform?embedded=true" height="1850" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
    </section>
  </div>
</template>