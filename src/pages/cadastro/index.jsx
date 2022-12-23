
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { useNavigate  } from "react-router-dom";
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { api } from '../../services/api';

import { Controller, useForm } from 'react-hook-form';

import { Container, Title, Column, TitleLogin, SubtitleLogin, CriarText, Row, Wrapper, TextConta } from './styles';


const Cadastro = () => {

    const navigate = useNavigate()

//---------------------------------------
    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

//Aqui tenho que pesquisar como fazer POST no async /users?nomecompleto=${formData.name}&email=${formData.email}&senha=${formData.senha}

/*  const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);

            if(data.length && data[0].id){
                navigate('/feed')
                return
            }

            alert('Usuário ou senha inválido')


        }catch(e){
            alert("Erro")
        }

    } 
    console.log('errors', errors); */
//------------------------------------------

    return (
        <>
         <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais
                    tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            
            <Column>
                <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form>
                    <Input placeholder = "Nome Completo" leftIcon={<MdPerson/>} name = "nomecompleto" control = { control }/>
                    {errors.name && <span>Nome Completo é Obrigatório</span>}
                    <Input placeholder = "E-mail" leftIcon={<MdEmail />} name = "email" control = { control }/>
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type = "password" placeholder = "Password" leftIcon={<MdLock />} name = "senha" control = { control }/>
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <SubtitleLogin>
                        Ao clicar em "Criar minha conta", declaro que aceito as Políticas
                        de Privacidade e os Termos de Uso da DIO
                    </SubtitleLogin>
                </Row>
                <Row>
                    <TextConta> Já tenho Conta. </TextConta>
                    <CriarText href="/login"> Fazer Login </CriarText>
                </Row>
                
                </Wrapper>
            </Column>
            
        </Container>
        
            
        </>
    )
}

export { Cadastro }

