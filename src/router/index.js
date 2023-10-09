import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Indie from '@/views/Indie.vue'
import Descobertas from '@/views/Descobertas.vue'
import DailyMix from '@/views/DailyMix.vue'
import IndieVibration from '@/views/IndieVibration.vue'
import MixMetal from '@/views/MixMetal.vue'
import MixRelax from '@/views/MixRelax.vue'
import MusicasCurtidas from '@/views/MusicasCurtidas.vue'
import Sessions from '@/views/Sessions.vue'
import Country from '@/views/Country.vue'
import NothingButThieves from '@/views/NothingBut.vue'
const routes = [
  {
    path: '/',
    name: 'homePage',
    component: Home,
  },
  {
    path:'/mix-indie',
    name:'indiePage',
    component: Indie
  },
  {
    path:'/descobertas-da-semana',
    name:'descobertasPage',
    component: Descobertas
  },
  {
    path:'/indie-vibration',
    name:'indieVibrationPage',
    component: IndieVibration
  },
  {
    path:'/mix-metal',
    name:'mixMetalPage',
    component: MixMetal
  },
  {
    path:'/mix-relax',
    name:'mixRelaxPage',
    component: MixRelax
  },
  {
    path:'/musicas-curtidas',
    name:'musicasCurtidasPage',
    component: MusicasCurtidas
  },
  {
    path:'/sessions',
    name:'sessionsPage',
    component: Sessions
  },
  {
    path:'/daily-mix',
    name:'dailyMixPage',
    component: DailyMix
  },
  {
    path:'/country',
    name:'countryPage',
    component: Country
  },
  {
    path:'/this-is-nothing-but-thieves',
    name:'nothingPage',
    component: NothingButThieves
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
