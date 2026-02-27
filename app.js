'use strict'
const containerHome = document.getElementById('home')
const containerTurma = document.getElementById('container-turma')
const containerBotoes = document.getElementById('botaoCurso')

const container_curso = document.getElementById('container-alunos')

const titulo = document.getElementById('titulo_turma')

async function buscarCursos() {
    const url = 'https://lion-school-backend.onrender.com/cursos'
    const response = await fetch(url)
    const cursos = await response.json()
    console.log(cursos)
    return cursos
    
}



async function mostrarCursos() {
    const cursos = await buscarCursos()

    containerBotoes.replaceChildren()

    cursos.forEach(curso => {
        const divButton = document.createElement("div")
        const button = document.createElement("button")
        divButton.classList.add('botoes-curso')
     

        divButton.append(button)

        button.textContent = curso.sigla
        
        containerBotoes.append(divButton)

        divButton.addEventListener('click', function(){
            mostrarAlunosPorCurso()
            
            containerHome.style.display = 'none'
            containerTurma.style.display = 'flex'

            titulo.textContent = curso.nome
        })
    })
}


async function buscarAlunos() {
    const url = 'https://lion-school-backend.onrender.com/alunos'
    const response = await fetch(url)
    const alunos = await response.json()
    console.log(alunos)
    return alunos
    
}

async function mostrarAlunosPorCurso() {

    container_curso.replaceChildren()

    const alunos = await buscarAlunos()

    alunos.forEach(aluno => {
        const divALuno = document.createElement('div')
        divALuno.classList.add('aluno')
        const alunoP = document.createElement('p')
        alunoP.textContent = aluno.nome.toUpperCase()
       
        const img = document.createElement('img')

        img.src = aluno.foto
        
      
        divALuno.append(img, alunoP)
        container_curso.append(divALuno)
    });
}


mostrarCursos()






























/*function mostrarAlunos(){

    //Seleciona o container de alunos usando ID
    const aluno = document.getElementById('container-alunos')
    aluno.replaceChildren()
 
    aluno.forEach(aluno =>{
    const card = document.createElement('div')
     card.classList.add('card')
    })

    //loop através de cada  URL no array
    urlsImagens.forEach(url => {

        //Cria um novo elemento de imagem
        const imagemAluno = document.createElement('img')

        //define o atributo 'src' da imagem com a URL
        imagemAluno.src = url

        //adiciona uma classe
        imagemAluno.classList.add('fotoAluno')

        //Adicions o novo elemento de imagem ao container de aluno
        aluno.appendChild(imagemAluno)
    })


}*/



 /*const imgAluno = document.createElement('img')
 const nomeAluno = document.createElement('h3')
 nomeAluno.textContent = aluno.nomeAluno */