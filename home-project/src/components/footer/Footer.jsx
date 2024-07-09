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
                    <p>Meu email</p>
                    <p>Meu wpp</p>
                    <p>Meu instagram</p>
                    <p></p>
                </div>
                <div className="footer-link-items">
                    <h2>Redes Sociais</h2>
                    <p>Meu github</p>
                    <p>Meu linkedin</p>
                    <p>Meu instagram</p>
                    <p>Meu wpp</p>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <small class='website-rights'>Lucas Camarino Emerick de Almeida © 2024</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer