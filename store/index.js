export const state = () => ({
  routes : {
    'Discover' : {
      '/': {'name':'Dashboard', 'icon':'home'},
      '/search': {'name':'Search','icon':'search'},
    },
    'Edit': {
      '/add': {'name':'Add Asset','icon':'file-plus'},
      '/remove': {'name':'Remove Asset','icon':'file-minus'}
    }

  }
})