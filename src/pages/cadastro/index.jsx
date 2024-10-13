import React from 'react'
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { Column, Container, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from '../login/styles'
import { Header } from '../../Components/Header';
import { JaTenhoConta, FazerLogin, ContainerConta } from './styles';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api'


const schema = yup.object({
    nome: yup.string().required('Campo Obrigatório'),
    email: yup.string().email('Email invalido').required('Campo obrigatório'),
    password: yup.string().min(3, "No minimo 3 caracteres!").required('Campo obrigatório'),
}).required();

const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });

    const onSubmit = async formData => {
        try {
            const newUser = {
                nome: formData.nome,
                email: formData.email,
                senha: formData.password,
                // O ID pode ser gerado automaticamente pela API (se configurado), ou você pode gerar um ID manualmente se necessário.
            };
    
            const response = await api.post('user', newUser); // 'users' é o endpoint de criação de usuários
            if (response.status === 201) {
                alert('Usuário criado com sucesso!');
                navigate('/feed'); // Redirecionar para o feed após o cadastro
            } else {
                alert('Erro ao criar usuário.');
            }
        } catch (error) {
            alert('Erro ao tentar cadastrar, tente novamente!');
            console.error(error);
        }
    };

    return (<>
        <Header></Header>
                <Container>
                    <Column>
                        <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                        </Title>
                    </Column>
                    <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora GRÁTIS!</TitleLogin>
                        <SubTitleLogin>Crie sua conta and make the change</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}> 
                            <Input name="nome" errorMessage={errors?.nome?.message} control={control} placeholder="Nome Completo" leftIcon={<MdPerson></MdPerson>}></Input>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail></MdEmail>}></Input>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock></MdLock>}></Input>
                            <Button title="Criar minha conta" variant="secondary" type="submit"></Button>
                        </form>
                        <Row>
                           <SubTitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubTitleLogin>
                        </Row>
                        <ContainerConta>
                            <JaTenhoConta>Já tenho conta.</JaTenhoConta>
                            <FazerLogin>Fazer Login</FazerLogin>
                        </ContainerConta>
                    </Wrapper>
                    </Column>
                </Container>
    </>
        
    )
}

export { Cadastro }