import Header from '@/components/Header'
import ApiAnimes from '@/services/apiAnimes'
import Link from 'next/link'
import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'

const index = (props) => {
  const animes = props.animes
  return (
    <>
    <Header titulo="AN"/> 
    <Container>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Detalhes</th>
          <th>Título</th>
          <th>Duração</th>
          <th>Ano</th>
        </tr>
      </thead>
      <tbody>
      {animes.map(a => (
           <tr>
           <td> <Link href={"/AN/" + a.mal_id}> <Button> Detalhes</Button> </Link></td>
           <td>{a.title}</td>
           <td>{a.duration}</td>
           <td>{a.year}</td>
         </tr> ))}
       
      </tbody>
    </Table>
   
    </Container>   
    </>
  )
}

export default index

export async function getServerSideProps(context) {
    const resultado = await ApiAnimes.get("/AN")
    const animes = resultado.data.data
    return {
        props: {
          animes
        }, 
    }
  }