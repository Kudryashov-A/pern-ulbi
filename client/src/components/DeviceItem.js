import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { useHistory } from 'react-router'
import star from '../assets/star.svg'
import { fetchBrands } from '../http/deviceAPI'
import { DEVICE_ROUTE } from '../utils/consts'

const DeviceItem = ({ device }) => {
   const history = useHistory()
   let brands = []
   fetchBrands().then(data => brands.push(data))
   console.log(brands);
   // let brandsQ
   // fetchBrands().then(data => console.log(data))
   // let brandName
   // if (device.brandId === brands.id) {brandName = brands.name}
   // console.log(device.brands)

   return (
      <Col md={3} className="mt-3" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
         <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
            <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
            <div className="d-flex justify-content-between align-items-center mt-1">
               <div className="text-black-50">Samsung</div>
               <div className="d-flex align-items-center">
                  <div>{device.rating}</div>
                  <Image width={16} height={16} src={star} />
               </div>
            </div>
               <div>
                  {device.name}
               </div>
         </Card>
      </Col>
   )
}

export default DeviceItem
