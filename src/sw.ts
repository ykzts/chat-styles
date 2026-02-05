import { Serwist } from 'serwist'
import { defaultCache } from '@serwist/next/worker'

declare const self: ServiceWorkerGlobalScope

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache
})

serwist.addEventListeners()
