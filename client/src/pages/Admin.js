import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/createBrand";
import CreateType from "../components/modals/createType";
import CreateDevice from "../components/modals/createDevice";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className={'d-flex flex-column'}>
            <Button
                variant={'outline-dark'}
                onClick={()=>{
                    setTypeVisible(true)
                    console.log(typeVisible)
                }}
                className={'mt-3 p-2'}
            >
                Добавить тип</Button>
            <Button
                variant={'outline-dark'}
                onClick={()=>setBrandVisible(true)}
                className={'mt-3 p-2'}

            >
                Добавить бренд</Button>
            <Button
                variant={'outline-dark'}
                onClick={()=>setDeviceVisible(true)}
                className={'mt-3 p-2'}


            >
                Добавить устройство</Button>

            <CreateBrand show={brandVisible} onHide={()=>setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={()=>setTypeVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={()=>setDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;