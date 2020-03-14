<template>
    <p>
        <span>
            Read time: {{ timeToRead }}
            </span>
        |
        <span>
            Posted {{ date }}
            </span>
    </p>
</template>

<script>
export default {
    name: 'details',
    props: [
        'timeToRead',
        'date'
    ]
}
</script>

<style>
.details {
    display: inline-block;
    position: absolute;
    bottom: var(--card-padding);
    left: var(--card-padding);
    font-style: italic;
}
</style>