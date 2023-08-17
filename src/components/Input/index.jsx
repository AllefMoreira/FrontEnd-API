import { Container } from "./style";

export function Input({icon: Icon, ...rest}){
    return(
        <Container>
            {Icon && <Icon size={20}/>} {/*o && é usado para mostrar o resultado caso tenha, e caso não tenha, não mostrará nada*/}
            <input {...rest} />
        </Container>
    )
}