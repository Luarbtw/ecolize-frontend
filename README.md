# Ecolize Frontend

Frontend do projeto Ecolize, desenvolvido com Expo e React Native.

O projeto foi estruturado para funcionar hoje com dados mockados centralizados, mas já preparado para integração com backend real por meio de uma camada de `services`, `context` e `hooks`.

## Stack

- Expo
- React Native

## Como rodar

Na raiz do projeto:

```bash
npm install
npm start
```

Comandos úteis:

```bash
npm run android
npm run ios
npm run web
```

## Rodando com Expo

Este projeto usa Expo.

Você pode iniciar o ambiente de desenvolvimento com:

```bash
npx expo start
```

Ou com os scripts do projeto:

```bash
npm start
```

Para abrir diretamente em plataformas específicas:

```bash
npx expo start --android
npx expo start --ios
npx expo start --web
```

Também é possível usar os scripts equivalentes:

```bash
npm run android
npm run ios
npm run web
```

### Preview no celular

1. Instale o aplicativo `Expo Go`
2. Rode `npx expo start`
3. Escaneie o QR code exibido no terminal ou no navegador

Se precisar compartilhar o preview fora da sua rede local:

```bash
npx expo start --tunnel
```

## Estrutura

```text
src/
  components/
    auth/
    common/
    home/
    onboarding/
  config/
  context/
  hooks/
  mocks/
  navigation/
  screens/
    auth/
    home/
    onboarding/
  services/
  utils/
```

## Organização atual

O projeto está dividido em:

- `screens`: telas do app
- `components`: componentes reutilizáveis de interface
- `services`: camada de acesso a dados e integração futura com API
- `mocks`: dados simulados usados durante o desenvolvimento
- `context`: gerenciamento global de sessão/autenticação
- `hooks`: lógica reutilizável, como carregamento assíncrono

## Integração com backend

Hoje o app usa dados mockados em memória, principalmente por meio de:

- [`src/mocks/mockStore.js`](./src/mocks/mockStore.js)
- [`src/services`](./src/services)

A ideia é que, quando o backend estiver pronto, os mocks possam ser substituídos gradualmente por chamadas reais sem necessidade de refazer as telas.

Arquivos principais dessa preparação:

- [`src/context/AuthContext.jsx`](./src/context/AuthContext.jsx)
- [`src/services/apiClient.js`](./src/services/apiClient.js)
- [`src/hooks/useAsyncData.js`](./src/hooks/useAsyncData.js)
- [`src/config/env.js`](./src/config/env.js)

## Variáveis de ambiente

O projeto já possui base para URL da API em:

- [`src/config/env.js`](./src/config/env.js)

Por padrão:

```js
EXPO_PUBLIC_API_URL || 'http://localhost:3000'
```

Quando a integração real acontecer, o ideal é configurar `EXPO_PUBLIC_API_URL` no ambiente.

## Fluxos principais já implementados

- onboarding
- autenticação
- home/dashboard
- perfil
- metas
- ranking
- detalhes de água e energia
- configurações
- FAQ
- termos de uso
- política de privacidade

## Observações

- O projeto ainda não está conectado a uma API real
- Parte dos formulários já está preparada para submit assíncrono
- Há estados básicos de `loading` e `error` em telas principais

## Próximos passos sugeridos pela IA

- substituir os serviços mockados por chamadas reais ao backend
- alinhar contratos de payload com a API
- adicionar persistência real de sessão/token
- incluir validações mais completas de formulário
- adicionar testes
