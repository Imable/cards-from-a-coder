<template>
    <header>
        <strong>
            <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
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