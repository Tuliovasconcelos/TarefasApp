import React from 'react'

export default props => {

    //arrow function que renderiza as linhas da tabela 
    const renderRows = () => {

        //verifica se a lista atualizada no get está vazia
        const list = props.list || []

        //Percorrendo a lista
        return list.map(
            todo => (
                <tr key={todo._id}>
                    {/*Quando o a situação da tarefa estiver concluida, vai aplicar o css custom.css*/}
                    <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                    <td>
                        <button className="btn btn-success" hide={todo.done} onClick={() => props.handleMarkAsDone(todo)}>
                            <i className="fa fa-check"></i>
                        </button>
                        <button className="btn btn-warning" hide={!todo.done} onClick={() => props.handleMarkAsPending(todo)}>
                            <i className="fa fa-undo"></i>
                        </button>
                        <button className="btn btn-danger" hide={!todo.done} onClick={() => props.handleRemove(todo)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>
                </tr>
            )
        )
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}