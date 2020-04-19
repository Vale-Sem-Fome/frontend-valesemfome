import {
    PageNotFound,
    RecipientsFindAll,
    RecipientsFindByOne,
    RecipientsForm,
    VolunteersForm,
    VolunteersThanks,
    RecipientsThanks
} from './pages'

export default {
    routes: [
        {
            name: 'RecipientsFindAll',
            path: '/painel/beneficiarios',
            component: RecipientsFindAll
        },
        {
            name: 'VolunteersForm',
            path: '/voluntarios',
            component: VolunteersForm
        },
        {
            name: 'VolunteersThanks',
            path: 'voluntarios/obrigado',
            component: VolunteersThanks
        },
        {
            name: 'RecipientsFindByOne',
            path: '/painel/beneficiarios/:id',
            component: RecipientsFindByOne
        },
        {
            name: 'RecipientsThanks',
            path: '/beneficiarios/obrigado',
            component: RecipientsThanks
        },
        {
            name: 'RecipientsForm',
            path: '/',
            component: RecipientsForm
        },
        {
            name: 'PageNotFound',
            path: '*',
            component: PageNotFound
        },
    ]
}
