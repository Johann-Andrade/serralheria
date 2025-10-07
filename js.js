const apiUrl = 'http://localhost:8000/api/';

// Função para carregar as categorias
async function getCasas() {
    try {
        const response = await fetch(apiUrl + 'casas/');
        const casas = await response.json();

        const tbody = document.getElementById('casas-table').getElementsByTagName('tbody')[0];
        tbody.innerHTML = ''; // Limpar antes de adicionar as novas casas

        casas.forEach(casa => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>
                    <a class="pablo" href="casa.html">
                        <h2>casa: ${casa.nome}</h2>
                        <h3>obras feitas: 6</h3>
                    </a>
                </td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error('Erro ao carregar casas:', error);
    }
}

// Função para criar nova categoria
async function criarCategoria(event) {
    event.preventDefault();

    const nome = document.getElementById('nome_categoria').value;

    const fd = new FormData();
    fd.append('nome', nome);

    try {
        const response = await fetch(apiUrl + 'categorias/', {
            method: 'POST',
            body: fd
        });

        if (!response.ok) {
            throw new Error('Erro ao cadastrar categoria');
        }

        const categoriaCriada = await response.json();
        console.log('Categoria criada com sucesso:', categoriaCriada);

        // Atualizar a tabela com a nova categoria
        getCategorias();

        // Limpar o campo
        document.getElementById('nome_categoria').value = '';
    } catch (error) {
        console.error('Erro ao criar categoria:', error);
        alert('Ocorreu um erro ao criar a categoria. Detalhes: ' + error.message);
    }
}

// Função para atualizar categoria
async function atualizarCategoria(event) {
    event.preventDefault();

    const nome = document.getElementById('nome_categoria').value;

    const fd = new FormData();
    fd.append('nome', nome);

    try {
        const response = await fetch(`${apiUrl}categorias/${editingCategoryId}/`, {
            method: 'PUT',
            body: fd
        });

        if (!response.ok) {
            throw new Error('Erro ao atualizar categoria');
        }

        const categoriaAtualizada = await response.json();
        console.log('Categoria atualizada com sucesso:', categoriaAtualizada);

        // Atualizar a tabela com a categoria editada
        getCategorias();

        // Limpar os campos e voltar ao estado inicial
        document.getElementById('nome_categoria').value = '';
        document.getElementById('submit-categoria-btn').value = 'Cadastrar Categoria';
        document.getElementById('cancel-btn').style.display = 'none';
        editingCategoryId = null;
    } catch (error) {
        console.error('Erro ao atualizar categoria:', error);
        alert('Ocorreu um erro ao atualizar a categoria. Detalhes: ' + error.message);
    }
}

// Inicialização da página
document.addEventListener('DOMContentLoaded', () => {
    getCasas(); // Carregar casas existentes

    // Enviar formulário sem recarregar a página
    document.getElementById('adicionar-btn').addEventListener('click', (event) => {
        criarCasas(event);
    });
});