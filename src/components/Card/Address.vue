<template>
    <ul>
        <li
            v-for="(value, prop) in $props"
            :key=value>
            <p
                :class="`address-${prop}`">
                <span v-if="value">
                    {{ value }}
                </span>
                <span v-else>
                    &nbsp;
                </span>
            </p>
            <div
                aria-hidden
                class="hl"/>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Address',
    props: [
        'addressee',
        'destination'
    ]
}
</script>

<style>
.address {
    list-style: none;
}

.address li:not(:nth-child(1)) p {
    padding-top: 10px;
}
</style>