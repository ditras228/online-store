import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])
    const addInfo = () =>{
        setInfo([...info, {title: '', description: '', number: Date.now() }])
    }
    const removeInfo = (number) =>{
        setInfo(info.filter(i=>i.number !== number))
    }
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Dropdown className={'mt-3'}>
                    <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type=>
                            <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className={'mt-3'}>
                    <Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand=>
                            <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>

                <Form.Control
                    className={'mt-3'}
                    placeholder={'Введите название устройства'}
                />
                <Form.Control
                    className={'mt-3'}
                    placeholder={'Введите стоимость устройства'}
                    type={'number'}
                />
                <Form.Control
                    className={'mt-3'}
                    type={'file'}
                />
                <Button
                    className={'mt-3'}
                    onClick={()=>addInfo()}
                >
                    Добавить новое свойство
                </Button>
                {info.map(i=>
                    <Row className={'mt-3'} key={i.number}>
                        <Col md={4}>
                            <Form.Control
                                placeholder={'Введите название свойства'}/>
                        </Col>
                        <Col md={4}>
                            <Form.Control
                                placeholder={'Введите описание свойства'}/>
                        </Col>
                        <Col md={4}>
                            <Button variant={'outline-danger'}
                            onClick={()=>removeInfo(i.number)}>Удалить</Button>
                        </Col>
                    </Row>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;