/////// caminho entre as páginas  //////

let buttonFazerCadastro = document.getElementById('façaCadastro')
let buttonPaginaLogin = document.getElementById('paginaLogin')
let buttonSair = document.getElementById('sair')
let paginaInicial = document.getElementById('inicial')
let paginaCadastro = document.getElementById('cadastro')
let paginaLogin = document.getElementById('login')
let logoLogin = document.getElementById('logoLongin')
let logo = document.getElementById('logo')
let linha = document.getElementById('linha')


buttonFazerCadastro.addEventListener('click', () => {
    paginaCadastro.style.display = 'inline' 
    paginaLogin.style.display = 'none'
    logo.style.marginLeft= '525px'
    linha.classList.add('linhaTransicao')
    linha.style.marginLeft = '150px'
})
buttonPaginaLogin.addEventListener('click', () =>{
    paginaCadastro.style.display = 'none'
    paginaLogin.style.display = 'inline'
    logo.style.marginLeft= '-405.5px'
    linha.classList.add('linhaTransicao')
    linha.style.marginLeft = '0'
})

buttonFazerCadastro.addEventListener('mouseover', ()=>{
    buttonFazerCadastro.style.color = '#4020a983'
})
buttonFazerCadastro.addEventListener('mouseout', ()=>{
    buttonFazerCadastro.style.color = '#4120A9'
})
buttonPaginaLogin.addEventListener('mouseover', ()=>{
    buttonPaginaLogin.style.color = '#4020a983'
})
buttonPaginaLogin.addEventListener('mouseout', ()=>{
    buttonPaginaLogin.style.color = '#4120A9'
})

/////// SAIR  //////////////
buttonSair.addEventListener('click' , () => {
    paginaInicial.style.display = 'none'
    paginaLogin.style.display = 'inline'
    logo.style.display='inline'
    divCadastro.style.display='flex'
    divLogin.style.display='flex'
})

buttonSair.addEventListener('mouseover', ()=>{
    buttonSair.style.backgroundColor = '#4020a983'
})
buttonSair.addEventListener('mouseout', ()=>{
    buttonSair.style.backgroundColor = '#4120A9'
})


///////  cadastro  //////////
let usuarioC  = document.getElementById('usuarioC')
let senhaC = document.getElementById('senhaC')
const buttonC = document.getElementById('buttonC')

buttonC.addEventListener('mouseover', ()=>{
    buttonC.style.backgroundColor='#4020a983'
})
buttonC.addEventListener('mouseout', ()=>{
    buttonC.style.backgroundColor='#4120A9'
})

buttonC.addEventListener('click', fazCadastro)

let bancoDeDados =[]

let dadoUsuario 
let dadoSenha

function fazCadastro(){
    /// pega valor do cadastro
    dadoUsuario = usuarioC.value
    dadoSenha= senhaC.value

    /// criar uma array para cada cadastro 
    let newArray = [dadoUsuario,dadoSenha]
    bancoDeDados.push(newArray)

    //bancoUsuario.push(dadoUsuario)
    //bancoSenha.push(dadoSenha)

    //console.log(bancoUsuario, bancoSenha)
    //console.log(dadoUsuario, dadoSenha)
    console.log(bancoDeDados)

    if(usuarioC.value == " " || senhaC.value == " "){
        alert("Por favor preencha os campos obrigatórios")
    } else {
        alert("Cadastro realizado com sucesso!")
        
    }

}

//////  login   /////////
let usuarioL = document.getElementById('usuarioL')
let senhaL = document.getElementById('senhaL')
const buttonL = document.getElementById('buttonL')
let divCadastro = document.getElementById('todoCadastro')
let divLogin = document.getElementById('todoLogin')

buttonL.addEventListener('mouseover', ()=>{
    buttonL.style.backgroundColor='#4020a983'
})
buttonL.addEventListener('mouseout', ()=>{
    buttonL.style.backgroundColor='#4120A9'
})

buttonL.addEventListener('click', fazLogin)

function fazLogin (){

    //pega valor do login
    let checkUsuario = usuarioL.value
    let checkSenha = senhaL.value

   let i = false
   let j = false


    bancoDeDados.forEach((father) => {
            if(father[0] == checkUsuario){
                i = true
            } if (father[1] == checkSenha){
                j = true
            }
    });

    if(i && j){
        paginaInicial.style.display = 'inline'
        paginaLogin.style.display = 'none'
        logo.style.display = 'none'
        divCadastro.style.display='none'
        divLogin.style.display='none'

    } else if (i){
        alert("Senha incorreta")
    } else if (j) {
        alert("Usuário não encontrado")
    } else {
        alert("Senha e Usuário incorretos")
    } 
}







