import React from "react";
import { Button } from "../button/Button";
import "./IntroSection.css";

function IntroSection() {
    return (
        <div className="bg">
            <div className="intro-container" >
                <h1>Bem vindo a minha bio</h1>
                <p>Esse site foi desenvolvido com React <i class="fa-brands fa-react"></i></p>
                <div className="intro-btns">
                    <Button className="btn"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large">teste</Button>
                </div>
            </div>
        </div>
    );
}

export default IntroSection