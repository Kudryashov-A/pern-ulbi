import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { createType } from '../../http/deviceAPI'

const CreateType = (props) => {
   const [value, setValue] = useState('')
   const addType = () => {
      createType({ name: value }).then(data => {
         setValue('')
         props.onHide()
      })
   }

   return (
      <Modal
         {...props}
         // show={show}
         // onHide={onHide}
         // size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               Добавить тип
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Form.Control
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder={'Введите название типа'} />
            </Form>
         </Modal.Body>
         <Modal.Footer>
            <Button variant="outline-danger" onClick={props.onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={addType}>Добавить</Button>
         </Modal.Footer>
      </Modal>
   )
}

export default CreateType
