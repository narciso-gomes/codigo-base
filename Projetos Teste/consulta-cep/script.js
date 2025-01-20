function consultarCep() {
  const cep = document.getElementById('cep').value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  if (cep.length === 8) {
      fetch(url)
          .then(response => response.json())
          .then(data => {
              if (data.erro) {
                  alert('CEP não encontrado');
                  limparCampos();
              } else {
                  document.getElementById('logradouro').textContent = data.logradouro;
                  document.getElementById('bairro').textContent = data.bairro;
                  document.getElementById('localidade').textContent = data.localidade;
                  document.getElementById('uf').textContent = data.uf;
              }
          })
          .catch(error => {
              console.error('Erro na consulta:', error);
              alert('Erro na consulta, tente novamente mais tarde.');
          });
  } else {
      alert('CEP inválido');
      limparCampos();
  }
}

function limparCampos() {
  document.getElementById('logradouro').textContent = '';
  document.getElementById('bairro').textContent = '';
  document.getElementById('localidade').textContent = '';
  document.getElementById('uf').textContent = '';
}