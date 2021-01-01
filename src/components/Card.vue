<template>
    <div
        class="card-container"
        :class="{
            vertical: vertical
        }">
        <svg
            class="filter"
            aria-hidden>
            <filter 
                id="posterize">
                <feComponentTransfer>
                    <feFuncR type="discrete" tableValues="0 .2 .4 .6 .8 1"/>
                    <feFuncG type="discrete" tableValues="0 .2 .4 .6 .8 1"/>
                    <feFuncB type="discrete" tableValues="0 .2 .4 .6 .8 1"/>
                </feComponentTransfer>
            </filter>
        </svg>

        <div 
            class="card"
            ref="card"
            :class="{
                flipped: flipped,
                vertical: vertical
            }"
            @click="flipped=!flipped">
            <Stamp
                class="stamp"
                :stamp="post.image"
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
    /* Fallback rotation if JavaScript is somehow not kicking in */
    --rotation: -1deg;
    /* Fallback font-size if v-resize-text does not work */
    font-size: calc(100% - 0.4px);

    display: flex;
    width: 100%;
    /* height: min-content; */
    justify-content: center;
    line-height: 1.25em;

    grid-column: span 3;
    grid-row: span 2;
}

.card-container.vertical {
    grid-column: span 2;
    grid-row: span 3;
}

.card {
    --card-height: calc(0.66 * var(--card-width));;
    --card-padding: calc(0.04 * var(--card-height));
    height: var(--card-height);
    width: var(--card-width);
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
    background-color: white;
    background-image: url('../assets/card/mask.png');
    background-size: calc(1 * var(--card-width)) calc(1 * var(--card-height));
    background-blend-mode: difference;

    transition: all 0.25s ease;
    transition-property: transform, box-shadow;
}

.card:hover {
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.514);
}

.card.vertical {
    --card-height: calc(1.33 * var(--card-width));
    height: var(--card-height);
    width: var(--card-width);
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
}

.card .card-image {
    position: absolute;
    left: 0px; top: 0px;
    width: 100%; height: 100%;
    display: none;
    opacity: 0;
    object-fit: cover;
    filter: url('#posterize');
}

.card.flipped {
    transform: rotate(calc(-1 * var(--rotation))) rotate3d(0, 1, 0, 180deg);
    /* Flip the box shadow to still point to the same direction */
    box-shadow: -1px 2px 3px rgba(0, 0, 0, 0.514);
    border: white var(--card-padding) solid;
}

.card.flipped:hover {
    box-shadow: -1px 2px 10px rgba(0, 0, 0, 0.514);
}

.card.flipped * {
    opacity: 0;
}

.card.flipped .card-image {
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
    max-height: 100%;
    grid-area: content;
    align-self: center;
}

.card .divider {
    grid-area: line;
}

@media only screen and (max-width: 350px) {
    .card-container {
        grid-column: 1 / -1;
    }
}
</style>