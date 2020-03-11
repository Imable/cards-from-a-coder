<template>
  <div 
    class="card"
    :class="flipped ? 'flipped' : ''"
    @click="flipped=!flipped">
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
        :addressee="post.addressee"
        :destination="post.destination"/>
    <div
        class="vl"
        aria-hidden/>
    <img
        class="card-image"
        src="../../content/posts/vue.jpg"/>
    <!-- <p class="date" v-html="post.date" />
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
    data () {
        return {
            flipped: false
        }
    },
    mixins: [
        RandomRotation
    ]
}
</script>

<style>
.card {
    --card-width: 750px;
    --card-height: calc(0.66 * var(--card-width));;
    --card-padding: calc(0.05 * var(--card-height));
    --rotation: -1deg;
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

    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.514);
    background-color: rgb(230, 230, 222);
    background-image: url('../assets/stamps/mask.png');
    background-size: calc(3 * var(--card-width)) calc(3 * var(--card-height));
    background-blend-mode: difference;

    transition: 0.25s ease;
}

.card * {
    opacity: 1;
    transition: 0.25s ease;
}

.card .card-image {
    position: absolute;
    left: 0px; top: 0px;
    width: 100%; height: 100%;
    display: none;
    opacity: 0;

}

.card.flipped {
    transition: 0.25s ease;
    transform: rotate(calc(-1 * var(--rotation))) rotate3d(0, 1, 0, 180deg);
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.514);
}

.card.flipped * {
    transition: 0.25s ease;
    opacity: 0;
}

.card.flipped .card-image {
    transition: 0.25s ease;
    display: block;
    opacity: 1;
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
    align-self: center;
}

.card .vl {
    grid-area: line;
}
</style>