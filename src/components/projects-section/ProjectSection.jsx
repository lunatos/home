import React from "react";
import "./ProjectSection.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function ProjectSection() {
    return (
        <>
            <div className="code2-background"></div>
            <div className="back-color">
                <Container className="project-container">
                    <Row>
                        <h2 className="temp-msg">Visite a minha pagina no github para visualizar alguns dos projetos que ja trabalhei</h2>
                        <Link
                            class='github-page'
                            to='https://github.com/lunatos'
                            target='_blank'
                            aria-label='GitHub'
                        >
                            <i class="fa-brands fa-github"></i>
                        </Link>
                    </Row>
                </Container>
            </div>
        </>

    );
}

export default ProjectSection