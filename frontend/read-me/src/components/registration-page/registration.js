import React from "react";
import { Accordion } from "react-bootstrap"
// import {useEffect, useState} from "react";

import RegistrationForm from "../../components/registration-page/registrationForm.comp"
import "./registration.style.css"

export const Registration = () => {
    return (
    <div className="registration-page bg-info">
        <Accordion className="form-box">
            <RegistrationForm />
        </Accordion>
    </div>
    )
}