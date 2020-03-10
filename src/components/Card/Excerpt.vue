<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'Excerpt',
    props: [
        'title',
        'description'
    ]
}
</script>

<style>
.excerpt h2 {
    padding-bottom: var(--card-padding);
}
</style>