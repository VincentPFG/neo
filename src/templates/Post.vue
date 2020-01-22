<template lang='pug'>
Layout
    div(v-html='$page.post.content')
</template>

<page-query>
query ($path: String!) {
    post(path: $path) {
        title
        content
    }
}
</page-query>

<script lang='coffee'>
import '~/assets/markdown.sass'

export default
    metaInfo: ->
        title: @$page.post.title
</script>