<template>
    <section class="main-form">
      <h4 class="h4 color--primary  text-center mb-30" v-if="title">{{title}}</h4>
      <el-form :model="form" :rules="rules" ref="form">
        <el-row :gutter="15">
          <el-col :xs="field.grid ? field.grid.xs : 24" :sm="field.grid ? field.grid.sm : 24" :md="field.grid ? field.grid.md : 24" :lg="field.grid ? field.grid.lg : 24" class="mb-15" v-for="field in fields" :key="field.name">
            <el-form-item :label="field.label" :prop="field.name">
              <el-input v-if="field.mask" :placeholder="field.placeholder" :type="field.type" :id="field.name" v-model="form[field.name]" v-mask="field.mask" />
              <vue-phone-number-input
                v-model="form[field.name]"  v-else-if="field.type === 'tel'"
                color="#00e0a1"
                valid-color="#26df82"
                error-color="#ec3532"
                :only-countries="countries"
              ></vue-phone-number-input>
              <el-select  v-else-if="field.type === 'select'" v-model="form[field.name]" :placeholder="field.placeholder" class="w-100">
                <el-option
                  v-for="item in field.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <TheUploader v-else-if="field.type === 'file'" />
              <el-input v-else-if="field.type === 'money'" :placeholder="field.placeholder" type="text" :id="field.name" v-model="form[field.name]" suffix-icon="fas fa-dollar-sign" />
              <el-input v-else :placeholder="field.placeholder" :type="field.type" :id="field.name" v-model="form[field.name]" :autosize="field.autosize" />
            </el-form-item>
          </el-col>
        </el-row>
        <div class="d-flex w-100" :class="buttonClass">
          <el-button type="primary" @click="submit">{{buttonTitle}}</el-button>
        </div>
      </el-form>
    </section>
</template>

<script>
  import CONTACT from  '~/dictionary/contact'
  import TheUploader from "../base/TheUploader";

  export default {
    name: "MainForm",
    components: {
      TheUploader
    },
    props: {
      title: String,
      fields: {
        type: Array,
        required: true,
      },
      buttonTitle: {
        type: String,
        default: 'Отправить'
      },
      buttonAlight: {
        type: String,
        default: 'center'
      },
      path: {
        type: String,
        default: '/'
      }
    },
    data() {
      return {
        form: {},
        rules: {},
        CONTACT,
        buttonClass: {
          'justify-content-center': this.buttonAlight === 'center',
          'justify-content-start': this.buttonAlight === 'left',
          'justify-content-end': this.buttonAlight === 'right',
        },
        countries: ['RU', 'UA', 'KZ', 'BY']
      }
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        this.fields.forEach((field) => {
          this.$set(this.form, field.name, null)
          this.$set(this.rules, field.name, this.generateValidateRules(field))
        });
      },
      generateValidateRules(field) {
        let result = []
        if (field.required) {
          result.push({
            required: true,
            message: 'Please enter a value, this field is required',
            trigger: field.type === 'select' ? 'change' : 'blur'
          })
        }
        if (field.type === 'email') {
          result.push({
            type: 'email',
            message: 'Please enter your email address in format: yourname@example.com',
            trigger: 'blur'
          })
        }
        return result
      },
      submit() {
        this.$refs.form.validate((valid) => {
          console.debug({...this.form});
          if (valid) {
            this.$message.success('Your message has been sent successfully');
            this.$refs.form.resetFields();
          } else {
            this.$message.error('The form is not valid. Please check the form')
          }
        });
      }
    },
  }
</script>

<style lang="scss">
  @import "assets/scss/utils/vars";
  .main-form {
    max-width: 700px;
    border: 1px solid $primary-color;
    border-radius: 15px;
    padding: 15px;
    .form-label {
      display: inline-block;
      margin-bottom: 8px;
    }
  }
  .el-form-item__label {
    display: block;
    text-align: left;
    float: unset;
  }
  // change vue-phone-number-input
  .country-selector__label {
    display: none;
  }
  .input-tel__label {
    line-height: 11px;
  }
  .has-list-open .country-selector__toggle {
    top: calc(50% - 4px)!important;
  }
  .country-selector__toggle {
    top: calc(50% - 20px)!important;
  }
  .country-selector__input {
    padding-top: 4px!important;
  }
  .country-selector__country-flag {
    top: 14px!important;
  }
  /*.input-tel__input:hover {
    border: 1px solid $primary-color!important;
  }
  .input-tel__input:focus {
    border-color: $primary-color!important;
    box-shadow: 0 0 0 .125rem $primary-color!important;
  }
  .country-selector__input:focus {
    border-color: $primary-color!important;
    box-shadow: 0 0 0 .125rem $primary-color!important;
  }*/
</style>
