<template>
  <div
    rounded="lg"
    bg="white dark:slate-700"
    p="6"
    m="md:y-6"
    space="y-3"
    shadow="md"
  >
    <h1 text="2xl">Hi there 👋</h1>
    <p>This is Dongpu Ou, you may know me as Restent Ou & SliverRiver.</p>
    <h2 text="xl">About me</h2>
    <p>
      Student, front-end developer and blogger from Guangxi, China. Now
      preparing for the National College Entrance Examination in 2025.
    </p>
    <p>
      Technical support of
      <NuxtLink href="https://speed.14cloud.cn" target="_blank" external
        >14Cloud</NuxtLink
      >
      & Community member of
      <NuxtLink href="https://nitro.build" target="_blank" external
        >Nitro</NuxtLink
      >.
    </p>
    <h2 text="xl">Skill set</h2>
    <section flex="~ wrap" gap="3">
      <IconNodejs :width="40" :height="40" />
      <IconDeno :width="40" :height="40" />
      <IconJavaScript :width="40" :height="40" />
      <IconTypeScript :width="40" :height="40" />
      <IconHTML :width="40" :height="40" />
      <IconCSS3 :width="40" :height="40" />
      <IconUnoCSS :width="40" :height="40" />
      <IconPython :width="40" :height="40" />
      <IconVue :width="40" :height="40" />
      <IconNuxt :width="40" :height="40" />
      <IconReact :width="40" :height="40" />
      <IconNextjs :width="40" :height="40" />
      <IconSvelte :width="40" :height="40" />
      <IconNitro :width="40" :height="40" />
    </section>
    <h2 text="xl">Favorite</h2>
    <p>I love food, photography and gaming.</p>
    <p>
      Currently spending my free time gaming, my favorite games are Minecraft,
      Arcaea, Phigros and Rotaeno.
    </p>
  </div>
</template>
