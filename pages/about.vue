<template>
  <div class="flex flex-col sm:flex-row pt-[60px] min-h-[calc(100vh-60px)]">
    <!-- Left Side - Image -->
    <div class="w-full sm:w-1/2 h-[50vh] sm:h-[calc(100vh-60px)] relative">
      <img
        src="/img/main/default.png"
        alt="Profile Image"
        class="w-full h-full object-cover"
      >
    </div>

    <!-- Right Side - Content -->
    <div class="w-full sm:w-1/2 p-8 flex flex-col">
      <div class="flex-grow space-y-8 max-w-md mx-auto mb-20">
        <h1 class="text-5xl sm:mt-12 name">
          Hello !
        </h1>

        <div class="space-y-6 text-justify">
          <p class="text-gray-600 leading-relaxed">
            I'm Jade DA SILVA LIMA, a passionate software developer living in NYC.
            I have 4 years of experience. I  build web applications that automate processes, enhance efficiency, and deliver actionable insights, making an1 impact on business performance.
          </p>

          <p class="text-gray-600 leading-relaxed">
            I take the time to understand what clients need and make sure the final product is clear, reliable, and easy to use.
            My goal is to bring ideas to life in the simplest way possible.
          </p>
        </div>

        <div class="flex gap-6 pt-8">
          <a
            href="https://www.linkedin.com/in/jade-da-silva-lima/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-black hover:opacity-70 transition-opacity font-medium"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/jdasilvalima"
            target="_blank"
            rel="noopener noreferrer"
            class="text-black hover:opacity-70 transition-opacity font-medium"
          >
            GITHUB
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.name {
  font-family: 'PaperworkBlack', sans-serif;
}
</style>
