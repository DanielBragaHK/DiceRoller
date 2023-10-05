# DiceRoller
Uma API Rest simples para emular rolagem de dados, somar seus resultados e guardar o histórico de rolagens.

#Primeira Parte: /dados

Na primeira parte da API, acessada pela porta 3000 do localhost (utilizando a url http://localhost:3000/dados ), é necessário inserir no JSON o nomeJogador(com o nome do jogador que está rolando os dados), 
quantidadeDados (para definir quantos dados serão rolados) e facesDoDado (para definir quantos lados os dados rolados terão).

Após fazer a requisição, ele retorna um objeto com o número da rolagem, o momento em que foi realizada, nome do jogador, valor dos dados e soma total dos mesmos.


![image](https://github.com/DanielBragaHK/DiceRoller/assets/102163242/61e740cf-8493-4736-9e99-12124b399699)

#Segunda Parte: /historico

Na parte da API que identifica o histórico de rolagens, é necessário que a pessoa busque na url pelo nome do jogador (exemplo: http://localhost:3000/historico?nome_jogador=Daniel )

 Dessa forma, o código irá buscar todas as rolagens realizadas enquanto o servidor esteve de pé que foram realizadas pelo jogador homônimo, e as retornará.

![image](https://github.com/DanielBragaHK/DiceRoller/assets/102163242/f67b0155-6079-4f2e-be49-1041d1dd6ab6)
