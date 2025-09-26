# Métricas e Códigos - Landing Page

Landing Page para minha empresa usando o projeto de: https://github.com/Adrinlol

## Deploy para GitHub Pages

### Configuração Automática (Recomendado)

O projeto está configurado para deploy automático via GitHub Actions. A cada push na branch `master`, o site será automaticamente construído e publicado no GitHub Pages.

**URL da Landing Page:** https://GuilhermeTiede.github.io/metricas-e-codigos

### Deploy Manual

Caso prefira fazer o deploy manualmente:

1. Instale as dependências:

```bash
npm install
```

2. Construa o projeto:

```bash
npm run build
```

3. Faça o deploy:

```bash
npm run deploy
```

### Comandos Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria uma build de produção
- `npm run deploy` - Faz o deploy para GitHub Pages
- `npm test` - Executa os testes

### Configuração do GitHub Pages

Para que o deploy funcione corretamente:

1. Vá até as configurações do repositório no GitHub
2. Na seção "Pages", selecione "Deploy from a branch"
3. Escolha a branch `gh-pages` como fonte
4. Aguarde alguns minutos para o primeiro deploy

### Estrutura do Projeto

Este é um projeto React com TypeScript que inclui:

- Roteamento com React Router
- Componentes estilizados com Styled Components
- Suporte a internacionalização (i18n)
- Design responsivo
- Formulários de contato

### Tecnologias Utilizadas

- React 18
- TypeScript
- Styled Components
- React Router Dom
- Ant Design
- i18next para internacionalização
