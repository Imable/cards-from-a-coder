<template>
  <Layout>
    <section class="cards">
      <Card
        v-for="edge in $page.allPost.edges" 
        :key="edge.node.id" 
        :post="edge.node"/>
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
query {
  allPost {
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