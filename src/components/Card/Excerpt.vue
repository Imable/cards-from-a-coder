<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <g-link
            class="link-full-card"
            :to="path"
            @click.stop>
            Read card in {{ timeToRead }} min
            </g-link>
    </div>
</template>

<script>
export default {
    name: 'Excerpt',
    props: [
        'title',
        'description',
        'path',
        'timeToRead'
    ]
}
</script>

<style>
.excerpt h2 {
    padding-bottom: var(--card-padding);
}

.link-full-card {
    display: inline-block;
    padding-top: var(--card-padding);
}
</style>