import React from 'react';
import {BackgroundIntro,Info,Subtitle,Content,Creator,Line,BenefitsWrapper,BenefitsContainer,Card,CardTitle} from './styles'
const Home = () => {   
    return(
    <>
    <BackgroundIntro/>
    <Info>
        <Subtitle>Sobre o Projeto</Subtitle>
        <Content>O Profit é um projeto, criado por Gabriel Souza, feito a partir de ReactJS, nodeJS e APIs externas, de busca e comparação entre diversos ativos da bolsa de valores, conforme a necessidade do seu criador.</Content>
        <Subtitle>Por que ele foi criado?</Subtitle>
        <Content>“A um certo tempo estava em busca de  aprender mais sobre a parte de investimentos, para adquirir segurança e de fato investir futuramente. Considero isso muito importante. Junto a isso, estava aprendendo sobre desenvolvimento web e mobile. Então pensei por que não juntar os dois, para aprimorar o aprendizado e interesse em ambos? A partir daí surgiu a ideia do sistema.”</Content>
    </Info>
    <Creator>
        <Subtitle>Gabriel Souza</Subtitle>
        <Line></Line>
    </Creator>
    <BenefitsWrapper>
        <Subtitle>Vantagens de usar o Profit</Subtitle>
        <BenefitsContainer>
            <Card>
                <CardTitle>
                    <i className="fas fa-less-than"></i>
                    <p>Comparação</p>
                </CardTitle>
                <Content>
                    Permite comparar os resultados, preços, rendimentos, entre outros detalhes de ativos financeiros.
                </Content>
            </Card>
            <Card>
                <CardTitle>
                <i class="fas fa-search-dollar"></i>
                <p>Busca</p>
                </CardTitle>
                <Content>
                    O PROFIT, a partir do uso de diversas APIs diferentes, facilita a consulta em diversos setores de ativos no mercado financeiro
                </Content>
            </Card>
            <Card>
                <CardTitle>
                    <i class="far fa-chart-bar"></i>
                    <p>Análise</p>
                </CardTitle><Content>
                Facilita a análise dos rendimentos, a partir de gráficos dos ativos
                </Content>
            </Card>
        </BenefitsContainer>
    </BenefitsWrapper>
    </>
)};

export default Home;