# Relatório de Auditoria SEO/GEO — Odonto Novo Leblon

**Data da auditoria:** 29 de abril de 2026  
**Auditor:** Skill SEO Specialist AG5  
**URL:** https://www.odontonovoleblon.ag5agencia.site/

---

## Resumo Executivo

A landing page da Odonto Novo Leblon apresenta uma base SEO/GEO sólida, com Schema.org completo, Open Graph, Twitter Cards, geo tags e estrutura semântica bem implementada. As melhorias aplicadas nesta auditoria focam em atualização de datas, CLS (Cumulative Layout Shift), font-display e inclusão das novas páginas legais no sitemap.

---

## ✅ Checklist Técnico — Status Final

### Meta Tags Básicas
| Item | Status | Detalhes |
|------|--------|----------|
| `lang="pt-BR"` | ✅ OK | Presente na tag `<html>` |
| `charset="UTF-8"` | ✅ OK | Presente no `<head>` |
| Viewport | ✅ OK | `width=device-width, initial-scale=1.0` |
| Title | ✅ OK | "Implante Dentário Barra da Tijuca \| Odonto Novo Leblon" (56 chars) |
| Meta Description | ✅ OK | 160 chars, actionable, com CTA |
| Canonical | ✅ OK | Aponta para a raiz do site |
| Robots | ✅ OK | `index, follow, max-image-preview:large` |
| Theme-color | ✅ OK | `#1A3A4A` |
| Author | ✅ OK | "Odonto Novo Leblon" |
| Last-modified | ✅ **Atualizado** | `2026-04-29` |

### Open Graph / Twitter Cards
| Item | Status | Detalhes |
|------|--------|----------|
| `og:locale` | ✅ OK | `pt_BR` |
| `og:type` | ✅ OK | `business.business` |
| `og:title` | ✅ OK | Otimizado com keyword + localização |
| `og:description` | ✅ OK | 155 chars |
| `og:url` | ✅ OK | URL canônica |
| `og:site_name` | ✅ OK | "Odonto Novo Leblon" |
| `og:image` | ✅ OK | 1200x630, com alt text |
| `twitter:card` | ✅ OK | `summary_large_image` |
| Business contact data | ✅ OK | Endereço, cidade, estado, país |

### Local SEO (GEO)
| Item | Status | Detalhes |
|------|--------|----------|
| `geo.region` | ✅ OK | `BR-RJ` |
| `geo.placename` | ✅ OK | `Rio de Janeiro` |
| `geo.position` | ✅ OK | `-22.999;-43.365` |
| `ICBM` | ✅ OK | `-22.999, -43.365` |
| NAP no HTML | ✅ OK | Nome, endereço, telefone visíveis em texto |
| Schema.org LocalBusiness | ✅ OK | Tipo `Dentist` com geo coordinates |

### Schema.org JSON-LD
| Item | Status | Detalhes |
|------|--------|----------|
| Organization/LocalBusiness | ✅ OK | Tipo `Dentist` completo |
| WebSite | ✅ OK | Com `@id` e publisher |
| WebPage | ✅ OK | Com `datePublished` e `dateModified` |
| FAQPage | ✅ OK | 5 perguntas com schema `Question`/`Answer` |
| AggregateRating | ✅ OK | 5 estrelas, 46 reviews |
| OfferCatalog | ✅ OK | 7 serviços odontológicos |
| **dateModified** | ✅ **Atualizado** | `2026-04-29` |

### Performance (Core Web Vitals)
| Item | Status | Detalhes |
|------|--------|----------|
| Hero image `fetchpriority="high"` | ✅ OK | Logo com eager + fetchpriority |
| Imagens com `loading="lazy"` | ✅ OK | Todas abaixo da dobra |
| Imagens com `width`/`height` | ✅ **Melhorado** | Adicionado `aspect-ratio` inline para imagens sem dimensões explícitas no CSS |
| Formato .webp | ✅ OK | Todas as imagens locais em .webp |
| `preconnect` Google Fonts | ✅ OK | `fonts.googleapis.com` e `fonts.gstatic.com` |
| **font-display: swap** | ✅ **Adicionado** | Previne FOUT/FOIT no body |
| Scripts `defer` | ✅ OK | `cookie-banner.js` com defer |
| Script principal | ⚠️ Atenção | `script.js` no final do body (aceitável) |

### Imagens — Auditoria Detalhada
| Imagem | Alt | Width | Height | Lazy | Fetchpriority | Status |
|--------|-----|-------|--------|------|---------------|--------|
| Logo header | ✅ Descritivo | ✅ 180 | ✅ 45 | eager | high | ✅ OK |
| Hero video poster (BA) | ✅ Descritivo | ✅ 600 | ✅ 400 | lazy | — | ✅ OK |
| Dr. Vitor Fernandes | ✅ Descritivo | ✅ 600 | ✅ 800 | lazy | — | ✅ OK |
| Em atendimento | ✅ Descritivo | ✅ 600 | ✅ 800 | lazy | — | ✅ OK |
| Recepção CTA | ✅ Descritivo | ✅ 800 | ✅ 1200 | lazy | — | ✅ OK |
| Logo footer | ✅ Descritivo | ✅ 180 | ✅ 40 | — | — | ✅ OK |
| Logo drawer | ✅ Descritivo | ✅ 150 | ✅ 34 | — | — | ✅ OK |

### Headings (H1-H6)
| Item | Status | Detalhes |
|------|--------|----------|
| Apenas 1 H1 | ✅ OK | "Restaurando sorrisos com excelência" |
| Hierarquia H2 | ✅ OK | Seções principais (Transformação, Depoimentos, Especialidades, etc.) |
| Hierarquia H3 | ✅ OK | Cards de serviço, diferenciais, categorias de cookies |
| Sem saltos | ✅ OK | H1 → H2 → H3 sem quebras |

### Acessibilidade
| Item | Status | Detalhes |
|------|--------|----------|
| `<main>` | ✅ OK | Presente |
| `<nav>` | ✅ OK | Com `aria-label` |
| `<footer>` | ✅ OK | Presente |
| `<section>` | ✅ OK | Com IDs e `aria-label` onde aplicável |
| `<article>` | ✅ OK | Cards de especialidades |
| `aria-label` em ícones | ✅ OK | WhatsApp, Instagram, toggle nav, cookie modal |
| Cookie banner ARIA | ✅ OK | `role="dialog"`, `aria-modal`, `aria-live` |

### Conteúdo GEO (AI Search)
| Item | Status | Detalhes |
|------|--------|----------|
| Seção FAQ | ✅ OK | 5 perguntas com respostas diretas e schema |
| Credenciais | ✅ OK | "Especialista em Implantodontia", "10+ Anos de Experiência" |
| Estatísticas | ✅ OK | "+500 Implantes", "98% Taxa de Sucesso", "4.9 Avaliação" |
| Depoimentos em vídeo | ✅ OK | 2 vídeos com citações reais |
| "Last updated" | ✅ **Atualizado** | `2026-04-29` |
| Política de Privacidade | ✅ OK | Página dedicada com LGPD |
| Termos e Condições | ✅ OK | Página dedicada |

---

## 🔧 Melhorias Aplicadas

### 1. Atualização de Datas
- **Arquivos modificados:** `index.html`, `sitemap.xml`, `robots.txt`
- **Data anterior:** `2026-04-09`
- **Nova data:** `2026-04-29`
- **Impacto:** Sinais de frescor de conteúdo para Google e IA

### 2. Sitemap.xml Expandido
- **Adicionadas:** `termos-e-condicoes.html` e `politica-de-privacidade.html`
- **Prioridade:** 0.3 (páginas legais)
- **Changefreq:** yearly
- **Impacto:** Indexação completa de todas as páginas do site

### 3. Font-Display: Swap
- **Arquivo:** `style.css`
- **Adicionado:** `font-display: swap` no `body`
- **Impacto:** Previne FOUT/FOIT, melhora LCP e CLS

### 4. Aspect Ratio em Imagens
- **Arquivo:** `index.html`
- **Adicionado:** `style="aspect-ratio: ..."` em imagens críticas
- **Impacto:** Reduz CLS (Cumulative Layout Shift)

---

## ⚠️ Recomendações Futuras (On-Page)

| Prioridade | Item | Ação Sugerida |
|------------|------|---------------|
| Média | **BreadcrumbList Schema** | Adicionar JSON-LD de navegação estruturada |
| Média | **Review Schema individual** | Expandir depoimentos com schema `Review` para cada paciente |
| Média | **HowTo Schema** | Criar guia "Como funciona o implante dentário" com passos |
| Baixa | **Article/Blog** | Adicionar seção de blog para conteúdo fresco e backlinks internos |
| Baixa | **Image sitemap separado** | Criar `sitemap-images.xml` dedicado |

---

## ❌ Tarefas Externas/Off-Page (Não aplicáveis via código)

> **IMPORTANTE:** As tarefas abaixo precisam ser executadas manualmente pelo responsável do projeto.

- [ ] **Google Business Profile:** Verificar e completar perfil local, garantir que NAP corresponda ao site
- [ ] **Google Search Console:** Submeter `sitemap.xml` e solicitar indexação das novas páginas
- [ ] **Google Analytics 4 / Tag Manager:** Instalar códigos de rastreamento (G-XXXXXXXXXX)
- [ ] **PageSpeed Insights:** Executar teste ao vivo após deploy para identificar atrasos do servidor
- [ ] **SSL/HTTPS:** Garantir que o servidor force redirecionamento HTTPS
- [ ] **Backlinks locais:** Cadastrar em diretórios odontológicos (Doctoralia, Saúde.gov.br, etc.)
- [ ] **Social Media:** Adicionar link do site na bio do Instagram e outras redes
- [ ] **Reviews Google:** Incentivar pacientes a deixarem avaliações no Google Maps
- [ ] **Schema Test:** Validar JSON-LD em [Google Rich Results Test](https://search.google.com/test/rich-results)

---

## 📊 Score Final

| Categoria | Score |
|-----------|-------|
| Técnico (Meta Tags, Canonical, Robots) | 10/10 |
| Performance (CWV, Imagens, Fonts) | 9/10 |
| Local SEO (NAP, Geo Tags, Schema) | 10/10 |
| Conteúdo (Headings, Alt, Acessibilidade) | 9/10 |
| GEO / AI Search (FAQ, E-E-A-T, Freshness) | 9/10 |
| **Média Geral** | **9.4/10** |

---

> **Lembrete:** O melhor SEO é conteúdo de qualidade que responde perguntas de forma clara e autoritativa. O site da Odonto Novo Leblon já possui uma base excelente com depoimentos em vídeo, estatísticas, FAQ estruturado e credenciais visíveis — elementos cruciais tanto para Google quanto para IA (ChatGPT, Claude, Perplexity).
