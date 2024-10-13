import { Button } from '../../Components/Button';
import { Header } from '../../Components/Header';
import { MdEmail, MdLock } from 'react-icons/md'
import { Input } from '../../Components/Input';
import { Column, Container, CriarConta, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api'

const schema = yup.object({
    email: yup.string().email('Email invalido').required('Campo obrigatório'),
    password: yup.string().min(3, "No minimo 3 caracteres!").required('Campo obrigatório'),
}).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });

    console.log(errors);

    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`user?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed')
            }else
            {
                alert('Email ou senha inválidos.')
            }
        } catch{
            alert('Erro, tente novamente!')
        }
    }

    return (<>
                <Header></Header>
                <Container>
                    <Column>
                        <Title>
                            A plataforma para você aprender com experts, dominar as principais tecnologias
                            e entrar mais rápido nas empresas mais desejadas;
                        </Title>
                    </Column>
                    <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro!</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail></MdEmail>}></Input>
                            <Input name="password" errorMessage={errors?.passowrd?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock></MdLock>}></Input>
                            <Button title="Entrar" variant="secondary" type="submit"></Button>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarConta>Criar Conta</CriarConta>
                        </Row>
                    </Wrapper>
                    </Column>
                </Container>
    </>)
}

export { Login }