import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  profile: {},
  profilePosts: [],
  posts: [],
  weblinks: [],
  currentPage: 1,
  newerPage: 1,
  query: ''
})
