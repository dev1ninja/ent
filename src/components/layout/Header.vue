<script lang="ts">

export default {
  data() {
    return {
      showArticle: false,
      showMenu: false,
    }
  },
  props: {
    onClick: Function,
    item: Object
  },
  methods: {
    toggleArticle: function () {
      this.showArticle = !this.showArticle;
      console.log("showMenu: ", this.showArticle)
    },
    articleItemClicked: function (item: Object) {
      this.toggleArticle();
      // this.onClick(item);
    },
    toggleMenu: function () {
      this.showMenu = !this.showMenu;
      console.log("showMenu: ", this.showMenu)
    },
    menuItemClicked: function (item: Object) {
      this.toggleMenu();
      // this.onClick(item);
    }
  }
}
</script>

<template>
  <!-- <div class='w-full px-28 py-1 flex items-center gap-6 bg-[white] flex-col md:flex-row md:fixed md:z-50'>
            <img src='/assets/s_logo.svg'  class='mr-28'>
            <button v-for="menu in menus" :key="menu" class="font-medium">{{menu}}</button>
            <div class='flex-1'></div>
            <button class='bg-[#0C4A6E] min-w-[129px] h-[36.88px] rounded-[31px] text-[white] font-medium'>Login</button>
          </div> -->
  <nav data-headlessui-state="" class="bg-white shadow w-full z-50 fixed">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button id="headlessui-disclosure-button-1" type="button" aria-expanded="false" data-headlessui-state=""
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            @click="toggleMenu">
            <span class="sr-only">Open main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" aria-hidden="true" class="block h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5">
              </path>
            </svg>
          </button>
        </div>
        <div class='absolute z-50 top-[3rem] rounded-md shadow-lg w-48 origin-top-left left-0'
          :style="[showMenu ? 'display: block' : 'display: none']">
          <div class="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white">
            <button
              class="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"
              @click="articleItemClicked">
              Article
            </button>
            <button
              class="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"
              @click="articleItemClicked">
            Forum
          </button>
          <button
            class="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"
            @click="articleItemClicked">
            Video
          </button>
          <button
            class="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"
            @click="articleItemClicked">
            About
          </button>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <a href="http://mediaent.inbework.site/">
              <img class="block h-12 w-auto lg:hidden" src="/assets/s_logo.svg" alt="Logo ENT">
            </a>
            <a href="http://mediaent.inbework.site/">
              <img class="hidden h-12 w-auto lg:block" src="/assets/s_logo.svg" alt="Logo ENT">
            </a>
          </div>
          <div class="hidden sm:ml-6 sm:block mt-1">
            <div class="flex">
              <a class="pl-3 py-2 rounded-md text-sm font-medium hover:font-bold"
                href="http://mediaent.inbework.site/all-article">
                Article
              </a>
              <div class="relative">
                <div class="relative">
                  <div>
                    <span class="inline-flex rounded-md">
                      <!-- <button
                          type="button"
                          class="inline-flex items-center justify-center p-2 rounded-md transition duration-150 ease-in-out sm:hidden"
                          :on-click="toggleShow"
                          >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                            class="h-4 w-4">
                            <path fill-rule="evenodd"
                              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                              clip-rule="evenodd">
                            </path>
                          </svg>
                        </button> -->
                      <button type="button"
                        class="items-center justify-center mt-3 mr-7 cursor-pointer font-medium hover:font-black text-sm normal-case transition duration-150 ease-in-out hidden sm:inline-flex"
                        @click="toggleArticle">
                        <img src="/assets/dropdown.svg">
                      </button>
                    </span>
                  </div>
                  <!-- <div class="fixed inset-0 z-40" style="display: block;"></div> -->
                  <div class='absolute z-50 mt-2 rounded-md shadow-lg w-48 origin-top-left left-0'
                    :style="[showArticle ? 'display: block' : 'display: none']">
                    <div class="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white">
                      <button
                        class="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"
                        @click="articleItemClicked">
                        Lifestyle
                      </button>
                      <button
                        class="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"
                        @click="articleItemClicked">
                        Hiburan
                      </button>
                      <button
                        class="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"
                        @click="articleItemClicked">
                        Teknologi
                      </button>
                      <button
                        class="block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"
                        @click="articleItemClicked">
                        Otomotif
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <a class="px-7 py-2 rounded-md text-sm font-medium hover:font-bold"
                href="http://mediaent.inbework.site/all-forum">
                Forum
              </a>
              <a class="px-7 py-2 rounded-md text-sm font-medium hover:font-bold"
                href="http://mediaent.inbework.site/all-video">
                Video
              </a>
              <a class="px-7 py-2 rounded-md text-sm font-medium hover:font-bold" href="http://mediaent.inbework.site/">
                About
              </a>
            </div>
          </div>
        </div>
        <div><a
            class="bg-sky-900 rounded-full px-4 py-1 mr-2 my-auto font-medium hover:font-bold hover:bg-yellow-700 text-sm normal-case text-white"
            href="http://mediaent.inbework.site/login">Login</a></div>
      </div>
    </div><!---->
  </nav>
</template>
