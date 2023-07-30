<template>
    <main>
        <h1>composant de scroll infinit</h1>
        <Suspense >
            <ScrollInfinite />

            <template #fallback>
                Loading...
            </template>
        </Suspense>
    </main>
</template>

<script setup lang="ts">

import ScrollInfinite from '../scrollinfinite/ScrollInfinite.vue';


</script>

<style scoped>

main{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

</style>