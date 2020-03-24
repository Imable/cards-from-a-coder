<template>
    <div
        class="card-container">
        <div 
            class="card"
            ref="card"
            :class="[
                flipped ? 'flipped' : '',
                vertical ? 'vertical' : ''
            ]"
            @click="flipped=!flipped">
            <Stamp
                class="stamp"
                :stamp="post.stamp"
                :location="post.location"
                :postedOn="post.date"/>
            <Excerpt
                class="excerpt"
                :title="post.title"
                :description="post.description"
                :path="post.path"
                :timeToRead="post.timeToRead"/>
            <Address
                class="address"
                :entries="{
                    'To:': {
                        'receiver': post.receiver,
                        'destination': post.destination
                    },
                    'From:': {
                        'sender': post.sender,
                        'location': post.location
                    }
                }"/>
            <div
                class="divider"
                :class="vertical ? 'hl' : 'vl'"
                aria-hidden/>
            <g-image
                class="card-image"
                :src="post.image"/>
        </div>
    </div>
</template>

<script>
import RandomRotation from '~/mixins/RandomRotation'
import Address from './Card/Address'
import Excerpt from './Card/Excerpt'
import Stamp from './Card/Stamp'
import Details from './Card/Details'

export default {
    name: 'Card',
    components: {
        Address,
        Excerpt,
        Stamp,
        Details
    },
    props: [
        'post'
    ],
    data () {
        return {
            flipped: this.post.flipped,
            vertical: this.post.vertical
        }
    },
    mixins: [
        RandomRotation
    ],
    methods: {
        setWidth (e) {
            let width = window.getComputedStyle(this.$el).getPropertyValue('width')
            this.$el.style.setProperty(
                '--card-width', 
                `${width}`
            )
        }
    },
    mounted () {
        window.addEventListener("resize", this.setWidth);
        this.setWidth()
    },
    destroyed () {
        window.removeEventListener("resize", this.setWidth);
    }
}
</script>

<style>
.card-container {
    display: flex;
    width: 100%;
    height: min-content;
    justify-content: center;
}

.card {
    --card-height: calc(0.66 * var(--card-width));;
    --card-padding: calc(0.05 * var(--card-height));
    --rotation: -1deg;
    height: var(--card-height);
    width: 100%;
    padding: var(--card-padding);
    box-sizing: border-box;

    display: grid;
    grid-gap: var(--card-padding);
    gap: var(--card-padding);
    grid-template-columns: 1fr 1fr 2px 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas: 
        "content content . . stamp"
        "content content line address address"
        "content content line address address"
        "content content . . .";
    justify-content: center;
    
    transform: rotate(var(--rotation));

    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.514);
    background-color: rgb(230, 230, 222);
    background-image: url('../assets/card/mask.png');
    background-size: calc(1 * var(--card-width)) calc(1 * var(--card-height));
    background-blend-mode: difference;

    transition: 0.25s ease;
}

.card.vertical {
    width: var(--card-height);
    height: var(--card-width);
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr 2px 1fr 1fr;
    grid-template-areas: 
        "address address address stamp"
        "address address address ."
        ". line line ."
        "content content content content"
        "content content content content";
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
    object-fit: cover;
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
    align-self: center;
}

.card .excerpt {
    grid-area: content;
    align-self: center;
}

.card .divider {
    grid-area: line;
}
</style>