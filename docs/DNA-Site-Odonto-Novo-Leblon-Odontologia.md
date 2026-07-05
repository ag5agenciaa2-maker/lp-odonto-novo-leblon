# SITE DNA — ODONTO NOVO LEBLON

**Nicho:** Implantodontia e estética dentária premium na Barra da Tijuca, Rio de Janeiro. Landing page de alta conversão para clínica odontológica de alto padrão, com forte ênfase em "prótese fixa no mesmo dia" e tecnologia de carga imediata.

**Posicionamento:** O site evoca a sensação de um consultório de alto padrão: azul petróleo profundo como base, dourado envelhecido como acento de luxo, e tipografia serifada que remete a revistas de lifestyle e arquitetura. A experiência é construída para transmitir confiança médica sem perder o calor humano — cada seção alterna entre o editorial clean e o dramatismo de vídeos em retrato (9:16) que imitam o consumo de conteúdo no celular do paciente.

**Stack Técnica:** HTML5 Semântico + CSS3 Vanilla (3338 linhas) + JavaScript Vanilla ES6+ (863 linhas) | Google Fonts: Cormorant Garamond (300,400,500,600, italic), Montserrat (300,400,500,600), Outfit (300,500,700), Playfair Display (700, italic) | Font Awesome 6.5.1 CDN | Schema.org: `@type: Dentist`, `FAQPage`, `WebSite`, `WebPage` | Manifest.json PWA | Sem frameworks CSS/JS externos.

**Data de criação:** 2025-10-01 (Schema.org `datePublished`), Última modificação: 2026-04-29 (`last-modified` meta tag).

---

## 1. IDENTIDADE VISUAL

### 1.1 Tokens de Marca — CSS Custom Properties

O projeto não implementa dark mode global. A inversão filosófica ocorre apenas na seção `.section-dark` (Especialidades), onde o fundo vira `--color-primary` (#1A3A4A) e textos são recoloridos manualmente. Não há `@media (prefers-color-scheme: dark)`.

| Token CSS | Valor Exato | Uso Específico |
|-----------|-------------|----------------|
| `--color-primary` | `#1A3A4A` | Títulos principais, fundo da seção dark, navbar scrolled, ícones de diferenciais, rodapé |
| `--color-primary-dark` | `#0F232E` | Fundos de frames de vídeo, overlay de hero mobile, footer background |
| `--color-primary-light` | `#2C4E5E` | Placeholders de imagem, gradientes sutis |
| `--color-accent` | `#C9A962` | Dourado principal: eyebrows, highlights, botões primários, bordas de cards, ícones, estrelas, números estatísticos |
| `--color-accent-light` | `#D4BC7A` | Hover states, gradientes de cards featured, subtítulos em seção dark |
| `--color-accent-dark` | `#A88B42` | Hover de botões primários, gradientes do botão card |
| `--color-white` | `#FFFFFF` | Fundo base, textos em seções escuras, badge do hero |
| `--color-cream` | `#FAF8F5` | Fundo do hero (gradiente), fundo da seção FAQ, fundo da seção Reputação 360 |
| `--color-gray-100` | `#F5F3F0` | Fundo de ícones de contato, hover de FAQ |
| `--color-gray-200` | `#E8E5E0` | Bordas de cards, bordas de FAQ, tags bloqueadas, divisor de estatísticas |
| `--color-gray-300` | `#D4CFC7` | Divisores verticais/horizontais, números de depoimento inativos |
| `--color-gray-400` | `#A8A29E` | Textos de lista em cards dark, dots bloqueados |
| `--color-gray-500` | `#78716C` | Labels de estatísticas, subtítulos de seção, legendas |
| `--color-gray-600` | `#57534E` | Parágrafos de descrição em light mode |
| `--color-gray-700` | `#44403C` | Texto base do body |
| `--color-gray-800` | `#292524` | — (definido mas não utilizado explicitamente no CSS lido) |
| `--color-gray-900` | `#1C1917` | — (definido mas não utilizado explicitamente) |
| `--font-serif` | `'Cormorant Garamond', Georgia, 'Times New Roman', serif` | Títulos de seção, título do hero, quotes, números de cards |
| `--font-sans` | `'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | Corpo de texto, eyebrows, botões, navegação, labels |
| `--text-xs` | `0.75rem` | Legendas, labels de estatísticas, tags de vídeo |
| `--text-sm` | `0.875rem` | Eyebrows, links do footer, texto de navegação |
| `--text-base` | `1rem` | Parágrafos padrão, descrições de cards |
| `--text-lg` | `1.125rem` | Descrições de seção, parágrafos de sobre/transformação |
| `--text-xl` | `1.25rem` | Títulos de diferenciais, quotes de depoimento |
| `--text-2xl` | `1.5rem` | Títulos de cards de especialidade |
| `--text-3xl` | `1.875rem` | Números de estatísticas (stat-number, vstat-number) |
| `--text-4xl` | `2.25rem` | Títulos de seção padrão (section-title) |
| `--text-5xl` | `3rem` | Título do CTA |
| `--text-6xl` | `3.75rem` | — |
| `--text-7xl` | `4.5rem` | Título do hero (desktop) |
| `--space-1` | `0.25rem` | — |
| `--space-2` | `0.5rem` | — |
| `--space-3` | `0.75rem` | — |
| `--space-4` | `1rem` | Padding base de botões, padding de form inputs |
| `--space-5` | `1.25rem` | — |
| `--space-6` | `1.5rem` | Container padding, padding de cards, gap de grids |
| `--space-8` | `2rem` | Gaps de hero actions, padding de drawer |
| `--space-10` | `2.5rem` | Margin-top de transformation-actions |
| `--space-12` | `3rem` | Padding de seções mobile, gaps de footer grid |
| `--space-16` | `4rem` | Padding do hero, padding do footer-top |
| `--space-20` | `5rem` | Gap da grid de faceta |
| `--space-24` | `6rem` | Padding vertical padrão de `.section` |
| `--space-32` | `8rem` | Padding vertical da seção transformation |
| `--radius-sm` | `2px` | Bordas de botões, inputs, cards, ícones |
| `--radius-md` | `4px` | Bordas de FAQ items |
| `--radius-lg` | `8px` | Bordas de containers de vídeo, mapa, imagens diferenciais |
| `--shadow-sm` | `0 1px 2px rgba(0, 0, 0, 0.05)` | Navbar scrolled |
| `--shadow-md` | `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)` | Hover de FAQ, cards leves |
| `--shadow-lg` | `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)` | Hover de botões primários, mapa |
| `--shadow-xl` | `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)` | Badge do hero, visual-stats, cards de vídeo |
| `--transition-fast` | `150ms ease` | Focus states, hover rápidos |
| `--transition-base` | `300ms ease` | Transições padrão de hover, scroll, menu |
| `--transition-slow` | `500ms ease` | Transições de imagem, blur, reveals |
| `--z-nav` | `1000` | Navbar fixa |
| `--z-modal` | `1100` | Modais (não utilizado com este token no CSS principal; o modal de vídeo usa z-index 10000/10001) |
| `--z-float` | `900` | — |

**Tokens do Cookie Banner (`:root` separado em `cookie-banner.css`):**

| Token | Valor | Uso |
|-------|-------|-----|
| `--ck-bg` | `#1a1a1a` | Fundo do banner e header do modal |
| `--ck-accent` | `#C9A962` | Dourado do banner (sincronizado com o site) |
| `--ck-accent-dark` | `#A88B42` | Hover do banner |
| `--ck-accent-rgb` | `201, 169, 98` | RGB para bordas e badges do modal |
| `--ck-text-primary` | `rgba(255,255,255,0.95)` | Título do banner |
| `--ck-text-muted` | `rgba(255,255,255,0.8)` | Texto do banner |
| `--ck-modal-bg` | `#ffffff` | Fundo do modal de preferências |
| `--ck-modal-footer-bg` | `#f8f9fa` | Rodapé do modal |
| `--ck-modal-border` | `rgba(0,0,0,0.1)` | Divisores do modal |
| `--ck-modal-text` | `#1a1a1a` | Texto do modal |
| `--ck-toggle-off` | `#d0d5db` | Toggle desligado |
| `--ck-toggle-on` | `var(--ck-accent)` | Toggle ligado |
| `--ck-radius` | `12px` | Border radius do modal |
| `--ck-radius-sm` | `5px` | Border radius dos botões |
| `--ck-transition` | `280ms cubic-bezier(0.4, 0, 0.2, 1)` | Transições do banner |
| `--ck-ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Easing de entrada do banner |
| `--ck-z-banner` | `9000` | Banner fixo inferior |
| `--ck-z-overlay` | `9050` | Overlay do modal de cookies |
| `--ck-z-modal` | `9100` | Modal de cookies |

### 1.2 Tipografia — Tabela Completa

| Elemento / Classe CSS | Família | Peso | Tamanho Exato | Line-height | Letter-spacing | Transform | Cor |
|-----------------------|---------|------|---------------|-------------|----------------|-----------|-----|
| `body` | Montserrat | 400 | 1rem (16px) | 1.6 | — | — | `--color-gray-700` |
| `.hero-title` | Cormorant Garamond | 300 | 4.5rem (72px) | 1.1 | — | — | `--color-primary` |
| `.hero-title .title-accent` | Cormorant Garamond | 400 italic | inherit | inherit | — | — | `--color-accent` |
| `.hero-eyebrow` | Montserrat | 500 | 0.875rem | — | 0.2em | uppercase | `--color-accent` |
| `.hero-description` | Montserrat | 400 | 1.125rem | 1.8 | — | — | `--color-gray-600` |
| `.section-title` | Cormorant Garamond | 400 | 2.25rem | 1.2 | — | — | `--color-primary` |
| `.section-dark .section-title` | Cormorant Garamond | 400 | inherit | inherit | — | — | `--color-white` |
| `.title-highlight` | Cormorant Garamond | 400 italic | inherit | inherit | — | — | `--color-accent` |
| `.section-eyebrow` | Montserrat | 500 | 0.875rem | — | 0.2em | uppercase | `--color-accent` |
| `.section-subtitle` | Montserrat | 400 | 1.125rem | 1.7 | — | — | `--color-gray-500` |
| `.section-dark .section-subtitle` | Montserrat | 400 | inherit | inherit | — | — | `--color-accent-light` |
| `.stat-number` | Cormorant Garamond | 500 | 1.875rem | — | — | — | `--color-accent` |
| `.stat-label` | Montserrat | 500 | 0.75rem | — | 0.1em | uppercase | `--color-gray-500` |
| `.btn` | Montserrat | 500 | 0.875rem | — | 0.05em | uppercase | — |
| `.btn-primary` | Montserrat | 500 | 0.875rem | — | 0.05em | uppercase | `#FFFFFF` |
| `.btn-emergency` | Montserrat | 500 | 0.875rem | — | 0.05em | uppercase | `#FFFFFF` |
| `.btn-card` | Montserrat | 600 | 0.75rem | — | 0.08em | uppercase | `--color-accent` |
| `.card-number` | Cormorant Garamond | 300 | 3rem | 1 | — | — | `--color-accent` (opacity: 0.3) |
| `.card-title` | Cormorant Garamond | 500 | 1.5rem | — | — | — | `#FFFFFF` |
| `.card-description` | Montserrat | 400 | 1rem | 1.7 | — | — | `--color-gray-300` |
| `.card-list li` | Montserrat | 400 | 0.875rem | — | — | — | `--color-gray-400` |
| `.ba-tag` | Montserrat | 700 | 10px | — | 0.15em | uppercase | — |
| `.ba-caption` | Montserrat | 400 | 0.75rem | — | 0.1em | uppercase | `--color-gray-500` |
| `.diferencial-text h3` | Cormorant Garamond | 500 | 1.25rem | — | — | — | `--color-primary` |
| `.diferencial-text p` | Montserrat | 400 | 1rem | 1.7 | — | — | `--color-gray-600` |
| `.vstat-number` | Cormorant Garamond | 500 | 1.875rem | — | — | — | `--color-accent` |
| `.vstat-label` | Montserrat | 500 | 0.75rem | — | 0.1em | uppercase | `--color-gray-500` |
| `.faq-item summary` | Montserrat | 600 | 1.125rem | — | — | — | `--color-primary` |
| `.faq-answer p` | Montserrat | 400 | 1rem | 1.7 | — | — | `--color-gray-600` |
| `.cta-title` | Cormorant Garamond | 300 | 3rem | 1.1 | — | — | `#FFFFFF` |
| `.cta-description` | Montserrat | 400 | 1.125rem | 1.8 | — | — | `--color-gray-300` |
| `.contact-label` | Montserrat | 500 | 0.75rem | — | 0.1em | uppercase | `--color-gray-400` |
| `.contact-value` | Montserrat | 500 | 1rem | 1.6 | — | — | `--color-primary` |
| `.footer-title` | Montserrat | 600 | 0.875rem | — | 0.1em | uppercase | `--color-accent` |
| `.footer-description` | Montserrat | 400 | 0.875rem | 1.6 | — | — | `rgba(255,255,255,0.7)` |
| `.footer-links a` | Montserrat | 400 | 0.875rem | — | — | — | `rgba(255,255,255,0.7)` |
| `.footer-copyright` | Montserrat | 400 | 0.75rem | — | — | — | `rgba(255,255,255,0.5)` |
| `.dep-quote` | Cormorant Garamond | 400 italic | 1.125rem | 1.6 | — | — | `--color-primary` |
| `.dep-author-name` | Montserrat | 500 | 0.875rem | — | 0.1em | uppercase | `--color-gray-500` |
| `.dep-num` | Cormorant Garamond | 300 | 2.25rem | 1 | — | — | `--color-gray-300` |
| `.dep-tag-active` | Montserrat | 700 | 10px | — | 0.18em | uppercase | `#FFFFFF` |
| `.dep-tag-locked` | Montserrat | 700 | 10px | — | 0.18em | uppercase | `--color-gray-500` |
| `.dep-reveal-label` | Cormorant Garamond | 400 italic | 1.25rem | 1.4 | — | — | `#FFFFFF` |
| `.dep-reveal-btn` | Montserrat | 600 | 11px | — | 0.15em | uppercase | `--color-primary` |
| `.reputation-title` | Cormorant Garamond | 500 | 1.1rem | — | 0.2em | uppercase | `--color-primary` |
| `.review-text` | Montserrat | 400 | 0.75rem | 1.7 | — | — | `--color-primary` (opacity: 0.6) |
| `.review-user-info h4` | Montserrat | 600 | 0.75rem | — | 0.02em | — | `--color-primary` |
| `.review-avatar` | Montserrat | 500 | 0.7rem | — | — | — | `#FFFFFF` |
| `.wa-name` | Outfit | 700 | 15px | — | — | — | `#1a1a1a` |
| `.wa-message-text p` | Outfit | 400 | 14px | 1.5 | — | — | `#333` |
| `.drawer-link` | Cormorant Garamond | 400 | 1.875rem | — | — | — | `#FFFFFF` (opacity: 0.7) |
| `.ck-banner__title` | system-ui | 600 | 0.85rem | 1.3 | — | — | `--ck-accent` |
| `.ck-banner__text` | system-ui | 400 | 0.85rem | 1.5 | — | — | `--ck-text-muted` |
| `.ck-btn` | system-ui | 500 | 0.75rem | 1 | 0.1px | — | — |
| `.ck-modal__title` | system-ui | 600 | 0.88rem | 1.3 | — | — | `--ck-accent` |

### 1.3 Sistema de Cores Funcionais — rgba() e Opacidades

| Valor rgba() | Uso Específico | Contexto |
|--------------|----------------|----------|
| `rgba(255, 255, 255, 0.95)` | `.nav` background | Navbar desktop com backdrop-blur |
| `rgba(255, 255, 255, 0.85)` | `.nav` mobile background | Navbar mobile com blur mais intenso |
| `rgba(255, 255, 255, 0.3)` | Mobile nav border | Borda sutil do navbar mobile |
| `rgba(0, 0, 0, 0.05)` | `--shadow-sm` | Sombra leve |
| `rgba(0, 0, 0, 0.1)` / `0.06` | `--shadow-md` | Sombra média |
| `rgba(0, 0, 0, 0.1)` / `0.05` | `--shadow-lg` | Sombra grande |
| `rgba(0, 0, 0, 0.1)` / `0.04` | `--shadow-xl` | Sombra extra grande |
| `rgba(15, 35, 46, 0.95)` | Hero video overlay topo | Overlay gradiente do vídeo mobile |
| `rgba(15, 35, 46, 0.6)` | Hero video overlay meio | Overlay gradiente do vídeo mobile |
| `rgba(201, 169, 98, 0.2)` | Border de cards dark | Borda sutil dos cards de especialidade |
| `rgba(255, 255, 255, 0.05)` | Background de cards dark | Fundo dos cards de especialidade |
| `rgba(255, 255, 255, 0.1)` | Hover de cards dark | Hover dos cards de especialidade |
| `rgba(201, 169, 98, 0.1)` | Gradiente do card featured | Início do gradiente do card featured |
| `rgba(26, 58, 74, 0.3)` | Gradiente do card featured | Fim do gradiente do card featured |
| `rgba(255, 255, 255, 0.2)` | Borda de inputs do CTA | Borda dos campos do formulário |
| `rgba(255, 255, 255, 0.05)` | Background de inputs do CTA | Fundo dos campos do formulário |
| `rgba(255, 255, 255, 0.1)` | Focus de inputs do CTA | Fundo dos campos no focus |
| `rgba(255, 255, 255, 0.7)` | Texto do footer | Cor base dos textos do rodapé |
| `rgba(255, 255, 255, 0.5)` | Copyright do footer | Texto de copyright |
| `rgba(255, 255, 255, 0.4)` | Legal links do footer | Links de termos/privacidade |
| `rgba(255, 255, 255, 0.1)` | Border-top do footer-bottom | Divisor do rodapé |
| `rgba(201, 169, 98, 0.2)` | Border-top do footer | Borda dourada sutil do rodapé principal |
| `rgba(201, 169, 98, 0.15)` | Play icon shadow | Sombra do ícone de play nos vídeos |
| `rgba(201, 169, 98, 0.4)` | Sombra do dep-reveal-btn | Hover do botão de revelar vídeo |
| `rgba(201, 169, 98, 0.5)` | Hover do play-icon | Sombra do ícone de play no hover |
| `rgba(0, 0, 0, 0.15)` | Play overlay background | Fundo escuro suave sobre vídeo parado |
| `rgba(26, 58, 74, 0.85)` | Play icon background | Fundo do círculo de play |
| `rgba(26, 58, 74, 0.8)` | btn-amplify background | Fundo do botão de ampliar vídeo |
| `rgba(255, 255, 255, 0.2)` | btn-amplify border | Borda do botão de ampliar |
| `rgba(15, 35, 46, 0.95)` | v-modal-overlay | Overlay do modal de vídeo |
| `rgba(0, 0, 0, 0.55)` | ck-modal__overlay | Overlay do modal de cookies |
| `rgba(255, 255, 255, 0.08)` | ck-modal__close background | Fundo do botão fechar do modal |
| `rgba(255, 255, 255, 0.55)` | ck-modal__close color | Cor do ícone de fechar |
| `rgba(255, 255, 255, 0.12)` | ck-banner border-top | Borda superior do banner |
| `rgba(var(--ck-accent-rgb), 0.12)` | ck-banner border-top alternativo | Borda do banner usando RGB do dourado |
| `rgba(255, 255, 255, 0.38)` | ck-btn--outline color | Cor do botão outline do banner |
| `rgba(255, 255, 255, 0.12)` | ck-btn--outline border | Borda do botão outline |
| `rgba(255, 255, 255, 0.28)` | ck-btn--outline hover border | Hover do botão outline |
| `rgba(255, 255, 255, 0.65)` | ck-btn--outline hover color | Hover do botão outline |
| `rgba(255, 255, 255, 0.3)` | ck-btn--ghost color | Cor do botão ghost |
| `rgba(0, 0, 0, 0.22)` | ck-banner shadow | Sombra do banner |
| `rgba(0, 0, 0, 0.22)` | ck-modal__box shadow | Sombra do modal de cookies |
| `rgba(0, 0, 0, 0.25)` | ck-toast shadow | Sombra do toast |
| `rgba(var(--ck-accent-rgb), 0.1)` | ck-category__badge background | Badge do modal |
| `rgba(var(--ck-accent-rgb), 0.28)` | ck-toast border | Borda do toast |
| `rgba(150, 0, 0, 0.9)` | ba-tag.before background | Tag "Situação Inicial" vermelha |
| `rgba(150, 0, 0, 0.4)` / `0` | pulse-red-border animation | Animação de borda do botão emergência mobile |
| `rgba(255, 77, 77, 0.7)` / `0` | pulse-red animation | Animação do dot vermelho pulsante |
| `rgba(37, 211, 102, 0.25)` | wa-float-btn shadow | Sombra do botão WhatsApp |
| `rgba(37, 211, 102, 0.4)` | wa-float-btn hover shadow | Hover do botão WhatsApp |
| `rgba(37, 211, 102, 0.7)` / `0` | wa-pulse-green animation | Pulso verde do status dot |
| `rgba(255, 255, 255, 0.85)` | wa-bubble background | Fundo glassmorphism do balão |
| `rgba(0, 0, 0, 0.05)` | wa-bubble border | Borda do balão |
| `rgba(0, 0, 0, 0.08)` | wa-bubble shadow | Sombra do balão |
| `rgba(201, 169, 98, 0.06)` | Depoimentos ::before radial | Gradiente sutil de fundo |
| `rgba(26, 58, 74, 0.05)` | Depoimentos ::before radial 2 | Segundo gradiente sutil |
| `rgba(15, 35, 46, 0.55)` / `0.85` / `0.95` | dep-reveal-overlay | Overlay gradiente do vídeo bloqueado |
| `rgba(15, 35, 46, 0.45)` / `0.75` / `0.90` | dep-reveal-overlay:hover | Hover do overlay gradiente |
| `rgba(201, 169, 98, 0.15)` | dep-reveal-icon background | Fundo do ícone de revelar |
| `rgba(201, 169, 98, 0.3)` | dep-reveal-icon::after border | Borda do anel de pulso |
| `rgba(201, 169, 98, 0.25)` | dep-reveal-icon:hover | Hover do ícone de revelar |
| `rgba(201, 169, 98, 0.15)` | review-card border-left | Borda esquerda dos cards de review |
| `rgba(201, 169, 98, .15)` | review-card border-left (notação encurtada) | Idem, como escrito no CSS |
| `rgba(255, 255, 255, 0.1)` | drawer footer border-top | Divisor do drawer mobile |
| `rgba(0, 0, 0, 0.3)` | drawer shadow | Sombra do drawer |
| `rgba(0, 0, 0, 0.12)` | Mobile nav shadow | Sombra da navbar mobile |
| `rgba(0, 0, 0, 0.5)` | v-modal-content shadow | Sombra do container do modal de vídeo |

### 1.4 Estilo Geral

A arquitetura visual segue uma filosofia de **"editorial odontológico"**: larguras máximas rígidas (`1280px` no container, `860px` na grid de depoimentos, `800px` na FAQ), espaçamento vertical generoso (`6rem` por padrão em `.section`, `8rem` em `.transformation`), e uma hierarquia tipográfica que separa radicalmente o funcional (Montserrat, sans-serif) do emocional (Cormorant Garamond, serif). O dourado (`#C9A962`) não é apenas um acento decorativo — ele é o fio condutor de interação: aparece em toda micro-interação (hover de links, bordas de FAQ, números de estatísticas, ícones de diferenciais) e cria uma narrativa cromática de "premium" sem cair no clichê do azul clínico estéril. O dark mode é local e filosófico: a seção de especialidades inverte para fundo petróleo (`#1A3A4A`) com textos em branco e cinza-300, simulando a sensação de entrar em um consultório iluminado por luz amarelada, não uma inversão automática de tema. O layout é essencialmente uma coluna centralizada com grids assimétricas (`1fr 1.2fr`, `1.2fr 1fr`) que quebram a monotonia simétrica de landing pages genéricas.

---

## 2. LAYOUT — SEÇÃO POR SEÇÃO

### SEÇÃO 1 — NAVEGAÇÃO (.nav)

**Estrutura:**
```html
<nav class="nav" id="nav" aria-label="Navegação principal">
  <div class="nav-container">
    <a href="#inicio" class="nav-logo">
      <picture>
        <source media="(max-width: 768px)" srcset="assets/logo-odonto-novo-leblon-mobile.webp" type="image/webp">
        <img src="assets/logo-odonto-novo-leblon-desktop.webp" alt="..." class="logo-image" loading="eager" fetchpriority="high" width="180" height="40">
      </picture>
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="navMenu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-menu" id="navMenu">
      <li><a href="#inicio" class="nav-link">Início</a></li>
      ...
      <li><a href="..." class="nav-cta" target="_blank">Agendar Consulta</a></li>
    </ul>
  </div>
</nav>
```

**Fundo:**
- Layer 0 — base: `rgba(255, 255, 255, 0.95)` com `backdrop-filter: blur(10px)`
- Layer 1 — sombra: `var(--shadow-sm)` (0 1px 2px rgba(0,0,0,0.05))
- Variação mobile: `rgba(255, 255, 255, 0.85)`, `backdrop-filter: blur(15px)`, `border-radius: 50px`, `border: 1px solid rgba(255,255,255,0.3)`, `box-shadow: 0 10px 30px rgba(0,0,0,0.12)`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Navbar | `.nav` | `fixed`, `top: 0`, `left: 0`, `right: 0`, `z-index: 1000` | `padding: 1rem 0` (desktop) | `background: rgba(255,255,255,0.95)`, `backdrop-filter: blur(10px)` |
| Logo | `.logo-image` | Dentro de `.nav-logo` | `height: 45px` (desktop), `38px` (mobile) | `object-fit: contain`, `transition: all 300ms ease` |
| Logo scrolled | `.nav.scrolled .logo-image` | — | `height: 38px` | — |
| Link | `.nav-link` | — | `padding: 0.5rem 0` | `font-size: 0.875rem`, `font-weight: 500`, `color: var(--color-gray-700)` |
| Link ::after | `.nav-link::after` | `absolute`, `bottom: 0`, `left: 0` | `width: 0`, `height: 1px` | `background: var(--color-accent)`, `transition: width 300ms ease` |
| CTA | `.nav-cta` | — | `padding: 0.75rem 1.25rem` | `background: var(--color-accent)`, `color: #fff`, `border-radius: 2px` |
| Hamburger | `.nav-toggle span` | — | `width: 24px`, `height: 2px` | `background: var(--color-primary)`, `transition: all 300ms ease` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|-----------------|----------------|--------------|---------|--------|---------|-------|
| Nenhuma animação própria | — | — | — | — | — | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.nav-link` | :hover | — | — | — | `color: var(--color-primary)`; `::after{width: 100%}` | `300ms ease` |
| `.nav-cta` | :hover | `translateY(-2px)` | — | — | `background: var(--color-accent-dark)` | `300ms ease` |
| `.nav` | scrolled (JS) | — | `var(--shadow-sm)` | — | `padding: 0.75rem 0` | `transform 0.4s cubic-bezier(0.4,0,0.2,1)` |

**Diferenciador Visual:** O navbar mobile não é uma barra full-width — é uma "pill" flutuante (`border-radius: 50px`, `top: 15px`, `left: 10px`, `right: 10px`) que se contrai ao scroll (`top: 10px`, `padding: 6px 0`), criando a sensação de um elemento de interface nativa de app, não de site. A prova técnica está em `@media (max-width: 768px) { .nav { top: 15px !important; left: 10px !important; right: 10px !important; width: auto !important; border-radius: 50px; ... } }`.

---

### SEÇÃO 2 — HERO (.hero)

**Estrutura:**
```html
<section class="hero" id="inicio">
  <div class="hero-video-bg"> <!-- Mobile only -->
    <video autoplay muted loop playsinline class="hero-bg-video">...</video>
    <div class="hero-video-overlay"></div>
  </div>
  <div class="hero-grid">
    <div class="hero-content">
      <div class="hero-eyebrow">Especialista em Implantodontia</div>
      <h1 class="hero-title">
        <span class="title-line">Restaurando <span class="title-accent">sorrisos</span></span>
        <span class="title-line">com excelência</span>
      </h1>
      <p class="hero-description">...</p>
      <div class="hero-actions">
        <a href="..." class="btn btn-primary" target="_blank"><span>Falar com Especialista</span><svg>...</svg></a>
        <a href="..." class="btn btn-emergency" target="_blank"><span class="pulse-dot"></span><span>Suporte em Emergências</span></a>
      </div>
      <div class="hero-stats">
        <div class="stat-item"><span class="stat-number">+500</span><span class="stat-label">Implantes Realizados</span></div>
        <div class="stat-divider"></div>
        <div class="stat-item"><span class="stat-number">10+</span><span class="stat-label">Anos de Experiência</span></div>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-image-container">
        <div class="hero-image-frame">
          <video autoplay muted loop playsinline class="hero-video">...</video>
          <div class="image-accent-line"></div>
          <div class="image-accent-circle"></div>
        </div>
        <div class="hero-badge">
          <span class="badge-icon"><svg>...</svg></span>
          <span class="badge-text">Implante Imediato</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base (desktop): `linear-gradient(135deg, var(--color-cream) 0%, var(--color-white) 100%)`
- Layer 0 — base (mobile): vídeo de fundo (`hero-video-bg` com `display: none` no desktop, `display: block` no mobile via `@media (max-width: 768px)`)
- Layer 1 — overlay (mobile): `linear-gradient(to bottom, rgba(15,35,46,0.95) 0%, rgba(15,35,46,0.6) 50%, rgba(15,35,46,0.95) 100%)`
- Layer 2 — conteúdo: `position: relative`, `z-index: 2` (mobile grid)

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Seção | `.hero` | `relative`, `overflow: hidden` | `height: 100vh`, `max-height: 100vh`, `padding: 140px 0 4rem` | `display: flex`, `flex-direction: column`, `justify-content: center` |
| Grid | `.hero-grid` | — | `max-width: 1280px`, `padding: 0 1.5rem` | `display: grid`, `grid-template-columns: 1fr 1fr`, `gap: 4rem` |
| Badge flutuante | `.hero-badge` | `absolute`, `bottom: 2rem`, `left: -2rem` | `padding: 1rem 1.5rem` | `background: #fff`, `box-shadow: var(--shadow-xl)`, `animation: float 3s ease-in-out infinite` |
| Linha decorativa | `.image-accent-line` | `absolute`, `top: 20%`, `left: -20px` | `width: 60px`, `height: 2px` | `background: var(--color-accent)`, `z-index: 2` |
| Círculo decorativo | `.image-accent-circle` | `absolute`, `bottom: 15%`, `right: -30px` | `width: 80px`, `height: 80px` | `border: 2px solid var(--color-accent)`, `border-radius: 50%`, `opacity: 0.5` |
| Frame de vídeo | `.hero-image-frame` | `relative` | `aspect-ratio: 4/5` | `overflow: hidden`, `background: var(--color-primary-dark)` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|-----------------|----------------|--------------|---------|--------|---------|-------|
| `fadeInUp` | `opacity: 0`, `transform: translateY(30px)` | `opacity: 1`, `transform: translateY(0)` | `1s` | `ease-out` | Carregamento da página | `0s` (hero-content), `0.3s` (hero-visual via `animation-delay`) |
| `float` | `transform: translateY(0)` | `transform: translateY(-10px)` | `3s` | `ease-in-out` | Loop infinito | — |
| `pulse-red` | `transform: scale(0.95)`, `box-shadow: 0 0 0 0 rgba(255,77,77,0.7)` | `transform: scale(1)`, `box-shadow: 0 0 0 10px rgba(255,77,77,0)` | `2s` | — | Loop infinito | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.btn-primary` | :hover | `translateY(-2px)` | `var(--shadow-lg)` | `border-color: var(--color-accent-dark)` | `background: var(--color-accent-dark)` | `300ms ease` |
| `.btn-emergency` | :hover | `translateY(-2px)` | `0 8px 20px rgba(150,0,0,0.3)` | `border-color: #7a0000` | `background: #7a0000` | `300ms ease` |
| `.btn-emergency` | mobile pulse | — | `0 0 0 0 rgba(150,0,0,0.4)` → `0 0 0 10px rgba(150,0,0,0)` | `#960000` → `#ff4d4d` | — | `2s infinite` |

**Diferenciador Visual:** O hero tem duas personalidades: no desktop é um editorial clean com gradiente cream/branco e um vídeo em retrato (4:5) ao lado; no mobile, o vídeo vira background full-bleed com overlay petróleo dramático, e o botão de emergência ganha animação de borda pulsante vermelha (`pulse-red-border`). A prova técnica está em `@media (max-width: 768px) { .hero { background: none; height: auto; min-height: 100vh; } .hero-video-bg { display: block; } .hero-actions .btn-emergency { order: -1; animation: pulse-red-border 2s infinite; } }`.

---

### SEÇÃO 3 — TRANSFORMAÇÃO (.transformation)

**Estrutura:**
```html
<section class="transformation" id="transformacao">
  <div class="container">
    <div class="transformation-grid">
      <div class="transformation-header">...</div>
      <div class="transformation-visual">
        <div class="ba-card">
          <div class="ba-image-wrapper">
            <img src="assets/tecnologia-odontologia-moderna.webp" class="ba-img" loading="lazy" width="600" height="400" style="aspect-ratio: 600/400;">
            <div class="ba-tag before">Situação Inicial</div>
            <div class="ba-tag after">Resultado Clínico</div>
          </div>
          <div class="ba-caption">Resultado Real de Reabilitação Oral</div>
        </div>
      </div>
      <div class="transformation-content">...</div>
    </div>
  </div>
</section>
```

**Fundo:** Layer 0 — `var(--color-white)` (fundo puro).

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Grid | `.transformation-grid` | — | — | `grid-template-columns: 1fr 1fr`, `grid-template-rows: 1fr auto auto 1fr`, `column-gap: 5rem`, `row-gap: 0.5rem` |
| Header | `.transformation-header` | `grid-column: 2`, `grid-row: 2` | — | — |
| Visual | `.transformation-visual` | `grid-column: 1`, `grid-row: 1 / span 4` | `padding: 0.5rem` | — |
| Content | `.transformation-content` | `grid-column: 2`, `grid-row: 3` | — | — |
| Card BA | `.ba-card` | — | — | `background: var(--color-cream)`, `padding: 0.5rem`, `box-shadow: var(--shadow-xl)`, `border: 1px solid var(--color-gray-200)` |
| Tag Before | `.ba-tag.before` | `absolute`, `top: 20px`, `left: 20px` | — | `background: rgba(150,0,0,0.9)`, `color: white` |
| Tag After | `.ba-tag.after` | `absolute`, `bottom: 20px`, `right: 20px` | — | `background: var(--color-accent)`, `color: var(--color-white)` |

**Animação:** Nenhuma animação própria — herda `.animate-on-scroll` global (fadeInUp).

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.ba-card` | :hover | — | — | — | `.ba-img { transform: scale(1.02) }` | `500ms ease` |

**Diferenciador Visual:** A grid usa `grid-template-rows: 1fr auto auto 1fr` para criar espaçadores invisíveis que alinham o texto verticalmente ao centro da imagem, independentemente da altura do conteúdo. A prova técnica está em `.transformation-grid { grid-template-rows: 1fr auto auto 1fr; }` combinado com `.transformation-header { grid-row: 2; }` e `.transformation-content { grid-row: 3; }`.

---

### SEÇÃO 4 — FACETA ARTIFICIAL (.faceta-artificial)

**Estrutura:**
```html
<section class="faceta-artificial section" id="faceta-artificial">
  <div class="container">
    <div class="faceta-grid">
      <div class="faceta-content">
        <div class="faceta-video-mobile"> <!-- visível apenas no mobile -->
          <div class="faceta-video-wrapper" onclick="togglePlay(this, event)">
            <video preload="metadata" class="faceta-video" id="faceta-video-mobile-src">...</video>
            <div class="play-overlay">...</div>
            <button class="btn-amplify" onclick="openVideoModal(...)">...</button>
            <div id="faceta-cta-mobile" class="faceta-video-cta-overlay" style="display: none;">...</div>
          </div>
        </div>
        <div class="section-eyebrow">Naturalidade Importa</div>
        <h2 class="section-title">O Cuidado Contra o<br><span class="title-highlight">Efeito Artificial</span></h2>
        <div class="faceta-description">...</div>
      </div>
      <div class="faceta-visual">
        <div class="faceta-video-container">
          <div class="faceta-video-wrapper" onclick="togglePlay(this, event)">
            <video preload="metadata" class="faceta-video" id="faceta-video-main">...</video>
            <div class="play-overlay">...</div>
            <button class="btn-amplify" onclick="openVideoModal(...)">...</button>
            <div id="faceta-cta-desktop" class="faceta-video-cta-overlay" style="display: none;">...</div>
            <div class="faceta-accent"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Fundo:** Layer 0 — `var(--color-cream)`.

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Grid | `.faceta-grid` | — | — | `grid-template-columns: 1fr 1fr`, `gap: 5rem`, `align-items: center` |
| Wrapper vídeo | `.faceta-video-wrapper` | `relative` | `max-width: 360px`, `aspect-ratio: 9/16` | `border-radius: 8px`, `box-shadow: var(--shadow-xl)`, `overflow: hidden` |
| CTA overlay | `.faceta-video-cta-overlay` | `absolute`, `bottom: 60px`, `left: 0`, `right: 0` | — | `z-index: 10`, `display: flex`, `justify-content: center`, `pointer-events: none` |
| Botão CTA no overlay | `.faceta-video-cta-overlay .btn` | — | `padding: 1rem 2rem` | `pointer-events: auto`, `box-shadow: 0 10px 30px rgba(0,0,0,0.4)` |
| Círculo decorativo | `.faceta-accent` | `absolute`, `bottom: -20px`, `left: -20px` | `width: 80px`, `height: 80px` | `border: 2px solid var(--color-accent)`, `border-radius: 50%`, `opacity: 0.5`, `z-index: 1` |

**Animação:** Nenhuma animação própria — herda `.animate-on-scroll`. O CTA aparece via JS no evento `timeupdate` quando `currentTime >= 26` com animação `fadeInUp 0.6s ease forwards`.

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.play-icon` | container :hover | `scale(1.1)` | `0 0 40px rgba(201,169,98,0.5)` | — | `background: var(--color-primary)` | `0.4s ease` |
| `.btn-amplify` | :hover | `scale(1.1)` | `0 0 20px rgba(201,169,98,0.4)` | — | `background: var(--color-accent)` | `300ms ease` |

**Diferenciador Visual:** A seção possui uma duplicidade arquitetural: o mesmo vídeo existe em duas instâncias (`faceta-video-mobile-src` e `faceta-video-main`), com a versão mobile inserida *antes* do título no DOM (respeitando a hierarquia de leitura mobile), enquanto a versão desktop flutua à direita. Além disso, um botão CTA sobreposto aparece temporizado aos 26 segundos de vídeo (`handleFacetaTime`). A prova técnica está em `display: none` para `.faceta-video-mobile` no desktop e `display: block` no mobile via `@media (max-width: 900px)`, e no listener JS `vFacetaD.addEventListener('timeupdate', function() { if (v.currentTime >= 26 && cta.style.display === 'none') { cta.style.display = 'flex'; cta.style.animation = 'fadeInUp 0.6s ease forwards'; } })`.

---

### SEÇÃO 5 — DEPOIMENTOS EM VÍDEO (.depoimentos-video)

**Estrutura:**
```html
<section class="depoimentos-video section" id="depoimentos">
  <div class="container">
    <div class="section-header dep-section-header">...</div>
    <div class="dep-videos-wrapper">
      <div class="dep-video-item dep-video-active"> <!-- Vídeo 1 (José) -->
        <div class="dep-video-label"><span class="dep-num">01</span><span class="dep-tag-active">Assistindo agora</span></div>
        <div class="dep-video-frame" onclick="togglePlay(this, event)">
          <video preload="metadata" class="dep-video-player" id="video1">...</video>
          <div class="play-overlay">...</div>
          <button class="btn-amplify" onclick="openVideoModal(...)">...</button>
        </div>
        <div id="video1-cta-jose" class="dep-video-cta-wrapper" style="display: none;">...</div>
        <div class="dep-video-info">
          <blockquote class="dep-quote">"Superou todas as minhas expectativas..."</blockquote>
          <div class="dep-author-row"><span class="dep-author-dot"></span><span class="dep-author-name">José e Dr. Vitor Tavares</span></div>
        </div>
      </div>
      <div class="dep-divider">...</div>
      <div class="dep-video-item dep-video-locked" id="depVideoLocked"> <!-- Vídeo 2 (Bloqueado) -->
        ...
        <div class="dep-reveal-overlay" id="depRevealOverlay">...</div>
      </div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `linear-gradient(160deg, var(--color-cream) 0%, #EDE9E2 60%, var(--color-gray-200) 100%)`
- Layer 1 — overlay (`::before`): `radial-gradient(circle at 20% 80%, rgba(201,169,98,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(26,58,74,0.05) 0%, transparent 50%)`, `pointer-events: none`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Wrapper | `.dep-videos-wrapper` | — | `max-width: 860px`, `margin: 0 auto` | `display: grid`, `grid-template-columns: 1fr auto 1fr`, `align-items: start` |
| Vídeo ativo | `.dep-video-active .dep-video-frame` | — | `aspect-ratio: 9/16`, `width: 100%`, `max-width: 200px` | `outline: 2px solid var(--color-accent)`, `outline-offset: 4px`, `box-shadow: 0 24px 60px rgba(26,58,74,0.18), 0 0 0 1px rgba(201,169,98,0.15)` |
| Vídeo bloqueado | `.dep-frame-blurred .dep-video-player` | — | — | `filter: blur(12px)`, `transform: scale(1.05)`, `opacity: 0.6` |
| Overlay revelar | `.dep-reveal-overlay` | `absolute`, `inset: 0` | — | `background: linear-gradient(180deg, rgba(15,35,46,0.55) 0%, rgba(15,35,46,0.85) 50%, rgba(15,35,46,0.95) 100%)`, `backdrop-filter: blur(2px)`, `z-index: 10` |
| Ícone revelar | `.dep-reveal-icon` | — | `width: 72px`, `height: 72px` | `border-radius: 50%`, `background: rgba(201,169,98,0.15)`, `border: 2px solid var(--color-accent)`, `animation: dep-pulse-ring 2.5s ease-in-out infinite` |
| Anel externo | `.dep-reveal-icon::after` | `absolute`, `inset: -8px` | — | `border-radius: 50%`, `border: 1px solid rgba(201,169,98,0.3)`, `animation: dep-pulse-ring 2.5s ease-in-out infinite 0.4s` |
| Quote blur | `.dep-quote-blurred` | — | — | `filter: blur(4px)`, `user-select: none`, `pointer-events: none` |
| Nome blur | `.dep-name-blurred` | — | — | `filter: blur(3px)`, `user-select: none`, `pointer-events: none` |
| Divisor | `.dep-divider` | — | `height: 356px`, `padding: 0 1.5rem`, `margin-top: 72px` | `display: flex`, `flex-direction: column`, `align-items: center` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|-----------------|----------------|--------------|---------|--------|---------|-------|
| `dep-pulse-ring` | `transform: scale(1)`, `opacity: 1` | `transform: scale(1.08)`, `opacity: 0.7` | `2.5s` | `ease-in-out` | Loop infinito | `0s` (ícone), `0.4s` (pseudo-elemento ::after) |
| `fadeInUp` | `opacity: 0`, `transform: translateY(30px)` | `opacity: 1`, `transform: translateY(0)` | `0.6s` | `ease` | JS: aparece CTA após 19s do vídeo 1 | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.dep-reveal-overlay` | :hover | — | — | — | `background` clareia para `rgba(15,35,46,0.45/0.75/0.90)` | `300ms ease` |
| `.dep-reveal-icon` | :hover | `scale(1.05)` | — | — | `background: rgba(201,169,98,0.25)` | `300ms ease` |
| `.dep-reveal-btn` | :hover | `translateY(-2px)` | `0 8px 24px rgba(201,169,98,0.4)` | — | `background: var(--color-accent-light)` | `300ms ease` |

**Diferenciador Visual:** A seção implementa um padrão de "desbloqueio progressivo": o segundo vídeo está inicialmente obscurecido por blur (`filter: blur(12px)`), e só é revelado após o primeiro vídeo terminar (`v1.addEventListener('ended', function() { revelarVideo(); })`) ou após clique direto no overlay. Isso cria um gancho de retenção. A prova técnica está em `.dep-frame-blurred .dep-video-player { filter: blur(12px); transform: scale(1.05); opacity: 0.6; }` e na função JS `revelarVideo()` que remove `.dep-quote-blurred`, `.dep-name-blurred`, adiciona `.dep-revealed` e troca `preload="none"` para `preload="auto"`.

---

### SEÇÃO 6 — REPUTAÇÃO 360 / GOOGLE REVIEWS (.reputation-360)

**Estrutura:**
```html
<section class="reputation-360 section">
  <div class="reputation-header">
    <h2 class="reputation-title">O que nossos pacientes falam no Google</h2>
    <div class="google-stars-top"><i class="fa-solid fa-star"></i>...</div>
    <div class="google-logo-sub"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google"></div>
  </div>
  <div class="reputation-carousel-container">
    <div class="reputation-carousel">
      <div class="review-card">...</div> <!-- 6 originais -->
      <div class="review-card">...</div> <!-- 2 duplicados para loop -->
    </div>
  </div>
</section>
```

**Fundo:** Layer 0 — `var(--color-cream)`.

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Header | `.reputation-header` | — | `max-width: 1200px`, `margin: 0 auto 5rem` | `display: flex`, `flex-direction: column`, `align-items: center`, `gap: 1.2rem` |
| Carrossel | `.reputation-carousel` | — | `width: max-content` | `display: flex`, `gap: 2.5rem`, `animation: infiniteScroll 80s linear infinite`, `padding: 1rem 2rem` |
| Card | `.review-card` | — | `width: 280px`, `padding: 0 1.5rem` | `background: transparent`, `border-radius: 0`, `border-left: 1px solid rgba(201,169,98,.15)`, `display: flex`, `flex-direction: column`, `gap: 0.8rem` |
| Avatar | `.review-avatar` | — | `width: 32px`, `height: 32px` | `border-radius: 50%`, `background: var(--color-primary)`, `font-size: 0.7rem`, `color: #fff` |
| Estrelas | `.google-stars-top`, `.review-stars` | — | — | `color: #FBBC04`, `font-size: 0.7rem` / `0.65rem` |
| Logo Google | `.google-logo-sub img` | — | `width: 100px` | `opacity: 0.8` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|-----------------|----------------|--------------|---------|--------|---------|-------|
| `infiniteScroll` | `transform: translateX(0)` | `transform: translateX(-50%)` | `80s` | `linear` | Loop infinito ao carregar | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.reputation-carousel` | :hover | — | — | — | `animation-play-state: paused` | — |
| `.review-card` | :hover | — | — | `border-left-color: var(--color-accent)` | — | `0.4s ease` |

**Diferenciador Visual:** Um ticker horizontal de reviews do Google que rola infinitamente via CSS puro (`animation: infiniteScroll 80s linear infinite`), pausando no hover. Os cards não têm fundo nem border-radius — apenas uma borda esquerda dourada sutil (`border-left: 1px solid rgba(201,169,98,.15)`), criando um efeito de citação editorial. A prova técnica está em `@keyframes infiniteScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }` combinado com a duplicação dos primeiros cards no HTML para criar o loop contínuo.

---

### SEÇÃO 7 — ESPECIALIDADES (.especialidades)

**Estrutura:**
```html
<section class="especialidades section section-dark" id="especialidades">
  <div class="container">
    <div class="section-header">...</div>
    <div class="especialidades-grid">
      <article class="especialidade-card featured">...</article>
      <article class="especialidade-card">...</article>
      <!-- 5 cards normais + 1 featured -->
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `var(--color-primary)` (#1A3A4A)
- Layer 1 — cards: `rgba(255,255,255,0.05)` com borda `rgba(201,169,98,0.2)`
- Layer 2 — card featured: `linear-gradient(135deg, rgba(201,169,98,0.1) 0%, rgba(26,58,74,0.3) 100%)` com `border-color: var(--color-accent)`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Grid | `.especialidades-grid` | — | — | `display: grid`, `grid-template-columns: repeat(3, 1fr)`, `gap: 1.5rem` |
| Card | `.especialidade-card` | `relative` | `padding: 2rem` | `background: rgba(255,255,255,0.05)`, `border: 1px solid rgba(201,169,98,0.2)`, `transition: all 300ms ease` |
| Card featured | `.especialidade-card.featured` | — | `grid-column: span 2` | `background: linear-gradient(135deg, rgba(201,169,98,0.1) 0%, rgba(26,58,74,0.3) 100%)`, `border-color: var(--color-accent)` |
| Número | `.card-number` | — | — | `font-family: var(--font-serif)`, `font-size: 3rem`, `font-weight: 300`, `color: var(--color-accent)`, `opacity: 0.3` |
| Acento canto | `.card-accent` | `absolute`, `top: 0`, `right: 0` | `width: 60px`, `height: 60px` | `border-top: 2px solid var(--color-accent)`, `border-right: 2px solid var(--color-accent)` |

**Animação:** Nenhuma animação própria — herda `.animate-on-scroll` com delay por índice (index * 100ms).

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.especialidade-card` | :hover | `translateY(-4px)` | — | `border-color: var(--color-accent)` | `background: rgba(255,255,255,0.1)` | `300ms ease` |
| `.btn-card` | :hover | `translateY(-2px)` | `0 6px 20px rgba(201,169,98,0.2)` | `border-color: var(--color-accent)` | `::before { opacity: 1 }`, `span/svg { color: var(--color-primary-dark) }` | `300ms ease` |
| `.btn-card svg` | :hover | `translateX(2px)` | — | — | — | `300ms ease` |

**Diferenciador Visual:** O card "Implante Dentário" é um "super-card" que ocupa 2 colunas (`grid-column: span 2`) e recebe um gradiente dourado-petróleo exclusivo, enquanto os demais cards são monocromáticos semi-transparentes. O botão `.btn-card` tem um efeito de preenchimento por pseudo-elemento `::before` com gradiente que aparece no hover. A prova técnica está em `.especialidade-card.featured { grid-column: span 2; background: linear-gradient(135deg, rgba(201, 169, 98, 0.1) 0%, rgba(26, 58, 74, 0.3) 100%); }` e em `.btn-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%); opacity: 0; transition: opacity 300ms ease; z-index: 0; }`.

---

### SEÇÃO 8 — SOBRE (.sobre)

**Estrutura:**
```html
<section class="sobre section" id="sobre">
  <div class="container">
    <div class="sobre-grid">
      <div class="sobre-image">
        <div class="image-wrapper">
          <img src="assets/dr.vitor-tavares.webp" alt="Dr. Vitor Tavares" class="sobre-img" loading="lazy" width="600" height="800">
          <div class="image-frame-accent"></div>
        </div>
      </div>
      <div class="sobre-content">...</div>
    </div>
  </div>
</section>
```

**Fundo:** Layer 0 — `var(--color-white)` (herdado do body).

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Grid | `.sobre-grid` | — | — | `display: grid`, `grid-template-columns: 1fr 1.2fr`, `gap: 4rem`, `align-items: center` |
| Frame accent | `.image-frame-accent` | `absolute`, `top: 1.5rem`, `left: 1.5rem`, `right: -1.5rem`, `bottom: -1.5rem` | — | `border: 2px solid var(--color-accent)`, `z-index: -1` |
| Imagem | `.sobre-img` | — | `width: 100%`, `aspect-ratio: 3/4` | `object-fit: cover`, `display: block` |

**Animação:** Nenhuma animação própria — herda `.animate-on-scroll`.

**Micro-interações:** Nenhuma micro-interação específica nesta seção.

**Diferenciador Visual:** A moldura decorativa (`image-frame-accent`) não envolve a imagem — ela é deslocada (`right: -1.5rem`, `bottom: -1.5rem`) criando um efeito de "foto polaroid flutuante" com borda dourada que nunca toca os cantos da imagem. A prova técnica está em `.image-frame-accent { position: absolute; top: var(--space-6); left: var(--space-6); right: calc(-1 * var(--space-6)); bottom: calc(-1 * var(--space-6)); border: 2px solid var(--color-accent); z-index: -1; }`.

---

### SEÇÃO 9 — DIFERENCIAIS (.diferenciais)

**Estrutura:**
```html
<section class="diferenciais section" id="diferenciais">
  <div class="container">
    <div class="diferenciais-grid">
      <div class="diferenciais-content">...</div>
      <div class="diferenciais-visual">
        <div class="visual-container">
          <div class="visual-image"><img src="assets/em-atendimento.webp" class="diferenciais-img" loading="lazy"></div>
          <div class="visual-stats">
            <div class="vstat-item"><span class="vstat-number">98%</span><span class="vstat-label">Taxa de Sucesso</span></div>
            <div class="vstat-item"><span class="vstat-number">4.9</span><span class="vstat-label">Avaliação Média</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Fundo:** Layer 0 — `var(--color-white)`.

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Grid | `.diferenciais-grid` | — | — | `display: grid`, `grid-template-columns: 1.2fr 1fr`, `gap: 4rem`, `align-items: center` |
| Item | `.diferencial-item` | — | `gap: 1.5rem` | `opacity: 0`, `transform: translateX(-30px)` |
| Item visible | `.diferencial-item.visible` | — | — | `animation: slideInLeft 0.6s ease-out forwards` |
| Ícone | `.diferencial-icon` | — | `width: 64px`, `height: 64px` | `background: var(--color-primary)`, `color: var(--color-accent)`, `border-radius: 2px` |
| Stats flutuantes | `.visual-stats` | `absolute`, `bottom: 2rem`, `left: -2rem`, `right: 2rem` | `padding: 1.5rem` | `background: #fff`, `box-shadow: var(--shadow-xl)`, `display: flex`, `justify-content: space-around` |
| Imagem | `.diferenciais-img` | — | — | `border-radius: 8px`, `box-shadow: 0 20px 40px rgba(0,0,0,0.2)` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|-----------------|----------------|--------------|---------|--------|---------|-------|
| `slideInLeft` | `opacity: 0`, `transform: translateX(-30px)` | `opacity: 1`, `transform: translateX(0)` | `0.6s` | `ease-out` | Intersection Observer (`threshold: 0.2`) | `index * 150ms` (JS `setTimeout`) |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.diferencial-icon` | :hover | `scale(1.05)` | — | — | `background: var(--color-accent)`, `color: #fff` | `300ms ease` |

**Diferenciador Visual:** Os diferenciais não usam o sistema global `.animate-on-scroll` — têm seu próprio Intersection Observer exclusivo que dispara `slideInLeft` com stagger de 150ms por item. Além disso, o bloco de estatísticas flutua sobrepondo a imagem (`absolute`, `left: -2rem`). A prova técnica está em `diferenciaisObserver` no `script.js` com `items.forEach((item, index) => { setTimeout(() => item.classList.add('visible'), index * 150); })`.

---

### SEÇÃO 10 — FAQ (.faq)

**Estrutura:**
```html
<section class="faq section" id="faq" aria-label="Perguntas Frequentes">
  <div class="container">
    <div class="section-header" data-delay="0">...</div>
    <div class="faq-list" data-delay="300">
      <details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <summary itemprop="name">O que é implante dentário com carga imediata?</summary>
        <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text">...</p>
        </div>
      </details>
      <!-- 5 itens -->
    </div>
  </div>
</section>
```

**Fundo:** Layer 0 — `var(--color-cream)`.

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Lista | `.faq-list` | — | `max-width: 800px`, `margin: 0 auto` | `display: flex`, `flex-direction: column`, `gap: 1rem` |
| Item | `.faq-item` | — | — | `background: #fff`, `border: 1px solid var(--color-gray-200)`, `border-radius: 4px`, `overflow: hidden` |
| Summary | `.faq-item summary` | `relative` | `padding: 1.5rem 2rem` | `font-size: 1.125rem`, `font-weight: 600`, `cursor: pointer`, `list-style: none` |
| Summary ::after | `.faq-item summary::after` | `absolute`, `right: 2rem`, `top: 50%` | — | `content: '+'`, `font-size: 1.5rem`, `color: var(--color-accent)`, `font-weight: 300` |
| Summary open ::after | `.faq-item[open] summary::after` | — | — | `content: '−'` |
| Answer | `.faq-answer` | — | `padding: 0 2rem 1.5rem` | `animation: fadeIn 0.3s ease-out` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|-----------------|----------------|--------------|---------|--------|---------|-------|
| `fadeIn` | `opacity: 0`, `transform: translateY(-10px)` | `opacity: 1`, `transform: translateY(0)` | `0.3s` | `ease-out` | Abertura do `<details>` | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.faq-item` | :hover | — | `var(--shadow-md)` | `border-color: var(--color-accent)` | — | `300ms ease` |
| `.faq-item` | [open] | — | `var(--shadow-md)` | `border-color: var(--color-accent)` | — | — |
| `.faq-item summary` | :hover | — | — | — | `background: var(--color-gray-100)` | `300ms ease` |

**Diferenciador Visual:** O FAQ usa elementos nativos `<details>`/`<summary>` sem JavaScript próprio, mas estiliza o marcador padrão com `content: '+'` e `content: '−'` no pseudo-elemento `::after`. Cada item é um micro-schema `Question`/`Answer` independente. A prova técnica está em `.faq-item summary::after { content: '+'; ... }` e `.faq-item[open] summary::after { content: '−'; }`.

---

### SEÇÃO 11 — CTA COM FORMULÁRIO (.cta-section)

**Estrutura:**
```html
<section class="cta-section" id="cta">
  <div class="cta-image-bg">
    <img src="assets/recepção.webp" alt="Recepção Odonto Novo Leblon" class="cta-img-background" loading="lazy">
    <div class="cta-gradient-overlay"></div>
  </div>
  <div class="container cta-container">
    <div class="cta-grid">
      <div class="cta-content">
        <h2 class="cta-title">Deseja saber mais sobre<br>nossos tratamentos?</h2>
        <p class="cta-description">...</p>
        <form class="cta-form" id="ctaForm" action="#" method="POST">
          <div class="form-group"><input type="text" name="nome" id="formNome" placeholder="Seu Nome Completo" required class="form-input"></div>
          <div class="form-group"><input type="email" name="email" id="formEmail" placeholder="Seu E-mail" required class="form-input"></div>
          <div class="form-group"><input type="tel" name="telefone" id="formTelefone" placeholder="Seu Telefone / WhatsApp" required class="form-input"></div>
          <div class="form-group">
            <select name="motivo" id="formMotivo" required class="form-select">
              <option value="" disabled selected>Qual o motivo do seu contato?</option>
              <option value="Implante Dentário / Carga Imediata">...</option>
              ...
            </select>
          </div>
          <div class="form-group"><textarea name="mensagem" id="formMensagem" placeholder="Conte-nos sua situação (opcional)" rows="3" class="form-input" style="resize: vertical; min-height: 80px;"></textarea></div>
          <button type="submit" class="btn btn-primary form-submit">Solicitar Informações</button>
        </form>
      </div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `var(--color-primary)` (#1A3A4A)
- Layer 1 — imagem (direita): `assets/recepção.webp`, `position: absolute`, `top: 0`, `right: 0`, `width: 45%`, `height: 100%`, `object-fit: cover`, `opacity: 0.8`
- Layer 2 — gradiente: `linear-gradient(to right, var(--color-primary) 10%, rgba(26,58,74,0.85) 50%, transparent 100%)`
- Layer 3 — conteúdo: `position: relative`, `z-index: 3`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Seção | `.cta-section` | `relative`, `overflow: hidden` | `padding: 6rem 0` | `background: var(--color-primary)`, `display: flex`, `align-items: center` |
| Imagem BG | `.cta-image-bg` | `absolute`, `top: 0`, `right: 0` | `width: 45%`, `height: 100%` | `z-index: 1` |
| Gradient | `.cta-gradient-overlay` | `absolute`, `inset: 0` | — | `background: linear-gradient(to right, var(--color-primary) 10%, rgba(26,58,74,0.85) 50%, transparent 100%)`, `z-index: 2` |
| Grid | `.cta-grid` | — | — | `display: grid`, `grid-template-columns: 1fr 1fr`, `gap: 4rem`, `align-items: center` |
| Input | `.form-input, .form-select` | — | `width: 100%`, `padding: 1rem` | `border: 1px solid rgba(255,255,255,0.2)`, `background: rgba(255,255,255,0.05)`, `color: #fff`, `border-radius: 2px` |
| Input focus | `.form-input:focus, .form-select:focus` | — | — | `border-color: var(--color-accent)`, `background: rgba(255,255,255,0.1)`, `outline: none` |
| Select option | `.form-select option` | — | — | `background: var(--color-primary)`, `color: #fff` |

**Animação:** Nenhuma animação própria — herda `.animate-on-scroll`.

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.form-input, .form-select` | :focus | — | — | `border-color: var(--color-accent)` | `background: rgba(255,255,255,0.1)` | `150ms ease` |

**Diferenciador Visual:** A imagem de recepção ocupa apenas 45% da largura à direita, mas é "engolida" por um gradiente que vai de opaco (`var(--color-primary)`) à esquerda para transparente à direita, criando uma transição suave onde o formulário flutua sobre o vazio escuro e a imagem emerge apenas como textura de fundo. A prova técnica está em `.cta-gradient-overlay { background: linear-gradient(to right, var(--color-primary) 10%, rgba(26, 58, 74, 0.85) 50%, transparent 100%); }`.

---

### SEÇÃO 12 — CONTATO (.contato)

**Estrutura:**
```html
<section class="contato section" id="contato">
  <div class="container">
    <div class="contato-grid">
      <div class="contato-info">...</div>
      <div class="contato-map">
        <div class="map-container">
          <iframe src="https://www.google.com/maps/embed?..." width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Fundo:** Layer 0 — `var(--color-white)`.

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Grid | `.contato-grid` | — | — | `display: grid`, `grid-template-columns: 1fr 1.2fr`, `gap: 4rem`, `align-items: stretch` |
| Ícone | `.contact-icon` | — | `width: 48px`, `height: 48px` | `background: var(--color-gray-100)`, `color: var(--color-accent)`, `border-radius: 2px` |
| Mapa | `.map-container` | — | `width: 100%`, `height: 100%`, `min-height: 400px` | `border-radius: 2px`, `overflow: hidden`, `box-shadow: var(--shadow-lg)` |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.contact-icon` | :hover | — | — | — | `background: var(--color-accent)`, `color: #fff` | `300ms ease` |

**Diferenciador Visual:** O grid usa `align-items: stretch` para que a coluna de informações e o mapa tenham a mesma altura, com o mapa ocupando 100% da altura disponível via `iframe` sem bordas. A prova técnica está em `.contato-grid { align-items: stretch; }` e `.map-container iframe { width: 100%; height: 100%; min-height: 400px; border: none; }`.

---

### SEÇÃO 13 — FOOTER (.footer)

**Estrutura:**
```html
<footer class="footer">
  <div class="footer-main">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">...</div>
        <div class="footer-links">...</div>
        <div class="footer-links">...</div>
        <div class="footer-contact">...</div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <div class="footer-bottom-grid">
        <div class="footer-credits-left">
          <p class="footer-copyright">&copy; 2026 Odonto Novo Leblon...</p>
          <div class="footer-legal-links">
            <a href="#" id="ck-prefs-link">...Cookies...</a>
            <span class="legal-separator">|</span>
            <a href="termos-e-condicoes.html" class="footer-legal-link">Termos e Condições</a>
            <span class="legal-separator">|</span>
            <a href="politica-de-privacidade.html" class="footer-legal-link">Política de Privacidade</a>
          </div>
        </div>
        <div class="footer-credits-right">
          <span>Desenvolvido por <a href="https://www.ag5agencia.com.br" target="_blank" class="ag5-link">AG5 Agência</a></span>
        </div>
      </div>
    </div>
  </div>
</footer>
```

**Fundo:**
- Layer 0 — `.footer-main`: `var(--color-primary-dark)` (#0F232E)
- Layer 1 — `.footer-bottom`: `border-top: 1px solid rgba(255,255,255,0.1)`
- Layer 2 — borda dourada sutil no topo do footer: `border-top: 1px solid rgba(201, 169, 98, 0.2)`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Grid principal | `.footer-grid` | — | `max-width: 1280px`, `margin: 0 auto` | `display: grid`, `grid-template-columns: repeat(4, 1fr)`, `gap: 2.5rem` |
| Grid bottom | `.footer-bottom-grid` | — | — | `display: flex`, `justify-content: space-between`, `align-items: center` |
| Logo | `.footer-brand .footer-logo img` | — | `max-width: 80px`, `height: auto` | `object-fit: contain` |
| Cookie toggle | `#cookie-toggle` | `inline-flex` | `width: 28px`, `height: 14px` | `background: rgba(255,255,255,0.1)`, `border-radius: 10px`, `border: 1px solid rgba(255,255,255,0.2)` |
| Cookie toggle dot | `#cookie-toggle-dot` | `absolute` | `width: 10px`, `height: 10px` | `background: #C9A962`, `border-radius: 50%`, `transition: left 0.2s ease` |

**Animação:** Nenhuma animação própria.

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.footer-links a` | :hover | — | — | — | `color: var(--color-accent)` | `300ms ease` |
| `.footer-social a` | :hover | `translateY(-2px)` | — | — | `color: var(--color-accent)` | `300ms ease` |
| `.ag5-link` | :hover | — | — | — | `color: var(--color-accent-light)` | `300ms ease` |
| `#ck-prefs-link` | :hover | — | — | `border-color: rgba(255,255,255,0.4)` | `box-shadow` no dot | — |

**Diferenciador Visual:** O footer contém um toggle de cookies estilo iOS embutido diretamente no texto legal (`#cookie-toggle`), que reflete o estado real do consentimento via classes `.active` e `.inactive` manipuladas pelo JS do banner. A prova técnica está no inline style do HTML: `<span id="cookie-toggle" class="active" style="display:inline-flex; align-items:center; width:28px; height:14px; background:rgba(255,255,255,0.1); border-radius:10px; padding:2px; border:1px solid rgba(255,255,255,0.2); position:relative; font-size:8px; font-weight:bold;"><span style="color:#86EFAC; margin-left:2px;">✓</span><span style="color:#FCA5A5; margin-left:auto; margin-right:2px;">✕</span><span id="cookie-toggle-dot" style="position:absolute; left:15px; width:10px; height:10px; background:#C9A962; border-radius:50%; box-shadow:0 0 5px rgba(0,0,0,0.3); transition:left 0.2s ease;"></span></span>`.

---

### SEÇÃO 14 — WHATSAPP PREMIUM (.wa-premium-container)

**Estrutura:**
```html
<div class="wa-premium-container">
  <div id="wa-message-bubble" class="wa-bubble">
    <button class="wa-close" id="wa-close-btn" aria-label="Fechar"><i class="fa-solid fa-xmark"></i></button>
    <div class="wa-content">
      <div class="wa-header">
        <div class="wa-avatar-wrapper">
          <img src="assets/dr.vitor-tavares.webp" alt="Dr. Vitor Tavares" class="wa-avatar" width="45" height="45">
          <span class="wa-status-dot"></span>
        </div>
        <div class="wa-info"><span class="wa-name">Dr. Vitor Tavares</span></div>
      </div>
      <div id="wa-typing" class="wa-typing"><span></span><span></span><span></span></div>
      <div id="wa-real-message" class="wa-message-text" style="display: none;"><p>Olá! Sou o <strong>Dr. Vitor</strong>...</p></div>
    </div>
  </div>
  <a href="..." class="wa-float-btn" target="_blank" id="wa-main-btn">
    <i class="fa-brands fa-whatsapp"></i>
    <span class="wa-badge" id="wa-notification">1</span>
  </a>
</div>
```

**Fundo:** Não se aplica — elemento flutuante fixo.

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Container | `.wa-premium-container` | `fixed`, `bottom: 40px`, `right: 40px` | — | `z-index: 9999`, `font-family: 'Outfit', sans-serif` |
| Balão | `.wa-bubble` | `absolute`, `bottom: 85px`, `right: 0` | `width: 300px`, `padding: 20px` | `background: rgba(255,255,255,0.85)`, `backdrop-filter: blur(15px)`, `border-radius: 16px`, `border: 1px solid rgba(0,0,0,0.05)`, `opacity: 0`, `visibility: hidden`, `transform: translateY(20px) scale(0.95)` |
| Balão show | `.wa-bubble.show` | — | — | `opacity: 1`, `visibility: visible`, `transform: translateY(0) scale(1)` |
| Botão | `.wa-float-btn` | `relative` | `width: 60px`, `height: 60px` | `background: #25D366`, `border-radius: 50%`, `font-size: 32px`, `opacity: 0`, `visibility: hidden`, `transform: translateY(20px) scale(0.8)` |
| Botão visible | `.wa-float-btn.visible` | — | — | `opacity: 1`, `visibility: visible`, `transform: translateY(0) scale(1)` |
| Status dot | `.wa-status-dot` | `absolute`, `bottom: -2px`, `right: -2px` | `width: 12px`, `height: 12px` | `background: #25d366`, `border: 2px solid #fff`, `border-radius: 50%`, `animation: wa-pulse-green 2s infinite` |
| Badge | `.wa-badge` | `absolute`, `top: -5px`, `right: -5px` | `width: 22px`, `height: 22px` | `background: #ff3b30`, `color: #fff`, `font-size: 10px`, `font-weight: 800`, `border-radius: 50%`, `border: 3px solid #fff`, `transform: scale(0)` |
| Badge show | `.wa-badge.show` | — | — | `transform: scale(1)` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|-----------------|----------------|--------------|---------|--------|---------|-------|
| `wa-pulse-green` | `box-shadow: 0 0 0 0 rgba(37,211,102,0.7)` | `box-shadow: 0 0 0 10px rgba(37,211,102,0)` | `2s` | — | Loop infinito | — |
| `wa-typing-ani` | `transform: translateY(0)`, `opacity: 0.4` | `transform: translateY(-4px)`, `opacity: 1` | `1.4s` | — | Loop infinito | `0s`, `0.2s`, `0.4s` (stagger) |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.wa-float-btn` | :hover | `scale(1.1) translateY(-5px)` | `0 20px 40px rgba(37,211,102,0.4)` | — | — | `0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)` |
| `.wa-close` | :hover | — | — | — | `color: #333` | `0.3s` |
| `.wa-bubble` | show | `translateY(0) scale(1)` | — | — | `opacity: 1`, `visibility: visible` | `0.6s cubic-bezier(0.34, 1.56, 0.64, 1)` |

**Comportamento JavaScript:**
- O botão flutuante aparece quando a seção `#faceta-artificial` atinge a metade da viewport (`rect.top + rect.height/2 < window.innerHeight`).
- O balão de mensagem aparece 30 segundos *após* o final da seção `#faceta-artificial` sair da viewport (`rect.bottom < window.innerHeight`), desde que ainda não tenha sido mostrado (`!bubble.dataset.timerStarted`).
- Ao aparecer, o balão mostra os 3 pontinhos de digitação (`#wa-typing`) por 2.5s, depois troca para a mensagem real (`#wa-real-message`) com fade-in.
- Fechar o balão (`#wa-close-btn`) esconde o balão e mostra o badge de notificação (`#wa-notification`) após 2s.
- Clicar no botão remove balão e badge.

**Diferenciador Visual:** O WhatsApp não é um simples botão flutuante — é uma simulação completa de interface de chat com glassmorphism (`backdrop-filter: blur(15px)`), avatar do médico com borda verde de status online pulsante, animação de "digitando..." com 3 bolinhas em stagger, e trigger contextual baseado no scroll do usuário (aparece após 30s da seção de faceta). A prova técnica está em `initWaPremium()` que usa `window.addEventListener('scroll', handleWaScroll)` com lógica de `rect.bottom < window.innerHeight` e `setTimeout(..., 30000)`.

---

### SEÇÃO 15 — COOKIE BANNER (.ck-banner)

**Estrutura:**
```html
<div id="ck-banner" class="ck-banner" role="dialog" aria-modal="true" aria-label="Aviso de cookies" aria-live="polite" aria-hidden="true">
  <div class="ck-banner__inner">
    <div class="ck-banner__content">
      <h2 class="ck-banner__title">Valorizamos sua privacidade</h2>
      <p class="ck-banner__text">...</p>
    </div>
    <div class="ck-banner__actions">
      <button id="ck-customize" class="ck-btn ck-btn--ghost">Personalizar</button>
      <button id="ck-reject" class="ck-btn ck-btn--outline">Rejeitar</button>
      <button id="ck-accept-all" class="ck-btn ck-btn--primary">Aceitar todos</button>
    </div>
  </div>
</div>
<div id="ck-modal" class="ck-modal" role="dialog" aria-modal="true" aria-label="Personalizar preferências de cookies" aria-hidden="true">...</div>
```

**Fundo:**
- Layer 0 — banner: `var(--ck-bg)` (#1a1a1a), `border-top: 1px solid rgba(var(--ck-accent-rgb), 0.12)`, `box-shadow: 0 -4px 24px rgba(0,0,0,0.22)`
- Layer 1 — modal overlay: `rgba(0,0,0,0.55)`
- Layer 2 — modal box: `#ffffff`, `border-top: 2px solid var(--ck-accent)`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Banner | `.ck-banner` | `fixed`, `bottom: 0`, `left: 0`, `right: 0` | — | `z-index: 9000`, `transform: translateY(100%)`, `backdrop-filter: blur(10px)` |
| Banner visible | `.ck-banner--visible` | — | — | `transform: translateY(0)` |
| Inner | `.ck-banner__inner` | — | `max-width: 1280px`, `padding: 10px 28px` | `display: flex`, `align-items: center`, `gap: 16px` |
| Modal | `.ck-modal` | `fixed`, `inset: 0` | — | `z-index: 9100`, `opacity: 0`, `pointer-events: none` |
| Modal visible | `.ck-modal--visible` | — | — | `opacity: 1`, `pointer-events: all` |
| Modal box | `.ck-modal__box` | `relative` | `max-width: 520px`, `max-height: 88vh` | `transform: translateY(14px) scale(0.98)`, `border-top: 2px solid var(--ck-accent)` |
| Modal box visible | `.ck-modal--visible .ck-modal__box` | — | — | `transform: translateY(0) scale(1)` |
| Toggle | `.ck-toggle` | `relative` | `width: 34px`, `height: 19px` | — |
| Toggle slider | `.ck-toggle__slider` | `absolute`, `inset: 0` | — | `background: var(--ck-toggle-off)`, `border-radius: 20px` |
| Toggle knob | `.ck-toggle__slider::before` | `absolute` | `width: 13px`, `height: 13px` | `left: 3px`, `top: 3px`, `background: #fff`, `border-radius: 50%` |
| Toggle checked | `input:checked + .ck-toggle__slider` | — | — | `background: var(--ck-toggle-on)` |
| Toggle checked knob | `input:checked + .ck-toggle__slider::before` | — | — | `transform: translateX(15px)` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|-----------------|----------------|--------------|---------|--------|---------|-------|
| Banner entrance | `transform: translateY(100%)` | `transform: translateY(0)` | `0.42s` | `cubic-bezier(0.16, 1, 0.3, 1)` | `setTimeout(showBanner, 600)` no JS | `600ms` |
| Modal entrance | `transform: translateY(14px) scale(0.98)` | `transform: translateY(0) scale(1)` | `280ms` | `cubic-bezier(0.4, 0, 0.2, 1)` | Clique em "Personalizar" | — |
| Toast | `opacity: 0`, `transform: translateX(-50%) translateY(16px)` | `opacity: 1`, `transform: translateX(-50%) translateY(0)` | `300ms` | `ease` | Após aceitar/rejeitar | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.ck-btn--primary` | :hover | `translateY(-1px)` | — | — | `background: var(--ck-accent-dark)` | `280ms cubic-bezier(0.4,0,0.2,1)` |
| `.ck-btn--outline` | :hover | — | — | `border-color: rgba(255,255,255,0.28)` | `color: rgba(255,255,255,0.65)` | `280ms` |
| `.ck-modal__close` | :hover | — | — | — | `background: rgba(255,255,255,0.15)`, `color: #fff` | `150ms ease` |

**Diferenciador Visual:** O banner é uma implementação completa de LGPD/GDPR com 5 categorias de cookies (Necessário, Funcional, Analítico, Desempenho, Publicidade), toggle switches estilo iOS, modal de personalização, toast de feedback, e API pública (`window.CookieBanner`). O estado é persistido em `localStorage` com expiração de 365 dias. A prova técnica está na IIFE `cookie-banner.js` com `CONFIG.expiryDays: 365`, `TOGGLE_MAP`, e o evento customizado `cookieConsentUpdated`.

---

### SEÇÃO 16 — DRAWER MOBILE (.drawer)

**Estrutura:**
```html
<div class="drawer-overlay" id="drawerOverlay"></div>
<aside class="drawer" id="drawer">
  <div class="drawer-header">
    <a href="#inicio" class="drawer-logo"><img src="assets/logo-odonto-novo-leblon-desktop.webp" ...></a>
    <button class="drawer-close" id="drawerClose" aria-label="Fechar menu"><svg>...</svg></button>
  </div>
  <nav class="drawer-nav">
    <ul class="drawer-menu">...</ul>
    <div class="drawer-footer"><a href="..." class="btn btn-primary drawer-cta" target="_blank">Agendar Consulta</a></div>
  </nav>
</aside>
```

**Fundo:**
- Layer 0 — overlay: `rgba(0,0,0,0.7)`, `backdrop-filter: blur(4px)`
- Layer 1 — drawer: `var(--color-primary)` (#1A3A4A)

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Overlay | `.drawer-overlay` | `fixed`, `inset: 0` | — | `z-index: 9998`, `opacity: 0`, `visibility: hidden`, `backdrop-filter: blur(4px)` |
| Overlay active | `.drawer-overlay.active` | — | — | `opacity: 1`, `visibility: visible` |
| Drawer | `.drawer` | `fixed`, `top: 0`, `right: -100%` | `width: 100%`, `max-width: 400px`, `height: 100%` | `z-index: 9999`, `background: var(--color-primary)`, `padding: 2rem`, `box-shadow: -10px 0 30px rgba(0,0,0,0.3)` |
| Drawer active | `.drawer.active` | `right: 0` | — | — |
| Link | `.drawer-link` | — | — | `font-family: var(--font-serif)`, `font-size: 1.875rem`, `color: #fff`, `opacity: 0.7` |
| Link hover | `.drawer-link:hover` | — | — | `opacity: 1`, `padding-left: 1rem`, `color: var(--color-accent)` |
| Close | `.drawer-close` | — | — | `color: #fff`, `transition: transform 150ms ease` |
| Close hover | `.drawer-close:hover` | `rotate(90deg)` | — | — |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|-----------------|----------------|--------------|---------|--------|---------|-------|
| Drawer slide | `right: -100%` | `right: 0` | `0.4s` | `cubic-bezier(0.77, 0, 0.175, 1)` | Clique no hamburger | — |
| Overlay fade | `opacity: 0` | `opacity: 1` | `300ms ease` | — | Clique no hamburger | — |

**Diferenciador Visual:** O drawer usa uma curva de easing agressiva (`cubic-bezier(0.77, 0, 0.175, 1)`) que dá uma sensação de "mola" ao abrir, e os links usam a fonte serifada Cormorant Garamond em tamanho grande (1.875rem) com indentação no hover (`padding-left: 1rem`), transformando o menu mobile em uma experiência editorial, não utilitária. A prova técnica está em `.drawer { transition: right 0.4s cubic-bezier(0.77, 0, 0.175, 1); }` e `.drawer-link:hover { padding-left: var(--space-4); }`.

---

## 3. COMPONENTES REUTILIZÁVEIS

### Botões

```css
/* ─── BOTÃO BASE ─── */
.btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-3);
    font-family: var(--font-sans);
    font-size: var(--text-sm);
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: var(--space-4) var(--space-6);
    border-radius: var(--radius-sm);
    transition: all var(--transition-base);
    cursor: pointer;
}

/* ─── BOTÃO PRIMÁRIO ─── */
.btn-primary {
    background: var(--color-accent);
    color: var(--color-white);
    border: 2px solid var(--color-accent);
}
.btn-primary:hover {
    background: var(--color-accent-dark);
    border-color: var(--color-accent-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

/* ─── BOTÃO OUTLINE ─── */
.btn-outline {
    background: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
}
.btn-outline:hover {
    background: var(--color-primary);
    color: var(--color-white);
    transform: translateY(-2px);
}

/* ─── BOTÃO LIGHT ─── */
.btn-light {
    background: var(--color-white);
    color: var(--color-primary);
    border: 2px solid var(--color-white);
}
.btn-light:hover {
    background: transparent;
    color: var(--color-white);
    transform: translateY(-2px);
}

/* ─── BOTÃO OUTLINE LIGHT ─── */
.btn-outline-light {
    background: transparent;
    color: var(--color-white);
    border: 2px solid var(--color-white);
}
.btn-outline-light:hover {
    background: var(--color-white);
    color: var(--color-primary);
    transform: translateY(-2px);
}

/* ─── BOTÃO EMERGÊNCIA ─── */
.btn-emergency {
    background: #960000;
    color: var(--color-white);
    border: 2px solid #960000;
}
.btn-emergency:hover {
    background: #7a0000;
    border-color: #7a0000;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(150, 0, 0, 0.3);
}

/* ─── BOTÃO CARD (ESPECIALIDADES) ─── */
.btn-card {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    font-family: var(--font-sans);
    font-size: var(--text-xs);
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-accent);
    background: transparent;
    border: 1.5px solid rgba(201, 169, 98, 0.4);
    padding: var(--space-3) var(--space-5);
    border-radius: var(--radius-sm);
    margin-top: var(--space-6);
    transition: all var(--transition-base);
    cursor: pointer;
    text-decoration: none;
    position: relative;
    overflow: hidden;
}
.btn-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
    opacity: 0;
    transition: opacity var(--transition-base);
    z-index: 0;
}
.btn-card span,
.btn-card svg {
    position: relative;
    z-index: 1;
}
.btn-card:hover {
    border-color: var(--color-accent);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(201, 169, 98, 0.2);
}
.btn-card:hover::before {
    opacity: 1;
}
.btn-card:hover span,
.btn-card:hover svg {
    color: var(--color-primary-dark);
}
.btn-card svg {
    transition: transform var(--transition-base);
}
.btn-card:hover svg {
    transform: translateX(2px);
}
```

### Cards

```css
/* ─── CARD DE ESPECIALIDADE (DARK) ─── */
.especialidade-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(201, 169, 98, 0.2);
    padding: var(--space-8);
    position: relative;
    transition: all var(--transition-base);
}
.especialidade-card:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--color-accent);
    transform: translateY(-4px);
}
.especialidade-card.featured {
    grid-column: span 2;
    background: linear-gradient(135deg, rgba(201, 169, 98, 0.1) 0%, rgba(26, 58, 74, 0.3) 100%);
    border-color: var(--color-accent);
}

/* ─── CARD BEFORE/AFTER ─── */
.ba-card {
    background: var(--color-cream);
    padding: var(--space-4);
    box-shadow: var(--shadow-xl);
    border: 1px solid var(--color-gray-200);
}

/* ─── CARD DE REVIEW (REPUTACAO 360) ─── */
.review-card {
    width: 280px;
    background: transparent;
    border-radius: 0;
    padding: 0 1.5rem;
    border-left: 1px solid rgba(201, 169, 98, .15);
    display: flex;
    flex-direction: column;
    gap: .8rem;
    transition: all .4s ease;
}
.review-card:hover {
    border-left-color: var(--color-accent);
}
```

### Elementos Flutuantes Fixos

```css
/* ─── WHATSAPP FLOAT PREMIUM ─── */
.wa-premium-container {
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 9999;
    font-family: 'Outfit', sans-serif;
}
.wa-float-btn {
    width: 60px;
    height: 60px;
    background: #25D366;
    color: #fff !important;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    box-shadow: 0 8px 24px rgba(37, 211, 102, 0.25);
    text-decoration: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(20px) scale(0.8);
}
.wa-float-btn.visible {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0) scale(1);
}
.wa-float-btn:hover {
    transform: scale(1.1) translateY(-5px);
    box-shadow: 0 20px 40px rgba(37, 211, 102, 0.4);
}

/* ─── SCROLL PROGRESS BAR ─── */
.scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--color-accent), var(--color-accent-light));
    z-index: 10000;
    transition: width 0.1s ease-out;
}
```

### Modais

```css
/* ─── MODAL DE VIDEO (LIGHTBOX) ─── */
.v-modal {
    position: fixed;
    inset: 0;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease;
}
.v-modal.active {
    opacity: 1;
    pointer-events: auto;
}
.v-modal-overlay {
    position: absolute;
    inset: 0;
    background: rgba(15, 35, 46, 0.95);
    backdrop-filter: blur(10px);
}
.v-modal-container {
    position: relative;
    width: 90%;
    max-width: 450px;
    height: 90vh;
    z-index: 10001;
    display: flex;
    align-items: center;
    justify-content: center;
}
.v-modal-content {
    position: relative;
    width: 100%;
    height: 100%;
    aspect-ratio: 9/16;
    background: #000;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
}
.v-modal-close {
    position: absolute;
    top: -50px;
    right: 0;
    color: var(--color-white);
    background: none;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease;
}
.v-modal-close:hover {
    transform: rotate(90deg) scale(1.2);
}

/* ─── MODAL DE COOKIES ─── */
.ck-modal {
    position: fixed;
    inset: 0;
    z-index: var(--ck-z-modal);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--ck-transition);
}
.ck-modal.ck-modal--visible {
    pointer-events: all;
    opacity: 1;
}
.ck-modal__overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    z-index: var(--ck-z-overlay);
    cursor: pointer;
}
.ck-modal__box {
    position: relative;
    z-index: calc(var(--ck-z-modal) + 10);
    background: var(--ck-modal-bg);
    border-radius: var(--ck-radius);
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.22);
    width: 100%;
    max-width: var(--ck-modal-max-width);
    max-height: 88vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transform: translateY(14px) scale(0.98);
    transition: transform var(--ck-transition);
    border-top: 2px solid var(--ck-accent);
}
.ck-modal.ck-modal--visible .ck-modal__box {
    transform: translateY(0) scale(1);
}
```

### Pills / Tags / Badges / Eyebrows

```css
/* ─── EYEBROW PADRAO ─── */
.section-eyebrow {
    font-family: var(--font-sans);
    font-size: var(--text-sm);
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: var(--space-4);
}

/* ─── TAG BEFORE/AFTER ─── */
.ba-tag {
    position: absolute;
    padding: var(--space-2) var(--space-4);
    font-family: var(--font-sans);
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    z-index: 2;
}
.ba-tag.before {
    top: 20px;
    left: 20px;
    background: rgba(150, 0, 0, 0.9);
    color: white;
}
.ba-tag.after {
    bottom: 20px;
    right: 20px;
    background: var(--color-accent);
    color: var(--color-white);
}

/* ─── TAGS DE VIDEO ─── */
.dep-tag-active {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--color-white);
    background: var(--color-accent);
    padding: 4px 10px;
}
.dep-tag-locked {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--color-gray-500);
    background: var(--color-gray-200);
    padding: 4px 10px;
    transition: all var(--transition-base);
}

/* ─── BADGE WHATSAPP ─── */
.wa-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #ff3b30;
    color: #fff;
    font-size: 10px;
    font-weight: 800;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #fff;
    transform: scale(0);
    transition: transform 0.5s ease;
}
.wa-badge.show {
    transform: scale(1);
}

/* ─── BADGE DO HERO ─── */
.hero-badge {
    position: absolute;
    bottom: var(--space-8);
    left: calc(-1 * var(--space-8));
    background: var(--color-white);
    padding: var(--space-4) var(--space-6);
    display: flex;
    align-items: center;
    gap: var(--space-3);
    box-shadow: var(--shadow-xl);
    animation: float 3s ease-in-out infinite;
}
```

### Scrollbar Customizada

Nao ha scrollbar customizada explicita no CSS. O projeto usa a scrollbar nativa do navegador.

### Sistema .reveal on scroll

```css
/* ─── ANIMACAO GLOBAL DE ENTRADA ─── */
.animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
}
.animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
}
```

**JavaScript (Intersection Observer):**
- `root: null`
- `rootMargin: '0px 0px -100px 0px'`
- `threshold: 0.1`
- Seletores observados: `.section-header`, `.especialidade-card`, `.sobre-content`, `.contato-info`, `.cta-content`, `.faq-list`
- Delay customizavel via atributo `data-delay` (ex: `data-delay="0"`, `data-delay="300"`), caso contrario usa `index * 100ms`.

### Carrosseis / Tickers

```css
/* ─── TICKER INFINITO DE REVIEWS ─── */
.reputation-carousel {
    display: flex;
    gap: 2.5rem;
    width: max-content;
    animation: infiniteScroll 80s linear infinite;
    padding: 1rem 2rem;
}
.reputation-carousel:hover {
    animation-play-state: paused;
}
@keyframes infiniteScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
```

### Overlays de Play em Videos

```css
/* ─── OVERLAY DE PLAY CENTRAL ─── */
.play-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.15);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 4;
    pointer-events: none;
}
.play-icon {
    width: 80px;
    height: 80px;
    background: rgba(26, 58, 74, 0.85);
    color: var(--color-accent);
    border: 2px solid var(--color-accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 30px rgba(201, 169, 98, 0.3);
    transition: all 0.4s ease;
    transform: scale(1);
}
.faceta-video-wrapper:hover .play-icon,
.dep-video-frame:hover .play-icon {
    transform: scale(1.1);
    background: var(--color-primary);
    box-shadow: 0 0 40px rgba(201, 169, 98, 0.5);
}
.is-playing .play-overlay {
    opacity: 0;
    visibility: hidden;
    transform: scale(1.2);
}

/* ─── BOTAO AMPLIAR VIDEO ─── */
.btn-amplify {
    position: absolute;
    bottom: var(--space-4);
    right: var(--space-4);
    width: 40px;
    height: 40px;
    background: rgba(26, 58, 74, 0.8);
    color: var(--color-white);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 5;
    transition: all var(--transition-base);
    backdrop-filter: blur(4px);
}
.btn-amplify:hover {
    background: var(--color-accent);
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(201, 169, 98, 0.4);
}
```

---

## 4. SISTEMA GLOBAL DE ANIMACOES

| Nome @keyframes | 0% | 50% | 100% | Duracao padrao | Easing | Onde e usado |
|-----------------|----|-----|------|----------------|--------|--------------|
| fadeIn | opacity: 0 | — | opacity: 1 | 1s / 0.3s | ease-out | Hero visual (1s), FAQ answer (0.3s), fade generico |
| fadeInUp | opacity: 0, translateY(30px) | — | opacity: 1, translateY(0) | 0.6s / 1s | ease-out / ease | Hero content (1s), .animate-on-scroll (0.6s), CTAs de video (0.6s) |
| slideInLeft | opacity: 0, translateX(-30px) | — | opacity: 1, translateX(0) | 0.6s | ease-out | .diferencial-item.visible |
| float | translateY(0) | translateY(-10px) | translateY(0) | 3s | ease-in-out | .hero-badge |
| pulse | box-shadow: 0 0 0 0 rgba(37,211,102,0.4) | box-shadow: 0 0 0 15px rgba(37,211,102,0) | box-shadow: 0 0 0 0 rgba(37,211,102,0.4) | — | — | Definido mas nao vinculado a nenhum elemento no CSS lido |
| pulse-red | scale(0.95), box-shadow: 0 0 0 0 rgba(255,77,77,0.7) | scale(1), box-shadow: 0 0 0 10px rgba(255,77,77,0) | scale(0.95), box-shadow: 0 0 0 0 rgba(255,77,77,0) | 2s | — | .pulse-dot no botao de emergencia |
| pulse-red-border | border-color: #960000, box-shadow: 0 0 0 0 rgba(150,0,0,0.4) | border-color: #ff4d4d, box-shadow: 0 0 0 10px rgba(150,0,0,0) | border-color: #960000, box-shadow: 0 0 0 0 rgba(150,0,0,0.4) | 2s | — | .btn-emergency no mobile (@media max-width: 768px) |
| dep-pulse-ring | scale(1), opacity: 1 | scale(1.08), opacity: 0.7 | scale(1), opacity: 1 | 2.5s | ease-in-out | .dep-reveal-icon e seu ::after |
| infiniteScroll | translateX(0) | — | translateX(-50%) | 80s | linear | .reputation-carousel |
| wa-pulse-green | box-shadow: 0 0 0 0 rgba(37,211,102,0.7) | box-shadow: 0 0 0 10px rgba(37,211,102,0) | box-shadow: 0 0 0 0 rgba(37,211,102,0.7) | 2s | — | .wa-status-dot |
| wa-typing-ani | translateY(0), opacity: 0.4 | translateY(-4px), opacity: 1 | translateY(0), opacity: 0.4 | 1.4s | — | .wa-typing span (com stagger 0.2s) |

---

## 5. COMPORTAMENTOS JAVASCRIPT

| Funcao / Comportamento | Trigger | Acao executada | Classes add/remove | Elementos afetados |
|------------------------|---------|----------------|--------------------|-------------------|
| Navigation.handleScroll() | window.addEventListener('scroll', throttle(..., 100)) | Adiciona/remove .scrolled na nav; esconde/mostra nav no mobile via translateY | .scrolled | #nav |
| Navigation.openDrawer() | Clique em #navToggle | Abre drawer mobile | .active em #drawer e #drawerOverlay; .no-scroll no body | Drawer, overlay, body |
| Navigation.closeDrawer() | Clique em #drawerClose, #drawerOverlay, tecla ESC | Fecha drawer mobile | Remove .active e .no-scroll | Drawer, overlay, body |
| Navigation.handleLinkClick() | Clique em .nav-link ou .drawer-link | Smooth scroll para secao com offset de 80px | — | window |
| ScrollAnimations.observeElements() | DOMContentLoaded | Observa elementos para animacao de entrada | .animate-on-scroll, depois .visible | .section-header, .especialidade-card, .sobre-content, .contato-info, .cta-content, .faq-list |
| ScrollAnimations.animateDiferenciais() | DOMContentLoaded | Observer exclusivo para diferenciais | .visible em .diferencial-item | .diferenciais-list |
| initCounters() | DOMContentLoaded | Contador animado com easeOutQuart | — | .stat-number, .vstat-number |
| ParallaxEffect.updatePositions() | window.addEventListener('scroll') | Move .hero-visual e .image-accent-circle no scroll | — | Hero visual, circulo decorativo |
| HoverEffects.handleMagneticMove() | mousemove em .btn-primary, .btn-light | Efeito magnetico: botao segue cursor levemente | transform: translate(x*0.1px, y*0.1px) | Botoes primarios/light |
| HoverEffects.handleCardShine() | mousemove em .especialidade-card | Gradiente radial segue cursor no card | background: radial-gradient(...) | Cards de especialidade |
| ScrollProgress.init() | DOMContentLoaded | Cria barra de progresso de scroll dinamicamente | — | document.body (append) |
| initWaPremium() | DOMContentLoaded | Logica de exibicao do WhatsApp baseada em scroll e timers | .visible em #wa-main-btn; .show em #wa-message-bubble, #wa-notification | Botao WhatsApp, balao, badge |
| revelarVideo() | Clique em #depRevealOverlay ou fim do video 1 | Revela video 2: remove blur, mostra controles, troca tag | .dep-revealed, remove .dep-quote-blurred, .dep-name-blurred, .dep-dot-locked | #depVideoLocked, #video2, quote, author, dot, tag |
| togglePlay() | Clique em .faceta-video-wrapper, .dep-video-frame | Play/pause do video, toggle som (muted=false) | .is-playing | Container de video |
| openVideoModal() | Clique em .btn-amplify | Abre modal de video com src e limite de tempo opcional | .active em #videoModal | Modal de video |
| closeVideoModal() | Clique em .v-modal-overlay, .v-modal-close | Fecha modal, pausa video, reseta limite | Remove .active | Modal de video |
| checkVideoLimit() | ontimeupdate do video 2 | Pausa o video ao atingir o limite de segundos | — | #video2 |
| ContactForm.handleSubmit() | Submit do #ctaForm | Valida campos e redireciona para WhatsApp com mensagem pre-formatada | — | Formulario CTA |
| Accessibility.createSkipLink() | DOMContentLoaded | Cria link "Pular para conteudo principal" dinamicamente | — | document.body (prepend) |
| Accessibility.handleReducedMotion() | DOMContentLoaded | Se prefers-reduced-motion: reduce, zera todas as transicoes CSS | — | :root custom properties |
| CookieBanner.init() | DOMContentLoaded | Verifica localStorage e mostra banner se necessario | .ck-banner--visible | #ck-banner |
| CookieBanner.acceptAll() | Clique em #ck-accept-all, #ck-modal-accept-all | Aceita todos os cookies, salva estado, dispara evento | — | localStorage, evento customizado |
| CookieBanner.rejectAll() | Clique em #ck-reject, #ck-modal-reject | Rejeita cookies opcionais, salva estado | — | localStorage |
| CookieBanner.saveCustom() | Clique em #ck-modal-save | Salva preferencias customizadas dos toggles | — | localStorage |
| CookieBanner.updateFooterToggleIcon() | Apos decisao | Atualiza o toggle iOS no footer | .active / .inactive em #cookie-toggle | Toggle do footer |

---

## 6. RESPONSIVIDADE

| Breakpoint (max-width) | Elemento | Propriedade | Valor padrao | Valor no breakpoint |
|------------------------|----------|-------------|--------------|---------------------|
| 1024px | .hero-grid | grid-template-columns | 1fr 1fr | 1fr |
| 1024px | .hero-visual | order | 0 | -1 |
| 1024px | .transformation-grid | grid-template-columns | 1fr 1fr | 1fr |
| 1024px | .sobre-grid | grid-template-columns | 1fr 1.2fr | 1fr |
| 1024px | .diferenciais-grid | grid-template-columns | 1.2fr 1fr | 1fr |
| 1024px | .contato-grid | grid-template-columns | 1fr 1.2fr | 1fr |
| 1024px | .especialidades-grid | grid-template-columns | repeat(3, 1fr) | repeat(2, 1fr) |
| 1024px | .especialidade-card.featured | grid-column | span 2 | span 2 |
| 1024px | .footer-grid | grid-template-columns | repeat(4, 1fr) | repeat(2, 1fr) |
| 1024px | .visual-stats | position | absolute | relative |
| 768px | :root | --text-7xl | 4.5rem | 3rem |
| 768px | :root | --text-6xl | 3.75rem | 2.5rem |
| 768px | :root | --text-5xl | 3rem | 2rem |
| 768px | :root | --text-4xl | 2.25rem | 1.75rem |
| 768px | :root | --text-3xl | 1.875rem | 1.5rem |
| 768px | .nav | top/left/right | 0 / 0 / 0 | 15px / 10px / 10px |
| 768px | .nav | border-radius | 0 | 50px |
| 768px | .nav | background | rgba(255,255,255,0.95) | rgba(255,255,255,0.85) |
| 768px | .hero | height | 100vh | auto (min-height: 100vh) |
| 768px | .hero | background | linear-gradient(...) | none |
| 768px | .hero-video-bg | display | none | block |
| 768px | .hero-visual | display | block | none |
| 768px | .hero-actions .btn-emergency | order | 0 | -1 |
| 768px | .hero-actions .btn-emergency | animation | none | pulse-red-border 2s infinite |
| 768px | .nav-menu | position | flex no header | fixed, right: -100% |
| 768px | .nav-toggle | display | none | flex |
| 768px | .stat-divider | display | block | none |
| 768px | .especialidades-grid | grid-template-columns | repeat(2/3, 1fr) | 1fr |
| 768px | .especialidade-card.featured | grid-column | span 2 | span 1 |
| 768px | .footer-grid | grid-template-columns | repeat(2, 1fr) | 1fr |
| 768px | .footer-bottom-grid | flex-direction | row | column |
| 900px | .faceta-grid | grid-template-columns | 1fr 1fr | 1fr |
| 900px | .faceta-video-mobile | display | none | block |
| 900px | .faceta-visual | display | flex | none |
| 900px | .cta-grid | grid-template-columns | 1fr 1fr | 1fr |
| 900px | .cta-image-bg | width | 45% | 100% |
| 900px | .cta-image-bg | opacity | 0.8 | 0.3 |
| 900px | .cta-gradient-overlay | background | to right... | to bottom... |
| 900px | .dep-videos-wrapper | grid-template-columns | 1fr auto 1fr | 1fr |
| 900px | .dep-divider | flex-direction | column | row |
| 480px | .container | padding | 0 1.5rem | 0 1rem |
| 480px | .section | padding | 6rem 0 | 3rem 0 |
| 480px | .hero | padding | 140px 0 4rem | calc(4rem + 60px) 0 3rem |
| 480px | .diferencial-item | flex-direction | row | column |
| 480px | .visual-stats | flex-direction | row | column |
| 480px | .wa-premium-container | bottom/right | 40px | 20px |
| 480px | .wa-bubble | width | 300px | 260px |

---

## 7. PERFORMANCE & SEO TECNICO

| Tecnica | Elemento/Recurso | Detalhe |
|---------|------------------|---------|
| rel="preload" | assets/dr.vitor-tavares.webp | Pre-carregamento da imagem critica do hero |
| rel="preload" | Fontes WOFF2 (Montserrat, Outfit) | Pre-carregamento das fontes principais para evitar FOUT |
| fetchpriority="high" | Logo da navbar (logo-image) | Prioridade de carregamento alta para LCP |
| loading="eager" | Logo da navbar | Carregamento imediato do logo |
| loading="lazy" | Todas as outras imagens (<img>) | Imagens abaixo do fold carregam sob demanda |
| preload="metadata" | Videos da faceta e depoimentos | Apenas metadados carregados inicialmente; video 2 usa preload="none" |
| Schema.org @type: Dentist | JSON-LD no <head> | Campos: name, alternateName, url, logo, image[], description, telephone, priceRange, currenciesAccepted, paymentAccepted, foundingDate, address, geo, openingHoursSpecification, areaServed, founder, hasOfferCatalog, aggregateRating, sameAs |
| Schema.org @type: FAQPage | JSON-LD no <head> | 5 perguntas/respostas sobre implantes dentarios |
| Schema.org @type: WebSite | JSON-LD no <head> | name, url, publisher, inLanguage |
| Schema.org @type: WebPage | JSON-LD no <head> | name, description, isPartOf, about, inLanguage, datePublished, dateModified |
| Schema.org inline (FAQ) | <details>/<summary> no HTML | itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" e itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" |
| Geo Meta Tags | <head> | geo.region: BR-RJ, geo.placename: Rio de Janeiro, geo.position: -22.999;-43.365, ICBM: -22.999, -43.365 |
| Open Graph | <head> | og:type: website, og:title, og:description, og:url, og:site_name, og:image (1200x630), business:contact_data |
| Twitter Cards | <head> | twitter:card: summary_large_image, twitter:title, twitter:description, twitter:image |
| Canonical URL | <head> | http://www.odontonovoleblon.ag5agencia.site |
| Manifest.json | <head> | PWA com theme_color: #1A3A4A, background_color: #FAF8F5, icone 512x512 webp |
| Robots | <meta name="robots"> | index, follow, max-image-preview:large |
| Last Modified | <meta name="last-modified"> | 2026-04-29 |
| prefers-reduced-motion | Accessibility.handleReducedMotion() | Zera --transition-fast, --transition-base, --transition-slow para 0ms |
| Debounce/Throttle | Navigation.handleScroll() | Throttle de 100ms no scroll; Debounce disponivel como utilitario |
| Lazy Loading custom | LazyLoader | Intersection Observer para img[data-src] com rootMargin: '50px 0px' |
| Scroll Progress | ScrollProgress | Barra de progresso fixa no topo com gradiente dourado, z-index 10000 |
| Intersection Observer | ScrollAnimations | Animacoes de entrada otimizadas, nao dependentes de scroll events brutos |
| aspect-ratio CSS | .hero-image-frame, .ba-image-wrapper, .faceta-video-wrapper, .dep-video-frame | Proporcoes definidas em CSS para evitar CLS |
| Inline width/height | Todas as imagens principais | width e height explicitos no HTML para calculo de reserva de espaco |

---

## 8. ANTI-PADROES REGISTRADOS

**❌ NAVBAR FULL-WIDTH MOBILE**
→ Generico seria: uma barra de navegacao que ocupa 100% da largura da tela no mobile, com fundo solido e sem blur.
→ Aqui foi feito: uma "pill" flutuante com border-radius: 50px, backdrop-filter: blur(15px), posicionada com top: 15px; left: 10px; right: 10px, criando uma sensacao de interface nativa de app.
→ Prova tecnica: @media (max-width: 768px) { .nav { top: 15px !important; left: 10px !important; right: 10px !important; width: auto !important; border-radius: 50px; padding: 8px 0; background: rgba(255, 255, 255, 0.85) !important; backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12); border: 1px solid rgba(255, 255, 255, 0.3); margin: 0 !important; } }

**❌ HERO COM IMAGEM ESTATICA**
→ Generico seria: uma foto de stock do dentista com sorriso perfeito ocupando metade da tela.
→ Aqui foi feito: um video em retrato (aspect-ratio 4:5) do proprio profissional em acao, com elementos decorativos geometricos (linha dourada e circulo) posicionados fora do bounding box da imagem, mais um badge flutuante animado. No mobile, o video vira background full-bleed com overlay gradiente petroleo.
→ Prova tecnica: .hero-image-frame { position: relative; aspect-ratio: 4/5; overflow: hidden; } .image-accent-line { position: absolute; top: 20%; left: -20px; width: 60px; height: 2px; background: var(--color-accent); z-index: 2; }

**❌ BEFORE/AFTER COM SLIDER INTERATIVO**
→ Generico seria: um componente draggable com duas imagens sobrepostas e um handle no meio.
→ Aqui foi feito: um unico card editorial com tags posicionadas em cantos opostos ("Situacao Inicial" vermelha no topo-esquerdo, "Resultado Clinico" dourada no bottom-direito) e uma grid CSS assimétrica que alinha o texto verticalmente ao centro da imagem via grid-template-rows: 1fr auto auto 1fr.
→ Prova tecnica: .transformation-grid { grid-template-columns: 1fr 1fr; grid-template-rows: 1fr auto auto 1fr; column-gap: var(--space-20); row-gap: var(--space-4); } .transformation-header { grid-column: 2; grid-row: 2; } .transformation-visual { grid-column: 1; grid-row: 1 / span 4; }

**❌ DEPOIMENTOS EM CARROSSEL DE CARDS**
→ Generico seria: um slider com setas e dots, mostrando 3 depoimentos de texto por vez.
→ Aqui foi feito: dois videos em formato retrato (9:16) lado a lado, separados por um divisor vertical elegante, onde o segundo video esta intencionalmente bloqueado por blur (filter: blur(12px)) e so e revelado apos o primeiro terminar ou o usuario clicar no overlay — criando um gancho de retencao.
→ Prova tecnica: .dep-frame-blurred .dep-video-player { filter: blur(12px); transform: scale(1.05); opacity: 0.6; } e v1.addEventListener('ended', function() { revelarVideo(); });

**❌ REVIEWS EM GRID ESTATICA**
→ Generico seria: uma grid de 3 colunas com cards brancos, sombra e estrelas amarelas.
→ Aqui foi feito: um ticker horizontal infinito (animation: infiniteScroll 80s linear infinite) que rola automaticamente e pausa no hover, com cards que nao tem fundo nem border-radius — apenas uma borda esquerda dourada sutil (border-left: 1px solid rgba(201,169,98,.15)), criando um efeito de citacao editorial. Os primeiros cards sao duplicados no HTML para criar o loop continuo sem JavaScript.
→ Prova tecnica: @keyframes infiniteScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

**❌ WHATSAPP BOTAO VERDE GENERICO**
→ Generico seria: um botao verde fixo no canto inferior direito com icone do WhatsApp.
→ Aqui foi feito: uma simulacao completa de interface de chat com glassmorphism (backdrop-filter: blur(15px)), avatar do medico real com status online pulsante verde, animacao de "digitando..." com 3 bolinhas em stagger (animation-delay: 0.2s, 0.4s), mensagem contextual do Dr. Vitor, badge de notificacao vermelha, e trigger baseado no scroll do usuario (aparece 30s apos passar a secao de faceta).
→ Prova tecnica: .wa-bubble { background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border-radius: 16px; } e setTimeout(() => { bubble.classList.add('show'); ... }, 30000);

**❌ FAQ COM ACCORDION EM JQUERY**
→ Generico seria: um plugin de accordion com animacoes de altura e setas rotacionando 180graus.
→ Aqui foi feito: elementos nativos HTML5 <details>/<summary> sem JavaScript proprio, estilizados com pseudo-elementos ::after que trocam de content: '+' para content: '−', e com micro-schemas Schema.org inline (Question/Answer) em cada item.
→ Prova tecnica: .faq-item summary::after { content: '+'; position: absolute; right: var(--space-8); top: 50%; transform: translateY(-50%); font-size: var(--text-2xl); color: var(--color-accent); font-weight: 300; } .faq-item[open] summary::after { content: '−'; }

**❌ COOKIE BANNER DE UMA LINHA**
→ Generico seria: um banner com texto "Usamos cookies" e um botao "OK".
→ Aqui foi feito: um sistema completo de consentimento LGPD/GDPR com 5 categorias de cookies, toggle switches estilo iOS com input[type="checkbox"] e .ck-toggle__slider, modal de personalizacao, botoes de Aceitar/Rejeitar/Salvar Preferencias, toast de feedback dinamico, API publica (window.CookieBanner), persistencia em localStorage com expiracao de 365 dias, e integracao com um toggle visual no footer do site.
→ Prova tecnica: var CONFIG = { storageKey: 'site_cookie_consent', expiryDays: 365, bannerDelay: 600, ... }; e window.CookieBanner = { open: openModal, acceptAll: acceptAll, rejectAll: rejectAll, saveCustom: saveCustom, getPreferences: load, hasDecided: function() {...}, reset: function() {...} };

**❌ CTA COM FORMULARIO CENTRALIZADO EM FUNDO SOLIDO**
→ Generico seria: um formulario centralizado em um fundo azul ou branco, com campos alinhados verticalmente.
→ Aqui foi feito: o formulario flutua a esquerda sobre um fundo petroleo (#1A3A4A), enquanto uma imagem de recepcao ocupa 45% da largura a direita, sendo "engolida" por um gradiente que vai de opaco a esquerda para transparente a direita — criando profundidade e contexto de ambiente fisico.
→ Prova tecnica: .cta-image-bg { position: absolute; top: 0; right: 0; height: 100%; width: 45%; z-index: 1; } .cta-gradient-overlay { background: linear-gradient(to right, var(--color-primary) 10%, rgba(26, 58, 74, 0.85) 50%, transparent 100%); }

---

*Documento gerado por engenharia reversa completa do codigo-fonte. Todos os valores foram extraidos diretamente dos arquivos HTML, CSS e JS — nenhum valor foi inventado ou aproximado.*
