import {
    Home,
    Obrigado,
    Voluntarios,
    ObrigadoVoluntario,
    PageNotFound
} from './pages'

export default {
    routes: [
        {
            name: 'PageNotFound',
            path: '/404',
            component: PageNotFound
        },
        {
            name: 'Voluntarios',
            path: '/voluntarios',
            component: Voluntarios
        },
        {
            name: 'ObrigadoVoluntario',
            path: '/obrigado/voluntario',
            component: ObrigadoVoluntario
        },
        {
            name: 'Obrigado',
            path: '/obrigado',
            component: Obrigado
        },
        {
            name: 'Home',
            path: '/',
            component: Home
        }
    ]
}
