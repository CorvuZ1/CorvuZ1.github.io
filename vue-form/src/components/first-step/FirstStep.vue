<template>
  <!-- 9 blocks -->
  <fieldset class="step">
    <legend>Основная <br> информация</legend>

    <div class="form-item">
    <label for="first-1">Фамилия</label>
    <input id="first-1" type="text">
  </div>

    <div class="form-item">
    <label for="first-2">Имя</label>
    <input id="first-2" type="text">
    </div>

    <div class="form-item">
    <label for="first-3">Отчество</label>
    <input id="first-3" type="text">
    </div>

    <div class="form-item">
    <label for="first-4">Дата рождения</label>
    <input id="first-4" type="date">
    </div>

    <div class="form-item">
    <label for="first-5">Номер телефона</label>
    <input id="first-5" type="number">
    </div>

    <div class="form-item">
    <label for="first-6">Пол</label>
    <select id="first-6">
      <option value="Мужчина">Мужчина</option>
      <option value="Женщина">Женщина</option>
    </select>
    </div>

    <div class="form-item">
    <label for="group">Группа</label>
    <select id="group" multiple>
      <option value="VIP">VIP</option>
      <option value="Проблемные">Проблемные</option>
      <option value="ОМС">ОМС</option>
    </select>
  </div>

  <div class="form-item">
    <label for="first-8">Лечащий врач</label>
    <select id="first-8">
      <option value="Иванов">Иванов</option>
      <option value="Захаров">Захаров</option>
      <option value="Чернышева">Чернышева</option>
    </select>
  </div>

  <div class="form-item">
  <label for="first-9">Не отправлять СМС</label>
  <input id="first-9" type="checkbox">
  </div>

  </fieldset>
</template>

<style lang="sass">
  .step
    display: flex
    justify-content: center
    flex-wrap: wrap
    z-index: 5
    margin-top: 40px auto 0 auto
    width: 100%
    
    input, select
      margin: 15px 15px
      border-radius: 50px
      border: none
      height: 23px
      padding: 0 10px
      font-family: "Montserrat-m"
      width: 150px

  #group
    overflow: hidden
    height: 51px  
    border-radius: 5px

  input[type='number']
    -moz-appearance:textfield

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button 
    -webkit-appearance: none

  input[type="date"]::-webkit-calendar-picker-indicator
    display: none
    -webkit-appearance: none

  legend
    margin-bottom: 13px
    font-size: 19px
    color: white
    font-family: Montserrat-b
    text-align: center
    margin: 20px 0
    border-radius: 50px
    border: 2px solid gray
    padding: 6px 15px

  label
    color: white
    font-family: Montserrat-m
    font-size: 14px

  .form-item
    display: flex
    align-items: center
    flex-direction: column

  fieldset
    border-top: 2px solid gray

  .step2 
    margin: 30px 0
  

</style>


