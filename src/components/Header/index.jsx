import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useNavigate } from "react-router-dom";


export function Header(){

    const { singOut, user} = useAuth()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder 
    const navigate = useNavigate()

    function handleSignOut(){
        navigate("/")
        singOut()
    }

    return(
       <Container>
            <Profile to='/profile'>
                <img src={avatarUrl} alt="Foto do usuário" />
                <div>
                    <span> Bem vindo </span>
                    <strong> {user.name} </strong>
                </div>
            </Profile>

            <Logout onClick={ handleSignOut }>
                <RiShutDownLine/>
            </Logout>
      </Container>
    )
 
      
 }