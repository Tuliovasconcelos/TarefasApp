import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'
import axios from 'axios'

//criando constante para pegar URL da api
const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {


    constructor(props) {
        super(props)
        //Fazendo o estado da descrição do input
        this.state = { description: '', list: [] }

        //construtor para fazer a amarração do THIS.
        this.handleSearch = this.handleSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleClear = this.handleClear.bind(this)
        //chamando função refresh para iniciar carregado
        this.refresh()
    }

    //Função que mantém a lista atualizada (pesquisa)
    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            //altera o estado atual da lista e da description  
            .then(resp => this.setState({ ...this.state, description, list: resp.data }))
    }
    handleSearch() {
        this.refresh(this.state.description)
    }

    //Função para atualizar o estado do input
    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    //Função que adiciona a description na collection do banco.
    handleAdd() {
        const description = this.state.description
        //Adiciona a description por post no banco
        axios.post(URL, { description })
            //Atualiza a tela após adicionar
            .then(resp => this.refresh())
    }

    //função para deletar tarefa
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            //Atualizar a tela após a exclusão
            .then(resp => this.refresh(this.state.description))
    }

    //Altera o estado da tarefa ( concluida )
    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: 'true' })
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />

                <TodoList
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                />
            </div>
        )
    }
}