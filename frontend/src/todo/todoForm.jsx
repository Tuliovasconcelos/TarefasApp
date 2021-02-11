import React from 'react'

export default props => {
    //função para buscar e adicionar pelo teclado
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }
        else if (e.key === 'Escape') {
            props.handleClear()
        }
    }
    return (
        <div className="form" className="todoForm">
            <div className="col-xs-12 col-sm-9 col-md-10">
                <input id="description" className="form-control" placeholder="Adicionar uma tarefa"
                    onChange={props.handleChange}
                    value={props.description}
                    onKeyUp={keyHandler} />
            </div>
            <div className="col-xs-12 col-sm-3 col-md-2">
                <button className="btn btn-info" onClick={props.handleSearch}>
                    <i className="fa fa-search"></i>
                </button>
                <button className="btn btn-primary" onClick={props.handleAdd}>
                    <i className="fa fa-plus"></i>
                </button>
                <button className="btn btn-default" onClick={props.handleClear}>
                    <i className="fa fa-close"></i>
                </button>
            </div>

        </div>
    )
}