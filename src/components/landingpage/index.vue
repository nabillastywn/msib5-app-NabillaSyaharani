<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "Swiper/css";
import { categories } from "../store/categories.data";
import { flashes } from "../store/flashSale";
import { Latests } from "../store/latest.data";
import { Yours } from "../store/you.data";

const modules = [Navigation, Autoplay];
</script>

<template>
  <div
    class="bg-gradient-to-b from-primary from-30% to-white flex justify-between items-center"
  >
    <!-- Left side (text and button) -->
    <div class="ml-24 my-auto mx-auto pl-31">
      <div class="text-5xl font-semibold text-secondary leading-tight">
        Welcome to GITS Commerce
      </div>
      <p class="max-w-sm text-gray-600 my-3">
        Morpheme is a next-gen financial technology company in the process of
        reinventing banking.
      </p>
      <button
        class="mt-2 bg-sky-600 py-2 px-3 text-sm text-white border-sky-600 font-semibold hover:bg-sky-700 rounded"
      >
        <img
          src="/src/assets/img/cart.png"
          alt="Cart Icon"
          class="mr-2 h-5 inline"
        />
        Start Shopping
      </button>
    </div>
    <!-- Right side (image) -->
    <div>
      <img src="/src/assets/img/troli.png" width="900" />
    </div>
  </div>
  <div class="mx-24 px-31 flex justify-between mb-5 items-center">
    <div class="font-bold text-secondary text-lg">Categories</div>
    <div class="text-sky-700 font-bold text-sm flex items-center space-x-2">
      <div>View all</div>
      <img src="/src/assets/img/Button.png" alt="Arrow Right" width="18" />
    </div>
  </div>
  <div class="px-35 flex justify-between mx-24">
    <div
      class="text-center"
      v-for="category in categories"
      :key="category.title"
    >
      <img
        :src="`src/assets/img/${category.fileName}.png`"
        width="80"
        class="mx-auto"
      />
      <div class="font-semibold mt-3">{{ category.title }}</div>
    </div>
  </div>
  <div class="bg-slate-50 mt-24">
    <div class="mx-24 flex justify-between mb-5 mt-24 items-center">
      <div class="flex space-x-3 items-center">
        <div class="font-bold text-secondary my-10 text-lg">Flash Sale</div>
        <button
          class="bg-red-500 py-1.5 px-3 text-sm text-white border-red-500 font-semibold hover:bg-red-600 rounded"
        >
          00 : 12 : 12
        </button>
      </div>
      <div class="text-sky-700 font-bold text-sm flex items-center space-x-2">
        <div>View all</div>
        <img src="/src/assets/img/Button.png" alt="Arrow Right" width="18" />
      </div>
    </div>
    <div class="px-35 mb-10 mx-24">
      <Swiper
        :modules="modules"
        :slides-per-view="5"
        :navigation="{ enabled: true, nextEl: '.swiper-button-next' }"
        :space-between="10"
        :loop="true"
        :autoplay="{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
      >
        <SwiperSlide v-for="flash in flashes" :key="flash.title">
          <div
            class="bg-white mb-10 p-0 border rounded-xl overflow-hidden w-40"
            style="
              border-radius: 12px;
              border: 01px solid var(--gray-200, #eaecf0);
              background: var(--base-white, #fff);
            "
          >
            <img
              :src="`/src/assets/img/flash/${flash.fileName}.png`"
              alt="Item Image"
              class="flex-shrink-0"
              style="
                background: url('/src/assets/img/flash/${item.fileName}.png')
                  var(--gray-100, #f2f4f7);
                margin: 0;
                padding: 0;
              "
            />
            <div class="bg-white p-4">
              <div
                class="mr-2 rounded-lg py-0.3 px-2 inline-block"
                style="
                  border-radius: 16px;
                  background: var(--gray-100, #f2f4f7);
                  mix-blend-mode: multiply;
                "
              >
                <button class="text-gray-700 text-xs font-semibold">
                  {{ flash.label }}
                </button>
              </div>
              <div class="mt-3 text-base my-0 mb-2">{{ flash.title }}</div>
              <div class="flex items-center justify-between">
                <div class="text-black text-lg font-bold">
                  {{ flash.price }}
                </div>
                <div class="text-gray-400 text-xs">{{ flash.size }}</div>
              </div>
              <div class="flex items-center space-x-3 mb-1">
                <div class="text-gray-400 text-xs mt-1">
                  {{ flash.pricedisc }}
                </div>
                <div
                  class="mt-1 mr-2 rounded-lg py-0.3 px-2 inline-block"
                  style="
                    border-radius: 16px;
                    background: var(--error-50, #fef3f2);
                    mix-blend-mode: multiply;
                  "
                >
                  <button class="text-red-700 text-xs font-semibold">
                    {{ flash.disc }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <img
          src="/src/assets/img/flash/next.png"
          alt="Next"
          class="swiper-button-next absolute right-0 z-10 top-1/2 w-14 h-13"
        />
      </Swiper>
    </div>
  </div>
  <div class="mx-24 px-31 flex justify-between mb-10 mt-24 items-center">
    <div class="font-bold text-secondary text-lg">Latest Product</div>
    <div class="text-sky-700 font-bold text-sm flex items-center space-x-2">
      <div>View all</div>
      <img src="/src/assets/img/Button.png" alt="Arrow Right" width="18" />
    </div>
  </div>
  <div class="flex px-35 ml-24">
    <div
      class="flex-start box-border h-auto w-[265px] p-5 border-0 bg-sky-500 rounded-xl text-secondary font-poppins"
    >
      <div class="self-stretch text-2xl text-white mt-3">Discount</div>
      <div class="self-stretch text-5xl text-white font-bold leading-[60px]">
        More <br />
        and <br />
        More
      </div>
      <div class="text-2x1 text-white mt-12">Up To</div>
      <div class="text-5xl font-bold text-yellow-300 mt-2 mb-3">50%</div>
    </div>
  </div>

  <!-- Tumpukan konten di atas box biru -->
  <div class="px-36 ml-48 mt-[-385px]">
    <Swiper
      :modules="modules"
      :slides-per-view="4"
      :navigation="{ enabled: true, nextEl: '.swiper-button-next' }"
      :space-between="10"
      :loop="true"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
    >
      <SwiperSlide v-for="item in Latests" :key="item.title">
        <div
          class="latest-item bg-white mb-10 border rounded-xl overflow-hidden"
          style="
            border-radius: 12px;
            border: 01px solid var(--gray-200, #eaecf0);
            background: var(--base-white, #fff);
            margin-left: 15px;
            margin-right: 15px;
          "
        >
          <img
            :src="`/src/assets/img/flash/${item.fileName}.png`"
            alt="Item Image"
            class="flex-shrink-0"
            style="
              background: url('/src/assets/img/flash/${item.fileName}.png')
                var(--gray-100, #f2f4f7);
              margin: 0;
              padding: 0;
            "
          />
          <div class="bg-white p-4">
            <div
              class="mr-2 rounded-lg py-0.3 px-2 inline-block"
              style="
                border-radius: 16px;
                background: var(--gray-100, #f2f4f7);
                mix-blend-mode: multiply;
              "
            >
              <button class="text-gray-700 text-xs font-semibold">
                {{ item.label }}
              </button>
            </div>
            <div class="mt-3 text-base my-0 mb-2">{{ item.title }}</div>
            <div class="flex items-center justify-between">
              <div class="text-black text-lg font-bold">{{ item.price }}</div>
              <div class="text-gray-400 text-xs">{{ item.size }}</div>
            </div>
            <div class="flex items-center space-x-3 mb-1">
              <div class="text-gray-400 text-xs mt-1">{{ item.pricedisc }}</div>
              <div
                class="mt-1 mr-2 rounded-lg py-0.3 px-2 inline-block"
                style="
                  border-radius: 16px;
                  background: var(--error-50, #fef3f2);
                  mix-blend-mode: multiply;
                "
              >
                <button class="text-red-700 text-xs font-semibold">
                  {{ item.disc }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <img
        src="/src/assets/img/flash/next.png"
        alt="Next"
        class="swiper-button-next absolute right-0 z-10 top-1/2 w-14 h-13"
      />
    </Swiper>
  </div>
  <!-- end latest product -->
  <div class="mx-24 px-31 flex mb-10 mt-24 items-center">
    <div class="font-bold text-secondary text-lg">Promo</div>
  </div>
  <div class="flex px-35 ml-24">
    <div class="w-[1000px] h-52 bg-gray-300 rounded-xl"></div>
  </div>

  <!-- Latest Product lagi xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
  <div class="mx-24 px-31 flex justify-between mb-10 mt-24 items-center">
    <div class="font-bold text-secondary text-lg">Latest Product</div>
    <div class="text-sky-700 font-bold text-sm flex items-center space-x-2">
      <div>View all</div>
      <img src="/src/assets/img/Button.png" alt="Arrow Right" width="18" />
    </div>
  </div>
  <div class="">
    <div class="flex px-35 ml-24">
      <div
        class="flex-start box-border h-auto w-[265px] p-5 border-0 bg-sky-500 rounded-xl text-secondary font-poppins"
      >
        <div class="self-stretch text-2xl text-white mt-3">Discount</div>
        <div class="self-stretch text-5xl text-white font-bold leading-[60px]">
          More <br />
          and <br />
          More
        </div>
        <div class="text-2x1 text-white mt-12">Up To</div>
        <div class="text-5xl font-bold text-yellow-300 mt-2 mb-3">50%</div>
      </div>
    </div>
    <!-- Tumpukan konten di atas box biru -->
    <div class="px-36 ml-48 mt-[-385px]">
      <Swiper
        :modules="modules"
        :slides-per-view="4"
        :navigation="{ enabled: true, nextEl: '.swiper-button-next' }"
        :space-between="10"
        :loop="true"
        :autoplay="{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
      >
        <SwiperSlide v-for="item in Latests" :key="item.title">
          <div
            class="latest-item bg-white mb-10 border rounded-xl overflow-hidden"
            style="
              border-radius: 12px;
              border: 01px solid var(--gray-200, #eaecf0);
              background: var(--base-white, #fff);
              margin-left: 15px;
              margin-right: 15px;
            "
          >
            <img
              :src="`/src/assets/img/flash/${item.fileName}.png`"
              alt="Item Image"
              class="flex-shrink-0"
              style="
                background: url('/src/assets/img/flash/${item.fileName}.png')
                  var(--gray-100, #f2f4f7);
                margin: 0;
                padding: 0;
              "
            />
            <div class="bg-white p-4">
              <div
                class="mr-2 rounded-lg py-0.3 px-2 inline-block"
                style="
                  border-radius: 16px;
                  background: var(--gray-100, #f2f4f7);
                  mix-blend-mode: multiply;
                "
              >
                <button class="text-gray-700 text-xs font-semibold">
                  {{ item.label }}
                </button>
              </div>
              <div class="mt-3 text-base my-0 mb-2">{{ item.title }}</div>
              <div class="flex items-center justify-between">
                <div class="text-black text-lg font-bold">{{ item.price }}</div>
                <div class="text-gray-400 text-xs">{{ item.size }}</div>
              </div>
              <div class="flex items-center space-x-3 mb-1">
                <div class="text-gray-400 text-xs mt-1">
                  {{ item.pricedisc }}
                </div>
                <div
                  class="mt-1 mr-2 rounded-lg py-0.3 px-2 inline-block"
                  style="
                    border-radius: 16px;
                    background: var(--error-50, #fef3f2);
                    mix-blend-mode: multiply;
                  "
                >
                  <button class="text-red-700 text-xs font-semibold">
                    {{ item.disc }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <img
          src="/src/assets/img/flash/next.png"
          alt="Next"
          class="swiper-button-next absolute right-0 z-10 top-1/2 w-14 h-13"
        />
      </Swiper>
    </div>
  </div>
  <!-- FOR YOU xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
  <div class="mx-24 px-31 flex justify-between mb-10 mt-24 items-center">
    <div class="font-bold text-secondary text-lg">For You</div>
    <div class="text-sky-700 font-bold text-sm flex items-center space-x-2">
      <div>View all</div>
      <img src="/src/assets/img/Button.png" alt="Arrow Right" width="18" />
    </div>
  </div>

  <div class="px-35 grid grid-cols-5 space-x-4 mb-10 mx-24 relative rounded-xl">
    <div
      class="bg-white mb-10 p-0 border rounded-xl overflow-hidden w-40"
      v-for="item in Yours"
      :key="item.title"
      style="
        border-radius: 12px;
        border: 01px solid var(--gray-200, #eaecf0);
        background: var(--base-white, #fff);
      "
    >
      <img
        :src="`/src/assets/img/flash/${item.fileName}.png`"
        alt="Item Image"
        class="flex-shrink-0"
        style="
          background: url('/src/assets/img/flash/${item.fileName}.png')
            var(--gray-100, #f2f4f7);
          margin: 0;
          padding: 0;
        "
      />
      <div class="bg-white p-4">
        <div
          class="mr-2 rounded-lg py-0.3 px-2 inline-block"
          style="
            border-radius: 16px;
            background: var(--gray-100, #f2f4f7);
            mix-blend-mode: multiply;
          "
        >
          <button class="text-gray-700 text-xs font-semibold">
            {{ item.label }}
          </button>
        </div>
        <div class="mt-3 text-base my-0 mb-2">{{ item.title }}</div>
        <div class="flex items-center justify-between">
          <div class="text-black text-lg font-bold">{{ item.price }}</div>
          <div class="text-gray-400 text-xs">{{ item.size }}</div>
        </div>
        <div class="flex items-center space-x-3 mb-1">
          <div class="text-gray-400 text-xs mt-1">{{ item.pricedisc }}</div>
          <div
            class="mt-1 mr-2 rounded-lg py-0.3 px-2 inline-block"
            style="
              border-radius: 16px;
              background: var(--error-50, #fef3f2);
              mix-blend-mode: multiply;
            "
          >
            <button class="text-red-700 text-xs font-semibold">
              {{ item.disc }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
