<template>
    <div>
        <div
            v-for="(value, prop) in $props"
            :key=value>
            <p
                :class="`address-${prop}`">
                {{ value }}
            </p>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Address',
    props: [
        'destination'
    ]
}
</script>