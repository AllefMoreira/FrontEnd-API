import { Container, Links, Content } from './styles'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details(){

  const [data, setData] = useState()
  const params = useParams()
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  async function handleRemoveNote(){
    const confirm = window.confirm("Você deseja mesmo EXCLUIR essa nota?")
    if(confirm){
      await api.delete(`/notes/${params.id}`)
      handleBack()
    }
  }
  
  useEffect(() =>{
    async function fetchNotes(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNotes()
  }, [])
  return(
    <Container>
      <Header/>

      {
        data && 
        <main>
        <Content>

          <ButtonText 
            title="Excluir nota!" 
            onClick={handleRemoveNote}
          />

          <h1>{data.title}</h1>
          <p>{data.description}</p>
          {
            data.links &&
            <Section title="Links Úteis">
              {/*A seguir seria o Children:*/}
              <Links>
                {     
                  data.links.map(link => (                
                  <li key={String(link.id)}> 
                    <a href={link.url} target='_blanc'> {link.url} </a> 
                  </li>
                  ))
                }            
              </Links>
            </Section>
          }

          { data.tags &&

            <Section title = "Marcadores">
              {
                data.tags.map(tag => (
                  <Tag 
                    key={tag.id}
                    title={tag.name}
                  />
                ))
              }
              
            </Section>
          }
          <Button 
            title="Voltar" 
            onClick={handleBack}
          />
        </Content>
        
        </main>
      }

    </Container>
    
  )
}