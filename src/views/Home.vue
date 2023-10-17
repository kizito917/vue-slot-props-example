<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="wrapper">
        <nav>
            <RouterLink to="/props" class="link">Prop usage Example</RouterLink>
            <RouterLink to="/slots" class="link">Slot usage Example</RouterLink>
        </nav>
    </div>
</template>

<style scoped>
    .wrapper {
        text-align: center;
        margin-top: 5%;
    }

    nav {
        display: grid;
        gap: 5rem;
    }

    .link {
        background-color: lightblue;
        font-size: 30px;
        padding: 1rem;
    }
</style>