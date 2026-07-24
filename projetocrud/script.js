let pessoas = []

function salvarDados(){
    localStorage.setItem('pessoas', JSON.stringify(pessoas))
}

function carregarDados(){
    pessoas = JSON.parse(localStorage.getItem('pessoas')) || []
}

function cadastrarPessoa() {
    carregarDados()

    const novaPessoa = {
        id: Date.now(),
        nome: document.getElementById('input-nome').value,
        idade: Number(document.getElementById("input-idade").value),
        disponibilidade: document.getElementById("input-disponibilidade").value,
        horario: document.getElementById("input-horario").value,
        restricoes: document.getElementById("input-restricoes").value
    }
    
    pessoas.push(novaPessoa)

    limparFormulario()
    salvarDados()
    mostrarTodas()
}

function limparFormulario() {
    document.getElementById('input-nome').value = ''
    document.getElementById('input-idade').value = ''
    document.getElementById('input-disponibilidade').value = ''
    document.getElementById('input-horario').value = ''
    document.getElementById('input-restricoes').value = ''
    document.getElementById('input-id').value = '' 
    document.getElementById('input-nome').focus()
}

function mostrarTodas(){
    carregarDados()
    document.getElementById('painel-pessoas').innerHTML = '' 

    for(let i = 0; i < pessoas.length; i++){ 
  console.log (pessoas)
  console.log (i)

        document.getElementById('painel-pessoas').innerHTML += 
        `<div class="card-pessoa">
            <h2>${pessoas[i].nome}</h2>
            <p>Idade ${pessoas[i].idade} </p>
            <p>Disponibilidade: ${pessoas[i].disponibilidade}</p>
            <p>Horário: ${pessoas[i].horario }</p>
            <p>Restrições: ${pessoas[i].restricoes }</p>
            <P> ${pessoas[i].id}</p>
        </div>` 
    }
}
function pesquisar(){
    carregarDados()
    let nomeProcurado = document.getElementById('input-nome').value.trim() 
    for(let i = 0; i < pessoas.length; i++){
        // if(nomeProcurado.toLowerCase() == pessoas[i].nome.toLowerCase()){
        if(pessoas[i].nome.toLowerCase().includes(nomeProcurado.toLowerCase())){
            document.getElementById('input-idade').value = pessoas[i].idade
            document.getElementById('input-disponibilidade').value = pessoas[i].disponibilidade
            document.getElementById('input-horario').value = pessoas[i].horario || ''
            document.getElementById('input-restricoes').value = pessoas[i].restricoes
            document.getElementById('input-id').value = pessoas[i].id
            break
        }
    }
}


function salvarPessoa(){
    let id = Number(document.getElementById('input-id').value)

    if (!id) { 
        alert('Pesquise uma pessoa primeiro para editar!')
        return
    }

    for(let i = 0; i < pessoas.length; i++){

        if(id == pessoas[i].id){

            pessoas[i].nome = document.getElementById('input-nome').value 
            pessoas[i].idade = Number(document.getElementById('input-idade').value)
            pessoas[i].disponibilidade = document.getElementById('input-disponibilidade').value 
            pessoas[i].horario = document.getElementById('input-horario').value 
            pessoas[i].restricoes = document.getElementById('input-restricoes').value 
            break 
    }
    }
    salvarDados()
    mostrarTodas()
    limparFormulario()
}

function excluirPessoa(){
    let id = Number(document.getElementById('input-id').value)

    if (!id) { 
        alert('Pesquise uma pessoa primeiro para excluir!')
        return
    }

    for(let i = 0; i < pessoas.length; i++){
        if(id == pessoas[i].id){
console.log(pessoas[i]);

            pessoas.splice(i, 1)
            console.log(i);
            break 
    }

}
    
    salvarDados()
    mostrarTodas()
    limparFormulario()




}
