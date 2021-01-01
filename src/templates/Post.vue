<template>
  <Layout
    :class="[
        'post',
        'page-content'
    ]">
    <!-- <g-link 
        to="/" 
        class="link">
        &larr; Go Back
    </g-link> -->
    <h1
        class="title">{{$page.post.title}}</h1>
    <Card
        class="postcard"
        :post="$page.post"
        v-resize-text="{ratio:3.2, minFontSize: '9px', maxFontSize: '50px', delay: 100}"/>
    <aside
        class="details">
        <ul>
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
    </aside>
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

<script>
import Card from '@/components/Card'
 
export default {
    name: 'post',
    components: {
        Card
    }
}
</script>

<style>
.post main {
    display: grid;
    grid-template-areas: 
        "wsl title details"
        "wsl summary details"
        "wsl divider details"
        "wsl card wsr"
        "wsl content wsr";
    grid-template-columns: 1fr 55vw 1fr;
    gap: 1em;
}

.post .postcard {
    grid-area: card;
    margin: 3em 0em;
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

.post .details ul {
    list-style: none;
}

.post .content {
    grid-area: content;
}

.post .content * {
    padding: 0.25em 0px;
}
</style>