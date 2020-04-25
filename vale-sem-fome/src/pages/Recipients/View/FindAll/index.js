import React from 'react';
import { 
    CityHeader,
    TableMobile,
    TableDesktop,
    SearchForm,
    ModalExportData,
    Pagination,
    Footer
} from './../../../../components';


function RecipientsFindAll() {
    let screenWidth = window.screen.width;

    if(screenWidth < 768){
        return (
            <div>
                <ModalExportData />
                <CityHeader cityName="São José dos Campos"/>
                <SearchForm totalEntries="23.023 registros"/>
                <TableMobile 
                    fullName="José Luiz Vasco" 
                    cpf="000.001.010-01"
                    regionCity="Zona Norte"
                    neighbourhood="Novo Horizonte"
                    currentFinancialStatus="Extremamente Séria"
                />
                <Pagination currentPage="2"
                    totalPages="204"
                />
                <Footer />
            </div>
        )
    } else{
        return (
            <div>
                <ModalExportData />
                <CityHeader cityName="São José dos Campos"/>
                <SearchForm totalEntries="23.023 registros"/>
                <TableDesktop 
                    fullName="Sheila Santana Vilela Araújo" 
                    cpf="000.001.010-01"
                    regionCity="Zona Norte"
                    neighbourhood="Novo Horizonte"
                    currentFinancialStatus="Muito Séria"
                />
                <Pagination currentPage="2"
                    totalPages="204"
                />
                <Footer />
            </div>
        )
    }

}

export default RecipientsFindAll;