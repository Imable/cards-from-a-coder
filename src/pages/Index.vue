<template>
  <Layout>
    <section class="cards">
      <Card v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>
  </Layout>
</template>

<script>
import Card from "@/components/Card";
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
        addressee
        destination
        location
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
        image
      }
    }

  }
}
</page-query>

<style>
.cards {
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 1fr 1fr;
    padding: 50px;
}
</style>