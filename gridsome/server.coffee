module.exports = ({configureServer, loadSource}) ->

    configureServer (app) ->
        app.get '/express', (r, s) ->
            s.send 'hello world'

    loadSource ({addCollection, addSchemaTypes, addSchemaResolvers}) ->
        addCollection 'Test'
            .addNode
                foo: 'truc'
                bar: 'machin'

        addSchemaTypes """
            type MonType {
                foo: String
            }
        """

        addSchemaResolvers
            MonType:
                foo: -> 'coucou'