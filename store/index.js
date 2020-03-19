export const state = () => ({
  menu: [
    { name: 'Main', link: '/', key: '1', icon: 'el-icon-house' },
    { name: 'Projects', link: '/projects', key: '2', icon: 'el-icon-folder' },
    { name: 'Demo', link: '/demo', key: '3', icon: 'el-icon-data-board' },
    { name: 'Components', link: '/components', key: '4', icon: 'el-icon-menu' },
    { name: 'Blog', link: '/blog', key: '5', icon: 'el-icon-postcard' },
    { name: 'Profile', link: '/profile', key: '6', icon: 'el-icon-user' }
  ]
})

export const mutations = {

}

export const getters = {
  menu:(state) => state.menu,
}
