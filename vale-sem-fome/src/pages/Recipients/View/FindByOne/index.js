import React from 'react';
import { Link } from 'react-router-dom';
import { 
    CityHeader,
    FindByOneRecipients,
    Pagination,
    Footer
} from './../../../../components/index';
import './find-by-one-page.scss';

function RecipientsFindByOne() {
    const recipientDatas = [{
       id: "20.022",
       name: "Sheila Santana Vilela Araújo",
       cpf: "000.000.010-00",
       email: "sheila_vilela@hotmail.com",
       phone: "(12) 99603-3738",
       cep: "12211-700",
       birthday: "20/03/1980",
       street: "José do Patrocínio",
       number: "177",
       neighbourhood: "Santana",
       complement: "Fundos",
       reference: "Padaria da Maria",
       region: "Zona Norte",
       residents: "5",
       status: "Muito Séria",
       prevRegistry: "Não Sei",
       acceptanceTerm: "Termo de Aceito",
       kit: "Informação Indísponivel"
    }];
    return (
        <div className="recipient">
            <Link className="recipient-title" to="/painel/beneficiarios">
                <CityHeader cityName="São José dos Campos" />
            </Link>
            <div className="container back-to-list-all-top">
                <Link to="/painel/beneficiarios">
                    &#171; voltar para a lista
                </Link>
            </div>
            <FindByOneRecipients recipientDatas={recipientDatas} />
            <Pagination currentPage="20.022"
                totalPages="20.023" />
            <div  className="back-to-list-all-bottom">
                <Link to="/painel/beneficiarios">
                &#171; voltar para a lista
                </Link>
            </div>
            <Footer /> 
        </div>
    )
}

export default RecipientsFindByOne;