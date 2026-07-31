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
        restricoes: document.getElementById("input-restricoes").value,
      concluida: document.getElementById("input-concluida").value 

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
    document.getElementById('input-concluida').value = '' 
    document.getElementById('input-id').value = '' 
    document.getElementById('input-nome').focus()
}

function mostrarTodas(){
    carregarDados()
    document.getElementById('painel-pessoas').innerHTML = '' 

    for(let i = 0; i < pessoas.length; i++){ 
        document.getElementById('painel-pessoas').innerHTML += 
        `<div class="card-pessoa">
            <h2>${pessoas[i].nome}</h2>
            <p>Idade: ${pessoas[i].idade}</p>
            <p>Disponibilidade: ${pessoas[i].disponibilidade}</p>
            <p>Horário: ${pessoas[i].horario}</p>
            <p>Restrições: ${pessoas[i].restricoes}</p>
            <p>Concluída: ${pessoas[i].concluida}</p> <!-- NOVO -->
            <p><small>ID: ${pessoas[i].id}</small></p>
        </div>` 
    }
}




function testar() {
    carregarDados()

    let testeDeLeitura = localStorage.getItem('teste')
    console.log(testeDeLeitura)

    pessoas = [
        {
            id: 1785372466369,
            nome: "Raquel",
            idade: 19,
            disponibilidade: "seg",
            horario: "12",
            restricoes: "",
            concluida: "on"
        },
        {
            id: 1785460687131,
            nome: "Paulo",
            idade: 20,
            disponibilidade: "Segunda",
            horario: "12:00",
            restricoes: "nenhuma",
            concluida: "on"
        },
        {
            id: 1785460757182,
            nome: "Felipe",
            idade: 21,
            disponibilidade: "terça",
            horario: "10:00",
            restricoes: "nenhuma",
            concluida: ""
        },
        {
            id: 1785460806054,
            nome: "Francisco",
            idade: 24,
            disponibilidade: "terça",
            horario: "11:00",
            restricoes: "nenhuma",
            concluida: ""
        },
        {
            id: 1785460844593,
            nome: "Helena",
            idade: 25,
            disponibilidade: "sexta",
            horario: "8:00",
            restricoes: "nenuma",
            concluida: ""
        }
    ]

    console.log(pessoas)
    salvarDados()
    mostrarTodas()
}







function pesquisar(){
    carregarDados()
    let nomeProcurado = document.getElementById('input-nome').value.trim() 
    
    if (!nomeProcurado) {
        alert('Digite um nome para pesquisar!')
        return
    }

    for(let i = 0; i < pessoas.length; i++){
        if(pessoas[i].nome.toLowerCase().includes(nomeProcurado.toLowerCase())){
            document.getElementById('input-nome').value = pessoas[i].nome
            document.getElementById('input-idade').value = pessoas[i].idade
            document.getElementById('input-disponibilidade').value = pessoas[i].disponibilidade
            document.getElementById('input-horario').value = pessoas[i].horario || ''
            document.getElementById('input-restricoes').value = pessoas[i].restricoes
            document.getElementById('input-concluida').value = pessoas[i].concluida || '' 
            document.getElementById('input-id').value = pessoas[i].id
            break
        }
    }
}

function salvarPessoa(){
    carregarDados()
    let id = Number(document.getElementById('input-id').value)

   

    for(let i = 0; i < pessoas.length; i++){
        if(id == pessoas[i].id){
            pessoas[i].nome = document.getElementById('input-nome').value 
            pessoas[i].idade = Number(document.getElementById('input-idade').value)
            pessoas[i].disponibilidade = document.getElementById('input-disponibilidade').value 
            pessoas[i].horario = document.getElementById('input-horario').value 
            pessoas[i].restricoes = document.getElementById('input-restricoes').value 
           pessoas[i].concluida = document.getElementById('input-concluida').value 

            break 
        }
    }
    salvarDados()
    mostrarTodas()
    limparFormulario()
}


function excluirPessoa(){
    carregarDados()
    let id = Number(document.getElementById('input-id').value)

    

    for(let i = 0; i < pessoas.length; i++){
        if(id == pessoas[i].id){
            pessoas.splice(i, 1)
            break 
        }
    }
    
    salvarDados()
    mostrarTodas()
    limparFormulario()
}