<template>
  <div m="x-auto" max="w-6xl">
    <NuxtRouteAnnouncer />
    <div
      grid="~ cols-1 md:cols-3"
      gap="6"
      m="x-6 y-6 md:y-0"
      place="content-center"
      min="h-svh"
    >
      <ProfileCard />
      <InfoCard col="span-2" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
