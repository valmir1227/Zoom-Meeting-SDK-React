# Zoom Meeting SDK

## Instalação

Começe clonando o repositório:

`$ git clone https://github.com/zoom/meetingsdk-react-sample.git`

## Configuração

1. Após clonar, navegue até o diretorio `meetingsdk-react-sample` .

   `$ cd meetingsdk-react-sample`

1. Agora instale as depedências:

   `$ npm install`

1. Abra `meetingsdk-react-sample` no seu editor de código.

1. Abra o arquivo `src/App.js`, e coloque as suas variáveis:

   | Variável                   | Descrição |
   | -----------------------|-------------|
  | authEndpoint          | Obrigatório, o seu endpoint de autenticação do Meeting SDK que gera com segurança um JWT para o Meeting SDK. [Obtenha um endpoint de autenticação do Meeting SDK aqui.](https://github.com/zoom/meetingsdk-sample-signature-node.js) |
| sdkKey                | Obrigatório, sua chave do Zoom Meeting SDK ou ID do Cliente para o tipo de aplicativo Meeting SDK criado após 11 de fevereiro de 2023. [Você pode obter a sua aqui](https://developers.zoom.us/docs/meeting-sdk/developer-accounts/#get-meeting-sdk-credentials). |
| meetingNumber         | Obrigatório, o número do Zoom Meeting ou webinar. |
| passWord              | Opcional, senha da reunião. Deixe como uma string vazia se a reunião não exigir uma senha. |
| role                  | Obrigatório, `0` para especificar participante, `1` para especificar anfitrião. |
| userName              | Obrigatório, um nome para o usuário que está entrando / começando a reunião / webinar. |
| userEmail             | Obrigatório para Webinar, opcional para Reunião, obrigatório para reunião e webinar se [o registro for necessário](https://support.zoom.us/hc/en-us/articles/360054446052-Managing-meeting-and-webinar-registration). O e-mail do usuário que está começando ou entrando na reunião / webinar. |
| registrantToken       | Obrigatório se sua [reunião](https://developers.zoom.us/docs/meeting-sdk/web/client-view/meetings/#join-meeting-with-registration-required) ou [webinar](https://developers.zoom.us/docs/meeting-sdk/web/client-view/webinars/#join-webinar-with-registration-required) exigir [registro](https://support.zoom.us/hc/en-us/articles/360054446052-Managing-meeting-and-webinar-registration). |
| zakToken              | Obrigatório para iniciar reuniões ou webinars em nome de um usuário externo do Zoom, o [ZAK token do usuário autorizado do Zoom](https://developers.zoom.us/docs/meeting-sdk/auth/#start-meetings-and-webinars-with-a-zoom-users-zak-token). O ZAK também pode ser usado para entrar como um [participante autenticado](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0063837). |
| leaveUrl              | Obrigatório para Client View, a URL para a qual o usuário é levado uma vez que a reunião termina. |

   Exemplo:

   ```js
   var authEndpoint = 'http://localhost:4000'
   var sdkKey = 'abc123'
   var meetingNumber = '123456789'
   var passWord = '1234'
   var role = 0
   var userName = 'User1'
   var userEmail = ''
   var registrantToken = ''
   var zakToken = ''
   var leaveUrl = 'http://localhost:3000'
   ```

1. Salve `App.js`.

1. Inicie a aplicação:

   `$ npm start`

## Como usar

1. Navegue para http://localhost:3000 e clique "Entrar na Sessão".

   ### Client View

   ![Zoom Meeting SDK Client View](/public/images/meetingsdk-web-client-view.gif)

   ### Component View

   ![Zoom Meeting SDK Component View](/public/images/meetingsdk-web-component-view.gif)

