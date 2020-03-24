<template>
    <div>
        <g-image 
            :alt="`Stamp from ${location} in top-right corner.`"
            :src="stamp"/>
        <span 
            class="location">
            {{ location }}
            </span>
    <g-image
        aria-hidden
        class="postage-stamp"
        src="~/assets/stamp/postage-stamp.svg"/>
    <span
        class="posted-on">
        {{ postedOn }}
        </span>
    </div>
</template>

<script>
import RandomRotation from '~/mixins/RandomRotation'

export default {
    name: 'Stamp',
    props: [
        'stamp',
        'location',
        'postedOn'
    ],
    mixins: [
        RandomRotation
    ]
}
</script>

<style>
/* Courtesy: https://codepen.io/orhanveli/pen/tbGJL */
.stamp {
    /* --stamp-width: 5vw; */
    --stamp-width: calc(0.12 * var(--card-width));
    --stamp-height: calc(1.5 * var(--stamp-width));
    --stamp-padding: calc(0.5 * var(--stamp-border-count));
    --stamp-border-count: calc(0.1 * var(--stamp-width));
    --stamp-border-size: calc(0.25 * var(--stamp-border-count));
    --stamp-border-offset: calc(-0.5 * var(--stamp-border-count));
    --rotation: 1deg;
	width: var(--stamp-width);
	height: var(--stamp-height);
	padding: var(--stamp-padding);
	background: white;
	position: relative;
	filter: drop-shadow(0px 0px 3px rgba(0,0,0,0.5));
	background: radial-gradient(
		transparent 0px, 
		transparent var(--stamp-border-size), 
		white var(--stamp-border-size),
		white
	);
  
	background-size: var(--stamp-border-count) var(--stamp-border-count);
	background-position: var(--stamp-border-offset) var(--stamp-border-offset);
    transform: rotate(var(--stamp-rotation));
}

.stamp .location {
    display: block;
    width: var(--stamp-width);
    text-align: center;
	position: absolute;
	bottom: 0; left: 0;
	font: bold 14px arial;
	color: rgb(255, 255, 255);
	opacity: 0.75;
	line-height: 100%;
	filter: drop-shadow(0px 0px 1px rgb(0, 0, 0));
	padding: var(--stamp-padding);
}

.stamp img {
	width: inherit;
	height: inherit;
}

.stamp .postage-stamp {
    position: absolute;
    left: 0px; top: 0px;
    width: calc(3 * var(--stamp-width));
    transform: translateX(-75%) rotate(var(--rotation));
    mask-image: url('../../assets/card/mask.png');
}

.stamp .posted-on {
    position: absolute;
    left: 0px; top: 0px;
    width: calc(3 * var(--stamp-width));
    transform: translateX(-75%) rotate(var(--rotation));
    font-size: 1.25em;
}

</style>