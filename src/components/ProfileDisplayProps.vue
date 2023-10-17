<script setup>
    import { defineProps } from 'vue';

    defineProps({
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        occupation: {
            type: String,
            required: true,
        },
        hobby: {
            type: String,
            required: true,
        },
    });
</script>

<template>
    <div class="profile-wrapper">
        <h4>Profile information</h4>
        <div class="info-section">
            <h4>First Name: {{ firstName }}</h4>
            <h4>Last Name: {{ lastName }}</h4>
        </div>
        <div class="info-section">
            <h4>Email: {{ email }}</h4>
            <h4>Address: {{ address }}</h4>
        </div>
        <div class="info-section">
            <h4>Occupation: {{ occupation }}</h4>
            <h4>Hobby: {{ hobby }}</h4>
        </div>
    </div>
</template>

<style scoped>
    .profile-wrapper {
        background-color: whitesmoke;  
        padding: 2rem;
        margin-top: 2%;
    }

    .info-section {
        display: flex;
        gap: 3rem;
        width: 70%;
        margin-top: 1%;
        justify-content: space-between;
        margin-left: auto;
        margin-right: auto;
    }
</style>