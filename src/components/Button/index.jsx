import { Container } from "./style";

//o parametro "...rest" nos fornece todos os outros argumentos que não foram desestruturados 
export function Button({title, loading = false, ...rest}){

   return(
      <Container type="button" disabled={loading} {...rest}>
        {loading ? "Carregando..." : title}
     </Container>
   )

     
}