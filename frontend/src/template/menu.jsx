import React from 'react'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-inverse bg-inverse">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <i className="fa fa-calendar-check-o"></i> TodoApp
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="#/todos">Tarefas</a>
                    </li>
                    <li>
                        <a href="#/about">Sobre</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)