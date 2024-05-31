import React from "react";
import { Button } from "../button/Button";

function IntroSection() {
    return (
        <div className="intro-container" >
            <image src="/img/cerebro.png"/>
            <h1>Bem vindo a minha bio</h1>
            <p>Esse site foi desenvolvido com React</p>
            <div className="intro-btns">
                <Button className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"></Button>
            </div>
        </div>
    );
}

export default IntroSection