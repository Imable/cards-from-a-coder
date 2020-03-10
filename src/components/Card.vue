<template>
  <div class="card">
    <Stamp
        class="stamp"
        :location="post.location"/>
    <Excerpt
        class="excerpt"
        :title="post.title"
        :description="post.description"
        />
    <Address
        class="address"
        :destination="post.destination"/>
    <div
        class="vl"
        aria-hidden>
        </div>
    <!-- <p class="date" v-html="post.date" />
    <h1 class="title" v-html="post.title" />
    <p class="description" v-html="post.description" />
    <b> {{post.timeToRead}} min read </b>
    <b> {{post.location}} </b>
    <g-link :to="post.path" class="read">Read More...</g-link> -->
  </div>
</template>

<script>
import RandomRotation from '~/mixins/RandomRotation'
import Address from './Card/Address'
import Excerpt from './Card/Excerpt'
import Stamp from './Card/Stamp'

export default {
    name: 'Card',
    components: {
        Address,
        Excerpt,
        Stamp
    },
    props: [
        'post'
    ],
    mixins: [
        RandomRotation
    ]
}
</script>

<style>
.card {
    --card-height: 500px;
    --card-width: calc(1.5 * var(--card-height));
    --card-padding: calc(0.05 * var(--card-height));
    --rotation: -1deg;
    background-color: rgb(239, 240, 239);
    height: var(--card-height);
    width: var(--card-width);
    padding: var(--card-padding);

    display: grid;
    grid-gap: var(--card-padding);
    gap: var(--card-padding);
    grid-template-columns: 1fr 1fr 2px 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas: 
        "content content . . stamp"
        "content content line address address"
        "content content line address address"
        "content content . address address";
    justify-content: center;
    transform: rotate(var(--rotation));
}

.card .stamp {
    grid-area: stamp;
    justify-self: right;
}

.card .address {
    grid-area: address;
}

.card .excerpt {
    grid-area: content;
}

.card .vl {
    grid-area: line;
}
</style>