# Multi100.1.1.0.prod
Multi 100 produção Start 17/08/2023  <br />

Versão 1.1.1  – Liberação 17/08  <br />
1.1  / Conexão padrão por usuário <br />
1.1 / Transferir Chamado quando Atendente tiver apenas uma Fila preenche automatico a Fila <br />
1.1 / Aceitar Chamado quando a Atendente tiver apenas uma Fila preenche automatico fila <br />
1.1 / Iniciar novo Atendimento se Atendente tiver parametrizado Conexao e Fila única já preenche automatico  <br />
1.1 / Correção Excluir Mensagem <br />
1.1 / Transferencia de Chamado obrigatório selecionar Fila <br />
1.1 / Intervalo de Almoço <br />
1.1 / Tempo para novo envio do chatbot X tempo deixa livre o campo. <br />
1.1 / Msg privada – TEXTO / ARQUIVOS <br />
1.1 / Ordenação das Filas Ordenação das filas: vc define a ordem do menu inicial <br />
1.1 / Aba grupos  <br />
1.1 / Filtros avançados e correção de bugs de filtros <br />
1.1 / Mudei as TAGs para Contatos, coloquei filtro por TAG nos contatos e opção de exportar  <br />
1.1 / LGPD em configurações gerais (47)989**-**12 ofuscar contato <br />
                                  (47)98912-1212 <br />
1.1 / LGPD Mensagem na saudação com opção de aceitar ou não seguir conversar pelo lado do  <br />
destinatário. Pode salvar para aceitar a primeira vez e as d+ não precisar ou sempre solicitar <br />
1.1 / LGPD Apagar totalmente do sistema e do banco de dados parametrização  <br />
1.1 / Ajustado conforme ícone da conexao(whatsapp, instagram ou facebook) na tela de contatos <br />
1.1 / Ajustado para Selecionar fila quando aceita ticket lá por cima na notificação <br />
1.1 / Menu que fica gigante quando a janela tá menor <br />
1.1 / Ajustado Bug do Modo Dark <br />
1.1 / Removido To Do List <br />
1.1 / Transferir Direto do Aguardando sem precisar ACEITAR <br />
1.1 / Opção Espiar removido o olhinho colocado como clique sem abrir modal <br />
1.1 / Alterado para IGNORAR chamado na Aba Aguardando <br />
1.1 / Recebimento e Envio de arquivos testados com várias extensões <br />
1.1 / Permissão no Atendente para ver Chamados sem Setor/Fila <br />
1.1 / Ajustado Mensagem Apagada <br />
1.1 / Ajustado Encaminhar Mensagem/Arquivos com assinatura <br />
1.1 / Ajustado Atendentes Online <br />
1.1 / Correção companyid no envio da mensagem <br />
1.1 / Importar Contatos Campanha – excel corrigido <br />
1.1 / Criar empresa - cadastrar parâmetro da assinatura automaticamente <br />
1.1 / Não enviar mais body para imagens <br /> <br />
1.1 / Ajuste executar cron de fechamento de ticket a cada 1 minuto <br />
1.1 / Ajuste atualização de mensagens F5 <br />
1.1 / Ajuste enviar anexo com ENTER ao dar CTRL V <br />
1.1 / Inclusão de fila e id do usuario para envio de midias API <br />
      Body: <br />
           "number": "5599999999999", <br />
           "body": "Aqui vai seu texto", <br />
           "whatsappId": "ID do Setor", <br />
           "queueId": "ID do Setor", <br />
           "userId": "ID do atendente" <br /> <br /> <br />
1.1 / Ajustado quando cadastrar empresa nova Assinatura Atendente habilitado como padráo no settings <br />
1.1 / Ajuste scroll painel de atendimentos (ATENDENTE/AGUARDANDO/GRUPOS) <br />
1.1 / Modificação nos Menus de Conexões <br />
1.1 / Dashboard/painel NPS: <br />
1.1 / Grupos Opção de Abrir Ticket e ir pra Fila Aguardando ou não abrir Ticket e ir Direto para Aba Grupos  <br />
  - grupo sem fila é quando ta setado para nao abrir ticket e vai direto para aba GRUPOS <br />
   - grupo com fila é quando ta setado para abrir ticket e vai para aba aguardando e atendendo) <br />
1.1 / Somente marcar como lida (azulzinho) depois que um atendente capturar o atendimento. <br />
1.1 / Ignorar Build pasta Public  <br />
1.1 / Central de Ajuda front melhorado <br />
1.1 / Ajuste envio de mídias e audios e Câmera <br />
1.1 / Opção de Anexo melhorado visual <br />
1.1 / Câmera na opção de anexos. Se tiver webcam consegue tirar foto <br />
1.1 / Compartilhar Contato <br />
1.1 / Contato Recebido pode clicar em Conversar abre ticket  <br />
1.1 / Removido a Mensagem que o Contato está sendo atendido por X Atendente e Fila Y, *QUANDO O CONTATO ESTÁ COM O PROPRIO ATENDENTE QUE ESTÁ TENTANDO ABRIR* <br />
1.1 / Ajuste Redis key Bull <br />
1.1 / Redes Sociais - LGPD e NPS <br />
1.1 / Ocultar botões e listas das configurações <br />
1.1 / Traduzido para Espanhol <br />
1.1 / Tempo em minutos para abrir novo ticket após encerramento  <br />
1.1 / Tratamento erro Baileys JSON <br />
1.1 / Melhorias no wbot, reduçao de consultas a banco <br />
 <br />
 <br />
1.1 / Separação de tickets por conexão/fila/contato (abre mais de um ticket por contato, mas unifica tudo no front) se tiver mais de 1 fila no usuario ou admin visualiza unificado <br />
* verificar na transferencia quando for de setor ele encerrar antes naquele setor o ticket e abrir um novo ticket para o setor novo assim fica os históricos e cada setor e suas permissões tb(opcao de colocar msg privada na transferencia para o novo atendente receber do que se trata) * versão 1.3  <br />
 <br /> <br /> <br />
1.2 / Importador de Históricos direto do Aparelho na leitura de qrcode <br />
          - Data inicial e Data Final (importa por intervalo de datas configurado) <br />
          - Visual do processo data / hora da mensagem que está importando <br />
          - Visual do processo quantidade msg x de y importado <br />
 <br /> <br />

Versão 1.1.3 - Liberado para Equipe de Testes 27/08 <br /><br />

 -  Importador de Históricos foi incluso 2(dois) arquivos de log no backend<br />
         Caminho dos logs<br />
          /home/deploy/multi100/backend/logs<br />
         Arquivo de preparo <br />
               preparingImportMessagesWppId<br />
         Arquivo de processamento mostra o historico do que está sendo importa e ser erro sabemos em qual contato e mensagem parou de importar <br />
             processImportMessagesWppId<br />
<br />
 - Removido Redes Sociais quando vai abrir novo ticket<br />
 - Removido a MSG que o Contato está sendo atendimento por X quando o contato está sendo atendido pelo proprio atendente que está tentando abrir um novo ticket<br />
 - Mensagem de Encerramento mostrando no histórico<br />
 - Ajustado Filtros<br />
 - Corrigido Mensagem normal após desativar o comentario dá toast de erro - Depois do F5 volta ao normal<br />
 - Corrigido GRUPO bugou uma imagem que mandei<br />
 - Corrigido GRUPOS - AVALIACAO (não constar como atendimento)<br />
 - Corrigido Após 1 comentário, nenhuma outra mensagem é recebida no chat! Somente após dar um F5 as mensagens aparece<br />
 - Corrigido Página de Ajuda (Mensagem outra empresa)<br />
 - Corrigido Erro Conversar em Grupos<br />
 - Corrigido Encerramento Automatico apresentava erro console<br />
 - Corrigido LGPD - verificar se o contato não digitar 1 ou 2<br />
 - Corrigido F5 - USER precisava dar F5 pra aparecer as mensagens<br />
 - Corrigido Contato bloqueado pelo sistema não consegue mais desbloqueá-lo. <br />
 - Corrigido Não conseguimos saber se aquele contato está bloqueado, pois o status não muda. <br />
 - Corrigido O contato bloqueado não consegue mais contato com o sistema, porém o sistema consegue ver o número no campo buscar<br />
 - Corrigido TOKEN - GERAR AUTOMATICO por conexao sem opção de editar<br />
 - Corrigido Envio pela API Externa (Possivel FOTO com Legenda)<br />
 - Corrigido O responder mensagem não está funcionando, a mensagem é enviada mais a mesma não marca a mensagem de origem<br />
 - Corrigido hypertext do Exportar Contatos Excel<br />
 - Corrigido Ao editar o horário para fila, não aparece a tradução para Sexta-feira e duplicou o fim a tradução fim do turno.<br />
 - Corrigido CONFIGURAÇÃOS - TIPOS DE MENU deixar somente TEXTO oculta botao e lista senao vai ter pergunta botao nao funciona<br />
 - Corrigido LGPD - ofuscar numero contato<br />
 - Corrigido Na documentação da API está faltando o TERMO BEARER LOGO APÓS O TOKEN<br />
 - Corrigido Nome da Conexão com o mesmo nome para Company Diferentes<br />
 - Corrigido MENSAGEM RAPIDA - tradução e limite de texto<br />
 - Corrigido Ao editar o usuário o inbox de visualizar chamados sem fila, esta com o texto sobrepondo a linha da caixa<br />
 - Corrigido Rotaçao de atendente na fila<br />
 - Corrigido Assinatura Atendente Ativava Automatico após trocar de conversa agora não mais se desativar permanece desativado<br />
 - Ajustado Botões Aceitar/Transferir/Ignorar nas Abas de Atendimento<br />
 - Ajuste no ticketlistitem para mostrar Atendente<br />
 - Ajuste no Responder modo Escuro<br />
 - Ajuste Permissão User Alterar Senha<br />
 - Corrigido Importador Contatos Agenda<br />
 - Ajuste Imagem Perfil de Contatos<br />
 - Feature Chatbot X Tempo aparecer novamente se o contato mandar algo após Encerrar atendimento<br />
 - Feature Arquivos no Chatbot <br />
 - Feature Imagem com Legenda na Saudação Inicial <br />
 - Feature Foto Perfil Atendente<br />
 - Feature Encaminhar Multiplos Arquivos/Textos<br />
 - Feature EXPORTAR TAGS nos contatos<br />
 - Feature *Beta* Motivo Encerramento de ticket<br />
 - Feature *Beta* Kanban <br />
 - Feature *Beta* Mensagens rápidas com anexo <br />
 - Feature *Beta* Campanha Filtro por tag e ajustado intervalo para obedecer configuração definida<br />
 <br /><br />
Versão 1.1.4 - em desenvolvimento<br />
 - Integração Webhook<br />
 - Integração N8N <br />
 - Integração DialogFlow <br />
<br /><br />
 Em desenvolvimento<br />
 - Chabot Flow<br />
 - Integração ChatGPT (Audio e Texto receber e enviar)<br />
 <br /><br />
 Em Analise <br />
 - SuperAdmin Personalização (Cores, Logos, Nome) no front<br />
 - Papéis Permissão <br />


