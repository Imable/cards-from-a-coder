<template>
    <div>
        <h2>
            {{ title }}
            </h2>
        <p>
            {{ description }}
            </p>
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
.excerpt {
    display: grid;
    grid-template-areas:
        "title"
        "description"
        "callToAction";
    grid-template-rows: 1fr 8fr 1fr;
    gap: var(--card-padding);
}
</style>