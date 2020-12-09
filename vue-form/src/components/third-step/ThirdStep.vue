<template>
  <!-- 5 blocks -->
  <fieldset class="step">
    <legend>Паспорт</legend>

    <div class="form-item">
    <label for="third-1">Тип документа</label>
    <select id="third-1">
      <option value="Паспорт">Паспорт</option>
      <option value="Свидетельство о рождении">Свидетельство о рождении</option>
      <option value="Водительское удостоверение">Водительское удостоверение</option>
    </select>
    </div>

    <div class="form-item">
    <label for="third-2">Серия</label>
    <input id="third-2" type="number">
    </div>

    <div class="form-item">
    <label for="third-3">Номер</label>
    <input id="third-3" type="number">
    </div>

    <div class="form-item">
    <label for="third-4">Кем выдан</label>
    <input id="third-4" type="text">
    </div>

    <div class="form-item">
    <label for="third-5">Дата выдачи</label>
    <input id="third-5" type="date">
    </div>
  </fieldset>
</template>