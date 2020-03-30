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
    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
    padding: 50px;
    justify-items: center;
    align-items: center;
}
</style>