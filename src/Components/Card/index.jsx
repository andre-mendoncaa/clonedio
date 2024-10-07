import React from "react";
import { 
    CardContainer,
    ImageBackground,
    Content,
    UserInfo,
    UserPicture,
    PostInfo,
    HasInfo,
  } from './styles'
  import { FiThumbsUp } from 'react-icons/fi'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://res.cloudinary.com/printstore/image/upload/v1690296291/g%C3%AAneros-de-livros.jpg"></ImageBackground>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/142684204?v=4"></UserPicture>
                    <div>
                        <h4>Andrezao menduca</h4>
                        <p>Há 19 anos no mundao</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito no bootcamp .net full stack</p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JAVASCRIPT #C# #.NET</h4>
                    <p>
                        <FiThumbsUp> 22</FiThumbsUp>
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}
export { Card };