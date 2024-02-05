import { Context, Schema, Time } from 'koishi'
import { resolve } from 'path'
import { } from '@koishijs/plugin-console'

export const name = 'leak-alert'

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

export async function apply(ctx: Context) {
  if (!ctx.inject) { ctx.inject = ctx.using }
  ctx.inject(['console'], (ctx) => {
    ctx.console.addEntry({
      dev: resolve(__dirname, '../client/index.ts'),
      prod: resolve(__dirname, '../dist'),
    })
  })


  const isAuthEnabled = () => {
    try {
      const { default: auth } = require('@koishijs/plugin-auth')
      return ctx.registry.has(auth)
    } catch {
      return false
    }
  }

  const dispose = ctx.setInterval(async () => {
    if (isAuthEnabled()) {
      dispose()
      ctx.scope.dispose()
    }
  }, Time.minute)
}
