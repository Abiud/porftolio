<template>
  <div
    class="overflow-x-hidden test-body"
    :class="{ 'js-loading': imgLoaded }"
  >
    <section
      id="first-section"
      class="background-blob"
    >
      <!-- Navbar -->
      <div class="flex items-center flex-no-wrap justify-between px-4 pt-4">

        <!-- Toggle -->
        <div
          class="md:ml-8"
          @click="toggleLang()"
        >
          <div class="relative inline-block w-28 h-10 xxl:w-48 xxl:h-20 align-middle select-none transition duration-500 ease-in">
            <img
              class="absolute top-10 left-10 w-8 h-8 xxl:w-16 xxl:h-16 z-10"
              src="~/assets/img/USA.png"
              alt="Waving hand emoji"
              @load="imgLoading('USA')"
            >
            <input
              type="checkbox"
              name="toggle"
              v-model="toggled"
              id="toggle"
              :style="{borderColor: toggled ? '#276749' : '#2c5282'}"
              class="toggle-checkbox absolute block w-14 h-10 xxl:w-24 xxl:h-20 rounded-full bg-white appearance-none cursor-pointer"
            />
            <label
              for="toggle"
              class="toggle-label block overflow-hidden h-10 xxl:h-20 rounded-full bg-gray-300 cursor-pointer"
            ></label>
            <img
              class="absolute top-10 right-10 w-8 h-8 xxl:w-16 xxl:h-16"
              src="~/assets/img/Mexico.png"
              alt="Waving hand emoji"
              @load="imgLoading('Mexico')"
            >
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex-none">
          <a
            href="#projects"
            class="inline-block button hover:text-gray-400 text-base lg:text-lg xxl:text-3xl font-bold py-2 xxl:py-4 px-4 xxl:px-6 md:m-2 rounded-full cursor-pointer"
          >{{$t('links.projects')}}</a>
          <a
            class="inline-block button hover:text-gray-400 text-base lg:text-lg xxl:text-3xl font-bold py-2 xxl:py-4 px-4 xxl:px-6 md:m-2 rounded-full cursor-pointer"
            target="_blank"
            href="https://drive.google.com/file/d/1eyJlIwqTv-gX06AbFlyzqRRLLekJPJ9z/view?usp=sharing"
          >{{$t('links.resume')}}</a>
        </div>
      </div>

      <!-- 1st Section -->
      <div class="flex flex-wrap items-center mt-4 section-1">

        <!-- Presentation Card -->
        <div class="flex-none mx-auto w-11/12 md:w-2/3 lg:w-1/3 rounded-lg shadow-lg card mt-3">
          <div class="px-4 py-4 md:px-8 xxl:px-16 xxl:py-8 text-gray-800 xxl:text-3xl">
            <img
              class="float-left w-20 h-20 xxl:w-32 xxl:h-32 mr-4"
              src="~/assets/img/waving-hand.png"
              alt="Waving hand emoji"
              @load="imgLoading('Hand')"
            >
            <p class="text-xl xxl:text-4xl font-bold">{{ $t('home.name') }}</p>
            <p class="text-base xxl:text-3xl">
              {{ $t('home.introduction') }}
            </p>
          </div>
        </div>

        <!-- Presentation Photo/Icons -->
        <div class="flex-none w-full lg:w-1/2 xxl:pt-40">
          <div class="relative mx-auto md:ml-auto md:m-0 lg:ml-auto">
            <img
              class="block ml-24 md:ml-auto self-portrait fade-in"
              src="~/assets/img/Abu2.png"
              alt="Profile Picture"
              @load="imgLoading('PP')"
            >
            <div class="laravel-logo tech shadow-md slide-in-fwd-br top-10 left-25 md:left-30 lg:left-10 xl:left-25 xxl:left-40"></div>
            <div class="vue-logo tech shadow-md slide-in-fwd-br top-30 left-25 md:left-30 lg:left-10 xl:left-25 xxl:left-40"></div>
            <div class="filemaker-logo tech shadow-md slide-in-fwd-br top-50 left-25 md:left-30 lg:left-10 xl:left-25 xxl:left-40"></div>
            <div class="quasar-logo tech shadow-md slide-in-fwd-br top-70 left-25 md:left-30 lg:left-10 xl:left-25 xxl:left-40"></div>
            <div class="firebase-logo tech shadow-md slide-in-fwd-br top-20 left-0 md:left-15 lg:-left-12 xl:left-10 xxl:left-25"></div>
            <div class="amazon-logo tech shadow-md slide-in-fwd-br top-40 left-0 md:left-15 lg:-left-12 xl:left-10 xxl:left-25"></div>
            <div class="mysql-logo tech shadow-md slide-in-fwd-br top-60 left-0 md:left-15 lg:-left-12 xl:left-10 xxl:left-25"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <!-- Fishnet Project -->
    <section id="projects">
      <div class="flex flex-wrap items-center justify-between min-h-screen pb-2">
        <div class="w-full lg:w-1/2 pb-8 lg:pb-0 my-8 lg:my-0">
          <h3 class="title text-semibold text-center py-4 md:py-0 xxl:py-12">{{$t('links.projects')}}</h3>
          <img
            class="projects-image mx-auto"
            src="~/assets/img/Projects.png"
            alt=""
          />
        </div>
        <div class="w-full lg:w-1/2 px-8 lg:px-0 py-4 flex flex-col flex-wrap jutify-around">
          <div class="pt-6 flex flex-grow flex-col items-center">
            <img
              class="shadow self-start md:self-center researchPaper"
              src="~/assets/img/researchPaper.png"
              alt=""
            />
            <tags :tags="$t('tags.fishnet')"></tags>
          </div>
          <div class="flex flex-wrap md:justify-center">
            <div class="w-full md:w-7/12 lg:w-9/12 bg-transparent py-4 md:px-8 leading-normal">
              <div class="mb-8">
                <p class="text-base xxl:text-3xl">
                  {{ $t('projects.fishnet.body') }}
                  <br />
                  <br />
                  <a
                    class="no-underline hover:underline text-blue-500 "
                    target="_blank"
                    href="https://www.filemaker.com/"
                  >Filemaker</a>
                  {{ $t('projects.fishnet.body2') }}
                </p>
              </div>
              <p class="xxl:text-3xl">{{ $t('projects.fishnet.footer') }}</p>
              <a
                class="no-underline hover:underline text-blue-500 xxl:text-3xl"
                target="_blank"
                href="https://doi.org/10.1371/journal.pbio.3000343"
              >https://doi.org/10.1371/journal.pbio.3000343</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <!-- Laravue -->
      <div class="py-6 flex flex-grow flex-col items-center border-t-4 border-gray-400 border-dashed">
        <div class="font-bold text-xl xxl:text-4xl subtitle text-center">
          {{ $t('projects.healthadmin.title') }}
        </div>
        <tags :tags="$t('tags.orthoapp')"></tags>
      </div>
      <div class="w-full px-0 md:px-8 pt-0 pb-8 flex flex-col lg:flex-row lg:flex-no-wrap lg:jutify-around">
        <div class="w-full lg:w-7/12 bg-transparent py-4 px-8 justify-between leading-normal">
          <div class="mb-8">
            <p class="text-base xxl:text-3xl">
              {{ $t('projects.healthadmin.body') }}
              <br />
              <br />
              {{ $t('projects.healthadmin.body2') }}
            </p>
          </div>
        </div>
        <img
          class="lg:-mr-16 laravue mx-auto xl:self-center"
          src="~/assets/img/laravue.png"
          alt=""
        />
      </div>
    </section>

    <section>
      <!-- Nutritionist app -->
      <div class="w-full pt-0 lg:pt-4 pb-2 lg:flex lg:flex-wrap lg:jutify-around border-t-4 border-gray-400 border-dashed">
        <div class="py-4 flex flex-grow flex-col items-center">
          <div class="font-bold text-xl xxl:text-4xl subtitle text-center">
            {{ $t('projects.nutri.title') }}
          </div>
          <tags :tags="$t('tags.appmanager')"></tags>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full xl:w-1/2">
            <img
              class="admin-panel mx-auto"
              src="~/assets/img/admin.png"
              alt=""
            />
          </div>
          <div class="w-full xl:w-1/2 bg-transparent py-4 px-8 justify-between leading-normal">
            <div class="mb-8">
              <p class="text-base xxl:text-3xl">
                {{ $t('projects.nutri.body') }}
                <br />
                <br />
                {{ $t('projects.nutri.body2') }}
                <a
                  class="no-underline hover:underline text-blue-500 "
                  target="_blank"
                  href="https://quasar.dev/"
                >
                  Quasar,</a>
                {{ $t('projects.nutri.body3') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full pt-2 pb-8 lg:flex lg:flex-wrap lg:jutify-around border-t-4 border-gray-400 border-dashed">
        <div class="w-full lg:w-7/12 bg-transparent py-4 px-8 justify-between leading-normal">
          <div class="mb-8">
            <div class="subtitle font-bold text-xl xxl:text-4xl">
              Find the Cheapest Flight
            </div>
            <tags :tags="$t('tags.flights')"></tags>
            <p class="text-sm mb-2 xxl:text-3xl">
              {{ $t('projects.flights.sub') }} <span class="text-yellow-600 font-medium">{{ $t('projects.flights.sub2') }}</span> {{ $t('projects.flights.sub3') }}
            </p>
            <p class="text-base xxl:text-3xl">
              {{ $t('projects.flights.body') }}
              <br />
              <br />
              <a
                class="no-underline hover:underline text-blue-500 "
                target="_blank"
                href="https://github.com/Abiud/Flights"
              >Github Repository</a>
            </p>
          </div>
        </div>
        <div class="w-5/12 p-4">
          <iframe
            class="youtube-vid mx-auto block shadow-xl bg-cover overflow-hidden"
            src="https://www.youtube.com/embed/YEmyNHrnmeY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <section>
      <!-- LookIt -->
      <div class="w-full px-0 md:px-8 pt-0 lg:pt-4 pb-8 flex flex-wrap justify-center lg:flex lg:flex-wrap lg:jutify-around border-t-4 border-gray-400 border-dashed">
        <div class="w-full lg:w-10/12 bg-transparent py-4 px-8 justify-between leading-normal">
          <div class="mb-8">
            <div class="font-bold text-xl xxl:text-4xl subtitle">
              {{ $t('projects.lookit.title') }}
            </div>
            <tags :tags="$t('tags.lookit')"></tags>
            <p class="text-base xxl:text-3xl">
              {{ $t('projects.lookit.body') }}
              <br />
              <br />
              <a
                class="no-underline hover:underline text-blue-500 "
                target="_blank"
                href="https://github.com/Abiud/LookIt-Abiud-Android"
              >
                Github Repository</a>
            </p>
          </div>
        </div>
        <div class="w-2/12 relative" style="height: 380px;">
          <img
            class="lookitPhoto absolute"
            src="~/assets/img/lookit.png"
            alt=""
          />
        </div>
      </div>
      <!-- Senior Project -->
      <div class="w-full px-0 md:px-8 pt-0 lg:pt-4 pb-8 flex flex-wrap jutify-around border-t-4 border-gray-400 border-dashed">
        <img
          class="lg:h-auto md:h-96 md:w-5/12 lg:block lg:w-2/12 shadow-2xl bg-cover overflow-hidden"
          src="~/assets/img/seniorPoster.png"
          alt=""
        />
        <div class="w-full md:w-7/12 lg:w-10/12 bg-transparent py-4 px-8 justify-between leading-normal">
          <div class="mb-8">
            <div class="subtitle font-bold text-xl mb-2 xxl:text-4xl">
              UTRGV Bot
            </div>
            <tags :tags="$t('tags.utrgvbot')"></tags>
            <p class="text-base xxl:text-3xl">
              {{ $t('projects.bot.body') }}
              <br />
              <br />
              <a
                class="no-underline hover:underline text-blue-500 "
                target="_blank"
                href="https://drive.google.com/file/d/1Onb34XBGPTVONZZ3j5EKqXv0OP2hjp5p/view?usp=sharing"
              >{{ $t('projects.bot.link') }}</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="mx-auto px-2 mb-8">
        <h4 class="title text-semibold text-center py-4 xxl:py-12">{{$t('contact.title')}}</h4>
        <form class="w-full max-w-lg mx-auto mt-4">
          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                {{$t('contact.name')}}
              </label>
              <input
                class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="nick"
                type="text"
              >
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                {{$t('contact.email')}}
              </label>
              <input
                class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
              >
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                {{$t('contact.message')}}
              </label>
              <textarea
                class=" no-resize appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
              ></textarea>
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3">
              <button
                class="shadow bg-orange-600 hover:bg-orange-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded-full"
                type="button"
              >
                {{$t('contact.send')}}
              </button>
            </div>
            <div class="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </section>

    <img
      class="hidden"
      src="~assets/svg/Pattern2.svg"
      @load="imgLoading('Background1')"
    >
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggled: false,
      imgLoaded: true,
      imgs: [
        {
          name: 'USA',
          src: "~/assets/img/USA.png",
          loaded: false
        },
        {
          name: "Mexico",
          src: "~/assets/img/Mexico.png",
          loaded: false
        },
        {
          name: "Hand",
          src: "~/assets/img/waving-hand.png",
          loaded: false
        },
        {
          name: "PP",
          src: "~/assets/img/Abu2.png",
          loaded: false
        },
        {
          name: "Background1",
          src: "~assets/svg/Pattern2.svg",
          loaded: false
        }
      ]
    }
  },
  methods: {
    toggleLang () {
      this.toggled = !this.toggled
      if (this.toggled) {
        this.$i18n.locale = 'es'
      } else {
        this.$i18n.locale = 'en'
      }
    },
    imgLoading (imgName) {
      this.imgs.some(image => {
        if (image.name === imgName) {
          image.loaded = true
          return true
        }
      });
      if (this.imgs.every(image => image.loaded === true)) {
        this.imgLoaded = false;
      }
    },
  },
}
</script>

<style lang="postcss">
.js-loading *,
.js-loading *:before,
.js-loading *:after {
  animation-play-state: paused !important;
}

.vue-logo {
  background-image: url('~assets/img/Vue.png');
}

.laravel-logo {
  background-image: url('~assets/svg/Laravel.svg');
}

.filemaker-logo {
  background-image: url('~assets/img/Filemaker.png');
}

.quasar-logo {
  background-image: url('~assets/svg/Quasar.svg');
}

.firebase-logo {
  background-image: url('~assets/img/Firebase.png');
}

.mysql-logo {
  background-image: url('~assets/img/Mysql.png');
}

.amazon-logo {
  background-image: url('~assets/img/Amazon.png');
}

.tech {
  background-size: 60px 60px;
  position: absolute;
  width: 90px;
  height: 90px;
  background-color: white;
  border-radius: 50%;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border: 2px solid white;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.3s ease;
}

.self-portrait {
  min-width: 360px;
  height: 480px;
}

.projects-image {
  min-width: 380px;
  height: 380px;
  margin-top: -6rem;
}

#first-section {
  min-height: 100vh;
}

.laravue {
  width: 480px;
  height: 361px;
}

.admin-panel {
  width: 480px;
  height: 241px;
}

.researchPaper {
  width: 310px;
}

.lookitPhoto {
  width: 300px;
}

@media only screen and (min-width: 768px) {
  .self-portrait {
    min-width: 400px;
    height: 533px;
  }
  .projects-image {
    margin-top: -5rem;
  }
  .laravue {
    width: 740px;
    height: 556px;
  }
  .admin-panel {
    width: 720px;
    height: 361px;
  }
  .youtube-vid {
    width: 360px;
    height: 180px;
  }
  .researchPaper {
    width: 500px;
  }
}

@media only screen and (min-width: 1280px) {
  .self-portrait {
    min-width: 430px;
    height: 573px;
  }
  .projects-image {
    margin-top: -4rem;
  }
  .laravue {
    width: 780px;
    height: 586px;
  }
  .youtube-vid {
    width: 480px;
    height: 240px;
  }
}

@media only screen and (min-width: 2560px) {
  .tech {
    background-size: 100px 100px;
    width: 140px;
    height: 140px;
  }
  .self-portrait {
    min-width: 700px;
    height: 933px;
  }
  .projects-image {
    min-width: 680px;
    height: 680px;
    margin-top: -9rem;
  }
  .youtube-vid {
    width: 480px;
    height: 240px;
  }
}

.vue-logo:hover {
  box-shadow: 0 0 0 5px #35495e, 0 0 0 10px #42b883 !important;
}

.laravel-logo:hover {
  box-shadow: 0 0 0 5px #6c6c6c, 0 0 0 10px #f05340 !important;
}

.filemaker-logo:hover {
  box-shadow: 0 0 0 5px #000000, 0 0 0 10px #3d91b2 !important;
}

.quasar-logo:hover {
  box-shadow: 0 0 0 5px #1c76d2, 0 0 0 10px #42a5f5 !important;
}

.firebase-logo:hover {
  box-shadow: 0 0 0 5px #55bdd5, 0 0 0 10px #f9ca33 !important;
}

.mysql-logo:hover {
  box-shadow: 0 0 0 5px #cf8c2a, 0 0 0 10px #27688e !important;
}

.amazon-logo:hover {
  box-shadow: 0 0 0 5px #080705, 0 0 0 10px #f08e33 !important;
}

.fade-in {
  -webkit-animation: fade-in 1.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 1.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

.slide-in-fwd-br {
  -webkit-animation: slide-in-fwd-br 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-fwd-br 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes slide-in-fwd-br {
  0% {
    -webkit-transform: translateZ(-1400px) translateY(150px) translateX(200px);
    transform: translateY(150px) translateX(200px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0) translateX(0);
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-fwd-br {
  0% {
    -webkit-transform: translateZ(-1400px) translateY(150px) translateX(200px);
    transform: translateY(150px) translateX(200px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0) translateX(0);
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
}

.toggle-checkbox:checked {
  @apply: right-0;
  right: 0;
  border-color: #276749;
}

.fishnet {
  background-image: url('~assets/img/fishnet.png');
}
</style>
