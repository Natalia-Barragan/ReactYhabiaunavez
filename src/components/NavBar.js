import {Navbar as BSnavbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import yhabiaunavez from '../img/yhabiaunavez.jpg'
import { NavLink } from "react-router-dom";
import CartWidget from '../components/CartWidget'

const Navbar = () => {

    return (
       
        <BSnavbar expand="lg" className="bg-body-tertiary">
            <Container>
            <BSnavbar.Brand><NavLink to="/"><img src={yhabiaunavez} alt="logo" width={140} height={140}/></NavLink></BSnavbar.Brand>
            <NavLink to="/" className={"nav-link"}><p className="fs-3 fw-bold mb-2"> Yhabiaunavez</p></NavLink>
            <BSnavbar.Toggle aria-controls="basic-navbar-nav" />
            <BSnavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavLink to="/newuser" className={"nav-link"}>NUEVO USUARIO</NavLink>
            <NavLink to="/login" className={"nav-link"}>INICIAR SESION</NavLink>
            <NavLink to="/category/:id" className={"nav-link"} >LISTADO DE PRODUCTOS</NavLink>
            <NavDropdown title="BUSQUEDA" id="basic-nav-dropdown">
            <NavDropdown.Item to="/itemlistcontainer">ROPA DE BEBE</NavDropdown.Item>
            <NavDropdown.Item to="/itemlistcontainer">ROPA DE NIÑO</NavDropdown.Item>
            <NavDropdown.Item to="/itemlistcontainer">ACCESORIOS</NavDropdown.Item>
            <NavDropdown.Item to="/itemlistcontainer">JUGUETES SENSORIALES</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            </BSnavbar.Collapse>
            <CartWidget href="/cartwidget" className="mr-20"/>
            </Container>           
        </BSnavbar>
        
    )
}
export default Navbar;

