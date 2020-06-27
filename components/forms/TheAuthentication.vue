<template>
  <div class="the-authentication">
    <div class="container">
      <div class="img">
        <img src="/image/login/bg.svg">
      </div>
      <div class="login-content">
        <el-form :model="form" :rules="rules" ref="form">
          <div class="d-flex justify-content-center">
            <img class="avatar" src="/image/login/avatar.svg">
          </div>
          <h2 class="title">{{ title }}</h2>
          <el-form-item :label="field.label" :prop="field.name" v-for="field in fields" :key="field.name">
            <el-input
              v-if="field.type === 'password'"
              v-model="form[field.name]"
              :id="field.name"
              :type="field.type"
              :placeholder="field.placeholder"
              :prefix-icon="field.icon"
              show-password
            />
            <el-input
              v-else
              v-model="form[field.name]"
              :id="field.name"
              :type="field.type"
              :placeholder="field.placeholder"
              :prefix-icon="field.icon"

            />
          </el-form-item>
          <nuxt-link :to="switchLink.href"><i class="el-icon-refresh"></i> {{switchLink.title}}</nuxt-link>
          <button type="button" class="btn" @click="submit">{{type}}</button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TheAuthentication",
    props: {
      fields: {
        type: Array,
        default: () => [
          { type: 'text', name: 'username', placeholder: 'Enter you username',  label: 'Username', required: true, icon: 'el-icon-user' },
          { type: 'password', name: 'password', placeholder: 'Enter you password',  label: 'Password', required: true, min: 8, icon: 'el-icon-lock' }
        ]
      },
      type: {
        type: String,
        default: 'login' // login | registration
      },
      switchLink: {
        type: Object,
        default: () => ({
          href: '/profile/login',
          title: 'Login'
        })
      }
    },
    data() {
      return {
        form: {},
        rules: {},
        dictionary: {
          login: 'Login',
          registration: 'Registration'
        }
      }
    },
    computed: {
      title() {
        return this.dictionary[this.type]
      }
    },
    methods: {
      init() {
        this.fields.forEach((field) => {
          this.$set(this.form, field.name, null);
          this.$set(this.rules, field.name, this.generateValidateRules(field));
        });
      },
      generateValidateRules(field) {
        let result = []
        if (field.required) {
          result.push({
            required: true,
            message: 'Please enter a value, this field is required',
            trigger: 'blur'
          })
        }
        if (field.type === 'email') {
          result.push({
            type: 'email',
            message: 'Please enter your email address in format: yourname@example.com',
            trigger: 'blur'
          })
        }
        if (field.min) {
          result.push({
            min: field.min,
            message: `The field must not be less than ${field.min} characters`,
            trigger: 'blur'
          })
        }
        if (field.max) {
          result.push({
            max: field.max,
            message: `The field must not exceed ${field.max} characters`,
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
    created() {
      this.init()
    }
  }
</script>

<style lang="scss" scoped>
  .the-authentication {

  }
  .avatar {
    width: auto;
  }
  .wave{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100%;
    z-index: -1;
  }

  .container{
    width: 100vw;
    height: 83vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap :7rem;
    padding: 0 2rem;
  }

  .img{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .login-content{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
  }

  .img img{
    width: 500px;
  }

  form{
    width: 360px;
  }

  .login-content img{
    height: 100px;
  }

  .login-content h2{
    margin: 15px 0;
    color: #333;
    text-transform: uppercase;
    font-size: 2.9rem;
  }

  .login-content .input-div{
    position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;
  }

  .login-content .input-div.one{
    margin-top: 0;
  }

  .i{
    color: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .i i{
    transition: .3s;
  }

  .input-div > div{
    position: relative;
    height: 45px;
  }

  .input-div > div > h5{
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 18px;
    transition: .3s;
  }

  .input-div:before, .input-div:after{
    content: '';
    position: absolute;
    bottom: -2px;
    width: 0%;
    height: 2px;
    background-color: #38d39f;
    transition: .4s;
  }

  .input-div:before{
    right: 50%;
  }

  .input-div:after{
    left: 50%;
  }

  .input-div.focus:before, .input-div.focus:after{
    width: 50%;
  }

  .input-div.focus > div > h5{
    top: -5px;
    font-size: 15px;
  }

  .input-div.focus > .i > i{
    color: #38d39f;
  }

  .input-div > div > input{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    padding: 0.5rem 0.7rem;
    font-size: 1.2rem;
    color: #555;
    font-family: 'poppins', sans-serif;
  }

  .input-div.pass{
    margin-bottom: 4px;
  }

  a{
    display: block;
    text-align: right;
    text-decoration: none;
    color: #999;
    font-size: 0.9rem;
    transition: .3s;
  }

  a:hover{
    color: #38d39f;
  }

  .btn{
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    outline: none;
    border: none;
    background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
    background-size: 200%;
    font-size: 1.2rem;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    margin: 1.5rem 0;
    cursor: pointer;
    transition: .5s;
  }
  .btn:hover{
    background-position: right;
  }


  @media screen and (max-width: 1050px){
    .container{
      grid-gap: 5rem;
    }
  }

  @media screen and (max-width: 1000px){
    form{
      width: 290px;
    }

    .login-content h2{
      font-size: 2.4rem;
      margin: 8px 0;
    }

    .img img{
      width: 400px;
    }
  }

  @media screen and (max-width: 900px){
    .container{
      grid-template-columns: 1fr;
    }

    .img{
      display: none;
    }

    .wave{
      display: none;
    }

    .login-content{
      justify-content: center;
    }
  }
</style>
