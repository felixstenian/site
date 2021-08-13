import React, { Component } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsappSquare,
  FaMailBulk,
} from "react-icons/fa";

import apiGitHub from "../../services/apiGitHub";
import apiBitbucket from "../../services/apiBitbucket";

import { Container, Content } from "./styles";

export default class Main extends Component {
  state = {
    profile: "",
    repositories: [],
  };

  async componentDidMount() {
    const nameProfile = "felixstenian";

    const profile = await apiGitHub.get(`/users/${nameProfile}`);
    const repos = await apiBitbucket.get(`/repositories/${nameProfile}`);

    this.setState({
      profile: profile.data,
      repositories: repos.data.values,
    });
  }

  render() {
    const { profile, repositories } = this.state;

    return (
      <Container>
        <header>
          <img src={profile.avatar_url} alt="Felix" />
          <h1>{profile.name}</h1>
          <strong>Software Developer</strong>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/felixstenian"
                target="_black"
              >
                <FaLinkedin size={22} />
              </a>
            </li>
            <li>
              <a href="https://github.com/felixstenian" target="_black">
                <FaGithub size={22} />
              </a>
            </li>
            <li>
              <a href="mailto:felixstenian@gmail.com.br" target="_black">
                <FaMailBulk size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5582988507881?text=Olá%20Felix !"
                target="_black"
              >
                <FaWhatsappSquare size={22} />
              </a>
            </li>
          </ul>
        </header>
        <Content></Content>
      </Container>
    );
  }
}
