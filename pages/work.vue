<template>
  <section class="page-work">
    <img class="img-background" src="/image/login/wave.png">
    <div class="container">
      <h1 class="h1 text-center py-30">{{ $t('work.title') }}</h1>
      <p class="h4 text-center">{{ $t('work.description') }}</p>
      <h2 class="h3 text-center py-30">{{ $t('work.resume') }}</h2>
      <div class="d-flex justify-content-center">
        <el-tooltip effect="light" :content="resume.title" placement="bottom" v-for="resume in resumes" :key="resume.title">
          <a :href="resume.href" target="_blank" >
            <img class="page-work__resume-img" :src="resume.image" :alt="resume.title">
          </a>
        </el-tooltip>
      </div>
      <div class="d-flex justify-content-center py-50">
        <MainForm  :title="$t('work.feedback.title')" :fields="fields" :buttonTitle="$t('work.feedback.submit')" path="/" />
      </div>
    </div>
  </section>
</template>

<script>
  import MainForm from "~/components/forms/MainForm.vue";
  export default {
    name: "WorkPage",
    components: {
      MainForm
    },
    data() {
      return {
        resumes: [
          { title: 'HeadHunter', href: 'https://hh.ru/resume/87c2dd64ff032b2e600039ed1f5341536a4b73', image: '/image/work/HeadHunter_logo.png' },
          { title: 'Мой круг', href: 'https://career.habr.com/artem-kolodyazhny', image: '/image/work/mk.png' }
        ],
        fields: [
          {label: this.$t('work.feedback.nameCompany'), name: 'name-company', placeholder: this.$t('work.feedback.nameCompany'), type: 'text', required: true, grid: {xs: 24, md: 24, lg: 24 }},
          {label: this.$t('work.feedback.email'), name: 'email', placeholder: this.$t('work.feedback.email'), type: 'email', grid: {xs: 24, md: 12, lg: 12 }},
          {label: this.$t('work.feedback.phone'), name: 'phone', placeholder: this.$t('work.feedback.phone'), type: 'text', mask: '+ # (###)-###-##-##', grid: {xs: 24, md: 12, lg: 12 }},
          {label: this.$t('work.feedback.position'), name: 'position', placeholder:  this.$t('work.feedback.position'), type: 'text', required: true, grid: {xs: 24, md: 24, lg: 24 }},
          {label: this.$t('work.feedback.salary'), name: 'salary', placeholder: this.$t('work.feedback.salary'), type: 'money', required: true, grid: {xs: 24, md: 24, lg: 24 }},
          {label: this.$t('work.feedback.message'), name: 'message', placeholder: this.$t('work.feedback.message'), type: 'textarea', required: true, autosize:{ minRows: 5, maxRows: 15}, grid: {xs: 24, md: 24, lg: 24 }}
        ]
      }
    }
  }
</script>

<style lang="scss">
  .page-work {

    &__resume-img {
      margin: 0 14px;
      width: 55px;
      height: 55px;
    }
  }
</style>
