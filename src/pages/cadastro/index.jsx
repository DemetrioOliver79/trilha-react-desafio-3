import React from 'react'
import { MdEmail,MdLock,MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Column, Container, SubtitleCad, Title, Wrapper, TitleCad, CriarText, Row } from './styles'
import { Input } from '../../components/Input'

const Cadastro = () => {
  return (<>
  <Header />
  <Container>
    <Column>
        <Title>
        A plataorma para você<br />
        aprender com expoerts, dominar<br />
        as principais tecnologias<br />
        e entrar mais rápido<br />
        nas empresas mais<br />
        desejadas.
        </Title>
    </Column>
    <Column>
            <Title>Comece agora grátis</Title>
            <SubtitleCad>Crie sua conta e make the change</SubtitleCad>
        <Wrapper>
            <form>
            <Input type="text" placeholder="Nome completo" leftIcon={<MdPerson />}  name="nome" />
            <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" />
            <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" />
                
            <Button title="Crie sua conta" variant="secondary" type="submit" />
            </form>
        </Wrapper>
        <br/>
            <SubtitleCad>Ao clicar em "criar minha conta gratis",<br/>
                            declaro que aceito as politicas de<br/>
                            privacidade e os termos de uso da DIO.<br/>
                            </SubtitleCad>
                           <Wrapper>
                            <Row>
                            <TitleCad>Já tenho conta. </TitleCad>
                            <CriarText>Fazer login</CriarText>
                            </Row>
                           </Wrapper>
    </Column>
  </Container>
  </>
  )
}

export { Cadastro }
