# Clínica Ceilândia — site institucional

Site estático multi-página desenvolvido em Astro e preparado para publicação automática no GitHub Pages.

## Desenvolvimento local

```bash
npm ci
npm run dev
```

Validação e build de produção:

```bash
npm run build
npm run preview
```

## Publicação no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todo o conteúdo desta pasta para a branch `main` ou `master`.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment → Source**, selecione **GitHub Actions**.
5. Abra a aba **Actions** e acompanhe o workflow **Deploy para GitHub Pages**.

O endereço e o caminho-base são detectados automaticamente durante o build:

- Repositório comum: `https://usuario.github.io/nome-do-repositorio/`
- Repositório `usuario.github.io`: `https://usuario.github.io/`

Não é necessário editar `astro.config.mjs` nem enviar a pasta `dist` ao GitHub.

## Domínio personalizado

Quando houver um domínio definitivo:

1. Configure-o em **Settings → Pages → Custom domain**.
2. Em **Settings → Secrets and variables → Actions → Variables**, crie `SITE_URL` com o endereço completo, por exemplo `https://seudominio.com.br`.
3. No mesmo local, crie `BASE_PATH` com o valor `/`.

O site funciona normalmente sem domínio personalizado.
