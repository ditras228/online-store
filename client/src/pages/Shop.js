import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/devicesAPI";

const Shop = () => {
    const {device}=useContext(Context)

    useEffect(()=>{
      fetchTypes().then(data=>device.setTypes(data))
      fetchBrands().then(data=>device.setBrands(data))
      fetchDevices().then(data=>device.setDevices(data.rows))

    })
    return (
        <Container>
            <Row className={'mt-3'}>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;