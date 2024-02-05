import { Context } from '@koishijs/client'
import 'virtual:uno.css'
import banner from './banner.vue'

export default (ctx: Context) => {
  ctx.slot({
    type: "global",
    component: banner
  })
}