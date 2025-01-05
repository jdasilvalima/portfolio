<template>
  <NuxtLayout>
    <div class="page-wrapper">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style>
.page-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  perspective: 1000px;
  transform-style: preserve-3d;
}

.page-enter-active,
.page-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  width: 100%;
  backface-visibility: hidden;
  will-change: transform;
}

.page-enter-from {
  transform: translate3d(0, 100%, 0);
}

.page-leave-to {
  transform: translate3d(0, -100%, 0);
}

.page-enter-to,
.page-leave-from {
  transform: translate3d(0, 0, 0);
}
</style>
