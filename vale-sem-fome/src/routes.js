import {
    Home,
    Obrigado,
    Voluntarios,
    ObrigadoVoluntario,
    PageNotFound,
    TestNewComponents,
    AllRecipients,
    OneRecipient
} from './pages'

export default {
    routes: [
        {
            name: 'AllRecipients',
            path: '/recipients',
            component: AllRecipients
        },
        {
            name: 'OneRecipient',
            path: '/recipients/id',
            component: OneRecipient
        },
        {
            name: 'TestNewComponents',
            path: '/test',
            component: TestNewComponents
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
        },
        {
            name: 'PageNotFound',
            path: '*',
            component: PageNotFound
        },
    ]
}
