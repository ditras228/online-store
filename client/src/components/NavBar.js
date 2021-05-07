import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";

const NavBar = observer(() => {
        const {user} = useContext(Context)
        const history = useHistory()
        return (
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">КупиДевайс</Navbar.Brand>
                    {user.isAuth ?
                        <Nav className="ml-auto">
                            <Button
                                variant={"outline-light"}
                                className={'mr-2'}
                                onClick={()=> history.push(ADMIN_ROUTE)}
                            >Админ панель</Button>
                            <Button
                                variant={"outline-light"}
                                onClick={()=>
                                {
                                    user.setIsAuth(false)
                                    history.push(LOGIN_ROUTE)
                                }}
                            >Выйти</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto">
                            <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                        </Nav>

                    }
                    </Container>
                </Navbar>
        );
    }
)
export default NavBar;