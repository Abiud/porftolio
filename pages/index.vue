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
              class="bg-teal-500 cursor-pointer hover:bg-teal-700 text-white font-bold border py-3 px-6 rounded-full"
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

    <div class="px-0 md:px-12 pb-8" id="projects">
      <!-- First Card -->
      <div
        data-aos="fade-down"
        class="w-full pt-0 lg:pt-4 pb-8 border-b border-gray-500 flex flex-wrap jutify-around"
      >
        <img
          class="w-full md:w-5/12 lg:w-1/3 shadow-2xl bg-cover overflow-hidden fishnet object-fit"
          src="~/assets/img/fishnet.png"
          alt=""
        />
        <div
          class="w-full md:w-7/12 lg:w-2/3 bg-white py-4 px-8 justify-between leading-normal"
        >
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
                >Filemaker</a
              >
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
            >https://doi.org/10.1371/journal.pbio.3000343</a
          >
        </div>
      </div>
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
