import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'
import {useState, useEffect} from 'react'



function Presentation() {

    const [text, setText] = useState('');
    const toRotate = [' Wigder Monteiro Neto! ', ' Systems Analysis ', ' Web Developer '];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 200;
    const [delta, setDelta] = useState(100)

    useEffect(()=>{
        let ticker = setInterval(()=> {
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}
    }, [text] )

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }


    }

    return (
        <div className={styles.presentation} id='Presentation'>
            <h4><strong>Bem-vindo ao meu Portfólio React</strong></h4>
            <h1>Olá, eu sou {text}</h1>
            <p>
                Sou graduado em Criação e Gestão em Ambientes Internet<br/> 
                e pós-graduado em Administração de Banco de Dados. <br/><br/>
                Possuo experiência na área de Tecnologia da Informação, <br/>
                com ênfase em Análise de Sistemas, Web Developer, <br/>
                Administrador de Banco de Dados. 
            </p>
            <ButtonA link='https://wa.me/5521981233514' text='Conecte-se comigo!'/>
            
        </div>

    )
}

export default Presentation