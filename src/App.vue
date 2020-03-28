<template>
    <router-view />
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  }
}
</script>

<style>
:root {
    --unit: calc((1vw + 2vh) / 3);
    --size-separator: calc(0.15 * var(--unit));
}

* {
    margin: 0px; padding: 0px;
    font-family: Consolas, Arial;
}

*:not(h1):not(h2):not(h3) {
    font-size: 17px;
    font-size: calc(1.6 * var(--unit));
    line-height: 1.25em;
}

html {
    background-color: white;
}

.filter {
    display: none;
}

.vl {
    border-left: var(--size-separator) solid rgb(0, 0, 0);
    height: 100%;
}

.hl {
    border-top: var(--size-separator) solid black;
    width: 100%;
}
</style>
