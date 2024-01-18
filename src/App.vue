<template>
    <Drawer>
    <div class="container m-auto">
        <router-view></router-view>
    </div>
    </Drawer>  
</template>
<script>
import Drawer from './components/Drawer.vue';

export default {
    components: { Drawer }
}
</script>