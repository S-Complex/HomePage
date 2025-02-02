<template>
  <div
    class="grid m-6 place-content-center rounded-md bg-white p-6 shadow-md space-y-3 dark:bg-slate-700"
  >
    <NuxtImg
      class="justify-self-center rounded-full shadow-md"
      width="128"
      height="128"
      src="https://library.gxres.net/images/avatars/real.webp"
    />
    <h1 class="text-center text-2xl font-medium">Dongpu Ou</h1>
    <p class="text-center text-sm">Student · Developer · Blogger</p>
    <div class="flex flex-wrap justify-center gap-3 gap-6">
      <NuxtLink
        class="flex items-center rounded-md bg-sky-500 p-2 text-sm text-white no-underline shadow-md space-x-1 dark:bg-sky-600"
        href="https://blog.gxres.net"
        external
      >
        <IconBook :width="16" :height="16" />
        <span>Blog</span>
      </NuxtLink>
      <NuxtLink
        class="flex items-center rounded-md bg-sky-500 p-2 text-sm text-white no-underline shadow-md space-x-1 dark:bg-sky-600"
        href="https://library.gxres.net"
        external
      >
        <IconCollectionBookmark :width="16" :height="16" />
        <span>Library</span>
      </NuxtLink>
    </div>
  </div>
</template>
