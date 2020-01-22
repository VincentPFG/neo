<template lang='pug'>
Layout
</template>

<script lang='coffee'>
import ntlId from 'netlify-identity-widget'

export default
    mounted: ->
        ntlId.init()
        ntlId.open()
</script>