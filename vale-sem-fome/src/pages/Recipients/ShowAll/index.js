import React from 'react';
import { 
    SJCHeader,
    SearchForm,
    Table
} from './../../../components/index';

function ShowAll() {
    return (
        <div>
            <SJCHeader cityName="São José dos Campos"/>
            <SearchForm totalEntries="23.023 registros"/>
            <Table />
        </div>
    )
}

export default ShowAll;