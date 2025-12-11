# 🚀 Guia Completo - Publicar Souto Táxi no GitHub Pages

## 📋 Pré-requisitos

Certifique-se de ter instalado:
- ✅ Git ([Download](https://git-scm.com/downloads))
- ✅ Node.js (já instalado)
- ✅ Conta no GitHub ([Criar conta](https://github.com/signup))

---

## 🎯 Passo 1: Criar Repositório no GitHub

1. **Acesse:** https://github.com/new
2. **Configure o repositório:**
   - Nome: `souto-taxi` (ou `soutotaxi`)
   - Descrição: `Site oficial do Souto Táxi - Transporte Executivo em Juazeiro do Norte`
   - Visibilidade: **Público** (obrigatório para GitHub Pages gratuito)
   - ❌ **NÃO** marque "Add a README file"
   - ❌ **NÃO** adicione .gitignore ou license ainda
3. **Clique em:** "Create repository"

---

## 💻 Passo 2: Configurar Git Local (PowerShell)

Abra o PowerShell **na pasta do projeto** e execute:

```powershell
# 1. Inicializar repositório Git
git init

# 2. Configurar seu nome e email (se ainda não configurou)
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"

# 3. Adicionar todos os arquivos
git add .

# 4. Fazer o primeiro commit
git commit -m "Initial commit - Souto Táxi website"

# 5. Renomear branch para main
git branch -M main

# 6. Conectar ao repositório GitHub
# SUBSTITUA "SEU_USUARIO" pelo seu nome de usuário do GitHub
git remote add origin https://github.com/SEU_USUARIO/souto-taxi.git

# 7. Enviar para o GitHub
git push -u origin main
```

**⚠️ IMPORTANTE:** Se pedir login:
- Use seu **nome de usuário** do GitHub
- Use um **Personal Access Token** como senha (não a senha da conta)

### Como criar Personal Access Token:
1. Acesse: https://github.com/settings/tokens
2. Clique em "Generate new token" → "Generate new token (classic)"
3. Nome: `Souto Taxi Deploy`
4. Marque: `repo` (Full control of private repositories)
5. Clique em "Generate token"
6. **COPIE o token** (ele não aparecerá novamente!)
7. Use este token como senha no git push

---

## ⚙️ Passo 3: Ativar GitHub Pages

1. **Vá para seu repositório:** `https://github.com/SEU_USUARIO/souto-taxi`
2. **Clique em:** `Settings` (Configurações)
3. **No menu lateral esquerdo:** clique em `Pages`
4. **Em "Build and deployment":**
   - Source: **GitHub Actions**
5. **Pronto!** A configuração está feita.

---

## 🚀 Passo 4: Deploy Automático

O deploy acontecerá **automaticamente** quando você fizer push para o repositório.

### Verificar o Deploy:

1. Vá para: `https://github.com/SEU_USUARIO/souto-taxi/actions`
2. Você verá um workflow "Deploy Souto Táxi to GitHub Pages" rodando
3. Aguarde até aparecer ✅ (leva 2-3 minutos)
4. Seu site estará em: `https://SEU_USUARIO.github.io/souto-taxi/`

---

## 🌐 Passo 5: Configurar Domínio Personalizado (Opcional)

### Se você comprou o domínio `soutotaxi.com.br`:

1. **No seu provedor de domínio (ex: Registro.br, GoDaddy):**
   - Adicione os seguintes registros DNS:

   ```
   Tipo: A
   Host: @
   Valor: 185.199.108.153
   
   Tipo: A
   Host: @
   Valor: 185.199.109.153
   
   Tipo: A
   Host: @
   Valor: 185.199.110.153
   
   Tipo: A
   Host: @
   Valor: 185.199.111.153
   
   Tipo: CNAME
   Host: www
   Valor: SEU_USUARIO.github.io
   ```

2. **No GitHub Pages (Settings → Pages):**
   - Em "Custom domain" digite: `soutotaxi.com.br`
   - Clique em "Save"
   - Marque: ✅ "Enforce HTTPS" (aguarde alguns minutos)

3. **Aguarde propagação DNS:** 10 minutos a 48 horas

---

## 📝 Comandos Úteis para Atualizações Futuras

Sempre que fizer alterações no código:

```powershell
# 1. Ver arquivos modificados
git status

# 2. Adicionar alterações
git add .

# 3. Fazer commit com mensagem descritiva
git commit -m "Atualização: descrição do que foi alterado"

# 4. Enviar para GitHub (deploy automático)
git push
```

**Exemplos de mensagens de commit:**
```powershell
git commit -m "Atualiza número de telefone"
git commit -m "Adiciona nova foto do veículo"
git commit -m "Corrige texto da seção motorista"
git commit -m "Melhora SEO da página inicial"
```

---

## 🔧 Estrutura de Arquivos Importantes

```
souto-táxi---premium/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← Automação do deploy
├── public/
│   ├── robots.txt              ← SEO
│   └── sitemap.xml             ← SEO
├── App.tsx                     ← Código principal
├── index.html                  ← HTML base
├── index.tsx                   ← Entry point
├── vite.config.ts              ← Configuração Vite
├── package.json                ← Dependências
├── Favicon.png                 ← Ícone do site
├── Thumbnail.png               ← Imagem redes sociais
├── Foto 1.webp                 ← Imagem veículo
├── Foto 2.webp                 ← Imagem motorista
└── *.webp                      ← Imagens cidades
```

---

## ✅ Checklist Final

Antes de fazer o primeiro push, verifique:

- [ ] Git está instalado (`git --version`)
- [ ] Conta GitHub criada
- [ ] Personal Access Token criado
- [ ] Todas as imagens estão na pasta
- [ ] Arquivo `.github/workflows/deploy.yml` existe
- [ ] `vite.config.ts` tem `base: '/'`

---

## 🐛 Solução de Problemas

### Erro: "Permission denied"
```powershell
git remote set-url origin https://SEU_TOKEN@github.com/SEU_USUARIO/souto-taxi.git
```

### Erro: "Build failed"
1. Vá em: `https://github.com/SEU_USUARIO/souto-taxi/actions`
2. Clique no workflow com erro
3. Veja os logs para identificar o problema

### Site não aparece
1. Verifique se o workflow rodou com sucesso
2. Aguarde 5-10 minutos após o deploy
3. Limpe o cache do navegador (Ctrl + Shift + Delete)
4. Verifique a URL: `https://SEU_USUARIO.github.io/souto-taxi/`

### Imagens não aparecem
- Certifique-se que todas as imagens estão commitadas:
```powershell
git add *.webp *.png *.svg
git commit -m "Adiciona imagens"
git push
```

---

## 🎨 Customizações Futuras

Para editar o site:

1. **Textos:** Edite `App.tsx`
2. **Imagens:** Substitua os arquivos `.webp`, `.png`, `.svg`
3. **SEO:** Edite `index.html` (meta tags) e `public/sitemap.xml`
4. **Cores:** Modifique a paleta `souto` em `index.html` (tailwind.config)

Após qualquer alteração:
```powershell
git add .
git commit -m "Descrição da alteração"
git push
```

---

## 📊 Monitoramento

### Google Search Console
1. Acesse: https://search.google.com/search-console
2. Adicione sua propriedade: `https://soutotaxi.com.br`
3. Verifique a propriedade (método HTML tag)
4. Envie o sitemap: `https://soutotaxi.com.br/sitemap.xml`

### Google Analytics (Opcional)
1. Crie conta em: https://analytics.google.com
2. Adicione o código no `index.html` antes de `</head>`

---

## 📞 URLs Finais

- **Site no GitHub Pages:** `https://SEU_USUARIO.github.io/souto-taxi/`
- **Domínio personalizado:** `https://soutotaxi.com.br` (após configurar DNS)
- **Repositório:** `https://github.com/SEU_USUARIO/souto-taxi`
- **Actions (deploy):** `https://github.com/SEU_USUARIO/souto-taxi/actions`

---

## 🎯 Resumo Rápido (Passo a Passo)

```powershell
# 1. Criar repo no GitHub (público)
# 2. No PowerShell, na pasta do projeto:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/souto-taxi.git
git push -u origin main

# 3. No GitHub: Settings → Pages → Source: GitHub Actions
# 4. Aguarde 2-3 minutos
# 5. Acesse: https://SEU_USUARIO.github.io/souto-taxi/
```

---

**🎉 Pronto! Seu site está no ar!**

Qualquer dúvida, verifique os logs em: `https://github.com/SEU_USUARIO/souto-taxi/actions`
