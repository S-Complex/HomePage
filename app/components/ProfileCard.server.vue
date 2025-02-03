<template>
  <div
    grid="~"
    place="content-center"
    rounded="lg"
    bg="white dark:slate-700"
    p="6"
    m="md:y-6"
    shadow="md"
    space="y-3"
  >
    <NuxtImg
      justify="self-center"
      rounded="full"
      shadow="md"
      width="128"
      height="128"
      src="https://library.gxres.net/images/avatars/real.webp"
      alt="Ou's real-life avatar"
    />
    <h1 text="center 2xl" font="medium">Dongpu Ou</h1>
    <p text="center sm">Student · Developer · Blogger</p>
    <div flex="~ wrap" justify="center" gap="3">
      <NuxtLink
        flex="~"
        items="center"
        rounded="md"
        bg="sky-200 dark:sky-800"
        p="2"
        text="sm inherit"
        shadow="md"
        space="x-1"
        href="https://blog.gxres.net"
        external
      >
        <IconBook :width="16" :height="16" />
        <span>Blog</span>
      </NuxtLink>
      <NuxtLink
        flex="~"
        items="center"
        rounded="md"
        bg="sky-200 dark:sky-800"
        p="2"
        text="sm inherit"
        shadow="md"
        space="x-1"
        href="https://library.gxres.net"
        external
      >
        <IconCollectionBookmark :width="16" :height="16" />
        <span>Library</span>
      </NuxtLink>
    </div>
  </div>
</template>
