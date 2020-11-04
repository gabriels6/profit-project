import React from 'react'
import {Info,Footer,About,Subtitle,CreatorInfo,Line,Link} from './styles'

const FooterBar = () =>{

    return(
        <>
        <Info>
            <About>
                <Subtitle>Sobre o site</Subtitle>
                <Line></Line>
                <p>Criado para facilitar um processo e treinar conceitos e ferramentas de desenolvimentoobjetivo desse site é unir diversas APIsde finanças da bolsa, a fim de facilitar a consulta e comparação entre valores.</p>
            </About>
            <CreatorInfo>
                <p>Desenvolvido por</p>
                <Subtitle>Gabriel Souza<Link href={'https://www.github.com/gabriels6'}><i class="fab fa-github"></i></Link><Link href={'https://www.linkedin.com/in/gabriel-souza-gomes-6ab1161b9/'}><i class="fab fa-linkedin"></i></Link></Subtitle>
                <p>APIs utilizadas:</p>
                <p><Link href={'https://www.alphavantage.co/'}>Alpha Advantage API</Link></p>
            </CreatorInfo>
        </Info>
        <Footer>Desenvolvido por Gabriel Souza  2020</Footer>
        </>
    )
}

export default FooterBar;
