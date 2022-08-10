import { FiExternalLink, FiGithub } from "react-icons/fi";
import Slide from "react-reveal";
import Funboard from "../images/Funboard.png";
import RPS from "../images/RPS.png";
import TicTacToe from "../images/TicTacToe.png";
import Snakegame from "../images/Snakegame.png";
import Ewallet from "../images/Ewallet.png";
import Newsapp from "../images/Newsapp.png";
import Amazonclone from "../images/Amazonclone.png";

import "./Project.css";

function Project() {
  return (
    <div className="project-container" id="projects">
      <h1 className="project-heading">Projects</h1>
      <div className="project-card-container">

      <Slide left>
          <div className="project-card">
            <div className="project-image">
              <img src={Ewallet} alt="" />
            </div>
            <div className="about-project">
              <div className="project-title">
                <h3>Web 3.0 Etherium E-wallet</h3>
              </div>
              <div className="project-description">
                <p>Crypto Wallet</p>
              </div>
              <div className="tech-used">
                <div className="tech-name">Reactjs - frontend</div>
                <div className="tech-name">Node Js - backend</div>
                <div className="tech-name">CSS3</div>
                <div className="tech-name">HTML5</div>
                <div className="tech-name">Solidity - writting smart contracts</div>
                <div className="tech-name">Hardhat</div>
                <div className="tech-name">Metamask</div>
              </div>
              <div className="projects-links">
                <a
                  href="https://github.com/codeAlpha776Himadri/E-wallet---web-3.0"
                  target="_blank"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://github.com/codeAlpha776Himadri/E-wallet---web-3.0"
                  target="_blank"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </Slide>



        <Slide left>
          <div className="project-card">
            <div className="project-image">
              <img src={Newsapp} alt="" />
            </div>
            <div className="about-project">
              <div className="project-title">
                <h3>News App</h3>
              </div>
              <div className="project-description">
                <p>News app fully built in react, fetches country and catagory wise news</p>
              </div>
              <div className="tech-used">
                <div className="tech-name">Reactjs - class based components</div>
                <div className="tech-name">HTML5</div>
                <div className="tech-name">CSS3</div>
                <div className="tech-name">Fetch API</div>
              </div>
              <div className="projects-links">
                <a
                  href="https://github.com/codeAlpha776Himadri/News-App---react-"
                  target="_blank"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://github.com/codeAlpha776Himadri/News-App---react-"
                  target="_blank"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </Slide>


        <Slide left>
          <div className="project-card">
            <div className="project-image">
              <img src={Amazonclone} alt="" />
            </div>
            <div className="about-project">
              <div className="project-title">
                <h3>E-Commerce App</h3>
              </div>
              <div className="project-description">
                <p>Fullstack clone of Amazon website</p>
              </div>
              <div className="tech-used">
                <div className="tech-name">Reactjs</div>
                <div className="tech-name">Redux</div>
                <div className="tech-name">MaterialUI</div>
                <div className="tech-name">ExpressJs</div>
                <div className="tech-name">MongoDB</div>
                <div className="tech-name">Firebase</div>
                <div className="tech-name">Heroku</div>
              </div>
              <div className="projects-links">
                <a
                  href="#"
                  target="_blank"
                >
                  <FiGithub />
                </a>
                <a
                  href="#"
                  target="_blank"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </Slide>



        <Slide left>
          <div className="project-card">
            <div className="project-image">
              <img src={Snakegame} alt="" />
            </div>
            <div className="about-project">
              <div className="project-title">
                <h3>Snake Game</h3>
              </div>
              <div className="project-description">
                <p>Classic Snake Game</p>
              </div>
              <div className="tech-used">
                <div className="tech-name">HTML</div>
                <div className="tech-name">CSS</div>
                <div className="tech-name">Vanilla JS</div>
              </div>
              <div className="projects-links">
                <a
                  href="https://github.com/codeAlpha776Himadri/snakeGame"
                  target="_blank"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://codealpha776himadri.github.io/snakeGame/"
                  target="_blank"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </Slide>


        <Slide right>
          <div className="project-card">
            <div className="project-image">
              <img src={TicTacToe} alt="" />
            </div>
            <div className="about-project">
              <div className="project-title">
                <h3>Tic Tac Toe</h3>
              </div>
              <div className="project-description">
                <p>Tic Tac Toe Game</p>
              </div>
              <div className="tech-used">
                <div className="tech-name">HTML</div>
                <div className="tech-name">CSS</div>
                <div className="tech-name">JAVASCRIPT</div>
              </div>
              <div className="projects-links">
                <a
                  href="https://github.com/codeAlpha776Himadri/tick-tac-toe"
                  target="_blank"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://codealpha776himadri.github.io/tick-tac-toe/"
                  target="_blank"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left>
          <div className="project-card">
            <div className="project-image">
              <img src={RPS} alt="" />
            </div>
            <div className="about-project">
              <div className="project-title">
                <h3>Rock Paper Scissor</h3>
              </div>
              <div className="project-description">
                <p>Rock Paper Scissor Game</p>
              </div>
              <div className="tech-used">
                <div className="tech-name">HTML</div>
                <div className="tech-name">CSS</div>
                <div className="tech-name">JAVASCRIPT</div>
                <div className="tech-name">EVENT LISTENERS</div>
              </div>
              <div className="projects-links">
                <a
                  href="https://github.com/codeAlpha776Himadri/RockPaperScissor"
                  target="_blank"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://codealpha776himadri.github.io/RockPaperScissor/"
                  target="_blank"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </Slide>

        <Slide right>
          <div className="project-card">
            <div className="project-image">
              <img
                src={Funboard}
                style={{
                  width: "99%",
                  marginLeft: "0.5%",
                  zIndex: 1000,
                  order: 100,
                }}
                alt="Recipe Image"
              />
            </div>
            <div className="about-project">
              <div className="project-title">
                <h3>Canvas Funboard</h3>
              </div>
              <div className="project-description">
                <p>Drawing is fun</p>
              </div>
              <div className="tech-used">
                <div className="tech-name">HTML</div>
                <div className="tech-name">CSS</div>
                <div className="tech-name">HTML CANVAS</div>
              </div>
              <div className="projects-links">
                <a
                  href="https://github.com/codeAlpha776Himadri/canvasFunBoard"
                  target="_blank"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://codealpha776himadri.github.io/canvasFunBoard/"
                  target="_blank"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </Slide>

      </div>
    </div>
  );
}

export default Project;
