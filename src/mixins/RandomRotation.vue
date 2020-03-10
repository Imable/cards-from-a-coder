<script>
export default {
    name: 'RandomRotation',
    mounted () {
        console.log('ran')
        this.$el.style.setProperty(
            '--rotation', 
            `${Math.round(Math.random() * 6 - 3)}deg`
        )
    }
}
</script>