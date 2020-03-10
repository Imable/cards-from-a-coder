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