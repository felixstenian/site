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

    console.log(profile);
    console.log(repositories);

    return (
      <Container>
        <header>
          <img src={profile.avatar_url} alt="Felix" />
          <h1>{profile.name}</h1>
          <strong>Developer Web</strong>
          <ul>
            <li>
              <a href="/">
                <FaLinkedin size={22} />
              </a>
            </li>
            <li>
              <a href="/">
                <FaGithub size={22} />
              </a>
            </li>
            <li>
              <a href="/">
                <FaMailBulk size={22} />
              </a>
            </li>
            <li>
              <a href="/">
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
