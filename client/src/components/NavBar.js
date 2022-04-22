import React, { useContext } from 'react'
import { Context } from '..'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { NavLink, useHistory } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
   const { user } = useContext(Context)
   const history = useHistory()

   const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
   }

   return (
      <Navbar bg="dark" variant="dark">
         <Container>
            <NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>Купи Девайс</NavLink>
            {user.isAuth ?
               <Nav className="ms-auto" style={{color: 'white'}}>
                  <Button
                     variant={"outline-light"}
                     onClick={() => history.push(ADMIN_ROUTE)}
                  >
                     Админ панель
                  </Button>
                  <Button
                     variant={"outline-light"}
                     onClick={() => logOut()}
                     className="ms-2"
                  >
                     Выйти
                  </Button>
               </Nav>
               :
               <Nav className="ml-auto" style={{color: 'white'}}>
                  <Button variant={"outline-light"} onClick={()=> history.push(LOGIN_ROUTE)} >Авторизация</Button>
               </Nav>
            }
         </Container>
      </Navbar>
   )
})

export default NavBar
