import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'



function Presentation() {
    return (
        <div className={styles.presentation} id='Presentation'>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou Wigder Monteiro Neto!</h1>
            <p>
                Sou graduado em Criação e Gestão em Ambientes Internet<br/> 
                e pós-graduado em Administração de Banco de Dados. <br/>
                Possuo experiência na área de Tecnologia da Informação, <br/>
                com ênfase em Análise de Sistemas, Web Developer, <br/>
                Administrador de Banco de Dados. 
            </p>
            <ButtonA link='https://github.com/wigderne' text='Conecte-se comigo!'/>
            
        </div>

    )
}

export default Presentation