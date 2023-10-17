<script setup>
    import { RouterLink } from 'vue-router';
    import ProfileDisplayProps from '../components/ProfileDisplayProps.vue';
</script>

<template>
    <div class="page-wrapper">
        <h2>Welcome to props example page</h2>
        <RouterLink to="/">Back to Home</RouterLink>
        <ProfileDisplayProps
            first-name="John"
            last-name="Doe"
            email="johndoe@gmail.com"
            address="3a Elliot estate, Lagos"
            occupation="Fishing"
            hobby="Skating"
        />
    </div>
</template>

<style scoped>
    .page-wrapper {
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
</style>