<template>
  <div class="content-box">
    <h1 class="title">Регистрация пациента</h1>
    <div class="img">
    <form class="form">
      <div class="wrapper">
        <FirstStep/>
        <SecondStep/>
        <ThirdStep/>
      </div>
      <input class="submit" type="submit">
    </form>
    </div>
  </div>
</template>

<script>
  import FirstStep from "./first-step/FirstStep"
  import SecondStep from "./second-step/SecondStep"
  import ThirdStep from "./third-step/ThirdStep"

  export default {
      components: {
        FirstStep,
        SecondStep,
        ThirdStep
      }
  }
</script>

<style lang="sass" scoped>
  $dark-purple: #4e3c7a

  .content-box
    width: 100%
    max-width: 1200px
    border: 2px solid white
    border-radius: 7px
    margin: 20px 0
    min-height: 650px
    background-color: rgba(0,0,0,0.7)
    .title
      margin: 0
      height: 50px
      display: flex
      justify-content: center
      align-items: center
      background-color: $dark-purple
      border-radius: 7px 7px 0 0
      text-align: center

    .img
      position: absolute
      min-height: 600px
      position: relative
      background-repeat: no-repeat
      background-position: left
      background-size: cover
      border-radius: 0px 0px 7px 7px

    .wrapper
      width: 100%
      min-height: 490px
      display: flex
      justify-content: center
      align-items: center
      flex-wrap: wrap
      padding: 30px 0 20px 0

    .submit
      display: block
      width: 100%
      max-width: 400px 
      height: 50px
      margin: 9px auto 0 auto
      z-index: 10
      background-color: $dark-purple
      border: none
      color: white
      font-family: Montserrat-m
      font-size: 17px
      border-radius: 7px 7px 0 0
      cursor: pointer
</style>

