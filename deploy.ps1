# Script de Deploy para GitHub Pages - Souto Taxi
# Execute este arquivo no PowerShell para fazer deploy rapido

Write-Host "SOUTO TAXI - Deploy para GitHub" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green
Write-Host ""

# Verificar se Git esta instalado
try {
    $gitVersion = git --version
    Write-Host "[OK] Git instalado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "[ERRO] Git nao encontrado. Instale em: https://git-scm.com/downloads" -ForegroundColor Red
    exit
}

# Verificar se ja e um repositorio Git
if (Test-Path .git) {
    Write-Host "[OK] Repositorio Git ja inicializado" -ForegroundColor Green
} else {
    Write-Host "Inicializando repositorio Git..." -ForegroundColor Yellow
    git init
    Write-Host "[OK] Repositorio inicializado" -ForegroundColor Green
}

# Verificar se ha remote configurado
$remote = git remote -v 2>$null
if ($remote) {
    Write-Host "[OK] Remote ja configurado" -ForegroundColor Green
    Write-Host $remote
} else {
    Write-Host ""
    Write-Host "Configurar repositorio remoto?" -ForegroundColor Yellow
    Write-Host "Digite seu nome de usuario do GitHub:" -ForegroundColor Cyan
    $username = Read-Host
    
    Write-Host "Digite o nome do repositorio (ex: souto-taxi):" -ForegroundColor Cyan
    $reponame = Read-Host
    
    $repoUrl = "https://github.com/$username/$reponame.git"
    Write-Host "Adicionando remote: $repoUrl" -ForegroundColor Yellow
    git remote add origin $repoUrl
    Write-Host "[OK] Remote configurado" -ForegroundColor Green
}

# Verificar arquivos modificados
Write-Host ""
Write-Host "Status do repositorio:" -ForegroundColor Yellow
git status --short

# Perguntar se quer fazer commit
Write-Host ""
Write-Host "Deseja fazer commit das alteracoes? (S/N)" -ForegroundColor Yellow
$commit = Read-Host

if ($commit -eq "S" -or $commit -eq "s") {
    # Adicionar todos os arquivos
    Write-Host "Adicionando arquivos..." -ForegroundColor Yellow
    git add .
    
    # Solicitar mensagem de commit
    Write-Host "Digite a mensagem do commit:" -ForegroundColor Cyan
    $message = Read-Host
    
    if ([string]::IsNullOrWhiteSpace($message)) {
        $message = "Atualizacao do site - $(Get-Date -Format 'dd/MM/yyyy HH:mm')"
    }
    
    Write-Host "Fazendo commit..." -ForegroundColor Yellow
    git commit -m $message
    Write-Host "[OK] Commit realizado" -ForegroundColor Green
    
    # Fazer push
    Write-Host ""
    Write-Host "Deseja enviar para o GitHub (push)? (S/N)" -ForegroundColor Yellow
    $push = Read-Host
    
    if ($push -eq "S" -or $push -eq "s") {
        Write-Host "Enviando para GitHub..." -ForegroundColor Yellow
        
        # Verificar se e o primeiro push
        $branches = git branch -r 2>$null
        if ([string]::IsNullOrWhiteSpace($branches)) {
            Write-Host "Primeiro push - configurando branch main..." -ForegroundColor Yellow
            git branch -M main
            git push -u origin main
        } else {
            git push
        }
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host ""
            Write-Host "[OK] Deploy enviado com sucesso!" -ForegroundColor Green
            Write-Host ""
            Write-Host "Seu site estara disponivel em alguns minutos em:" -ForegroundColor Cyan
            
            $remote = git remote get-url origin
            if ($remote -match "github.com[:/](.+)/(.+)\.git") {
                $username = $matches[1]
                $reponame = $matches[2]
                Write-Host "   https://$username.github.io/$reponame/" -ForegroundColor Green
            }
            
            Write-Host ""
            Write-Host "Acompanhe o deploy em:" -ForegroundColor Cyan
            Write-Host "   https://github.com/$username/$reponame/actions" -ForegroundColor Green
        } else {
            Write-Host ""
            Write-Host "[ERRO] Erro ao fazer push" -ForegroundColor Red
            Write-Host "Possiveis solucoes:" -ForegroundColor Yellow
            Write-Host "1. Configure suas credenciais do GitHub" -ForegroundColor White
            Write-Host "2. Use um Personal Access Token como senha" -ForegroundColor White
            Write-Host "3. Veja o guia completo em: DEPLOY-GITHUB-PAGES.md" -ForegroundColor White
        }
    }
} else {
    Write-Host "[CANCELADO] Deploy cancelado" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Script finalizado!" -ForegroundColor Green
Write-Host "Para mais informacoes, consulte: DEPLOY-GITHUB-PAGES.md" -ForegroundColor Cyan
Write-Host ""
