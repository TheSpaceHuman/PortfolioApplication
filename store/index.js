export const state = () => ({
  menu: [
    { name: 'Main', link: '/', key: '1', icon: 'el-icon-house' },
    { name: 'Projects', link: '/projects', key: '2', icon: 'el-icon-folder' },
    { name: 'Demo', link: '/demo', key: '3', icon: 'el-icon-data-board' },
    { name: 'Blog', link: '/blog', key: '4', icon: 'el-icon-postcard' },
    { name: 'Tools', link: '/tools', key: '5', icon: 'el-icon-s-tools' },
    { name: 'Work', link: '/work', key: '6', icon: 'el-icon-office-building' },
    { name: 'Profile', link: '/profile', key: '7', icon: 'el-icon-user' }
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
  ],
  projects: [
    {
      id: '1',
      title: 'Homeartidea',
      description: 'Interior design studio',
      promo: '/image/projects/HA1.jpg',
      images: ['/image/projects/HA1.jpg', '/image/projects/HA2.jpg', '/image/projects/HA3.jpg', '/image/projects/HA4.jpg', '/image/projects/HA5.jpg', '/image/projects/HA6.jpg', '/image/projects/HA7.jpg'],
      technologies: ['jquery', 'laravel']
    },
    {
      id: '2',
      title: 'CRM for z-clinic',
      description: 'CRM for internal use, staff training and the establishment of business processes of the system',
      promo: '/image/projects/CZ3.jpg',
      images: ['/image/projects/CZ3.jpg', '/image/projects/CZ1.jpg', '/image/projects/CZ2.jpg', '/image/projects/CZ4.jpg', '/image/projects/CZ5.jpg', '/image/projects/CZ6.jpg', '/image/projects/CZ7.jpg', '/image/projects/CZ8.jpg', '/image/projects/CZ9.jpg', '/image/projects/CZ10.jpg', '/image/projects/CZ11.jpg', '/image/projects/CZ12.jpg'],
      technologies: ['jquery', 'laravel']
    },
    {
      id: '3',
      title: 'MirDit',
      description: 'The main site of the company IT Data World',
      promo: '/image/projects/MD1.jpg',
      images: ['/image/projects/MD1.jpg', '/image/projects/MD2.jpg', '/image/projects/MD3.jpg', '/image/projects/MD4.jpg', '/image/projects/MD5.jpg'],
      technologies: ['vuejs', 'nuxtjs', 'php']
    },
    {
      id: '4',
      title: '100Project',
      description: 'Construction company site',
      promo: '/image/projects/100P1.jpg',
      images: ['/image/projects/100P1.jpg', '/image/projects/100P2.jpg', '/image/projects/100P3.jpg', '/image/projects/100P3.jpg', '/image/projects/100P4.jpg', '/image/projects/100P5.jpg', '/image/projects/100P6.jpg', '/image/projects/100P7.jpg'],
      technologies: ['vuejs', 'php']
    },
    {
      id: '5',
      title: 'ProGloves',
      description: 'Medical glove site',
      promo: '/image/projects/PG1.jpg',
      images: ['/image/projects/PG1.jpg', '/image/projects/PG2.jpg', '/image/projects/PG3.jpg', '/image/projects/PG4.jpg', '/image/projects/PG5.jpg'],
      technologies: ['vuejs', 'php']
    }
  ],
  tools: [
    { title: 'SvgOmg', subTitle: 'SVG compression', image: '/image/tools/svgomg.png', link: {target: '_blank', href: 'https://jakearchibald.github.io/svgomg/'}},
    { title: 'Squoosh', subTitle: 'Image compression', image: '/image/tools/squoosh-logo-7334C2EA69-seeklogo.com.png', link: {target: '_blank', href: 'https://squoosh.app/'}},
    { title: 'ColorSpace', subTitle: 'Color combination', image: '/image/tools/wyVe7uLQ_400x400.jpg', link: {target: '_blank', href: 'https://mycolor.space/'}},
    { title: 'CanIUse', subTitle: 'Browser support', image: '/image/tools/caniuse.png', link: {target: '_blank', href: 'https://caniuse.com/'}},
    { title: 'SvgSpreact', subTitle: 'SVG sprite generation', image: '/image/tools/SvgSpreact.png', link: {target: '_blank', href: 'https://svgsprit.es/'}},
    { title: 'Calibre', subTitle: 'Web Performance Monitoring', image: '/image/tools/dribbble_shot_hd.png', link: {target: '_blank', href: 'https://calibreapp.com/'}},
    { title: 'WebDev', subTitle: 'Web assistant', image: '/image/tools/webdev.png', link: {target: '_blank', href: 'https://web.dev/'}},
  ],
  demos: [
    { title: 'VueMicroServices', image: '/image/projects/MD1.jpg', href: 'https://github.com/TheSpaceHuman/VueMicroServices', technologies: ['vuejs', 'nuxtjs', 'laravel'] },
    { title: 'NgShop', image: '/image/projects/MD1.jpg', href: 'https://github.com/TheSpaceHuman/tasks-ng', technologies: ['angular'] },
  ]
})

export const mutations = {

}

export const getters = {
  menu: (state) => state.menu,
  technologies: (state) => state.technologies,
  projects: (state) => state.projects,
  tools: (state) => state.tools,
  getProjectById: state => id => state.projects.find((el) => el.id === id),
  demos: state => state.demos
}
