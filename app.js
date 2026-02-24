'use strict'
const containerHome = document.getElementById('home')

async function buscarCursos() {
    const url = 'https://lion-school-backend.onrender.com/cursos'
    const response = await fetch(url)
    const cursos = await response.json()
    console.log(cursos.message)
    return cursos.message
    
}


function mostrarAlunos(){

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


}



 /*const imgAluno = document.createElement('img')
 const nomeAluno = document.createElement('h3')
 nomeAluno.textContent = aluno.nomeAluno */