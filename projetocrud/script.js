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
        horario: document.getElementById("input-horario").value, // Adicionado Horário
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
        document.getElementById('painel-pessoas').innerHTML += 
        `<div class="card-pessoa">
            <h2>${pessoas[i].nome}</h2>
            <p><strong>Idade:</strong> ${pessoas[i].idade} anos</p>
            <p><strong>Disponibilidade:</strong> ${pessoas[i].disponibilidade}</p>
            <p><strong>Horário:</strong> ${pessoas[i].horario || 'Não informado'}</p>
            <p><strong>Restrições:</strong> ${pessoas[i].restricoes || 'Nenhuma'}</p>
            <small>ID: ${pessoas[i].id}</small>
        </div>` 
    }
}

function pesquisar(){
    carregarDados()
    let nomeProcurado = document.getElementById('input-nome').value

    for(let i = 0; i < pessoas.length; i++){
        if(nomeProcurado.toLowerCase() == pessoas[i].nome.toLowerCase()){
            document.getElementById('input-idade').value = pessoas[i].idade
            document.getElementById('input-disponibilidade').value = pessoas[i].disponibilidade
            document.getElementById('input-horario').value = pessoas[i].horario || ''
            document.getElementById('input-restricoes').value = pessoas[i].restricoes
            document.getElementById('input-id').value = pessoas[i].id
        }
    }
}

function salvarPessoa(){
    let id = Number(document.getElementById('input-id').value)

    for(let i = 0; i < pessoas.length; i++){
        if(id == pessoas[i].id){
            pessoas[i].nome = document.getElementById('input-nome').value 
            pessoas[i].idade = Number(document.getElementById('input-idade').value)
            pessoas[i].disponibilidade = document.getElementById('input-disponibilidade').value 
            pessoas[i].horario = document.getElementById('input-horario').value 
            pessoas[i].restricoes = document.getElementById('input-restricoes').value 
        }
    }
    
    salvarDados()
    mostrarTodas()
    limparFormulario()
}

function excluirPessoa(){
    let id = Number(document.getElementById('input-id').value)

    for(let i = 0; i < pessoas.length; i++){
        if(id == pessoas[i].id){
            pessoas.splice(i, 1)
        }
    }
    
    salvarDados()
    mostrarTodas()
    limparFormulario()
}

// Carrega os dados salvos assim que a página abre
mostrarTodas()