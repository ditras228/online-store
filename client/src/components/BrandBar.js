import React, {useContext} from 'react';
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className={'d-flex'}>
            {device.brands.map(brand=>
                <Card
                style={{cursor: 'pointer'}}
                key={brand.id}
                className={'p-3'}
                onClick={()=> {
                    device.setSelectedBrand(brand)
                    device.setPage(1)
                }}
                border={brand.id=== device.selectedBrand.id? 'danger': 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
}
)
export default BrandBar;