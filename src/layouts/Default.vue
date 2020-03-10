<template>
    <body>
        <Header/>
        <main>
            <slot/>
        </main>
        <Footer/>
    </body>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
    name: 'DefaultLayout',
    components: {
        Header,
        Footer
    } 
}
</script>

<style>
</style>
