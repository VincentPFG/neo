<template lang='pug'>
Layout
    v-text-field(v-model='email' label='email')
    v-text-field(v-model='password' label='password')
    v-btn(@click='signUp') sign up
</template>

<script lang='coffee'>
import GoTrue from "gotrue-js"

auth = new GoTrue APIUrl: "https://neotest.netlify.com/.netlify/identity"

export default
    data: ->
        email: ''
        password: ''
    methods:
        signUp: ->
            auth.signup(@email, @password)
                .then (response) => console.log("Confirmation email sent", response)
                .catch (error) => console.log("It's an error", error)
</script>