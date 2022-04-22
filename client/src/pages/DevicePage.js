import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import bigStar from '../assets/bigStar.svg'
import { fetchOneDevice } from '../http/deviceAPI'

const DevicePage = () => {
   const [device, setDevice] = useState({ info: [] })
   const { id } = useParams()
   
   useEffect(() => {
      fetchOneDevice(id).then(data => setDevice(data))
   }, [])

   return (
      <Container className="mt-3">
         <Row>
         <Col md={4}>
            <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
         </Col>
         <Col md={4}>
            <Row md={'auto'} className="d-flex flex-column align-items-center">
               <h2>{device.name}</h2>
               <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                     background: `url(${bigStar}) no-repeat center center`,
                     width: 250, height: 240, backgroundSize: 'cover', fontSize: 64
                  }}
               >
                  {device.rating}
               </div>
            </Row>
         </Col>
         <Col md={4} className="d-flex justify-content-end">
               <Card
                  className="d-flex flex-column align-items-center justify-content-around me-4"
                  style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
               >
                  <h3>От {device.price} руб.</h3>
                  <Button variant={'outline-dark'}>Добавить в корзину</Button>
            </Card>
         </Col>
         </Row>
         <Row className="d-flex flex-column m-3">
            <h1>Характеристики</h1>
            {device.info.map((info, index) =>
               <Row className="p-2" key={info.id} style={{background: index % 2 ? 'transparent' : 'lightgray'}}>
                  {info.title}: {info.description}
               </Row>
               )}
         </Row>
      </Container>
   )
}

export default DevicePage
