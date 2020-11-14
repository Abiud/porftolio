<template>
  <div>
    <div class="gradient-color h-2/3">
      <div class="header pt-16 flex-wrap">
        <div class="w-full lg:w-2/3 pl-0 lg:pl-8 z-10">
          <div class="overflow-hidden px-4 py-4">
            <h3 class="text-white mb-4">
              Hello my name is Abiud Cantu, I'm Master Student in Computer
              Science at The University of Texas Rio Grande Valley.
            </h3>
            <a
              class="h-24 bg-teal-500 cursor-pointer hover:bg-teal-700 text-white font-bold border py-3 px-6 rounded-full"
              href="#"
              v-scroll-to="'#projects'"
            >
              <span>Check out my projects!</span>
              <img
                class="w-4 h-auto ml-2 inline-block"
                src="~/assets/svg/arrow-right.svg"
                alt="arrow right"
              />
            </a>
            <a
              class="bg-teal-500 cursor-pointer hover:bg-teal-700 text-white font-bold border py-3 px-6 rounded-full"
              target="_blank"
              href="https://drive.google.com/file/d/1eyJlIwqTv-gX06AbFlyzqRRLLekJPJ9z/view?usp=sharing"
            >
              <span>See my Resume</span>
              <img
                class="w-8 h-auto ml-2 pb-1 inline-block"
                src="https://img.icons8.com/officel/100/000000/set-as-resume.png"
              />
            </a>
          </div>
        </div>
        <div class="w-full flex pt-4 lg:pt-0 lg:w-1/3 z-10 justify-center">
          <img
            class="profilePic"
            src="~/assets/img/AbiudCantu.jpeg"
            alt="Abiud Cantu"
          />
        </div>
      </div>
    </div>

    <div class="px-0 md:px-12 pb-8">
      <!-- Fishnet Project -->
      <div
        data-aos="fade-down"
        class="w-full pt-0 lg:pt-4 pb-8 border-b border-gray-500 flex flex-wrap jutify-around"
      >
        <img
          class="w-full md:h-96 lg:h-auto md:w-5/12 lg:w-3/12 shadow-2xl bg-cover overflow-hidden object-fit"
          src="~/assets/img/fishnet.png"
          alt=""
        />
        <div class="w-full md:w-7/12 lg:w-9/12 bg-transparent py-4 px-8 justify-between leading-normal">
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">
              FishNET: An automated relational database for zebrafish colony
              management
            </div>
            <p class="text-gray-600 text-sm pb-2">
              Head Developer / Internship Project / Used by Multiple
              Laboratories
            </p>
            <p class="text-gray-700 text-base">
              FishNET facilitates remote tracking of individual zebrafish lines
              and links associated biological resources to enable robust and
              efficient colony management and storage of laboratory information
              related to zebrafish.
              <br />
              <br />
              <a
                class="no-underline hover:underline text-blue-500 "
                target="_blank"
                href="https://www.filemaker.com/"
              >Filemaker</a>
              was used to create a cross-platform relational database that
              supports multiple users and groups per organization. More than a
              hundred Filemaker scripts were needed in order to deliver a good
              user experience. Also, with the feedback of more people in my team
              I was able to design a convenient and fast UI. All the information
              provided by the user is stored in a private MySQL database.
            </p>
          </div>
          <p>First author resource paper:</p>
          <a
            class="no-underline hover:underline text-blue-500 "
            target="_blank"
            href="https://doi.org/10.1371/journal.pbio.3000343"
          >https://doi.org/10.1371/journal.pbio.3000343</a>
        </div>
      </div>

      <!-- OrthoApp -->
      <div
        data-aos="fade-down"
        class="w-full pt-0 lg:pt-4 pb-8 border-b border-gray-500 lg:flex lg:flex-wrap lg:jutify-around"
      >
        <div class="w-full lg:w-7/12 bg-transparent py-4 px-8 justify-between leading-normal">
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">
              OrthoApp: Management web application for Orthodontists
            </div>
            <p class="text-gray-600 text-sm pb-2">
              Head Developer / 2019 Project / Currently in Beta
            </p>
            <p class="text-gray-700 text-base">
              Web application created for Orthodontists. The purpose of this
              application is to mantain organization and standards in the
              dentists office. This is accomplished by keeping track of each
              patient their appointments and any other necessary notes. Also,
              keeping track of office finances and calendars.
              <br />
              <br />
              The release of this application is schedule for December 2019 -
              January 2020. Some of the technologies being used for development
              are Vue.js, Laravel, MySQL and Amazon S3. The combination of new
              technologies like Vue.js and polished frameworks like Laravel
              gives the application a solid foundation for continous
              improvement.
            </p>
          </div>
        </div>
        <img
          class="w-full lg:w-5/12 shadow-2xl bg-cover overflow-hidden object-fit"
          src="~/assets/img/healthadmin.png"
          alt=""
        />
      </div>

      <!-- Nutritionist app -->
      <div
        data-aos="fade-down"
        class="w-full pt-0 lg:pt-4 pb-8 border-b border-gray-500 lg:flex lg:flex-wrap lg:jutify-around"
      >
        <img
          class="w-full mt-2 lg:w-5/12 lg:block hidden shadow-2xl bg-cover overflow-hidden object-fit"
          src="~/assets/img/nutriIndex.png"
          alt=""
        />
        <div class="w-full lg:w-7/12 bg-transparent py-4 px-8 justify-between leading-normal">
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">
              Nutritionist app
            </div>
            <p class="text-gray-600 text-sm pb-2">
              Head Developer / 2019 Project
            </p>
            <p class="text-gray-700 text-base">
              This application is being design by a nutritionist and Me. The
              purpose of this aplication is to make easier to keep track of each
              patient. The most important aspect of it is to make all the
              calculations in order to create a food menu apropiated for that
              patient.
              <br />
              <br />
              The framework currently used to develop this application is
              <a
                class="no-underline hover:underline text-blue-500 "
                target="_blank"
                href="https://quasar.dev/"
              >
                Quasar,</a>
              a solution based on Vue.js created to build website, desktop and
              mobile applications. For the back-end Firebase is being used for
              authentication and Firestore as database.
            </p>
          </div>
        </div>
        <img
          class="w-full mt-2 lg:hidden shadow-2xl bg-cover overflow-hidden fishnet object-fit"
          src="~/assets/img/nutriIndex.png"
          alt=""
        />
      </div>

      <!-- LookIt -->
      <!-- <div
        data-aos="fade-down"
        class="w-full pt-0 lg:pt-4 pb-8 border-b border-gray-500 lg:flex lg:flex-wrap lg:jutify-around"
      >
        <img
          class="w-64 mt-2 inline-block lg:w-1/12 shadow-2xl bg-cover overflow-hidden "
          src="~/assets/img/lookit.png"
          alt=""
        />
        <img
          class="w-64 mt-2 lg:hidden inline-block shadow-2xl bg-cover overflow-hidden"
          src="~/assets/img/lookit2.png"
          alt=""
        />
        <div class="w-full lg:w-10/12 bg-transparent py-4 px-8 justify-between leading-normal">
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">
              LookIt: Memory game for kids
            </div>
            <p class="text-gray-600 text-sm pb-2">
              Class Project / 2017 Project
            </p>
            <p class="text-gray-700 text-base">
              Memory game developed in android studio as class project written
              in Java. To store high scores and user data we used Firebase
              Real-time database.
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
        <img
          class="w-full hidden lg:block lg:w-1/12 shadow-2xl bg-cover overflow-hidden object-fit"
          src="~/assets/img/lookit2.png"
          alt=""
        />
      </div> -->
      <!-- Senior Project -->
      <div
        data-aos="fade-down"
        class="w-full pt-0 lg:pt-4 pb-8 border-b border-gray-500 flex flex-wrap jutify-around"
      >
        <img
          class="lg:h-auto md:h-96 md:w-5/12 lg:block lg:w-2/12 shadow-2xl bg-cover overflow-hidden"
          src="~/assets/img/SeniorPoster.png"
          alt=""
        />
        <div class="w-full md:w-7/12 lg:w-10/12 bg-transparent py-4 px-8 justify-between leading-normal">
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">
              UTRGV Bot
            </div>
            <p class="text-gray-600 text-sm pb-2">
              Senior Project / 2018 Project
            </p>
            <p class="text-gray-700 text-base">
              A Facebook messenger bot capable of answering student questions
              about classes and professors at UTRGV. This bot was built using
              Wit.ai, Express and Mongodb as backend and Html, Css and
              Javascript as frontend.
              <br />
              <br />
              <a
                class="no-underline hover:underline text-blue-500 "
                target="_blank"
                href="https://drive.google.com/file/d/1Onb34XBGPTVONZZ3j5EKqXv0OP2hjp5p/view?usp=sharing"
              >Check out the full size poster.</a>
            </p>
          </div>
        </div>
      </div>

      <!-- CheapFlights Project -->
      <div
        data-aos="fade-down"
        class="pt-0 lg:pt-4 pb-8 border-b border-gray-500 flex flex-wrap jutify-around"
      >
        <iframe
          class="w-full h-64 lg:h-auto lg:hidden block shadow-2xl bg-cover overflow-hidden object-fit"
          src="https://www.youtube.com/embed/YEmyNHrnmeY"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="w-full lg:w-8/12 bg-transparent py-4 px-8 justify-between leading-normal">
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">
              Find the Cheapest Flight
            </div>
            <p class="text-gray-600 text-sm pb-2">
              Hackaton Project / 2018 Project
              <br />
              Hackaton MLH algolia challenge <span class="text-yellow-600 font-medium">winner</span> for best implementation of
              algolia.
            </p>
            <p class="text-gray-700 text-base">
              Web application built using Html, Css and Javascript. Designed to
              find the cheapest flight from one location to another. The result
              and price are displayed on an animated map. If is cheaper to take
              more than one flight then those options will be displayed.
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
        <iframe
          class="w-full hidden lg:block lg:w-4/12 shadow-2xl bg-cover overflow-hidden object-fit"
          src="https://www.youtube.com/embed/YEmyNHrnmeY"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <!-- Flights: https://www.youtube.com/watch?v=YEmyNHrnmeY -->
    </div>
  </div>
</template>

<script>
export default {
  // components: {
  //   Logo
  // }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.header {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.header::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  background-image: url('~assets/svg/wave-bottom.svg');
  background-repeat: no-repeat;
  height: 300px;
}

.profilePic {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 336px;
  height: 448px;
}

.gradient-color {
  /* background: linear-gradient(270deg, #156da0, #4ba2db); */
  /* background-position-y: -50px; */
  background-image: url('~assets/img/code.gif');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  min-height: 100vh;
}

.header-card {
  background: rgba(255, 255, 255, 0.06);
}

.fishnet {
  background-image: url('~assets/img/fishnet.png');
}
</style>
