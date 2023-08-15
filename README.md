# Multi100.1.1.0.prod
Multi 100 produção Start 15/08/2023

Versão 1.1.1  – Liberação para Teste a partir 10/08
1.1  / Conexão padrão por usuário
1.1 / Transferir Chamado quando Atendente tiver apenas uma Fila preenche automatico a Fila
1.1 / Aceitar Chamado quando a Atendente tiver apenas uma Fila preenche automatico fila
1.1 / Iniciar novo Atendimento se Atendente tiver parametrizado Conexao e Fila única já preenche automatico 
1.1 / Correção Excluir Mensagem
1.1 / Transferencia de Chamado obrigatório selecionar Fila
1.1 / Intervalo de Almoço
1.1 / Tempo para novo envio do chatbot X tempo deixa livre o campo.
1.1 / Msg privada – TEXTO / ARQUIVOS
1.1 / Ordenação das Filas Ordenação das filas: vc define a ordem do menu inicial
1.1 / Aba grupos 
1.1 / Filtros avançados e correção de bugs de filtros
1.1 / Mudei as TAGs para Contatos, coloquei filtro por TAG nos contatos e opção de exportar 
1.1 / LGPD em configurações gerais (47)989**-**12 ofuscar contato
                                                                 (47)98912-1212
1.1 / LGPD Mensagem na saudação com opção de aceitar ou não seguir conversar pelo lado do 
destinatário. Pode salvar para aceitar a primeira vez e as d+ não precisar ou sempre solicitar
1.1 / LGPD Apagar totalmente do sistema e do banco de dados parametrização 
1.1 / Ajustado conforme ícone da conexao(whatsapp, instagram ou facebook) na tela de contatos
1.1 / Ajustado para Selecionar fila quando aceita ticket lá por cima na notificação
1.1 / Menu que fica gigante quando a janela tá menor
1.1 / Ajustado Bug do Modo Dark
1.1 / Removido To Do List
1.1 / Transferir Direto do Aguardando sem precisar ACEITAR
1.1 / Opção Espiar removido o olhinho colocado como clique sem abrir modal
1.1 / Alterado para IGNORAR chamado na Aba Aguardando
1.1 / Recebimento e Envio de arquivos testados com várias extensões
1.1 / Permissão no Atendente para ver Chamados sem Setor/Fila
1.1 / Ajustado Mensagem Apagada
1.1 / Ajustado Encaminhar Mensagem/Arquivos com assinatura
1.1 / Ajustado Atendentes Online
1.1 / Correção companyid no envio da mensagem
1.1 / Importar Contatos Campanha – excel corrigido
1.1 / Criar empresa - cadastrar parâmetro da assinatura automaticamente
1.1 / Não enviar mais body para imagens
1.1 / Ajuste executar cron de fechamento de ticket a cada 1 minuto
1.1 / Ajuste atualização de mensagens F5
1.1 / Ajuste enviar anexo com ENTER ao dar CTRL V
1.1 / Inclusão de fila e id do usuario para envio de midias API
      Body:
           "number": "5599999999999",
           "body": "Aqui vai seu texto",
           "whatsappId": "ID do Setor",
           "queueId": "ID do Setor",
           "userId": "ID do atendente"
1.1 / Ajustado quando cadastrar empresa nova Assinatura Atendente habilitado como padráo no settings
1.1 / Ajuste scroll painel de atendimentos (ATENDENTE/AGUARDANDO/GRUPOS)
1.1 / Modificação nos Menus de Conexões
1.1 / Dashboard/painel NPS:
1.1 / Grupos Opção de Abrir Ticket e ir pra Fila Aguardando ou não abrir Ticket e ir Direto para Aba Grupos 
  - grupo sem fila é quando ta setado para nao abrir ticket e vai direto para aba GRUPOS
   - grupo com fila é quando ta setado para abrir ticket e vai para aba aguardando e atendendo)
1.1 / Somente marcar como lida (azulzinho) depois que um atendente capturar o atendimento.
1.1 / Ignorar Build pasta Public 
1.1 / Central de Ajuda front melhorado
1.1 / Ajuste envio de mídias e audios e Câmera
1.1 / Opção de Anexo melhorado visual
1.1 / Câmera na opção de anexos. Se tiver webcam consegue tirar foto
1.1 / Compartilhar Contato
1.1 / Contato Recebido pode clicar em Conversar abre ticket 
1.1 / Removido a Mensagem que o Contato está sendo atendido por X Atendente e Fila Y, *QUANDO O CONTATO ESTÁ COM O PROPRIO ATENDENTE QUE ESTÁ TENTANDO ABRIR*
1.1 / Ajuste Redis key Bull


1.1 / Separação de tickets por conexão/fila/contato (abre mais de um ticket por contato, mas unifica tudo no front) * verificar na transferencia quando for de setor ele encerrar antes naquele setor o ticket e abrir um novo ticket para o setor novo assim fica os históricos e cada setor e suas permissões tb(opcao de colocar msg privada na transferencia para o novo atendente receber do que se trata) * versão 1.3 

