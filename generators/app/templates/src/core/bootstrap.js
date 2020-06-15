import store from '@/store'
import { ACCESS_TOKEN } from '@/store/mutation-types'

export default function Initializer () {
  console.log(`API_URL: ${process.env.VUE_APP_BASE_API}`)
  store.commit('SET_TOKEN', uni.getStorageSync(ACCESS_TOKEN))
}
