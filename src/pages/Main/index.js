import React, {  useEffect } from "react";

import { Oval } from  'react-loader-spinner'

import { Container } from "./styles";

const Main = () => {
  useEffect(() => {
    window.location.replace('https://felix-website.vercel.app/')
  },[])
  
  return (
    <Container>
      <Oval color="#69ffdb" height={80} width={80} />
    </Container>
  )
}

export default Main