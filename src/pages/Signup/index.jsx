import { Container, Form, Background } from './style'

import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiMail, FiLock, FiUser} from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

import { useState } from 'react'

export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  function handleSubmit(){
    let checkFieldsIsNotFilled = !name || !email || !password
    if(checkFieldsIsNotFilled){
        return alert("Preencha todos os campos")
    }

    api.post("/users", {name, email, password})
    .then(() =>{
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
    })
    .catch(error =>{
        if(error.response){
            alert(error.response.data.message)
        } else{
            alert("Não foi possível cadastrar!")
        }
    })
  }

    return(
        <Container>
            <Background/>

            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salver e gerenciar seus links úteis.</p>

                <h2> Crie sua conta </h2>

                <Input
                    placeholder="nome completo"
                    type = "text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="e-mail"
                    type = "text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="senha"
                    type = "password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSubmit}/>

                <Link to='/'> Voltar para o login</Link>
            </Form>

            
        </Container>
    )
}