import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import Square from './Square.js';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="projectsWrapper homePageSection" id="projects">
        <section className='projects'>
          <h2 className="pageTitle">Select Projects
          </h2>
          <Container fluid={true}>
            <Row className='projectsBox'>
              <Col>
                <Square imgSrc={process.env.PUBLIC_URL + "/images/toeWars.png"}
                  linkSrc="https://karensin.github.io/toeWars/" projName="Tic-Tac-Toe Wars" gitLink="https://github.com/karensin/toeWars">
                  <p className='description'>
                    A <strong>Star Wars Inspired Tic-Tac-Toe</strong> made using <strong>React</strong>. Used <strong>bootstrap</strong> and pure <strong>CSS animations</strong> to create scrolling Star Wars intro text.
                    <p>May the fun be with you!</p>
                  </p>
                </Square>
              </Col>
              <Col>
                <Square imgSrc={process.env.PUBLIC_URL + "/images/todolist.jpeg"}
                  linkSrc="https://karensin.github.io/todoList/" projName="To-Do List" gitLink="https://github.com/karensin/todoList" >
                  <p className='description'>
                    A <strong>To-Do List </strong> made using <strong>React</strong>. Keep track of your tasks, manage them online, and stay organized!
                  </p>
                </Square>
              </Col>
              <Col>
                <Square imgSrc={process.env.PUBLIC_URL + "/images/MeeseeksBox.jpg"}
                  linkSrc="https://www.facebook.com/meeseeksBox2019" projName="Meeseeks Bot" gitLink="https://github.com/karensin/MeeseeksBox" >
                  <p className="description">
                    A <strong>facebook messenger bot</strong> that is automatically responds with text and voice lines from Rick and Morty. This project utilized <strong>webhooks</strong> for token authentication and the <strong>facebook messenger api</strong> to read and send messages.
                  </p>
                </Square>
              </Col>
              <Col>
                <Square imgSrc={process.env.PUBLIC_URL + "/images/bloccit.png"}
                  linkSrc="https://karensin-bloccit.herokuapp.com/" projName="Bloccit" gitLink="https://github.com/karensin/bloccit" >
                  <p className='description'>
                    An <strong>online content aggregator</strong> and discussion community built with <strong>ExpressJS</strong> and <strong>Model-View-Controller (MVC)</strong>. Bloccit uses <strong>ExpressJS Middleware</strong> to perform authentication and validation which allows users to sign up,
                    sign in and create topics, posts, comments, votes and more.
                  </p>
                </Square>
              </Col>
              <Col>
                <Square imgSrc={process.env.PUBLIC_URL + "/images/Chatty.png"}
                  linkSrc="https://chat-ty.herokuapp.com/" projName="Chatty" gitLink="https://github.com/karensin/Chat-ty" >
                  <p className='description'>
                    An <strong>instant messaging</strong> system with <strong>Firebase (BaaS)</strong> backend. Chat-ty allows users to authenticate
                    using <strong>Google sign-in</strong> to sends and recieves messages in real time.
                  </p>
                </Square>
              </Col>
              <Col>
                <Square imgSrc={process.env.PUBLIC_URL + "/images/musicPlayer.jpg"}
                  linkSrc="https://jams-ksin.herokuapp.com/" projName="MusicPlayer" gitLink="https://github.com/karensin/bloc-jams-react" >
                  <p className='description'>
                    A <strong>HTML5 music player</strong> made using <strong>React</strong> and <strong>React Router</strong> to create a Single-Page Application to handle client-side page transitions.
                  </p>
                </Square>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    )
  }
}


export default Projects;
