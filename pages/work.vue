<template>
  <section class="page-work">
    <img class="img-background" src="/image/login/wave.png">
    <div class="container">
      <h1 class="h1 text-center py-30">Work</h1>
      <p class="h4 text-center">If you want to offer me a job, I’m happy to hear.</p>
      <h2 class="h3 text-center py-30">My resumes</h2>
      <div class="d-flex justify-content-center">
        <el-tooltip effect="light" :content="resume.title" placement="bottom" v-for="resume in resumes" :key="resume.title">
          <a :href="resume.href" target="_blank" >
            <img class="page-work__resume-img" :src="resume.image" :alt="resume.title">
          </a>
        </el-tooltip>
      </div>
      <div class="d-flex justify-content-center py-50">
        <MainForm  title="Work feedback" :fields="fields" buttonTitle="Send an invitation" path="/" />
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
          {label: 'Name company', name: 'name-company', placeholder: 'Name company', type: 'text', required: true, grid: {xs: 24, md: 24, lg: 24 }},
          {label: 'Email company', name: 'email', placeholder: 'Email', type: 'email', grid: {xs: 24, md: 12, lg: 12 }},
          {label: 'Phone company', name: 'phone', placeholder: 'Phone', type: 'tel', grid: {xs: 24, md: 12, lg: 12 }},
          {label: 'Position', name: 'position', placeholder: 'Position', type: 'text', required: true, grid: {xs: 24, md: 24, lg: 24 }},
          {label: 'Salary', name: 'salary', placeholder: 'Salary', type: 'money', required: true, grid: {xs: 24, md: 24, lg: 24 }},
          {label: 'Message', name: 'message', placeholder: 'Message', type: 'textarea', required: true, autosize:{ minRows: 5, maxRows: 15}, grid: {xs: 24, md: 24, lg: 24 }}
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
