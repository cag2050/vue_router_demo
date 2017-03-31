import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Navi from '../components/Navi'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Header_Footer from '../components/Header_Footer'
import Logo from '../components/Logo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/navi',
      name: 'Navi',
      component: Navi
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/logo',
      name: 'Logo',
      component: Logo
    },
    {
      path: '/navi_logo',
      name: 'navi_logo',
      component: Navi,
      children: [
        {
            path: '',
            components: {
              default: Logo,
              footer: Footer
            }
        }
      ]
    },
    {
      path: '/header_footer',
      components: {
        default: Header_Footer,
        footer: Footer
      }
    }
  ]
})
