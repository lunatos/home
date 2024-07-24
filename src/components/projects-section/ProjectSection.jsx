import React, { useState, useEffect } from 'react';
import "./ProjectSection.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'

function ProjectSection() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/lunatos/repos`)
      .then(response => response.json())
      .then(data => {
        setRepos(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="projetos-background"></div>
      <div className="back-color">
        <Container className="project-container">
          <Row>
            <h2 className='p-2'>Meus Repositorios Publicos no GitHub:</h2>
            <Accordion defaultActiveKey={0}>
              {repos.map((repo, index) => (
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>{repo.name}</Accordion.Header>
                  <Accordion.Body>
                    <Link
                      class="github-link"
                      to={repo.html_url}
                      target='_blank'
                      aria-label='GitHub'
                    >
                      <i class="fa-brands fa-github"></i> {repo.html_url}
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProjectSection;