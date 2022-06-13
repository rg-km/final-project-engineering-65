import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap"

const initialState = {
    email: "",
    password: "",
    name: "",
    birth: "",
    gender: "",
}
// const passVerificationError = {}
const RegistrationForm = () => {
    const [newUser, setNewUser] = useState(initialState)
    // const [passwordError, setPasswordError] = useState(initialState)

    useEffect(() => {}, [newUser])

    const handleOnChange = e =>{
        const {name, value} = e.target

        setNewUser({...newUser, [name]: value})

        if(name === "password"){}
    }

        console.log(newUser)
        return <Container>
            <Row>
                <Col>
                <h1>Buat Akun</h1>
                </Col>
            </Row>
            <hr/>

            <Row>
                <Col>
                <Form>
                    {/* ***************************EMAIL********************** */}
                    <Form.Group controlIID="formBasicEmail">
                        {/* <Form.Label>Email</Form.Label> */}
                        <Form.Control type="email" name="email" value={newUser.email} onChange={handleOnChange} placeholder="Email"></Form.Control>
                        {/* <Form.Text className = "text-muted">                   
                        </Form.Text> */}
                    </Form.Group>
                    {/* ************************************************* */}

                    {/* ***********************PASSWORD************************** */}
                    <Form.Group controlIID="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="password" name="password" value={newUser.password} onChange={handleOnChange} placeholder="Password"></Form.Control>
                    </Form.Group>
                    {/* ************************************************* */}

                    {/* *********************NAMA LENGKAP**************************** */}
                    <Form.Group controlIID="formBasicName">
                        {/* <Form.Label>namaLengkap</Form.Label> */}
                        <Form.Control type="name" name="name" value={newUser.name} onChange={handleOnChange} placeholder="Nama Lengkap"></Form.Control>
                    </Form.Group>
                    {/* ************************************************* */}

                    {/* ***********************TTL************************* */}
                    <Form.Group controlIID="formBasicBirth">
                        {/* <Form.Label>TTL</Form.Label> */}
                        <Form.Control type="birth" name="birth" value={newUser.birth} onChange={handleOnChange} placeholder="Tempat, Tanggal Lahir"></Form.Control>
                    </Form.Group>
                    {/* ************************************************* */}

                    {/* *********************JENIS KELAMIN**************************** */}
                    <Form.Group controlIID="formBasicGender">
                        {/* <Form.Label>jenisKelamin</Form.Label> */}
                        <Form.Control type="gender" name="gender" value={newUser.gender} onChange={handleOnChange} placeholder="Jenis Kelamin"></Form.Control>
                    </Form.Group>
                    {/* ************************************************* */}

                    <Button variant="primary" type="submit">
                        Daftar
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    }

export default RegistrationForm