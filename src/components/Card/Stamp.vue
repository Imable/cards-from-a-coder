<template>
    <div class="stamp">
        <g-image 
            src="~/assets/stamps/utrecht.png"/>
        <span class="stamp-location">
            {{ location }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'Stamp',
    props: [
        'location'
    ]
}
</script>

<style>
/* Courtesy: https://codepen.io/orhanveli/pen/tbGJL */
.stamp {
    --stamp-width: 100px;
    --stamp-width: calc(0.15 * var(--card-width));
    --stamp-height: calc(1.5 * var(--stamp-width));
    --stamp-padding: calc(0.5 * var(--stamp-border-count));
    --stamp-border-count: calc(0.1 * var(--stamp-width));
    --stamp-border-size: calc(0.25 * var(--stamp-border-count));
    --stamp-border-offset: calc(-0.5 * var(--stamp-border-count));
	width: var(--stamp-width);
	height: var(--stamp-height);
	padding: var(--stamp-padding);
	background: white;
	position: relative;
	filter: drop-shadow(0px 0px 10px rgba(0,0,0,0.5));
	background: radial-gradient(
		transparent 0px, 
		transparent var(--stamp-border-size), 
		white var(--stamp-border-size),
		white
	);
  
	background-size: var(--stamp-border-count) var(--stamp-border-count);
	background-position: var(--stamp-border-offset) var(--stamp-border-offset);
}

.stamp-location {
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

</style>