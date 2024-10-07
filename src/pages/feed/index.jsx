import React from 'react'
import { Card } from '../../Components/Card';
import { UserInfo } from '../../Components/UserInfo';

import { Header } from '../../Components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>  
                <Header autenticado={true}>
                </Header>
                <Container>
                    <Column flex={3}>
                        <Title>Feed</Title>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </Column>
                    <Column flex={1}>
                        <TitleHighlight># RANKING DA SEMANA</TitleHighlight>
                        <UserInfo percentual={19} nome="Andre" image="https://avatars.githubusercontent.com/u/142684204?v=4"></UserInfo>
                        <UserInfo percentual={9} nome="Andre" image="https://avatars.githubusercontent.com/u/142684204?v=4"></UserInfo>
                        <UserInfo percentual={89} nome="Andre" image="https://avatars.githubusercontent.com/u/142684204?v=4"></UserInfo>
                    </Column>
                </Container>

    </>)
}

export { Feed }