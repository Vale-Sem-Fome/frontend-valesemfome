import React from 'react';
import { 
    SJCHeader,
    SearchForm,
    TableDesktop,
    Footer
} from './../../../components/index';

function ShowAll() {
    return (
        <div>
            <SJCHeader cityName="São José dos Campos"/>
            <SearchForm totalEntries="23.023 registros"/>
            <TableDesktop />
            <Footer />
        </div>
    )
}

export default ShowAll;