<template lang='pug'>
Layout
    v-card(v-for='{node} in $page.allPost.edges' :key='node.id')
        h1 {{node.title}}
        p Publié le {{node.date}}
        p {{node.timeToRead}} min à lire
        g-link(:to='node.path') Lire l'article
</template>

<page-query>
{
    allPost {
        edges {
            node {
                title
                date
                path
                timeToRead
            }
        }
    }
}
</page-query>

<script lang='coffee'>

</script>