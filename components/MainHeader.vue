<template>
  <header class="bg-black text-white px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center fixed w-full top-0 z-50">
    <NuxtLink
      to="/"
      class="text-xl sm:text-2xl font-bold hover:opacity-80 transition-opacity"
    >
      JD
    </NuxtLink>
    <nav class="flex gap-4 sm:gap-8">
      <NuxtLink
        to="/"
        class="hover:opacity-80 transition-opacity"
      > PROJECTS </NuxtLink>
      <NuxtLink
        to="/about"
        class="hover:opacity-80 transition-opacity"
      > ABOUT </NuxtLink>
    </nav>
  </header>
</template>
