<script setup>
    import ProfileDisplaySlot from '../components/ProfileDisplaySlot.vue';
</script>

<template>
    <div class="page-wrapper">
        <h2>Welcome to slot example page</h2>
        <RouterLink to="/">Back to Home</RouterLink>
        <ProfileDisplaySlot>
            <template #biodata>
                <h4>First Name: John</h4>
                <h4>Last Name: Doe</h4>
            </template>
            <template #secondaryInfo>
                <h4>Email: johndoe@gmail.com</h4>
                <h4>Address: 3a Elliot estate, Lagos</h4>
            </template>
            <template #optionalInfo>
                <h4>Occupation: Fishing</h4>
                <h4>Hobby: Skating</h4>
            </template>
        </ProfileDisplaySlot>
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