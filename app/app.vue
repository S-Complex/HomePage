<template>
  <div class="mx-auto max-w-6xl">
    <NuxtRouteAnnouncer />
    <div
      class="grid grid-cols-1 min-h-screen place-content-center md:grid-cols-3"
    >
      <ProfileCard />
      <InfoCard />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
