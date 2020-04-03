<template>
  <Layout
    class="post">
    <!-- <g-link 
        to="/" 
        class="link">
        &larr; Go Back
    </g-link> -->
    <h1>{{$page.post.title}}</h1>
    <p
        class="quick-summary">
        Quick summary: {{ $page.post.description }}
    </p>
    <div
        class="hl"
        aria-hidden>
    </div>
    <details 
        class="post-date">
        {{ $page.post.date}} | {{$page.post.timeToRead}} min read 
    </details>
    <div 
        class="post-content"
        v-html="$page.post.content">
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
        id
        title
        sender
        location
        category
        receiver
        destination
        timeToRead
        description
        content
        date (format: "D MMMM YYYY")
        path
        image
  }
}
</page-query>

<style>
.post {
    display: grid;
}

.post p, .post ul, .post ol, .post li {
    font-family: Helvetica, sans-serif;
}

.post .quick-summary {
    font-style: italic;
}
</style>