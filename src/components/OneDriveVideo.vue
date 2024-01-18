<template>
        <video class="aspect-video w-full" :src="'https://tptliveee-my.sharepoint.com/personal/kaspar_martin_suursalu_tptlive_ee/_layouts/15/download.aspx?UniqueId='+hash" controls></video>
</template>
<script setup>
    const props = defineProps(['hash'])
</script>