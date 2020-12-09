<template>
  <div id="app">
    <NewClientForm/>
  </div>
</template>

<script>
  import "@/reset/reset.sass";
  import NewClientForm from "@/components/NewClientForm"

  export default {
    name: 'App',
    components: {
      NewClientForm
    }
  };
</script>

<style lang="sass">
  @font-face
    font-family: "Montserrat-m"
    src: url("./font/Montserrat/Montserrat-Medium.ttf")

  @font-face 
    font-family: "Montserrat-b"
    src: url("./font/Montserrat/Montserrat-BoldItalic.ttf")

  #app
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    min-height: 100vh
    background-image: url("assets/bg.jpg")
    background-size: cover
    padding: 0 40px
    .title
      margin-bottom: 20px
      font-family: "Montserrat-m"
      font-size: 23px
      color: white
      box-sizing: border-box
      padding: 0 10px

  @media (max-width: 680px)
    #app
      padding: 0
      background-image: none
      background-color: #3c3c3c
      .content-box
        margin: 0
        min-height: 650px
        border: none
      .submit
        border-radius: 0 0 0 0
        margin: 0
        min-width: 100%
        position: relative
        top: 9px
      .title
        border-radius: 0 0 0 0

  @media (max-width: 399px)
    .step
      flex-direction: column

    .form-item
      justify-content: space-between
      flex-direction: row

    label
      margin-left: 14px
</style>
