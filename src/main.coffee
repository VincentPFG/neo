import DefaultLayout from '~/layouts/Default.vue'

export default (Vue, {router, head}) ->

	Vue.component 'Layout', DefaultLayout

	console.log router
	router.beforeEach (to, from, next) ->
		console.log 'changement de page'
		next()

	head.htmlAttrs = lang: 'fr'