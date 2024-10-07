import { Container, TextContent, Title, TitleHighLight } from './styles'
import { Button } from '../../Components/Button';
import { Header } from '../../Components/Header';
import BannerImage from '../../assets/banner.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    
    const navigate = useNavigate();

    const handleClickLogin = () => {
        navigate('/login')
    }

    return (<>
                <Header></Header>
                <Container>
                    <div>
                        <Title>
                            <TitleHighLight>
                                Implemente
                                <br />
                            </TitleHighLight>
                            O seu futuro global agora!
                        </Title>
                        <br></br>
                        <TextContent>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os melhores experts.</TextContent>
                        <br></br>
                        <Button title="Começar Agora" variant="secondary" onClick={handleClickLogin}></Button>
                    </div>
                    <div>
                        <img src={BannerImage} alt="Imagem principal (banner)"></img>
                    </div>
                </Container>
    </>)
}

export { Home }