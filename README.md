# PROJETO-LAGARTA
Projeto Lagarta (extensionista) de Web Mobile 2025/2.
PROJETO LAGARTA 

Site desenvolvido para promoção da cultura local através de eventos e show gratuitos na cidade de São Paulo, incluindo experiência imersiva ao usuários, que terá acesso a configurações como: notificações sobre eventos futuros, opção de favoritar, comentar e acompanhar notícias.  

INTEGRANTES:

Maria Isabelle Miniguiti França	10746235 

Arthur Araújo Medeiros Mestinik	10730022

Raissa Oliveira Santana	 10731074

Arthur Gabriel Garcia	10735807


1.	TELA INICIAL:  O usuário poderá acessar eventos localizados em sua proximidade geográfica, categorizados por região, bem como obter informações detalhadas acerca de cada evento. Para assegurar a aquisição do ingresso ou passe, será necessário a realização de um cadastro prévio.

<img width="709" height="403" alt="TELA_INICIAL" src="https://github.com/user-attachments/assets/da9a3b7a-6245-47c8-ae63-4e5b0514c22d" />

 
2.	TELA DE CADASTRO: Nesta tela, o usuário fornecerá suas informações pessoais essenciais para criar uma conta, como nome, e-mail e senha.
   
<img width="709" height="399" alt="TELA_CADASTRO" src="https://github.com/user-attachments/assets/d19079cb-b3c3-4cdf-b723-1e830e62689f" />


3.	TELA DE LOGIN: Usuários já cadastrados realizaram o login nesta tela, que visa demais opções para acessar o site utilizando outras plataformas.
   
<img width="709" height="391" alt="TELA_LOGIN" src="https://github.com/user-attachments/assets/f7cc57fc-1150-44f6-8368-3db3d549b4b7" />



4.	TELA DE CONFIGURAÇÃO: Após realizar o login, o usuário também poderá configurar seu perfil e acessar seus dados para alterá-los.
   
<img width="709" height="455" alt="TELA_CONFIGURAÇÃO" src="https://github.com/user-attachments/assets/59f2d732-09fe-4e15-aa43-ae5c12335045" />


5.	TELA DE ACESSO: Garantindo uma experiência melhor, cada evento terá feedbacks realizados por outros usuários. Além de opções como busca e pesquisa, notícias relacionadas aos eventos, eventos favoritos e acesso direto aos ingressos disponíveis.
<img width="709" height="399" alt="TELA_COMENTARIOS" src="https://github.com/user-attachments/assets/a5911b18-3526-4f41-826b-bc1a9256637b" />


EXPLICAÇÃO REFERENTE AO CÓDIGO: 


HTML
1. Página principal (index.html)
Essa página exibe os eventos culturais disponíveis em São Paulo. Possui:
•	Cabeçalho (<header>):
o	Logo do site.
o	Ícone de localização com o nome da cidade ("São Paulo").
o	Links para cadastro, login e perfil.
•	Título principal:
o	“CONFIRA OS PRÓXIMOS EVENTOS”.
•	Corpo principal (<main>):
o	Vários cards de eventos com:
	Nome, descrição, imagem, local e data.
•	Rodapé (<footer>):
o	Links úteis (SESC, Casa das Rosas, Teatro Municipal).
o	Redes sociais com ícones.
o	Informações de contato (telefone, celular).
2. Página de Cadastro (cadastro.html)
Página onde o usuário pode criar uma conta:
•	Dividida em duas seções:
o	Esquerda: imagem/logo.
o	Direita: formulário com:
	Nome completo
	E-mail
	Senha + confirmação
	Data de nascimento
	Botão de envio (seta “→”)
3. Página de Login (login.html)
Página para o usuário acessar sua conta:
•	Também dividida em duas:
o	Esquerda: imagem/logo.
o	Direita:
	Campos de e-mail e senha.
	Link "Esqueceu a senha?"
	Link para ir ao cadastro se ainda não tiver conta.

CSS
1. Style.css (Página principal - Eventos)
Este CSS é responsável por estilizar a página de eventos (index.html).
Principais estilos:
•	Body: Fundo claro, fonte Arial.
•	Header: Barra no topo roxa escura (#110031), com logo e links distribuídos horizontalmente.
•	Main: Layout em grade (2 colunas) para exibir os cards dos eventos.
•	Cards: Fundo branco, com sombra e bordas arredondadas. Cada card tem imagem, título e texto.
•	Footer: Rodapé roxo com seções (lugares, redes sociais e contato).
2. Cadastro.css (Página de Cadastro)
Define o layout da página de cadastro de usuários.
Estrutura visual:
•	Container: Caixa dividida em 2 lados (imagem à esquerda, formulário à direita).
•	Input-group: Campos com ícones e estilo arredondado.
•	Botão: Apenas um botão em forma de seta “→” para enviar o formulário.
•	Responsivo: Adapta o layout para celulares e tablets.
3. Login.css (Página de Login)
Responsável por estilizar a página de login do usuário.
Destaques:
•	Layout parecido com o do cadastro (dividido em dois).
•	Inputs com borda roxa e texto branco.
•	Links para “Esqueceu a senha?” e “Cadastre-se”.
•	Adaptação responsiva para telas menores.

SCRIPT 
1. Validações para email, sugestão de senha forte e nascimento implementadas.
• Valida o email, certificando-se que ele contenha o caractere "@" e um ponto (".") depois do "@".
• Verifica se a senha é forte, ou seja, possui no mínimo 8 caracteres, com letras maiúsculas, minúsculas, números e caracteres especiais.
• Confirma que a senha e a confirmação de senha sejam iguais.
• Valida a data de nascimento, garantindo que ela não esteja vazia, não seja uma data futura e que o usuário tenha pelo menos 18 anos.
Caso alguma validação falhe, impeça o envio do formulário e exiba uma mensagem de alerta ao usuário.
