<template>
        <iframe class="aspect-video w-full" :src="'https://www.youtube.com/embed/'+hash+'?rel=0'"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>
</template>
<script setup>
    const props = defineProps(['hash'])
</script>