<template>
    <header>
        <g-link
            id="site-name"
            class="prepend-logo"
            to="/">{{ $static.metadata.siteName }}
            </g-link>
        <Navigation/>
    </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navigation from './Navigation'

export default {
    name: 'Header',
    components: {
        Navigation
    }
}
</script>

<style>
header {
    position: fixed;
    display: flex;
    top: 0px; left: 0px;
    width: 100%; height: 75px;
    border-bottom: 1px solid black;
}

header #site-name {
    margin: auto;
    text-decoration: none;
}
</style>