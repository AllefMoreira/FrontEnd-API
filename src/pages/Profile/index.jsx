import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Container, Form, Avatar } from "./style";
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera} from 'react-icons/fi'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile(){
    const { user, updateProfile } = useAuth()

    const[name, setName] = useState(user.name)
    const[email, setEmail] = useState(user.email)
    const[passwordNew, setPasswordNew] = useState()
    const[passwordOld, setPasswordOld] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder 

    const[avatar, setAvatar] = useState(avatarUrl)
    const[avatarFile, setAvatarFile] = useState(null)

    const navigate = useNavigate()

    async function handleUpdate(){
        const updated ={
            name, 
            email,
            password: passwordNew,
            old_password: passwordOld
        }   
        const userUpdated = Object.assign(user, updated )

        await updateProfile({user: userUpdated, avatarFile})
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    function handleBack(){
        navigate(-1)
      }

    return(
        <Container>
            <header>
                <button type="button" onClick={handleBack}>
                    <FiArrowLeft/>
                </button>

                    
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt="Foto do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input type="file" id="avatar" onChange={handleChangeAvatar}/>
                    </label>
                </Avatar>

                <Input
                    placeholder="Nome"
                    type = "text"
                    icon={FiUser}
                    value={name}
                    onChange = {e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type = "text"
                    icon={FiMail}
                    value={email}
                    onChange = {e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha Atual"
                    type = "password"
                    icon={FiLock}
                    onChange = {e => setPasswordOld(e.target.value)}
                />

                <Input
                    placeholder="Nova Senha"
                    type = "password"
                    icon={FiLock}
                    onChange = {e => setPasswordNew(e.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}