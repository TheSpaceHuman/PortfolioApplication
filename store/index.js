export const state = () => ({
  menu: [
    { name: 'Main', link: '/', key: '1', icon: '' },
    { name: 'Projects', link: '/projects', key: '2', icon: '' },
    { name: 'Demo', link: '/demo', key: '3', icon: '' },
    { name: 'Components', link: '/components', key: '4', icon: '' },
    { name: 'Blog', link: '/blog', key: '5', icon: '' },
    { name: 'Profile', link: '/profile', key: '6', icon: '' }
  ]
})

export const mutations = {
  toggleModal (state, name) {
    state.modals[name].show = !state.modals[name].show
  }
}

export const getters = {
  menu:(state) => state.menu,
}
