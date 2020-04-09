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
        },
        {
            name: 'PageNotFound',
            path: '*',
            component: PageNotFound
        },
    ]
}
