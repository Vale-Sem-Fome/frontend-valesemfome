import {
    Home,
    Obrigado
} from './pages'

export default {
    routes: [
        {
            name: 'Obrigado',
            path: '/obrigado',
            component: Obrigado
        },
        {
            name: 'Home',
            path: '*',
            component: Home
        }
    ]
}
