<template>
    <section class="main-form">
      <h4 class="h4 color--primary  text-center mb-30" v-if="title">{{title}}</h4>
      <el-form :model="form" :rules="rules" ref="form">
        <el-row :gutter="15">
          <el-col :xs="24" :sm="24" :md="24 / col" :lg="24 /col" class="mb-15" v-for="field in fields" :key="field.name">
            <el-form-item :label="field.label" :prop="field.name">
              <el-input v-if="field.mask" :placeholder="field.placeholder" :type="field.text" :id="field.name" v-model="form[field.name]" v-mask="field.mask" />
              <el-input v-else :placeholder="field.placeholder" :type="field.text" :id="field.name" v-model="form[field.name]" />
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

  export default {
    name: "MainForm",
    props: {
      title: String,
      fields: {
        type: Array,
        required: true,
      },
      col: {
        type: Number,
        default: 1,
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
        rules: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ]
        },
        CONTACT,
        buttonClass: {
          'justify-content-center': this.buttonAlight === 'center',
          'justify-content-start': this.buttonAlight === 'left',
          'justify-content-end': this.buttonAlight === 'right',
        },
        validate: false
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
            message: 'Field required',
            trigger: 'blur'
          })
        }
        if (field.type === 'email') {
          result.push({
            type: 'email',
            message: 'It is not email',
            trigger: 'blur'
          })
        }
        return result
      },
      submit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.$message.success('Message sent');
            this.$refs.form.resetFields();
          } else {
            this.$message.error('Form invalid')
          }
        });
      }
    },
  }
</script>

<style lang="scss">
  .main-form {
    .form-label {
      display: inline-block;
      margin-bottom: 8px;
    }
  }
</style>
