<template>
  <div class="main-calc-wrapper">
    <div class="row">
      <div class="col-12">
        <small class="calc-step">Шаг 1</small>
        <b-form-group
            label="Длина"
            horizontal
        >
          <b-input-group append="м²">
            <b-form-input
                    v-model.number="inputData.long"
                    placeholder="В метрах"
                    @keydown="changeDown"
                    @focus="clearInput"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
        <small class="calc-step">Шаг 2</small>
        <b-form-group label="Ширина" horizontal>
          <b-input-group append="м²">
            <b-form-input
                    v-model.number="inputData.width"
                    placeholder="В метрах"
                    @keydown="changeDown"
                    @focus="clearInput"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
        <b-form-group label="Строительная площадь" horizontal><span class="main-calc-wrapper__computed-value">{{ buildingArea | currency(' м	&sup2;', 2, { symbolOnLeft: false }) }}</span></b-form-group>
        <b-form-group label="Площадь фасада" horizontal><span class="main-calc-wrapper__computed-value">{{ facadeArea | currency(' м	&sup2;', 2, { symbolOnLeft: false }) }}</span></b-form-group>
        <b-form-group label="Площадь окон " horizontal><span class="main-calc-wrapper__computed-value">{{ windowArea | currency(' м	&sup2;', 2, { symbolOnLeft: false }) }}</span></b-form-group>
        <small class="calc-step">Шаг 3</small>
        <div class="main-calc-wrapper__radio-label-list">
          <label class="main-calc-wrapper__radio-label-item" :class="{'active' : inputData.area === '1'}">
            <img src="https://simferopol.virmak.ru/local/templates/zukka/img/calculator/1.png" alt="Один этаж без мансарды">
            <b-form-radio v-model="inputData.area" name="area" value="1">Один этаж без мансарды</b-form-radio>
          </label>
          <label class="main-calc-wrapper__radio-label-item" :class="{'active' : inputData.area === '1-M'}">
            <img src="https://simferopol.virmak.ru/local/templates/zukka/img/calculator/2.png" alt="Один этаж с мансардой">
            <b-form-radio v-model="inputData.area" name="area" value="1-M">Один этаж с мансардой</b-form-radio>
          </label>
          <label class="main-calc-wrapper__radio-label-item" :class="{'active' : inputData.area === '2'}">
            <img src="https://simferopol.virmak.ru/local/templates/zukka/img/calculator/3.png" alt="Два полных этажа">
            <b-form-radio v-model="inputData.area" name="area" value="2">Два полных этажа</b-form-radio>
          </label>
          <label class="main-calc-wrapper__radio-label-item" :class="{'active' : inputData.area === '2-M'}">
            <img src="https://simferopol.virmak.ru/local/templates/zukka/img/calculator/4.png" alt="Два этажа с мансардой">
            <b-form-radio v-model="inputData.area" name="area" value="2-M">Два этажа с мансардой</b-form-radio>
          </label>
          <label class="main-calc-wrapper__radio-label-item" :class="{'active' : inputData.area === '3'}">
            <img src="https://simferopol.virmak.ru/local/templates/zukka/img/calculator/5.png" alt="Три полных этажа">
            <b-form-radio v-model="inputData.area" name="area" value="3">Три полных этажа</b-form-radio>
          </label>
          <label class="main-calc-wrapper__radio-label-item" :class="{'active' : inputData.area === '3-M'}">
            <img src="https://simferopol.virmak.ru/local/templates/zukka/img/calculator/6.png" alt="Три этажа с мансардой">
            <b-form-radio v-model="inputData.area" name="area" value="3-M">Три этажа с мансардой</b-form-radio>
          </label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <small class="calc-step">Шаг 4</small>
        <b-form-group :label="options.foundation.title" horizontal>
          <b-form-select v-model="options.foundation.value" :options="options.foundation.items"></b-form-select>
        </b-form-group>
      </div>
      <div class="col-4"><div class="main-calc-wrapper__service-value">{{ foundationCalc | currency(' ₽', 2, { symbolOnLeft: false, thousandsSeparator: ' ' }) }}</div></div>

      <div class="col-8">
        <small class="calc-step">Шаг 5</small>
        <b-form-group :label="options.material.title" horizontal>
          <b-form-select v-model="options.material.value" :options="options.material.items"></b-form-select>
        </b-form-group>
      </div>
      <div class="col-4"><div class="main-calc-wrapper__service-value">{{ materialCalc | currency(' ₽', 2, { symbolOnLeft: false, thousandsSeparator: ' ' }) }}</div></div>
      <div class="col-8" v-if="floors !== 1 || floors === 1 && attic">
        <small class="calc-step">Шаг 6</small>
        <b-form-group :label="options.interfloorOverlap.title" horizontal>
          <b-form-select v-model="options.interfloorOverlap.value" :options="options.interfloorOverlap.items"></b-form-select>
        </b-form-group>
      </div>
        <div class="col-4" v-if="floors !== 1 || floors === 1 && attic"><div class="main-calc-wrapper__service-value">{{ interfloorOverlapCalc | currency(' ₽', 2, { symbolOnLeft: false, thousandsSeparator: ' ' }) }}</div></div>
      <div class="col-8">
        <small class="calc-step">Шаг {{ floors !== 1 || floors === 1 && attic ? 7 : 6}}</small>
        <b-form-group :label="options.roof.title" horizontal>
          <b-form-select v-model="options.roof.value" :options="options.roof.items"></b-form-select>
        </b-form-group>
      </div>
      <div class="col-4"><div class="main-calc-wrapper__service-value">{{ roofCalc | currency(' ₽', 2, { symbolOnLeft: false, thousandsSeparator: ' ' }) }}</div></div>

      <div class="col-8">
        <small class="calc-step">Шаг {{ floors !== 1 || floors === 1 && attic ? 8 : 7}}</small>
        <b-form-group :label="options.facadeDecoration.title" horizontal>
          <b-form-select v-model="options.facadeDecoration.value" :options="options.facadeDecoration.items"></b-form-select>
        </b-form-group>
      </div>
      <div class="col-4"> <div class="main-calc-wrapper__service-value">{{ facadeDecorationCalc | currency(' ₽', 2, { symbolOnLeft: false, thousandsSeparator: ' ' }) }}</div></div>

      <div class="col-8">
        <small class="calc-step">Шаг {{ floors !== 1 || floors === 1 && attic ? 9 : 8}}</small>
        <b-form-group :label="options.window.title" horizontal>
          <b-form-select v-model="options.window.value" :options="options.window.items"></b-form-select>
        </b-form-group>
      </div>
      <div class="col-4"><div class="main-calc-wrapper__service-value">{{ windowCalc | currency(' ₽', 2, { symbolOnLeft: false, thousandsSeparator: ' ' }) }}</div></div>
    </div>
    <div class="row">
      <div class="col-12">
        <small class="calc-step">Шаг {{ floors !== 1 || floors === 1 && attic ? 10 : 9}}</small>
        <div class="d-flex align-items-center justify-content-center pt-3 mb-5">
          <b-button variant="danger" @click="allCalc">Рассчитать стоимость дома</b-button>
        </div>
        <div class="main-calc-wrapper__result-wrapper" v-if="result">
          <h5 class="main-calc-wrapper__result-value">Итоговая стоимость строительства: {{ result | currency(' ₽', 2, { symbolOnLeft: false, thousandsSeparator: ' ' }) }}</h5>
          <h5 class="main-calc-wrapper__result-area">Стоимость 1 м&sup2; : {{ resultArea | currency(' ₽', 2, { symbolOnLeft: false, thousandsSeparator: ' ' }) }}</h5>
          <p class="main-calc-wrapper__result-descriptions">{{ descriptions }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { BFormGroup, BFormSelect, BButton, BInputGroup, BFormInput, BFormRadio } from 'bootstrap-vue'
  export default {
    name: "HomeKitCalculator",
    components: {
      'b-form-group': BFormGroup,
      'b-form-select': BFormSelect,
      'b-button': BButton,
      'b-input-group': BInputGroup,
      'b-form-input': BFormInput,
      'b-form-radio': BFormRadio
    },
    props: {
      domain: {
        default: ''
      },
      descriptions: {
        type: String,
        default: 'Данный список работ и материалов может корректироваться в зависимости от специфики конкретного объекта и желаний заказчика. Окончательная цена строительства дома складывается из многих факторов: общей площади и числа помещений, стоимости материалов, исходной сложности работ, специфики рельефа, геологии участка, сейсмичности площадки, стесненных условий строительства  и т.д. Имеет значение и сложность архитектурной формы: наличие фигурных элементов, нестандартность планировки и т.д. Порой в процессе воплощения отдельных задач требуется применение специализированной техники, что тоже влияет на финальную цену строительства дома.\n' +
            'Чтобы узнать бюджет, на который вы сможете ориентироваться, обратитесь к нам за составлением сметы. Профессиональный проект гарантирует не только полную финансовую прозрачность, но и качество проведения работ и сохранность материалов.\n'
      },
      options: {
        type: [Object, String],
        default: function () {
          return {
            // Коэфициент
            k: 0.8,
            // Фундамент
            foundation: {
              title: 'Фундамент с ж/б плитой пола',
              value: 0,
              items: [
                { value: 0, text: 'нет' },
                { value: 5300, text: 'Ленточный' },
                { value: 5200, text: 'Свайно-ростверковый' },
                { value: 6800, text: 'Плитный' }
              ]
            },
            // Материал
            material: {
              title: 'Материал несущих стен (без перегородок)',
              value: 0,
              items: [
                { value: 0, text: 'нет' },
                { value: 5000, text: 'Кирпич бутовый, 380мм' },
                { value: 4000, text: 'Газосиликатный блок, 300мм' },
                { value: 4500, text: '«Теплая керамика» (POROMAX), 380мм' },
                { value: 3700, text: 'Природный камень ракушняк' },
              ]
            },
            // Межэтажное перекрытие
            interfloorOverlap: {
              title: 'Межэтажное перекрытие',
              value: 0,
              items: [
                { value: 0, text: 'нет' },
                { value: 4850, text: 'Монолитная плита с ж/б лестницей' },
                { value: 2700, text: 'По деревянным балкам с деревянной лестницей' },
              ]
            },
            // Кровля
            roof: {
              title: 'Кровля с чердачным перекрытием',
              value: 0,
              items: [
                { value: 0, text: 'нет' },
                { value: 4400, text: 'Металлочерепица' },
                { value: 5500, text: 'Цементно-песчаная черепица BRAAS' },
                { value: 4100, text: 'Фальцевая кровля' },
                { value: 4500, text: 'Гибкая черепица (SHINGLAS)' },
                { value: 6000, text: 'Плоская ж/б плита с утеплением и ПВХ  мембраной' },
                { value: 7000, text: 'Керамическая черепица BRAAS' },
              ]
            },
            // Отделка фасада
            facadeDecoration: {
              title: 'Отделка фасада',
              value: 0,
              items: [
                { value: 0, text: 'нет' },
                { value: 2100, text: '«Гибкий» клинкер' },
                { value: 2600, text: '«Короед»' },
                { value: 3000, text: 'Керамический облицовочный кирпич' },
              ]
            },
            // Окна
            window: {
              title: 'Окна',
              value: 0,
              items: [
                { value: 0, text: 'нет' },
                { value: 6500, text: 'Металлопластиковые без ламинации (белые)' },
                { value: 7000, text: 'Металлопластиковые с ламинацией (под дерево или цветные)' },
                { value: 11000, text: 'Алюминиевые' },
              ]
            },
          }
        }
      }
    },
    data() {
      return {
        result: null,
        resultArea: null,
        inputData: {
          long: 0,
          width: 0,
          area: '1'
        }
      }
    },
    methods: {
      validate() {
        let result = true;
        if(!this.buildingArea || !this.facadeArea || !this.floors || !this.foundationCalc || !this.materialCalc) {
          result = false
        }
        return result;
      },
     allCalc() {
        if(!this.validate()) {
          this.$bvToast.toast('Для выполнения подсчета необходимо пройти все шаги!', {
            title: 'Ошибка',
            variant: 'danger',
            solid: true,
          });
          return;
        }
       this.result =  this.foundationCalc + this.materialCalc + this.interfloorOverlapCalc + this.roofCalc + this.facadeDecorationCalc + this.windowCalc
       this.resultArea = this.result / this.buildingArea
     },
      clearInput(event) {
       if(event.target.value == 0) {
         event.target.value = ''
       }
      },
      filterKeys(code) {
       const map = {
          'ArrowLeft': true,
          'ArrowRight': true,
          'Backspace': true,
          'Period': true,
          'Comma': true,
          'Digit1': true,
          'Digit2': true,
          'Digit3': true,
          'Digit4': true,
          'Digit5': true,
          'Digit6': true,
          'Digit7': true,
          'Digit8': true,
          'Digit9': true,
          'Digit0': true,
          'Slash': true,
          'Numpad1': true,
          'Numpad2': true,
          'Numpad3': true,
          'Numpad4': true,
          'Numpad5': true,
          'Numpad6': true,
          'Numpad7': true,
          'Numpad8': true,
          'Numpad9': true,
          'Numpad0': true,
          'NumpadDecimal': true
        }
        if(map[code]) {
          return true
        } else {
          return false
        }
      },
      changeDown(event) {
       if(this.filterKeys(event.code)) {
         if(event.code === 'Comma' || event.code === 'Slash') {
           event.preventDefault()
           event.target.value = event.target.value + '.'
         }
       } else {
         event.preventDefault()
       }
      },
      dynamicCountingCoefficients() {
        switch(this.floors) {
          case 1: // 1-й
            this.options.foundation.items[1].value = 5300
            this.options.foundation.items[2].value = 5200
            this.options.foundation.items[3].value = 6800

            this.options.material.items[1].value = 5000
            this.options.material.items[2].value = 4000
            this.options.material.items[3].value = 4500
            this.options.material.items[4].value = 3700
            break;
          case 2:
            if (this.attic) { // 1-й с мансардой
              if (this.buildingArea <= 120) {
                this.options.foundation.items[1].value = 7000
                this.options.foundation.items[2].value = 6812
                this.options.foundation.items[3].value = 8908

                this.options.material.items[1].value = 8219
                this.options.material.items[2].value = 6344
                this.options.material.items[3].value = 7594
                this.options.material.items[4].value = 6219
              } else if (121 <= this.buildingArea && this.buildingArea <= 170) {
                this.options.foundation.items[1].value = 6650
                this.options.foundation.items[2].value = 6487
                this.options.foundation.items[3].value = 8483

                this.options.material.items[1].value = 7519
                this.options.material.items[2].value = 5738
                this.options.material.items[3].value = 6925
                this.options.material.items[4].value = 5619
              } else if (171 <= this.buildingArea && this.buildingArea <= 250) {
                this.options.foundation.items[1].value = 6300
                this.options.foundation.items[2].value = 6178
                this.options.foundation.items[3].value = 8079

                this.options.material.items[1].value = 6819
                this.options.material.items[2].value = 5132
                this.options.material.items[3].value = 6257
                this.options.material.items[4].value = 5019
              } else if (251 <= this.buildingArea && this.buildingArea <= 300) {
                this.options.foundation.items[1].value = 5950
                this.options.foundation.items[2].value = 5883
                this.options.foundation.items[3].value = 7694

                this.options.material.items[1].value = 6119
                this.options.material.items[2].value = 4526
                this.options.material.items[3].value = 5588
                this.options.material.items[4].value = 4419
              } else if (this.buildingArea >= 301) {
                this.options.foundation.items[1].value = 5600
                this.options.foundation.items[2].value = 5533
                this.options.foundation.items[3].value = 7327

                this.options.material.items[1].value = 5419
                this.options.material.items[2].value = 3919
                this.options.material.items[3].value = 4919
                this.options.material.items[4].value = 3819
              }
            } else { // 2-й
              if (this.buildingArea <= 120) {
                this.options.foundation.items[1].value = 7000
                this.options.foundation.items[2].value = 6812
                this.options.foundation.items[3].value = 8908

                this.options.material.items[1].value = 6575
                this.options.material.items[2].value = 5075
                this.options.material.items[3].value = 6075
                this.options.material.items[4].value = 4975
              } else if (121 <= this.buildingArea && this.buildingArea <= 170) {
                this.options.foundation.items[1].value = 6650
                this.options.foundation.items[2].value = 6487
                this.options.foundation.items[3].value = 8483

                this.options.material.items[1].value = 6015
                this.options.material.items[2].value = 4590
                this.options.material.items[3].value = 5540
                this.options.material.items[4].value = 4495
              } else if (171 <= this.buildingArea && this.buildingArea <= 250) {
                this.options.foundation.items[1].value = 6300
                this.options.foundation.items[2].value = 6178
                this.options.foundation.items[3].value = 8079

                this.options.material.items[1].value = 5455
                this.options.material.items[2].value = 4105
                this.options.material.items[3].value = 5005
                this.options.material.items[4].value = 4015
              } else if (251 <= this.buildingArea && this.buildingArea <= 300) {
                this.options.foundation.items[1].value = 5950
                this.options.foundation.items[2].value = 5883
                this.options.foundation.items[3].value = 7694

                this.options.material.items[1].value = 4895
                this.options.material.items[2].value = 3620
                this.options.material.items[3].value = 4470
                this.options.material.items[4].value = 3535
              } else if (this.buildingArea >= 301) {
                this.options.foundation.items[1].value = 5600
                this.options.foundation.items[2].value = 5533
                this.options.foundation.items[3].value = 7327

                this.options.material.items[1].value = 4335
                this.options.material.items[2].value = 3135
                this.options.material.items[3].value = 3935
                this.options.material.items[4].value = 3055
              }
            }
            break;
          case 3:
            if (this.attic) { // 2-й с мансардой
              if (this.buildingArea <= 120) {
                this.options.foundation.items[1].value = 8400
                this.options.foundation.items[2].value = 8174
                this.options.foundation.items[3].value = 10689

                this.options.material.items[1].value = 9000
                this.options.material.items[2].value = 7125
                this.options.material.items[3].value = 8375
                this.options.material.items[4].value = 7000
              } else if (121 <= this.buildingArea &&  this.buildingArea <= 170) {
                this.options.foundation.items[1].value = 7980
                this.options.foundation.items[2].value = 7784
                this.options.foundation.items[3].value = 10179

                this.options.material.items[1].value = 8257
                this.options.material.items[2].value = 6475
                this.options.material.items[3].value = 7663
                this.options.material.items[4].value = 6357
              } else if (171 <= this.buildingArea && this.buildingArea <= 250) {
                this.options.foundation.items[1].value = 7560
                this.options.foundation.items[2].value = 7413
                this.options.foundation.items[3].value = 9695

                this.options.material.items[1].value = 7513
                this.options.material.items[2].value = 5826
                this.options.material.items[3].value = 6950
                this.options.material.items[4].value = 5713
              } else if (251 <= this.buildingArea && this.buildingArea <= 300) {
                this.options.foundation.items[1].value = 7140
                this.options.foundation.items[2].value = 7059
                this.options.foundation.items[3].value = 9232

                this.options.material.items[1].value = 6769
                this.options.material.items[2].value = 5176
                this.options.material.items[3].value = 6238
                this.options.material.items[4].value = 5069
              } else if (this.buildingArea >= 301) {
                this.options.foundation.items[1].value = 6720
                this.options.foundation.items[2].value = 6339
                this.options.foundation.items[3].value = 8792

                this.options.material.items[1].value = 6025
                this.options.material.items[2].value = 4525
                this.options.material.items[3].value = 5525
                this.options.material.items[4].value = 4425
              }
            } else { // 3-й
              if (this.buildingArea <= 120) {
                this.options.foundation.items[1].value = 8400
                this.options.foundation.items[2].value = 8174
                this.options.foundation.items[3].value = 10689

                this.options.material.items[1].value = 7200
                this.options.material.items[2].value = 5700
                this.options.material.items[3].value = 6700
                this.options.material.items[4].value = 5600
              } else if (121 <= this.buildingArea && this.buildingArea <= 170) {
                this.options.foundation.items[1].value = 7980
                this.options.foundation.items[2].value = 7784
                this.options.foundation.items[3].value = 10179

                this.options.material.items[1].value = 6605
                this.options.material.items[2].value = 5180
                this.options.material.items[3].value = 6130
                this.options.material.items[4].value = 5085
              } else if (171 <= this.buildingArea && this.buildingArea <= 250) {
                this.options.foundation.items[1].value = 7560
                this.options.foundation.items[2].value = 7413
                this.options.foundation.items[3].value = 9695

                this.options.material.items[1].value = 6010
                this.options.material.items[2].value = 4660
                this.options.material.items[3].value = 5560
                this.options.material.items[4].value = 4570
              } else if (251 <= this.buildingArea && this.buildingArea <= 300) {
                this.options.foundation.items[1].value = 7140
                this.options.foundation.items[2].value = 7059
                this.options.foundation.items[3].value = 9232

                this.options.material.items[1].value = 5415
                this.options.material.items[2].value = 4140
                this.options.material.items[3].value = 4990
                this.options.material.items[4].value = 4055
              } else if (this.buildingArea >= 301) {
                this.options.foundation.items[1].value = 6720
                this.options.foundation.items[2].value = 6339
                this.options.foundation.items[3].value = 8792

                this.options.material.items[1].value = 4820
                this.options.material.items[2].value = 3620
                this.options.material.items[3].value = 4420
                this.options.material.items[4].value = 3540
              }
            }
            break;
          case 4:
            // 3-й с мансардой
            if (this.buildingArea <= 120) {
              this.options.foundation.items[1].value = 10080.8
              this.options.foundation.items[2].value = 9808.8
              this.options.foundation.items[3].value = 12826

              this.options.material.items[1].value = 9303
              this.options.material.items[2].value = 7428
              this.options.material.items[3].value = 8678
              this.options.material.items[4].value = 7303
            } else if (121 <= this.buildingArea && this.buildingArea <= 170) {
              this.options.foundation.items[1].value = 9576
              this.options.foundation.items[2].value = 9340
              this.options.foundation.items[3].value = 12214

              this.options.material.items[1].value = 8542
              this.options.material.items[2].value = 6761
              this.options.material.items[3].value = 7948
              this.options.material.items[4].value = 6642
            } else if (171 <= this.buildingArea && this.buildingArea <= 250) {
              this.options.foundation.items[1].value = 9072
              this.options.foundation.items[2].value = 8895
              this.options.foundation.items[3].value = 11634

              this.options.material.items[1].value = 7781
              this.options.material.items[2].value = 6093
              this.options.material.items[3].value = 7218
              this.options.material.items[4].value = 5319
            } else if (251 <= this.buildingArea && this.buildingArea <= 300) {
              this.options.foundation.items[1].value = 8568
              this.options.foundation.items[2].value = 8470
              this.options.foundation.items[3].value = 11078

              this.options.material.items[1].value = 7019
              this.options.material.items[2].value = 5425
              this.options.material.items[3].value = 6488
              this.options.material.items[4].value = 5319
            } else if (this.buildingArea >= 301) {
              this.options.foundation.items[1].value = 8064
              this.options.foundation.items[2].value = 7966
              this.options.foundation.items[3].value = 10550

              this.options.material.items[1].value = 6258
              this.options.material.items[2].value = 4758
              this.options.material.items[3].value = 5758
              this.options.material.items[4].value = 4658
            }
            break;
          default:
        }
      },
      clearAllSelect() {
        this.options.foundation.value = 0
        this.options.material.value = 0
        this.options.interfloorOverlap.value = 0
        this.options.roof.value = 0
        this.options.facadeDecoration.value = 0
        this.options.window.value = 0
      }
    },
    computed: {
      // Этажность
      floors() {
        if (this.inputData.area === '1-M' || this.inputData.area === '2-M' || this.inputData.area === '3-M') {
          return parseFloat(this.inputData.area) + 1
        } else {
          return parseFloat(this.inputData.area)
        }

      },
      // Строительная площадь
      buildingArea() {
        return this.inputData.long * this.inputData.width * this.floors
      },
      // Площадь фасада
      facadeArea() {
        if(this.attic) {
          return  ((this.inputData.long * 2) + (this.inputData.width * 2)) * 3 * this.floors * this.options.k
        }
        return  ((this.inputData.long * 2) + (this.inputData.width * 2)) * 3 * this.floors
      },
      // Площадь окон
      windowArea() {
        return  this.facadeArea * 0.15
      },
      // Мансардный ли?
      attic() {
        if(this.inputData.area === '1-M' || this.inputData.area === '2-M' || this.inputData.area === '3-M') {
          return true
        }
        return false
      },

      // Вычисления услуг!
      foundationCalc() {
        return this.buildingArea * this.options.foundation.value / this.floors
      },
      materialCalc() {
        if (this.attic) {
          return this.options.material.value * this.buildingArea * this.options.k
        } else {
          return this.options.material.value * this.buildingArea
        }
      },
      interfloorOverlapCalc() {
        if(this.floors >= 3) {
          const k = this.floors - 1;
          return this.options.interfloorOverlap.value * this.buildingArea / this.floors * k;
        } else {
          return this.options.interfloorOverlap.value * this.buildingArea / this.floors;
        }
      },
      roofCalc() {
        return  this.options.roof.value * this.buildingArea / this.floors;
      },
      facadeDecorationCalc() {
        return this.options.facadeDecoration.value * this.facadeArea;
      },
      windowCalc() {
        return this.options.window.value * this.windowArea;
      }
    },
    watch: {
      inputData: {
        deep: true,
        handler() {
          this.dynamicCountingCoefficients()
        }
      },
      floors() {
        this.clearAllSelect()
      },
      attic() {
        this.clearAllSelect()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~bootstrap/scss/bootstrap';
  @import '~bootstrap-vue/src/index.scss';
  .main-calc-wrapper__radio-label-item {
    cursor: pointer;
  }
  a {
    color: inherit;
  }
  a:hover {
    text-decoration: none;
  }
  .custom-control {
    padding-left: 0;
  }
.main-calc-wrapper {
  &__radio-label-list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
    margin-bottom: 20px;
  }
  &__radio-label-item.active {
    filter: none;
  }
  &__radio-label-item {
    flex: 0 0 calc(100% / 6);
    max-width: calc(100% / 6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    filter: grayscale(100%);
    text-align: center;

    img {
      width: auto;
    }
    .custom-control-label {
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .custom-control-label::after, .custom-control-label::before {
      top: 100%;
      left: 46%;

    }
    .custom-control-label::before {
      background-color: #fe9c01!important;
      border-color: #fe9c01!important;
    }
  }
  &__computed-value {
    font-weight: 700;
    font-size: 20px;
  }
  &__service-value {
    font-weight: 700;
    font-size: 20px;
    padding-top: 33px;
  }
  &__result-wrapper {
    border: 2px solid #c82333;
    padding: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  &__result-value {
    font-size: 22px;
    font-weight: 700;
  }
  &__result-area {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
  }
}
.calc-step {
  font-weight: 700;
  font-size: 21px;
  color: #c82333;
}
.main-calc-wrapper__radio-label-list {
   margin-bottom: 40px;
 }

@media screen and (max-width: 900px) {
  .main-calc-wrapper__radio-label-list {
    flex-wrap: wrap;
  }
  .main-calc-wrapper__radio-label-item {
    flex: 0 0 calc(100% / 2);
    max-width: calc(100% / 2);
  }
}
</style>
