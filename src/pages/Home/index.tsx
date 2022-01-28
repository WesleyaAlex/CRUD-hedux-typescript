import React from "react"
import { Button } from '@material-ui/core'
import { useNavigate } from "react-router-dom"
import './index.css'

const Home: React.FC = () => {
    const navigation = useNavigate()

    return (
        <div className="grid-item bg-gray full-width">
            <h1>Bem vindo!</h1>
            <p>Este é o seu sistema, utilize a barra de navegação para acessar as páginas</p>
            <Button type="submit" variant="contained" color="primary" className="full-width" onClick={() => navigation('register-contacts')}>Cadastrar</Button>
        </div>
    )
}

export default Home