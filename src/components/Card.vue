<template>
  <div class="card">
    <Stamp :location="post.location"/>
    <p class="date" v-html="post.date" />
    <h1 class="title" v-html="post.title" />
    <p class="description" v-html="post.description" />
    <b> {{post.timeToRead}} min read </b>
    <b> {{post.location}} </b>
    <g-link :to="post.path" class="read">Read More...</g-link>
  </div>
</template>

<script>
import Stamp from './Card/Stamp'

export default {
    name: 'Card',
    components: {
        Stamp
    },
    props: [
        'post'
    ]
}
</script>

<style>
.card {
    --card-height: 500px;
    --card-width: calc(1.5 * var(--card-height));
    --card-padding: calc(0.05 * var(--card-height));
    background-color: rgb(239, 240, 239);
    height: var(--card-height);
    width: var(--card-width);
    padding: var(--card-padding);
    display: grid;
    grid-template-areas: 
        "content content . . stamp"
        "content content . address address"
        "content content . address address"
        "content content . address address";
}

.stamp {
    grid-area: stamp;
}
</style>