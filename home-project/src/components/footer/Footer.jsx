import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            <p>Esse site foi desenvolvido com React <i class="fa-brands fa-react"></i></p>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Contatos</h2>
                    <p><i class="fa-brands fa-whatsapp"></i> (31) 99130-3890</p>
                    <p><i class="fa-regular fa-envelope"></i> lucascamarino@gmail.com</p>   
                </div>
                <div className="footer-link-items">
                    <h2>Redes Sociais</h2>
                    <Link to='https://github.com/lunatos'><i class="fa-brands fa-github"></i> GitHub</Link>
                    <Link to='https://www.linkedin.com/in/lucas-camarino/'><i class="fa-brands fa-linkedin"></i> Linkedin</Link>
                    <Link to='https://www.instagram.com/lucas_camarino/'><i class='fab fa-instagram' /> Instagram </Link>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <small class='website-rights'>Lucas Camarino Emerick de Almeida © 2024</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link github'
                            to='https://github.com/lunatos'
                            target='_blank'
                            aria-label='GitHub'
                        >
                            <i class="fa-brands fa-github"></i>
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='https://www.instagram.com/lucas_camarino/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link linkedin'
                            to='https://www.linkedin.com/in/lucas-camarino/'
                            target='_blank'
                            aria-label='Linkedin'
                        >
                            <i class="fa-brands fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer