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
    line-height: 1.75em;
    font-size: 17px;
}

* {
    margin: 0px; padding: 0px;
    font-family: Consolas, Helvetica, sans-serif;
}

html {
    background-color: rgb(196, 255, 226);
}

main {
    padding-top: 100px;
}

ul {
    list-style: square;
}

.prepend-logo::before {
    content: '\2265\2264';
    padding: 0px 1em;
    white-space: pre;
    letter-spacing: -0.2em;
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
