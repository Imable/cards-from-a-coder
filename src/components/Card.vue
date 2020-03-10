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
    --size-card: 400px;
    background-color: rgb(239, 240, 239);
    height: var(--size-card);
    width: calc(1.5 * var(--size-card))
}
</style>