import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createBrand} from "../../http/devicesAPI";

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addBrand =()=>{
        createBrand({name: value}).then(data=> setValue(''))
        onHide()
    }
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={onHide}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                  <Form.Control
                  placeholder={'Введите название бренда'}
                  value={value}
                  onChange={e=>setValue(e.target.value)}
                  />

              </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={()=> addBrand()}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;