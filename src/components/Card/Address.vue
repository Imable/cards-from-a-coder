<template>
    <ul>
        <li
            v-for="(entry, prop, index) in entries"
            :key=index>
            <span>
                {{ prop }}
            </span>

            <span
                v-for="line in entry"
                :key="line">
                <div
                    aria-hidden
                    class="hl"/>
                <p>
                    {{ line }}
                </p>
            </span>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Address',
    props: [
        'entries'
    ]
}
</script>

<style>
.address {
    list-style: none;
}

.address p {
    font-family: Consolas, Helvetica, sans-serif;
}

.address li {
    padding-top: 10px;
}

.address li span {
    padding-top: 10px;
}
</style>