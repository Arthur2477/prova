import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Cb from './Cb'
import Rd from './Rd'
import { Container } from 'react-bootstrap';

const Pagina = (props) => {

    return (
        <>
            <Cb />
            <div className='bg-secondary text-white py-3 text-center mb-3'>
                <h1>{props.titulo}</h1>
            </div>
            
            <Container className='mb-5'>
                {props.children}
            </Container>

            <Rd />
        </>
    )
}

export default Pagina