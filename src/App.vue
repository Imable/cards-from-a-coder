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
@import url("https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap");

:root {
    --unit: calc((1vw + 2vh) / 3);
    --size-separator: calc(0.15 * var(--unit));
    line-height: 1.75em;
    font-size: 17px;
}

* {
    margin: 0px; padding: 0px;
    font-family: Helvetica, sans-serif;
}

h1, h2, h3, h4 {
    font-family: 'Reenie Beanie', Consolas, monospace;
}

html {
    /* background-color: rgb(196, 255, 226); */
    background-color: #fff;
    /* background-image:
    linear-gradient(90deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px),
    linear-gradient(#eee .1em, transparent .1em);
    background-size: 100% 1.2em; */
}

main {
    padding-top: 100px;
}

ul {
    list-style: square;
}

.page-content p, .page-content ul, .page-content ol, .page-content li {
    font-family: Helvetica, sans-serif;
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
