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
* {
    margin: 0px; padding: 0px;
}

*:not(h1):not(h2):not(h3) {
    font-size: 17px;
    line-height: 1.25em;
}



.vl {
    border-left: 2px solid rgb(0, 0, 0);
    height: 100%;
}
</style>
