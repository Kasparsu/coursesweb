<template>
    <div class="mockup-code before:content-none my-3 flex justify-between items-center">
        <pre data-prefix=">"><code v-html="hljs.highlight(
            code,
            { language: lang }
        ).value"></code></pre>
        <button class="btn btn-square btn-sm mr-3" @click="clipboard.write(code)">
            <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1m6 0v3H6V2M5 5h8m-8 5h8m-8 4h8" />
            </svg>
        </button>
    </div>
</template>

<script setup>
import hljs from 'highlight.js';
import { defineProps } from 'vue';
import clipboard from 'clipboardy';
defineProps({
    lang: String,
    code: String
});
</script>

<style scoped></style>

