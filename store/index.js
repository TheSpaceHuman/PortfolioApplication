export const state = () => ({
  menu: [
    { name: 'Main', link: '/', key: '1', icon: 'el-icon-house' },
    { name: 'Projects', link: '/projects', key: '2', icon: 'el-icon-folder' },
    { name: 'Demo', link: '/demo', key: '3', icon: 'el-icon-data-board' },
    { name: 'Components', link: '/components', key: '4', icon: 'el-icon-menu' },
    { name: 'Blog', link: '/blog', key: '5', icon: 'el-icon-postcard' },
    { name: 'Profile', link: '/profile', key: '6', icon: 'el-icon-user' }
  ],
  technologies: [
    { name: 'HTML & CSS', image: '/image/tehnologyies/1425632648_html5-css3.png', href: 'https://www.w3.org/standards/webdesign/htmlcss' },
    { name: 'JavaScript', image: '/image/tehnologyies/240px-JavaScript-logo.png', href: 'https://developer.mozilla.org/ru/docs/Web/JavaScript' },
    { name: 'Node.js', image: '/image/tehnologyies/590px-Node.js_logo.svg.png', href: 'https://nodejs.org/en/' },
    { name: 'Angular', image: '/image/tehnologyies/Angular_full_color_logo.svg.png', href: 'https://angular.io/' },
    { name: 'React.js', image: '/image/tehnologyies/1200px-React-icon.svg.png', href: 'https://reactjs.org/' },
    { name: 'Vue.js', image: '/image/tehnologyies/vuejs.png', href: 'https://vuejs.org/' },
    { name: 'Nest.js', image: '/image/tehnologyies/d1198bac8e4ced0d89d5e5983061f418.png', href: 'https://nestjs.com/' },
    { name: 'Nuxt.js', image: '/image/tehnologyies/Nuxt-js.png', href: 'https://nuxtjs.org/' },
    { name: 'Laravel', image: '/image/tehnologyies/1200px-Laravel.svg.png', href: 'https://laravel.com/' },
    { name: 'TypeScript', image: '/image/tehnologyies/typescript-1174965.png', href: 'https://www.typescriptlang.org/' },
    { name: 'Rxjs', image: '/image/tehnologyies/9c457d62-d50f-4832-b810-0acda322755c.png', href: 'https://rxjs-dev.firebaseapp.com/' },
    { name: 'Svelte', image: '/image/tehnologyies/1200px-Svelte_Logo.svg.png', href: 'https://svelte.dev/' },
  ]
})

export const mutations = {

}

export const getters = {
  menu:(state) => state.menu,
  technologies:(state) => state.technologies
}
