<template>
  <Layout
    class="full-post">
    <g-link 
        to="/" 
        class="link">
        &larr; Go Back
    </g-link>
    <div 
        class="post-title">
        <h1>{{$page.post.title}}</h1>
        <p 
            class="post-date">
            {{ $page.post.date}} | {{$page.post.timeToRead}} min read 
        </p>
    </div>
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
    location
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

<style>
.full-post p {
    font-family: Helvetica, sans-serif;
    padding: 1em;
}
</style>