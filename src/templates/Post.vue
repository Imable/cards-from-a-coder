<template>
  <Layout
    class="post">
    <!-- <g-link 
        to="/" 
        class="link">
        &larr; Go Back
    </g-link> -->
    <h1
        class="title">{{$page.post.title}}</h1>
    <ul 
        class="details">
        <li>
            Posted on {{ $page.post.date}}
        </li>
        <li>
           Time to read {{ $page.post.timeToRead }} 
        </li>
        <li>
            Tags {{ $page.post.category }}
        </li>
    </ul>
    <p
        class="summary">
        Quick summary: {{ $page.post.description }}
    </p>
    <div
        class="hl divider"
        aria-hidden>
    </div>
    <div 
        class="content"
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
.post main {
    display: grid;
    grid-template-areas: 
        "wsl title details"
        "wsl summary details"
        "wsl divider wsr"
        "wsl content wsr";
    grid-template-columns: 1fr 55vw 1fr;
    gap: 1em;
}

.post p, .post ul, .post ol, .post li {
    font-family: Helvetica, sans-serif;
}

.post .title {
    grid-area: title;
}

.post .summary {
    font-style: italic;
    grid-area: summary;
}

.post .divider {
    grid-area: divider;
}

.post .details {
    grid-area: details;
}

.post .content {
    grid-area: content;
}

.post .content * {
    padding: 0.25em 0px;
}
</style>