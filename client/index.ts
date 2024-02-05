import { Context } from '@koishijs/client'
import banner from './banner.vue'
import exposed from './exposed.vue'

export default (ctx: Context) => {
  ctx.slot({
    type: "global",
    component: banner
  })

  ctx.page({
    name: '安全提醒',
    path: '/exposed',
    component: exposed
  })
}