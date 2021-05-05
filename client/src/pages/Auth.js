import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {useLocation} from "react-router";
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";

const Auth = observer(() => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container
            className={'d-flex justify-content-center align-items-center'}
            style={{height: window.innerHeight - 52}}
        >
            <Card
                style={{width: 600}} className={'p-5'}>
                {isLogin ?
                    <h2>Авторизация</h2>
                    :
                    <h2>Регистрация</h2>
                }
                <Form className={'d-flex flex-column'}>
                    <Form.Control
                        className={'mt-3'}
                        placeholder={'Введите ваш email...'}
                    />
                    <Form.Control
                        className={'mt-3'}
                        placeholder={'Введите ваш пороль...'}
                    />
                    <Row
                        className={'d-flex justify-content-between mt-3 pl-3 pr-3'}
                    >
                        {isLogin ?
                            <div>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink></div>
                            :
                            <div>Есть аккаунт?<NavLink to={LOGIN_ROUTE}>Войти</NavLink></div>
                        }
                        {isLogin ?
                            <Button
                                variant={'success'}
                            >
                                Войти
                            </Button>
                            :
                            <Button
                                variant={'success'}
                            >
                                Регистрация
                            </Button>
                        }
                    </Row>
                </Form>

            </Card>

        </Container>
    );
})

export default Auth;