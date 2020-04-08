import {
    Home,
    Obrigado,
    Voluntarios,
    ObrigadoVoluntario
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
        }
    ]
}
