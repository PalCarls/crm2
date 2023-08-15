const messages = {
  pt: {
    translations: {
      signup: {
        title: "Cadastre-se",
        toasts: {
          success: "Usuário criado com sucesso! Faça seu login!!!.",
          fail: "Erro ao criar usuário. Verifique os dados informados.",
        },
        form: {
          name: "Nome",
          email: "Email",
          password: "Senha",
          company: "Nome da Organização",
          phone: "Whatsapp (DDD + NÚMERO)"
        },
        buttons: {
          submit: "Cadastrar",
          login: "Já tem uma conta? Entre!",
        },
      },
      login: {
        title: "Login",
        form: {
          email: "Email",
          password: "Senha",
          button:"Acessar"
        },
        buttons: {
          submit: "Entrar",
          register: "Não tem um conta? Cadastre-se!",
        },
      },
      companies: {
        title: "Cadastrar Empresa",
        form: {
          name: "Nome da Empresa",
          plan: "Plano",
          token: "Token",
          submit: "Cadastrar",
          success: "Empresa criada com sucesso!",
        },
      },
      auth: {
        toasts: {
          success: "Login efetuado com sucesso!",
        },
        dueDate: {
          expiration: "Sua assinatura expira em",
          days: "dias!",
          day: "dia!",
          expirationToday: "Sua assinatura expira hoje!",
        },
        token: "Token",
      },
      dashboard: {
        tabs:{
          indicators:"Indicadores",
          assessments:"NPS",
          attendants:"Atendentes"
        },
        charts: {
          perDay: {
            title: "Atendimentos hoje: ",
          },
        },
        cards:{
          inAttendance:"Em Atendimento",
          waiting:"Aguardando",
          activeAttendants:"Atendentes Ativos",
          finalized:"Finalizados",
          newContacts:"Novos Contatos",
          totalReceivedMessages:"Minhas Mensagens Recebidas Totais",
          totalSentMessages:"Minhas Mensagens Enviadas Totais",
          averageServiceTime:"T.M. de Atendimento",
          averageWaitingTime:"T.M. de Espera",
          status:"Status (Atual)"
        },
        users:{
          name:"Nome",
          numberAppointments:"Quantidade de Atendimentos",
          statusNow:"Atual",
          totalCallsUser:"Total de atendimentos por usuario",
				  totalAttendances:"Total de atendimentos"
        },
        date:{
          initialDate:"Data Inicial",
          finalDate:"Data Final"
        },
        licence:{
          available:"Disponível até",
        },
        assessments:{
          totalCalls:"Total de Atendimentos",
          callsWaitRating:"Atendimentos aguardando avaliação",
          callsWithoutRating:"Atendimentos sem avaliação",
          ratedCalls:"Atendimentos avaliados",
          evaluationIndex:"Índice de avaliação",
          score:"Pontuação",
          prosecutors:"Promotores",
          neutral:"Neutros",
          detractors:"Detratores"
        }
      },
      reports:{
        title: "Relatório de Pesquisas Realizadas",
        operator: "Operador",
        period:"Período",
        until:"Até",
        date:"Data",
      },
      todo:{
        newTask:"Nova Tarefa",
        add:"Adicionar",
        task:"Tarefas"
      },
      connections: {
        title: "Conexões",
        waitConnection:"Aguarde... Suas conexões serão reiniciadas!",
        newConnection:"Nova Conexão",
        restartConnections:"Reiniciar Conexões",
        callSupport:"Chamar Suporte",
        newConnection:"Nova Conexão",
        toasts: {
          deleted: "Conexão excluída com sucesso!",
        },
        confirmationModal: {
          deleteTitle: "Deletar",
          deleteMessage: "Você tem certeza? Essa ação não pode ser revertida.",
          disconnectTitle: "Desconectar",
          disconnectMessage:
            "Tem certeza? Você precisará ler o QR Code novamente.",
        },
        buttons: {
          add: "Adicionar Conexão",
          disconnect: "desconectar",
          tryAgain: "Tentar novamente",
          qrcode: "QR CODE",
          newQr: "Novo QR CODE",
          connecting: "Conectando",
        },
        toolTips: {
          disconnected: {
            title: "Falha ao iniciar sessão do WhatsApp",
            content:
              "Certifique-se de que seu celular esteja conectado à internet e tente novamente, ou solicite um novo QR Code",
          },
          qrcode: {
            title: "Esperando leitura do QR Code",
            content:
              "Clique no botão 'QR CODE' e leia o QR Code com o seu celular para iniciar a sessão",
          },
          connected: {
            title: "Conexão estabelecida!",
          },
          timeout: {
            title: "A conexão com o celular foi perdida",
            content:
              "Certifique-se de que seu celular esteja conectado à internet e o WhatsApp esteja aberto, ou clique no botão 'Desconectar' para obter um novo QR Code",
          },
        },
        table: {
          name: "Nome",
          status: "Status",
          lastUpdate: "Última atualização",
          default: "Padrão",
          actions: "Ações",
          session: "Sessão",
          number: "Número do Whatsapp"
        },
      },
      showTicketOpenModal:{
        title: {
          header: "Atendimento Existente"
        },
        form: {
          message: "Este contato já está em atendimento:",
          user: "Atendente",
          queue: "Fila"
        },
      },
      whatsappModal: {
        title: {
          add: "Adicionar Conexão",
          edit: "Editar Conexão",
        },
        tabs:{
          general:"Geral",
          messages:"Mensagens",
          assessments:"NPS"
        },
        form: {
          name: "Nome",
          queueRedirection:"Redirecionamento de Fila",
          queueRedirectionDesc:"Selecione uma fila para os contatos que não possuem fila serem redirecionados",
          default: "Padrão",
          group: "Permitir grupos",
          time:"Tempo",
          groupAsTicket: "Tratar grupos como ticket",
          maxUseBotQueues: "Quantidade máxima de vezes que o chatbot vai ser enviado",
          timeUseBotQueues: "Tempo em minutos para novo envio do chatbot",
          expiresTicket: "Encerrar chats abertos após x horas",
          expiresTicketNPS: "Encerrar chats aguardando avaliação após x minutos",
          maxUseBotQueuesNPS: "Quantidade máxima de vezes que a avaliaçao vai ser enviada",
          closeLastMessageOptions1:"Do atendente/Cliente",
          closeLastMessageOptions2:"Do atendente",
          timeUseBotQueues: "Tempo em minutos para novo envio do chatbot",
          outOfHoursMessage: "Mensagem de fora de expediente",
          greetingMessage: "Mensagem de saudação",
          complationMessage: "Mensagem de conclusão",
          lgpdLinkPrivacy: "Link para política de privacidade",
          lgpdMessage: "Mensagem de saudaçao LGPD",
          lgpdDeletedMessages: "Ofuscar mensagem apagada pelo contato",
          lgpdSendMessage: "Sempre solicitar confirmação do contato",
          ratingMessage: "Mensagem de avaliaçao - Escala deve ser de 0 a 10",
          token: "Token para integração externa",
          sendIdQueue: "Fila",
          inactiveMessage: "Mensagem de inatividade",
          timeInactiveMessage: "Tempo em minutos para envio do aviso de inatividade",
          whenExpiresTicket: "Encerrar chats abertos quando última mensagem for",
          expiresInactiveMessage: "Mensagem de encerramento por inatividade",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        menuItem: {
          enabled: "Habilitado",
          disabled: "Desabilitado",
        },
        success: "Conexão salvo com sucesso.",
      },
      qrCode: {
        message: "Leia o QrCode para iniciar a sessão",
      },
      contacts: {
        title: "Contatos",
        toasts: {
          deleted: "Contato excluído com sucesso!",
        },
        searchPlaceholder: "Pesquisar...",
        confirmationModal: {
          deleteTitle: "Deletar ",
          importTitlte: "Importar contatos",
          exportContact: "Exportar contatos",
          deleteMessage:"Tem certeza que deseja deletar este contato? Todos os atendimentos relacionados serão perdidos.",
          blockContact:"Tem certeza que deseja bloquear este contato?",
          importMessage: "Deseja importar todos os contatos do telefone?",
          importChat:"Importar Conversas",
          wantImport:"Deseja importar todas as conversas do telefone?"
        },
        buttons: {
          import: "Importar Contatos",
          add: "Adicionar Contato",
          export: "Exportar Contato",
        },
        table: {
          name: "Nome",
          whatsapp: "Conexão",
          email: "Email",
          actions: "Ações",
          lastMessage:"Última Mensagem"
        },
      },
      forwardMessage: {
        text: "Encaminhada"
      },
      forwardMessageModal: {
        title: "Encaminhar mensagem",
        buttons: {
          ok: "Encaminhar"
        }
      },
      contactModal: {
        title: {
          add: "Adicionar contato",
          edit: "Editar contato",
        },
        form: {
          mainInfo: "Dados do contato",
          extraInfo: "Informações adicionais",
          name: "Nome",
          number: "Número do Whatsapp",
          email: "Email",
          extraName: "Nome do campo",
          extraValue: "Valor",
          chatBotContact:"Desabilitar chatbot para esse contato",
          termsLGDP:"Termos LGPD aceito em:",
          allTicket: "Visualizar chamados sem fila",
          allowGroup: "Permitir grupos",
        },
        buttons: {
          addExtraInfo: "Adicionar informação",
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        success: "Contato salvo com sucesso.",
      },
      queueModal: {
        title: {
          queueData:"Dados da fila",
          text:"Horários de atendimento",
          add: "Adicionar fila",
          edit: "Editar fila",
          confirmationDelete:"Tem certeza? Todas as opções de integrações serão deletadas."
        },
        form: {
          name: "Nome",
          color: "Cor",
          orderQueue: "Ordem da fila (Bot)",
          greetingMessage: "Mensagem de saudação",
          complationMessage: "Mensagem de conclusão",
          outOfHoursMessage: "Mensagem de fora de expediente",
          token: "Token",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        bot:{
          title:"Opções",
          toolTipTitle:"Adicione opções para construir um chatbot",
          toolTip:"Se houver apenas uma opção, ela será escolhida automaticamente, fazendo com que o bot responda com a mensagem da opção e siga adiante",
          selectOption:"Selecione uma opção",
          text:"Texto",
          attendent:"Atendente",
          queue:"Fila",
          integration:"Integração",
          file:"Arquivo",
          toolTipMessageTitle:"A mensagem é obrigatória para seguir ao próximo nível",
          toolTipMessageContent:"A mensagem é obrigatória para seguir ao próximo nível",
          selectUser:"Selecione um Usuário",
          selectQueue:"Selecione uma Fila",
          selectIntegration:"Selecione uma Integração",
          addOptions:"Adiconar opções",
        },
        serviceHours:{
          dayWeek:"Dia da semana",
          startTimeA:"Hora Inicial - Turno A",
          endTimeA:"Hora Final - Turno A",
          startTimeB:"Hora Inicial - Turno B",
          endTimeB:"Hora Inicial - Turno B",
          monday:"Segunda-feira",
          tuesday:"Terça-feira",
          wednesday:"Quarta-feira",
          thursday:"Quinta-feira",
          friday:"Sexta-feira"
        }
      },
      queueIntegrationModal: {
        title: {
          add: "Adicionar projeto",
          edit: "Editar projeto",
        },
        form: {
          id: "ID",
          type: "Tipo",
          name: "Nome",
          projectName: "Nome do Projeto",
          language: "Linguagem",
          jsonContent: "JsonContent",
          urlN8N: "URL N8N",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
          test: "Testar Bot",
        },
        messages: {
          testSuccess: "Integração testada com sucesso!",
          addSuccess: "Integração adicionada com sucesso.",
          editSuccess: "Integração editada com sucesso.",
        },
      },
      userModal: {
        title: {
          add: "Adicionar usuário",
          edit: "Editar usuário",
        },
        form: {
          name: "Nome",
          email: "Email",
          password: "Senha",
          farewellMessage: "Mensagem de despedida",
          profile: "Perfil",
          startWork: "Inicio de trabalho",
          endWork: "Fim de trabalho",
          whatsapp: "Conexão Padrão", 
          allTicketEnable: "Habilitado",
          allTicketDisable: "Desabilitado",
          allTicket: "Visualizar chamados sem fila",
          allowGroup:"Permitir Grupos"
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        success: "Usuário salvo com sucesso.",
      },
      companyModal: {
        title: {
          add: "Adicionar empresa",
          edit: "Editar empresa",
        },
        form: {
          name: "Nome",
          email: "Email",
          passwordDefault: "Senha",
          numberAttendants: "Usuários",
          numberConections: "Conexões",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        success: "Empresa salvo com sucesso.",
      },
      scheduleModal: {
        title: {
          add: "Novo Agendamento",
          edit: "Editar Agendamento",
        },
        form: {
          body: "Mensagem",
          contact: "Contato",
          sendAt: "Data de Agendamento",
          sentAt: "Data de Envio",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        success: "Agendamento salvo com sucesso.",
      },
      tagModal: {
        title: {
          add: "Nova Tag",
          edit: "Editar Tag",
        },
        form: {
          name: "Nome",
          color: "Cor",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        success: "Tag salvo com sucesso.",
      },
      fileModal: {
        title: {
          add: "Adicionar lista de arquivos",
          edit: "Editar lista de arquivos",
        },
        buttons: {
          okAdd: "Salvar",
          okEdit: "Editar",
          cancel: "Cancelar",
          options: "Adicionar opção",
        },
        form: {
          name: "Nome",
          message: "Mensagem da Avaliação",
          options: "Opções de Avaliação",
          extraName: "Nome da opção",
          extraValue: "Valor da opção",
        },
        success: "Avaliação salva com sucesso!",
      },
      chat: {
        noTicketMessage: "Selecione um ticket para começar a conversar.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "⬇️ ARRASTE E SOLTE ARQUIVOS NO CAMPO ABAIXO ⬇️",
          titleFileList: "Lista de arquivo(s)"
        },
      },  
      chatInternal:{
        new:"Nova",
        modal:{
          conversation:"Conversa",
          title:"Título",
          filterUsers:"Filtro por Usuários",
          cancel:"Fechar",
          save:"Salvar"
        },
        modalDelete:{
          title:"Excluir Conversa",
          message:"Esta ação não pode ser revertida, confirmar?"
        }
      },
      ticketsManager: {
        buttons: {
          newTicket: "Novo",
        },
      },
      ticketsQueueSelect: {
        placeholder: "Filas",
      },
      tickets: {
        toasts: {
          deleted: "O atendimento que você estava foi deletado.",
        },
        notification: {
          message: "Mensagem de",
        },
        tabs: {
          open: { title: "Abertas" },
          closed: { title: "Resolvidos" },
          search: { title: "Busca" },
        },
        search: {
          placeholder: "Buscar atendimento e mensagens",
          filterConections:"Filtro por Conexão",
          filterConectionsOptions:{
            open:"Aberto",
            closed:"Fechado",
            pending:"Pendente",
          },
          filterUsers:"Filtro por Usuarios"
        },
        buttons: {
          showAll: "Todos",
          returnQueue:"Devolver a Fila",
          scredule:"Agendamento",
          deleteTicket:"Deletar Ticket"
        },
        closedTicket:{
          closedMessage:"Fechar Ticket Com Mensagem de Despedida",
          closedNotMessage:"Fechar Ticket Sem Mensagem de Despedida"
        }
      },
      transferTicketModal: {
        title: "Transferir Ticket",
        fieldLabel: "Digite para buscar usuários",
        fieldQueueLabel: "Transferir para fila",
        fieldQueuePlaceholder: "Selecione uma fila",
        fieldWhatsapp:"Selecione um whatsapp",
        noOptions: "Nenhum usuário encontrado com esse nome",
        buttons: {
          ok: "Transferir",
          cancel: "Cancelar",
        },
      },
      chatInternal:{
        new:"Nova",
        modal:{
          conversation:"Conversa",
          title:"Título",
          filterUsers:"Filtro por Usuários",
          cancel:"Fechar",
          save:"Salvar"
        },
        modalDelete:{
          title:"Excluir Conversa",
          message:"Esta ação não pode ser revertida, confirmar?"
        }
      },
      ticketsList: {
        called:"Chamado",
        today:"Hoje",
        missedCall:"Chamada de voz/vídeo perdida às",
        pendingHeader: "Aguardando",
        assignedHeader: "Atendendo",
        groupingHeader: "Grupos",
        noTicketsTitle: "Nada aqui!",
        noTicketsMessage:
          "Nenhum atendimento encontrado com esse status ou termo pesquisado",
        buttons: {
          accept: "Aceitar",
          cancel: "Cancelar",
          start: "iniciar",
          closed: "Fechar",
          reopen: "Reabrir",
          transfer: "Transferir",
          ignore: "Ignorar",
        },
        acceptModal: {
          title: "Aceitar Chat",
          queue: "Selecionar setor"
        },
      },
      newTicketModal: {
        title: "Criar Ticket",
        fieldLabel: "Digite para pesquisar o contato",
        add: "Adicionar",
        buttons: {
          ok: "Salvar",
          cancel: "Cancelar",
        },
      },
      SendContactModal: {
        title: "Enviar contato",
        fieldLabel: "Digite para pesquisar o contato",
        add: "Adicionar",
        buttons: {
          ok: "Enviar",
          cancel: "Cancelar",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Dashboard",
          connections: "Conexões",
          chatsTempoReal: "Painel de Atendimentos",
          tickets: "Atendimentos",
          quickMessages: "Respostas Rápidas",
          contacts: "Contatos",
          queues: "Filas & Chatbot",
          tags: "Tags",
          administration: "Administração",
          companies: "Empresas",
          users: "Usuários",
          settings: "Configurações",
          files: "Lista de arquivos",
          helps: "Ajuda",
          messagesAPI: "API",
          schedules: "Agendamentos",
          campaigns: "Campanhas",
          annoucements: "Informativos",
          chats: "Chat Interno",
          financeiro: "Financeiro",
          queueIntegration: "Integrações",
          version: "Versión",
        },
        appBar: {
          user: {
            profile: "Perfil",
            logout: "Sair",
            message:"Olá",
            messageEnd:"seja bem-vindo a",
            active:"Ativo até",
            goodMorning:"Oi,",
            myName:"meu nome é",
            continuity:"e darei continuidade em seu atendimento.",
            virtualAssistant:"Assistente Virtual"
          },
          message:{
            location:"Localização",
            contact:"Contato"
          },
          notRegister:"Nenhum registro",
          refresh: "Atualizar"
        },
      },
      languages: {
        undefined: "Idioma",
        "pt-BR": "Português",
        es: "Español",
        en: "English",
        tr: "Türkçe"
      },
      messagesAPI: {
        title: "API",
        textMessage: {
          number: "Número",
          body: "Mensagem",
          token: "Token cadastrado",
          userId: "ID do usuário/atendente",
          queueId: "ID da Fila",
        },
        mediaMessage: {
          number: "Número",
          body: "Nome do arquivo",
          media: "Arquivo",
          token: "Token cadastrado",
        },
        API:{
          title:"Documentação para envio de mensagens",
          methods:{
            title:"Métodos de Envío",
            messagesText:"Mensagens de Texto",
            messagesMidia:"Mensagens de Media"
          },
          instructions:{
            title:"Instruções",
            comments:"Observações Importantes",
            comments1:"Antes de enviar mensagens, é necessário o cadastro do token vinculado à conexão que enviará as mensagens. <br />Para realizar o cadastro acesse o menu 'Conexões', clique no botão editar da conexão e insira o token no devido campo.",
            comments2:"O número para envio não deve ter mascara ou caracteres especiais e deve ser composto por:",
            codeCountry:"Código do País",
            code:"DDD",
            number:"Número"
          },
          text:{
            title:"1. Mensagens de Texto",
            instructions:"Seguem abaixo a lista de informações necessárias para envio das mensagens de texto:"
          },
          media:{
            title:"2. Mensagens de Media",
            instructions:"Seguem abaixo a lista de informações necessárias para envio das mensagens de texto:"
          }
        }
      },
      notifications: {
        noTickets: "Nenhuma notificação.",
      },
      quickMessages: {
        title: "Respostas Rápidas",
        buttons: {
          add: "Nova Resposta",
        },
        dialog: {
          title:"Mensaje Rápida",
          shortcode: "Atalho",
          message: "Resposta",
          save:"Salvar"
        },
        table:{
          shortcode: "Atalho",
          message:"Mensagem",
          actions:"Ações"
        }
      },
      contactLists: {
        title: "Listas de Contatos",
        table: {
          name: "Nome",
          contacts: "Contatos",
          actions: "Ações",
        },
        buttons: {
          add: "Nova Lista",
        },
        dialog: {
          name: "Nome",
          company: "Empresa",
          okEdit: "Editar",
          okAdd: "Adicionar",
          add: "Adicionar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta ação não pode ser revertida.",
        },
        toasts: {
          deleted: "Registro excluído",
        },
      },
      contactListItems: {
        title: "Contatos",
        searchPlaceholder: "Pesquisa",
        buttons: {
          add: "Novo",
          lists: "Listas",
          import: "Importar",
        },
        dialog: {
          name: "Nome",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "E-mail",
          okEdit: "Editar",
          okAdd: "Adicionar",
          add: "Adicionar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        table: {
          name: "Nome",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "E-mail",
          actions: "Ações",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta ação não pode ser revertida.",
          importMessage: "Deseja importar os contatos desta planilha? ",
          importTitlte: "Importar",
        },
        toasts: {
          deleted: "Registro excluído",
        },
      },
      campaigns: {
        title: "Campanhas",
        searchPlaceholder: "Pesquisa",
        subMenus:{
          list:"Listagem",
          listContacts:"Lista de contatos",
          settings:"Configurações"
        },
        settings:{
          randomInterval:"Intervalo Randômico de Disparo",
          noBreak:"Sem Intervalo",
          intervalGapAfter:"Intervalo maior após",
          undefined:"Não definido",
          messages:"mensagens",
          laggerTriggerRange:"Intervalo de disparo maior",
          addVar:"Adicionar variável",
          save:"Salvar",
          close:"Fechar",
          add:"Adicionar",
          shortcut:"Atalho",
          content:"Conteúdo",
        },  
        buttons: {
          add: "Nova Campanha",
          contactLists: "Listas de Contatos",
        },
        table: {
          name: "Nome",
          whatsapp: "Conexão",
          contactList: "Lista de Contatos",
          option:"Nenhuma",
          disabled:"Desabilitada",
          enabled:"Habilitada",
          status: "Status",
          scheduledAt: "Agendamento",
          completedAt: "Concluída",
          confirmation: "Confirmação",
          actions: "Ações",
        },
        dialog: {
          new: "Nova Campanha",
          update: "Editar Campanha",
          readonly: "Apenas Visualização",
          help:"Utilize variáveis como {nome}, {numero}, {email} ou defina variáveis personalizadas.",
          form: {
            name: "Nome",
            message1: "Mensagem 1",
            message2: "Mensagem 2",
            message3: "Mensagem 3",
            message4: "Mensagem 4",
            message5: "Mensagem 5",
            confirmationMessage1: "Mensagem de Confirmação 1",
            confirmationMessage2: "Mensagem de Confirmação 2",
            confirmationMessage3: "Mensagem de Confirmação 3",
            confirmationMessage4: "Mensagem de Confirmação 4",
            confirmationMessage5: "Mensagem de Confirmação 5",
            messagePlaceholder: "Conteúdo da mensagem",
            whatsapp: "Conexão",
            status: "Status",
            scheduledAt: "Agendamento",
            confirmation: "Confirmação",
            contactList: "Lista de Contato",
          },
          buttons: {
            add: "Adicionar",
            edit: "Atualizar",
            okadd: "Ok",
            cancel: "Cancelar Disparos",
            restart: "Reiniciar Disparos",
            close: "Fechar",
            attach: "Anexar Arquivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta ação não pode ser revertida.",
        },
        toasts: {
          success: "Operação realizada com sucesso",
          cancel: "Campanha cancelada",
          restart: "Campanha reiniciada",
          deleted: "Registro excluído",
        },
      },
      campaignReport:{
        title:"Relatório de",
        inactive:"Inativa",
        scheduled:"Programada",
        process:"Em Andamento",
        cancelled:"Cancelada",
        finished:"Finalizada",
        campaign:"Campanha",
        validContacts:"Contatos Válidos",
        confirmationsRequested:"Confirmações Solicitadas",
        confirmations:"Confirmações",
        deliver:"Entregues",
        connection:"Conexão",
        contactLists:"Lista de Contatos",
        schedule:"Agendamento",
        conclusion:"Conclusão"
      },
      announcements: {
        title: "Informativos",
        searchPlaceholder: "Pesquisa",
        buttons: {
          add: "Novo Informativo",
          contactLists: "Listas de Informativos",
        },
        table: {
          priority: "Prioridade",
          title: "Title",
          text: "Texto",
          mediaName: "Arquivo",
          status: "Status",
          actions: "Ações",
        },
        dialog: {
          edit: "Edição de Informativo",
          add: "Novo Informativo",
          update: "Editar Informativo",
          readonly: "Apenas Visualização",
          form: {
            priority: "Prioridade",
            title: "Title",
            text: "Texto",
            mediaPath: "Arquivo",
            status: "Status",
            high:"Alta",
            medium:"Média",
            low:"Baixa",
            active:"Ativo",
            inactive:"Inativo"
          },
          buttons: {
            add: "Adicionar",
            edit: "Atualizar",
            okadd: "Ok",
            cancel: "Cancelar",
            close: "Fechar",
            attach: "Anexar Arquivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta ação não pode ser revertida.",
        },
        toasts: {
          success: "Operação realizada com sucesso",
          deleted: "Registro excluído",
        },
      },
      campaignsConfig: {
        title: "Configurações de Campanhas",
      },
      queues: {
        title: "Filas & Chatbot",
        table: {
          name: "Nome",
          color: "Cor",
          greeting: "Mensagem de saudação",
          orderQueue: "Ordenação da fila (bot)",
          actions: "Ações",
        },
        buttons: {
          add: "Adicionar fila",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage:
            "Você tem certeza? Essa ação não pode ser revertida! Os atendimentos dessa fila continuarão existindo, mas não terão mais nenhuma fila atribuída.",
        },
      },
      queue: {
        queueData: "Dados",
      },
      queueSelect: {
        inputLabel: "Filas",
      },
      queueIntegration: {
        title: "Integrações",
        table: {
          id: "ID",
          type: "Tipo",
          name: "Nome",
          projectName: "Nome do Projeto",
          language: "Linguagem",
          lastUpdate: "Ultima atualização",
          actions: "Ações",
        },
        buttons: {
          add: "Adicionar Projeto",
        },
        searchPlaceholder: "Pesquisar...",
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage:
            "Você tem certeza? Essa ação não pode ser revertida! e será removida das filas e conexões vinculadas",
        },
      },
      users: {
        title: "Usuários",
        table: {
          status: "Status",
          name: "Nome",
          email: "Email",
          profile: "Perfil",
          startWork: "Inicio de trabalho",
          endWork: "Fim de trabalho",
          actions: "Ações",
        },
        buttons: {
          add: "Adicionar usuário",
        },
        toasts: {
          deleted: "Usuário excluído com sucesso.",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage:
            "Todos os dados do usuário serão perdidos. Os atendimento abertos deste usuário serão movidos para a fila.",
        },
      },
      compaies: {
        title: "Empresas",
        table: {
          ID: "ID",
          status: "Ativo",
          name: "Nome",
          email: "Email",
          password:"Senha",
          phone:"Teléfono",
          plan:"Plan",
          active:"Activo",
          numberAttendants: "Atendentes",
          numberConections: "Conexões",
          value: "Valor",
          namePlan: "Nome Plano",
          numberQueues: "Filas",
          useCampaigns: "Campanhas",
          useExternalApi: "Rest API",
          useFacebook: "Facebook",
          useInstagram: "Instagram",
          useWhatsapp: "Whatsapp",
          useInternalChat: "Chat Interno",
          useSchedules: "Agendamento",
          createdAt: "Criada Em",
          dueDate: "Vencimento",
          lastLogin: "Ult. Login",
          actions: "Ações",
          money:"R$",
          yes:"Sim",
          no:"Não",
          document:"CNPJ/CPF",
          recurrence:"Recorrência",
          monthly:"Mensal",
          bimonthly:"Bimestral",
          quarterly:"Trimestral",
          semester:"Semestral",
          yearly:"Anual",
          clear:"Limpar",
          delete:"Excluir",
          user:"Usuário",
          save:"Salvar"
        },
        buttons: {
          add: "Adicionar empresa",
        },
        toasts: {
          deleted: "Empresa excluído com sucesso.",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage:
            "Todos os dados da empresa serão perdidos. Os tickets abertos deste usuário serão movidos para a fila.",
        },
      },
      plans:{
        form:{
          name:"Nome",
          users:"Usuários",
          connections:"Conexões",
          campaigns:"Campanhas",
          schedules:"Agendamentos",
          enabled:"Habilitadas",
          disabled:"Desabilitadas",
          clear:"Limpar",
          delete:"Excluir",
          save:"Salvar",
          yes:"Sim",
          no:"Não",
          money:"R$"
        }
      },
      helps: {
        title: "Central de Ajuda",
        settings:{
          codeVideo:"Código do Video",
          description:"Descrição",
          clear:"Limpar",
          delete:"Excluir",
          save:"Salvar"
        }
      },
      schedules: {
        title: "Agendamentos",
        confirmationModal: {
          deleteTitle: "Você tem certeza que quer excluir este Agendamento?",
          deleteMessage: "Esta ação não pode ser revertida.",
        },
        table: {
          contact: "Contato",
          body: "Mensagem",
          sendAt: "Data de Agendamento",
          sentAt: "Data de Envio",
          status: "Status",
          actions: "Ações",
        },
        buttons: {
          add: "Novo Agendamento",
        },
        toasts: {
          deleted: "Agendamento excluído com sucesso.",
        },
      },
      tags: {
        title: "Tags",
        confirmationModal: {
          deleteTitle: "Você tem certeza que quer excluir esta Tag?",
          deleteMessage: "Esta ação não pode ser revertida.",
        },
        table: {
          name: "Nome",
          color: "Cor",
          tickets: "Registros Tags",
          contacts: "Contatos",
          actions: "Ações",
        },
        buttons: {
          add: "Nova Tag",
        },
        toasts: {
          deleted: "Tag excluído com sucesso.",
        },
      },
      files: {
        title: "Lista de arquivos",
        table: {
          name: "Nome",
          contacts: "Contatos",
          actions: "Ação"
        },
        toasts: {
          deleted: "Lista excluída com sucesso!",
          deletedAll: "Todas as listas foram excluídas com sucesso!",
        },
        buttons: {
          add: "Adicionar",
          deleteAll: "Deletar Todos",
        },
        confirmationModal: {
          deleteTitle: "Deletar",
          deleteAllTitle: "Deletar Todos",
          deleteMessage: "Tem certeza que deseja deletar esta lista?",
          deleteAllMessage: "Tem certeza que deseja deletar todas as listas?",
        },
      },
      settings: {
        success: "Configurações salvas com sucesso.",
        title: "Configurações",
        tabs:{
          options:"Opções",
          plans:"Planos",
          helps:"Ajuda"
        },
        settings: {
          userCreation: {
            name: "Criação de usuário",
            options: {
              enabled: "Ativado",
              disabled: "Desativado",
            },
          },
          tabs:{
            options:"Opções",
            schedules:"Horários",
            plans:"Planos",
            help:"Ajuda"
          },
          options:{
            disabled:"Desabilitadas",
            enabled:"Habilitadas",
            updating:"Atualizando...",
            creationCompanyUser:"Criação de Company/Usuário",
            evaluations:"Avaliações",
            officeScheduling:"Agendamento de Expediente",
            queueManagement:"Gerenciamento por Fila",
            companyManagement:"Gerenciamento por Empresa",
            sendGreetingAccepted:"Enviar saudação ao aceitar o ticket",
            sendMsgTransfTicket:"Enviar mensagem transferência de setor/atendente",
            checkMsgIsGroup:"Ignorar Mensagens de Grupos",
            chatBotType:"Tipo do Bot",
            buttons:"Botões",
            acceptCallWhatsapp:"Informar que não aceita ligação no whatsapp?",
            sendSignMessage:"Permite atendente escolher ENVIAR Assinatura",
            sendGreetingMessageOneQueues:"Enviar saudação quando houver somente 1 fila",
            sendQueuePosition:"Enviar mensagem com a posição da fila",
            sendFarewellWaitingTicket:"Enviar mensagem de despedida no Aguardando",
            acceptAudioMessageContact:"Aceita receber audio de todos contatos?",
            enableLGPD:"Habilitar tratamento LGPD",
            mandatoryTag:"Tag obrigatoria"
          },
          LGPD:{
            title:"LGPD",
            welcome:"Mensagem de boas vindas(LGPD)",
            linkLGPD:"Link da política de privacidade",
            obfuscateMessageDelete:"Ofuscar mensagem apagada",
            alwaysConsent:"Sempre solicitar consentimento",
            obfuscatePhoneUser:"Ofuscar número telefone para usuários",
            enabled:"Habilitado",
            disabled:"Desabilitado"
          }
        },
      },
      messagesList: {
        header: {
          assignedTo: "Atribuído à:",
          dialogRatingTitle: "Deseja deixar uma avaliação de atendimento para o cliente?",
          dialogClosingTitle: "Finalizando o atendimento com o cliente!",
          dialogRatingCancel: "Resolver COM Mensagem de Despedida",
          dialogRatingSuccess: "Resolver e Enviar Avaliação",
          dialogRatingWithoutFarewellMsg: "Resolver SEM Mensagem de Despedida",
          ratingTitle: "Escolha um menu de avaliação",
          buttons: {
            return: "Retornar",
            resolve: "Resolver",
            reopen: "Reabrir",
            accept: "Aceitar",
            rating: "Enviar Avaliação",
            enableIntegration: "Habilitar/desabilitar integração",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Digite uma mensagem",
        placeholderClosed:
          "Reabra ou aceite esse ticket para enviar uma mensagem.",
        signMessage: "Assinar",
        privateMessage: "Mensagem Privada"
      },
      contactDrawer: {
        header: "Dados do contato",
        buttons: {
          edit: "Editar contato",
        },
        extraInfo: "Outras informações",
      },
      ticketOptionsMenu: {
        schedule: "Agendamento",
        delete: "Deletar",
        transfer: "Transferir",
        registerAppointment: "Observações do Contato",
        resolveWithNoFarewell: "Finalizar sem despedida",
        acceptAudioMessage: "Aceitar áudios do contato?",
        appointmentsModal: {
          title: "Observações do Contato",
          textarea: "Observação",
          placeholder: "Insira aqui a informação que deseja registrar",
        },
        confirmationModal: {
          title: "Deletar o ticket do contato",
          titleFrom: "do contato ",
          message:"Atenção! Todas as mensagens relacionadas ao ticket serão perdidas.",
        },
        buttons: {
          delete: "Excluir",
          cancel: "Cancelar",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Ok",
          cancel: "Cancelar",
        },
      },
      messageInput: {
        tooltip: {
          signature: "Habilitar/Desabilitar Assinatura",
          privateMessage: "Habilitar/Desabilitar Mensagem Privada",
        },
        type:{
          imageVideo:"Fotos e vídeos",
          cam:"Câmera",
          contact:"Contato"
        }
      },
      messageOptionsMenu: {
        delete: "Deletar",
        reply: "Responder",
        edit: "Editar",
        forward: "Encaminhar",
        toForward: "Encaminhar",
        talkTo: "Conversar Com",
        confirmationModal: {
          title: "Apagar mensagem?",
          message: "Esta ação não pode ser revertida.",
        },
      },
      invoices:{
        table:{
          invoices:"Faturas",
          details:"Detalhes",
          users:"Usuários",
          connections:"Conexões",
          queue:"Filas",
          value:"Valor",
          expirationDate:"Data Venc.",
          action:"Ação"
        }
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP: "Deve haver pelo menos um WhatsApp padrão.",
        ERR_NO_DEF_WAPP_FOUND: "Nenhum WhatsApp padrão encontrado. Verifique a página de conexões.",
        ERR_WAPP_NOT_INITIALIZED: "Esta sessão do WhatsApp não foi inicializada. Verifique a página de conexões.",
        ERR_WAPP_CHECK_CONTACT: "Não foi possível verificar o contato do WhatsApp. Verifique a página de conexões",
        ERR_WAPP_INVALID_CONTACT: "Este não é um número de Whatsapp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA: "Não foi possível baixar mídia do WhatsApp. Verifique a página de conexões.",
        ERR_INVALID_CREDENTIALS: "Erro de autenticação. Por favor, tente novamente.",
        ERR_SENDING_WAPP_MSG: "Erro ao enviar mensagem do WhatsApp. Verifique a página de conexões.",
        ERR_DELETE_WAPP_MSG: "Não foi possível excluir a mensagem do WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Já existe um tíquete aberto para este contato.",
        ERR_SESSION_EXPIRED: "Sessão expirada. Por favor entre.",
        ERR_USER_CREATION_DISABLED: "A criação do usuário foi desabilitada pelo administrador.",
        ERR_NO_PERMISSION: "Você não tem permissão para acessar este recurso.",
        ERR_DUPLICATED_CONTACT: "Já existe um contato com este número.",
        ERR_NO_SETTING_FOUND: "Nenhuma configuração encontrada com este ID.",
        ERR_NO_CONTACT_FOUND: "Nenhum contato encontrado com este ID.",
        ERR_NO_TICKET_FOUND: "Nenhum tíquete encontrado com este ID.",
        ERR_NO_USER_FOUND: "Nenhum usuário encontrado com este ID.",
        ERR_NO_WAPP_FOUND: "Nenhum WhatsApp encontrado com este ID.",
        ERR_CREATING_MESSAGE: "Erro ao criar mensagem no banco de dados.",
        ERR_CREATING_TICKET: "Erro ao criar tíquete no banco de dados.",
        ERR_FETCH_WAPP_MSG: "Erro ao buscar a mensagem no WhtasApp, talvez ela seja muito antiga.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS: "Esta cor já está em uso, escolha outra.",
        ERR_WAPP_GREETING_REQUIRED: "A mensagem de saudação é obrigatório quando há mais de uma fila.",
        ERR_OUT_OF_HOURS: "Fora do Horário de Expediente!",
      },
    },
  },
};

export { messages };
