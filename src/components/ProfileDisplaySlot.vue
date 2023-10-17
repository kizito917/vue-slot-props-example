<script setup>
</script>

<template>
    <div class="profile-wrapper">
        <h4>Profile information</h4>
        <div class="info-section">
            <slot name="biodata"></slot>
        </div>
        <div class="info-section">
            <slot name="secondaryInfo"></slot>
        </div>
        <div class="info-section">
            <slot name="optionalInfo"></slot>
        </div>
    </div>
</template>

<style scoped>
    .profile-wrapper {
        background-color: whitesmoke;  
        padding: 2rem;
        margin-top: 2%;
    }

    .profile-wrapper > h4 {
        text-align: center;
    }

    .info-section {
        display: flex;
        gap: 3rem;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1%;
        justify-content: space-between;
    }
</style>