<template>
  <Layout>
    <!-- {{$page.posts.totalCount}} -->
    <section class="cards">
      <Card
        v-for="edge in $page.posts.edges" 
        :key="edge.node.id" 
        :post="edge.node"
        v-resize-text="edge.node.vertical ? {ratio:2.35, minFontSize: '9px', maxFontSize: '50px', delay: 100} : {ratio:3.1, minFontSize: '9px', maxFontSize: '50px', delay: 100}"/>
    </section>
  </Layout>
</template>

<script>
import Card from "@/components/Card"

export default {
  components: {
    Card
  },
  metaInfo: {
    title: "Home"
  }
};
</script>

<page-query>
query PostsByCategory {
  posts: allPost {
    totalCount
    edges {
      node {
        id
        title
        sender
        location
        category
        receiver
        destination
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
        image
        flipped
        vertical
      }
    }
  }
}
</page-query>

<style>
.cards {
    --cards-spacing: calc(7 * var(--unit));
    display: grid;
    grid-gap: var(--cards-spacing);
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    padding: var(--cards-spacing);
    justify-items: center;
    align-items: center;
    grid-auto-flow: dense;
}
</style>