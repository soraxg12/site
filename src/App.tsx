import { useState } from 'react'
import { Academic } from './components/Academic'
import { Card } from './components/Card'
import { Contacts } from './components/Contact'
import { Header } from './components/Header'
import { Section } from './components/Section'
import { WrapperRow } from './styles/wrapperStyles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Section 
        id='information'
        title='Informações'
        children={<Contacts/>}
      />

      <Section 
      id='sobre-mim'
      title='Sobre Mim' 
      content='Desenvolvedor fullstack atualmente trabalhando com a stack C#.Net,Angular e Flutter mais também possuo
      conhecimento em NodeJs e React.'
      />
      <Section 
      id='academics'
      title='Formações'
      children={
                <>
                  <Academic 
                    title='Formação academica' 
                    academics={[{nameCourse:"Engenharia da Computação",timeDuration:"2020-2024",link:"https://www.sou.unipinhal.edu.br/courses/engenharia-de-computação"}]}
                  />

                  <Academic 
                    title='Cursos adicionais' 
                    academics={
                      [
                        {
                          nameCourse:"Curso Completo do Desenvolvedor NodeJS e MongoDB",
                          link:'https://www.udemy.com/course/curso-completo-do-desenvolvedor-nodejs/'
                        },
                        {
                          nameCourse:"React Native: Desenvolva APPs Nativas para Android e iOS",
                          link:'https://www.udemy.com/course/curso-react-native/'
                        },
                        {
                          nameCourse:"Seja Full-Stack com .NET Web API e Angular + EF Core",
                          link:'https://www.udemy.com/course/angular-dotnetcore-efcore/'
                        },
                      ]
                    }
                  />
                </>     
              }
        />
      <Section 
      id='Skills'
      title='Habilidades'
      children={
                <>
                  <Academic 
                    academics={
                      [
                        {
                          nameCourse:"JavaScript",
                        },
                        {
                          nameCourse:"TypeScript",
                        },
                        {
                          nameCourse:"ReactJS",
                        },
                        {
                          nameCourse:"NextJS",
                        },
                        {
                          nameCourse:"React Native",
                        },
                        {
                          nameCourse:"NodeJS",
                        },
                        {
                          nameCourse:"C#",
                        },
                        {
                          nameCourse:"SQL Server",
                        },
                        {
                          nameCourse:"Flutter",
                        },
                      ]
                    }
                  />
                </>     
              }
        />
      
    </>
  )
}

export default App
