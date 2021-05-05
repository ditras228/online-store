import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

const DevicePage = () => {
    const device = {id: 1, name: '12 pro', price: 9999, rating: 5, img: 'http://placehold.it/100x100',
        infos: [
            {id: 1, title: 'test', description: 'testToo'},
            {id: 2, title: 'test', description: 'testToo'},
            {id: 1, title: 'test', description: 'testToo'},
            {id: 2, title: 'test', description: 'testToo'},
            {id: 1, title: 'test', description: 'testToo'},
            {id: 2, title: 'test', description: 'testToo'},

        ],
    }
    return (
        <Container>
            <Row className={'mt-3'}>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row>
                        <h2>{device.name}</h2>
                        <div className={'d-flex align-items-center justify-content-center'}
                             style={{
                                 background: 'url() no-repeat center center',
                                 width: 240,
                                 height: 240,
                                 backgroundSize: 'cover',
                                 fontSize: 64
                             }}
                        >
                            <div>{device.rating}</div>
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className={'d-flex flex-column align-items-center justify-content-center justify-content-around'}
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>

                        <h3>От: {device.price}</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className={'d-flex flex-column mt-3'}>
                <h1>Характеристики:</h1>
                {device.infos.map(i=>
                <Row key={i.id} style={{background: i.id % 2 ===0 && 'lightgray', padding: 10}}>
                    {i.title}:{i.description}
                </Row>)}
            </Row>
        </Container>
    );
};

export default DevicePage;