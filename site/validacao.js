document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmarSenha');
    const dataNascimentoInput = document.getElementById('dataNascimento');
  
    form.addEventListener('submit', function(event) {
      const emailValue = emailInput.value.trim();
      const senhaValue = senhaInput.value;
      const confirmarSenhaValue = confirmarSenhaInput.value;
      const dataNascimentoValue = dataNascimentoInput.value;
  
      // Validação do email
      if (!emailValue.includes('@')) {
        alert('O e-mail deve conter o caractere "@"');
        event.preventDefault();
        return;
      }
      
      const partesEmail = emailValue.split('@');
      if (partesEmail.length !== 2 || !partesEmail[1].includes('.')) {
        alert('O e-mail deve conter um ponto (".") após o símbolo "@"');
        event.preventDefault();
        return;
      }
  
      // Validação de senha forte
      const senhaForteRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
      if (!senhaForteRegex.test(senhaValue)) {
        alert('A senha deve conter no mínimo 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.');
        event.preventDefault();
        return;
      }
  
      // Confirmação de senha
      if (senhaValue !== confirmarSenhaValue) {
        alert('As senhas não coincidem.');
        event.preventDefault();
        return;
      }
  
      // Validação da data de nascimento
      if (!dataNascimentoValue) {
        alert('Por favor, insira sua data de nascimento.');
        event.preventDefault();
        return;
      }
  
      const dataNascimento = new Date(dataNascimentoValue);
      const hoje = new Date();
  
      if (dataNascimento > hoje) {
        alert('A data de nascimento não pode ser no futuro.');
        event.preventDefault();
        return;
      }
  
      // Exemplo: verificar idade mínima 18 anos
      const idadeMinima = 18;
      const dataLimite = new Date(hoje.getFullYear() - idadeMinima, hoje.getMonth(), hoje.getDate());
      if (dataNascimento > dataLimite) {
        alert(`Você deve ter pelo menos ${idadeMinima} anos para se cadastrar.`);
        event.preventDefault();
        return;
      }
    });
  });
  