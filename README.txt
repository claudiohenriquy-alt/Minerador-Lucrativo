
# GUIA DE INSTALAÇÃO - MINERADOR DE PRODUTOS LUCRATIVOS

Este projeto está pronto para ser implantado na Vercel com funcionalidades de backend (Serverless Functions) para processar pagamentos via Stripe.

## 1. Configuração do Stripe

1. Crie uma conta em https://stripe.com.
2. No Dashboard, vá em "Produtos" e crie dois produtos:
   - Nome: "Plano Pro" | Preço: R$29.00 (Recorrente/Mensal) -> Copie o "API ID" do preço (ex: price_12345).
   - Nome: "Plano Expert" | Preço: R$97.00 (Recorrente/Mensal) -> Copie o "API ID" do preço.
3. Vá em "Developers" > "API Keys" e copie a "Secret Key" (sk_test_...).
4. Vá em "Developers" > "Webhooks" e adicione um endpoint.
   - URL: https://SEU-APP.vercel.app/api/stripe-webhook (Você precisará fazer o deploy primeiro para ter a URL final, ou usar uma localmente).
   - Eventos para ouvir: `checkout.session.completed`, `invoice.payment_succeeded`, `customer.subscription.deleted`.
   - Copie o "Signing Secret" (whsec_...).

## 2. Instalação Local

1. Execute `npm install` para instalar as dependências (React e Stripe).
2. Execute `npm start` ou o comando de dev do seu ambiente.
3. *Nota*: As funções de backend (`api/`) precisam de um ambiente serverless (Vercel CLI) para rodar localmente (`vercel dev`).

## 3. Deploy na Vercel

1. Instale a Vercel CLI ou conecte seu repositório Git no dashboard da Vercel.
2. Nas configurações do projeto na Vercel, vá em "Environment Variables" e adicione:

   - `STRIPE_SECRET_KEY`: (Sua chave secreta sk_test_...)
   - `STRIPE_WEBHOOK_SECRET`: (Seu segredo do webhook whsec_...)
   - `PRICE_PRO_ID`: (ID do preço Pro price_...)
   - `PRICE_EXPERT_ID`: (ID do preço Expert price_...)
   - `SITE_URL`: (A URL final do seu site, ex: https://minerador-lucrativo.vercel.app)

3. Faça o deploy.

## 4. Testando (Modo Demo)

Para facilitar testes de UI sem configurar o Stripe imediatamente, incluímos um botão "Ativar Modo Demo" no rodapé da seção de preços. Ele simula uma assinatura PRO ativa salvando o estado no navegador.
