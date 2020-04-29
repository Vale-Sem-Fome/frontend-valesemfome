import React from 'react';
import './modal.scss';

function ExportDatas({closeModal}) {

    function close() {
        closeModal();
    }

    return (
        <div className="modal-window">
            <div className="modal-container">
                <div className="modal-content">
                    <header className="modal-header">
                        <div className="text">
                        <h3>Exportar Dados</h3>
                        <span className="close" onClick={()=> close()}>&times;</span>
                        </div>
                    </header>
                    <main className="modal-body">
                        <form className="form-modal">
                            <div className="modal-question">
                                <div className="modal-fields">
                                    <p><strong>O que deseja fazer?</strong></p>
                                    <div className="form-group-modal">
                                        <input type="radio" name="options" id="googlesheets"/>
                                        <label htmlFor="googlesheets">Exportar dados para o Google Sheets</label>
                                    </div>
                                    <div className="form-group-modal">
                                        <input type="radio" name="options" id="excelsheets"/>
                                        <label htmlFor="excelsheets">Exportar dados para o Excel</label>
                                    </div>
                                </div>
                                <div className="modal-icon-container">
                                    <ion-icon name="cloud-download-outline"></ion-icon>
                                </div>
                            </div>
                            <div className="form-group-button">
                                <button onClick={() => close()}>Cancelar</button>
                                <button>Exportar</button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default ExportDatas;