
import { Button } from '../../Components/Button';
import { Header } from '../../Components/Header';
import { MdEmail, MdLock } from 'react-icons/md'
import { Input } from '../../Components/Input';
import { Column, Container, CriarConta, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const handleClickFeed = () => {
        navigate('/feed')
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
                        <form>
                            <Input placeholder="E-mail" leftIcon={<MdEmail></MdEmail>}></Input>
                            <Input placeholder="Senha" type="password" leftIcon={<MdLock></MdLock>}></Input>
                            <Button title="Entrar" variant="secondary" onClick={handleClickFeed} type="button"></Button>
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