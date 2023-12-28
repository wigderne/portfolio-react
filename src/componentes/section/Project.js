import ButtonB from '../elements/ButtonB'
import styles from './Project.module.css'
import Card from '../elements/Card'
import lpdnc from '../../image/projects/lpdnc.svg'
import bootcampdnc from '../../image/projects/bootcampdnc.svg'

function Project() {
    return (
        <div className={styles.projects} id='Projects'>
            <h1> Projetos</h1>
            <Card 
            img={lpdnc}
            title=" LP - DNC"
            tech="HTML, CSS JS"
            description="Desenvolvimento de uma Landing Page para o Lançamento da formação em tecnologia"
            repo="https://github.com/wigderne/projeto-landing-page"
            site="https://landingpagednc-wigder.netlify.app/"
                />

            <Card 
            img={bootcampdnc}
            title=" Bootcamp - DNC "
            tech="HTML, CSS, Media Query"
            description="Desenvolvimento de uma Landing Page para o Bootcamp DNC"
            repo="https://github.com/wigderne/bootcamp-dnc"
            site="https://bootcamp-dnc-wigder.netlify.app/"
                />

        <center><ButtonB text='Ver repostório completo' link='https://github.com/wigderne?tab=repositories' /></center>
        </div>
        
    )
}

export default Project