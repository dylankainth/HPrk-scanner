export const state = () => ({
  routes : {
    'Discover' : {
      '/': {'name':'Dashboard', 'icon':'home'},
      '/list': {'name':'List','icon':'list'},
    },
    'Edit': {
      '/add': {'name':'Add Asset','icon':'file-plus'},
      '/remove': {'name':'Remove Asset','icon':'file-minus'}
    }

  }
})