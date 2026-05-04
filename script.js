/**
 * Odonto Novo Leblon
 * JavaScript Vanilla ES6
 * Interações e Animações
 */

// ============================================
// UTILITÁRIOS
// ============================================

/**
 * Debounce function para otimizar eventos de scroll/resize
 */
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/**
 * Throttle function para limitar frequência de execução
 */
const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// ============================================
// NAVEGAÇÃO
// ============================================

class Navigation {
    constructor() {
        this.nav = document.getElementById('nav');
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        // Drawer elements
        this.drawer = document.getElementById('drawer');
        this.drawerOverlay = document.getElementById('drawerOverlay');
        this.drawerClose = document.getElementById('drawerClose');
        this.drawerLinks = document.querySelectorAll('.drawer-link');
        
        this.init();
    }
    
    init() {
        // Scroll effect na navegação
        window.addEventListener('scroll', throttle(() => this.handleScroll(), 100));
        
        // Toggle do menu mobile (abre o Drawer)
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.openDrawer());
        }
        
        // Fechar Drawer
        if (this.drawerClose) {
            this.drawerClose.addEventListener('click', () => this.closeDrawer());
        }
        
        if (this.drawerOverlay) {
            this.drawerOverlay.addEventListener('click', () => this.closeDrawer());
        }
        
        // Fechar menu ao clicar em link (Desktop)
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleLinkClick(e));
        });
        
        // Fechar Drawer ao clicar em link (Mobile)
        this.drawerLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                this.closeDrawer();
                this.handleLinkClick(e);
            });
        });
        
        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => this.handleOutsideClick(e));
        
        // Tecla ESC fecha menu e drawer
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMenu();
                this.closeDrawer();
            }
        });
    }
    
    handleScroll() {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            this.nav.classList.add('scrolled');
        } else {
            this.nav.classList.remove('scrolled');
        }
    }
    
    openDrawer() {
        if (this.drawer) this.drawer.classList.add('active');
        if (this.drawerOverlay) this.drawerOverlay.classList.add('active');
        document.body.classList.add('no-scroll');
    }
    
    closeDrawer() {
        if (this.drawer) this.drawer.classList.remove('active');
        if (this.drawerOverlay) this.drawerOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
    
    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.navToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }
    
    closeMenu() {
        if (this.navMenu) this.navMenu.classList.remove('active');
        if (this.navToggle) this.navToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
    
    handleLinkClick(e) {
        this.closeMenu();
        
        // Smooth scroll para seção
        const href = e.currentTarget.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    }
    
    handleOutsideClick(e) {
        if (this.navMenu && this.navMenu.classList.contains('active') && 
            !this.nav.contains(e.target)) {
            this.closeMenu();
        }
    }
}

// ============================================
// ANIMAÇÕES DE SCROLL
// ============================================

class ScrollAnimations {
    constructor() {
        this.animatedElements = [];
        this.observerOptions = {
            root: null,
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.1
        };
        
        this.init();
    }
    
    init() {
        // Configurar Intersection Observer
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            this.observerOptions
        );
        
        // Observar elementos
        this.observeElements();
        
        // Animação dos diferenciais com delay
        this.animateDiferenciais();
    }
    
    observeElements() {
        // Selecionar elementos para animar
        const selectors = [
            '.section-header',
            '.especialidade-card',
            '.sobre-content',
            '.contato-info',
            '.cta-content'
        ];
        
        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((el, index) => {
                el.classList.add('animate-on-scroll');
                el.style.transitionDelay = `${index * 100}ms`;
                this.observer.observe(el);
            });
        });
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                this.observer.unobserve(entry.target);
            }
        });
    }
    
    animateDiferenciais() {
        const diferenciais = document.querySelectorAll('.diferencial-item');
        
        const diferenciaisObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = entry.target.querySelectorAll('.diferencial-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 150);
                    });
                    diferenciaisObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        const container = document.querySelector('.diferenciais-list');
        if (container) {
            diferenciaisObserver.observe(container);
        }
    }
}

// ============================================
// CONTADOR ANIMADO
// ============================================

class AnimatedCounter {
    constructor(element, target, duration = 2000) {
        this.element = element;
        this.target = target;
        this.duration = duration;
        this.startTime = null;
        this.startValue = 0;
    }
    
    start() {
        requestAnimationFrame((timestamp) => this.animate(timestamp));
    }
    
    animate(timestamp) {
        if (!this.startTime) this.startTime = timestamp;
        
        const progress = Math.min((timestamp - this.startTime) / this.duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(this.startValue + (this.target - this.startValue) * easeOutQuart);
        
        this.element.textContent = currentValue.toLocaleString('pt-BR');
        
        if (progress < 1) {
            requestAnimationFrame((timestamp) => this.animate(timestamp));
        }
    }
}

// Inicializar contadores quando visíveis
const initCounters = () => {
    const counters = document.querySelectorAll('.stat-number, .vstat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.textContent;
                
                // Extrair número do texto
                const match = text.match(/[\d,]+/);
                if (match) {
                    const target = parseInt(match[0].replace(/,/g, ''));
                    const suffix = text.replace(match[0], '');
                    
                    const counter = new AnimatedCounter(element, target, 2000);
                    counter.start();
                    
                    // Restaurar sufixo após animação
                    setTimeout(() => {
                        element.textContent = target.toLocaleString('pt-BR') + suffix;
                    }, 2100);
                }
                
                counterObserver.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
};

// ============================================
// PARALLAX EFFECT
// ============================================

class ParallaxEffect {
    constructor() {
        this.elements = document.querySelectorAll('.hero-visual, .image-accent-circle');
        this.ticking = false;
        
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => this.handleScroll());
    }
    
    handleScroll() {
        if (!this.ticking) {
            requestAnimationFrame(() => {
                this.updatePositions();
                this.ticking = false;
            });
            this.ticking = true;
        }
    }
    
    updatePositions() {
        const scrollY = window.scrollY;
        
        this.elements.forEach(el => {
            const speed = el.classList.contains('image-accent-circle') ? 0.1 : 0.05;
            const yPos = scrollY * speed;
            el.style.transform = `translateY(${yPos}px)`;
        });
    }
}

// ============================================
// EFEITOS DE HOVER
// ============================================

class HoverEffects {
    constructor() {
        this.init();
    }
    
    init() {
        // Efeito magnético nos botões
        const magneticButtons = document.querySelectorAll('.btn-primary, .btn-light');
        
        magneticButtons.forEach(button => {
            button.addEventListener('mousemove', (e) => this.handleMagneticMove(e, button));
            button.addEventListener('mouseleave', (e) => this.handleMagneticLeave(e, button));
        });
        
        // Efeito de brilho nos cards
        const cards = document.querySelectorAll('.especialidade-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => this.handleCardShine(e, card));
        });
    }
    
    handleMagneticMove(e, button) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    }
    
    handleMagneticLeave(e, button) {
        button.style.transform = 'translate(0, 0)';
    }
    
    handleCardShine(e, card) {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        card.style.background = `
            radial-gradient(circle at ${x}% ${y}%, 
            rgba(201, 169, 98, 0.15) 0%, 
            rgba(255, 255, 255, 0.05) 50%)
        `;
    }
}

// ============================================
// SCROLL PROGRESS
// ============================================

class ScrollProgress {
    constructor() {
        this.init();
    }
    
    init() {
        // Criar barra de progresso
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--color-accent), var(--color-accent-light));
            z-index: 10000;
            transition: width 0.1s ease-out;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', throttle(() => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            progressBar.style.width = `${progress}%`;
        }, 50));
    }
}

// ============================================
// LAZY LOADING DE IMAGENS
// ============================================

class LazyLoader {
    constructor() {
        this.init();
    }
    
    init() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px'
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// ============================================
// FORMULÁRIO DE CONTATO (se houver)
// ============================================

class ContactForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        if (this.form) {
            this.init();
        }
    }
    
    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Validação em tempo real
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }
    
    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        if (field.required && !value) {
            isValid = false;
            errorMessage = 'Este campo é obrigatório';
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Por favor, insira um e-mail válido';
            }
        } else if (field.type === 'tel' && value) {
            const phoneRegex = /^[\d\s\-\(\)\+]+$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Por favor, insira um telefone válido';
            }
        }
        
        if (!isValid) {
            this.showError(field, errorMessage);
        }
        
        return isValid;
    }
    
    showError(field, message) {
        this.clearError(field);
        
        field.classList.add('error');
        const errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        field.parentNode.appendChild(errorElement);
    }
    
    clearError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const inputs = this.form.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            this.showSuccess();
            this.form.reset();
        }
    }
    
    showSuccess() {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div class="success-content">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h3>Mensagem Enviada!</h3>
                <p>Entraremos em contato em breve.</p>
            </div>
        `;
        
        this.form.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
}

// ============================================
// ACESSIBILIDADE
// ============================================

class Accessibility {
    constructor() {
        this.init();
    }
    
    init() {
        // Skip link
        this.createSkipLink();
        
        // Focus visible
        this.handleFocusVisible();
        
        // Redução de movimento
        this.handleReducedMotion();
    }
    
    createSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Pular para conteúdo principal';
        skipLink.style.cssText = `
            position: absolute;
            top: -100%;
            left: 50%;
            transform: translateX(-50%);
            background: var(--color-primary);
            color: var(--color-white);
            padding: 1rem 2rem;
            z-index: 10001;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '1rem';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-100%';
        });
        
        document.body.prepend(skipLink);
    }
    
    handleFocusVisible() {
        document.addEventListener('mousedown', () => {
            document.body.classList.add('using-mouse');
        });
        
        document.addEventListener('keydown', () => {
            document.body.classList.remove('using-mouse');
        });
    }
    
    handleReducedMotion() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        if (prefersReducedMotion.matches) {
            document.documentElement.style.setProperty('--transition-fast', '0ms');
            document.documentElement.style.setProperty('--transition-base', '0ms');
            document.documentElement.style.setProperty('--transition-slow', '0ms');
        }
    }
}

// ============================================
// WHATSAPP PREMIUM EXPERIENCE
// ============================================

function initWaPremium() {
    const bubble = document.getElementById('wa-message-bubble');
    const typing = document.getElementById('wa-typing');
    const realMessage = document.getElementById('wa-real-message');
    const badge = document.getElementById('wa-notification');
    const closeBtn = document.getElementById('wa-close-btn');
    const mainBtn = document.getElementById('wa-main-btn');

    if (!bubble || !typing || !realMessage || !badge || !closeBtn || !mainBtn) return;

    // 1. Mostrar o botão flutuante sutilmente após o usuário passar da metade da segunda seção após a hero
    const handleWaScroll = () => {
        const triggerSection = document.getElementById('faceta-artificial');
        if (triggerSection) {
            const rect = triggerSection.getBoundingClientRect();
            // A seção passou da metade quando seu ponto central está acima da metade da tela
            if (rect.top + (rect.height / 2) < window.innerHeight) {
                mainBtn.classList.add('visible');
                window.removeEventListener('scroll', handleWaScroll);
            }
        }
    };
    window.addEventListener('scroll', handleWaScroll);

    // 2. Mostrar o popup de mensagem após 30 segundos de navegação
    setTimeout(() => {
        // Se o usuário já fechou o balão antes dele abrir (caso improvável mas possível via código), não abre
        if (!bubble.classList.contains('show')) {
            bubble.classList.add('show');
            
            // Simular digitação por 2.5 segundos antes de mostrar a mensagem
            setTimeout(() => {
                typing.style.display = 'none';
                realMessage.style.display = 'block';
                realMessage.style.opacity = '0';
                realMessage.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    realMessage.style.opacity = '1';
                }, 50);
            }, 2500);
        }

    }, 30000); // 30 segundos

    // Fechar balão
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        bubble.classList.remove('show');
        // Mostrar notificação após fechar para manter engajamento
        setTimeout(() => {
            badge.classList.add('show');
        }, 2000);
    });

    // Ao clicar no botão, remove tudo
    mainBtn.addEventListener('click', () => {
        bubble.classList.remove('show');
        badge.classList.remove('show');
    });
}

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar navegação
    new Navigation();
    
    // Inicializar animações de scroll
    new ScrollAnimations();
    
    // Inicializar contadores
    initCounters();
    
    // Inicializar parallax
    new ParallaxEffect();
    
    // Inicializar efeitos de hover
    new HoverEffects();
    
    // Inicializar scroll progress
    new ScrollProgress();
    
    // Inicializar lazy loading
    new LazyLoader();
    
    // Inicializar acessibilidade
    new Accessibility();

    // Inicializar WhatsApp Premium
    initWaPremium();
    
    // Adicionar classe ao body para animação inicial
    document.body.classList.add('loaded');
    
    // Console message
    console.log('%c Odonto Novo Leblon ', 'background: #1A3A4A; color: #C9A962; font-size: 20px; font-weight: bold; padding: 10px 20px;');
    console.log('%c Odonto Novo Leblon - Especialista em Implantes ', 'color: #1A3A4A; font-size: 14px;');
});

// ============================================
// UTILITÁRIOS GLOBAIS
// ============================================

// Smooth scroll para âncoras
window.smoothScrollTo = (target, offset = 80) => {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (element) {
        const top = element.offsetTop - offset;
        window.scrollTo({
            top,
            behavior: 'smooth'
        });
    }
};

// Verificar se elemento está na viewport
window.isInViewport = (element, threshold = 0) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= -threshold &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + threshold &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Formatar número para moeda brasileira
window.formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
};

// Formatar telefone brasileiro
window.formatPhone = (value) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
};

// ============================================
// FORMULÁRIO CTA — REDIRECIONAMENTO WHATSAPP
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const ctaForm = document.getElementById('ctaForm');
    if (!ctaForm) return;

    ctaForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('formNome').value.trim();
        const email = document.getElementById('formEmail').value.trim();
        const telefone = document.getElementById('formTelefone').value.trim();
        const motivo = document.getElementById('formMotivo').value;
        const mensagem = document.getElementById('formMensagem').value.trim();

        let texto = `Olá, me chamo ${nome}, vim através do site e gostaria de uma informação.`;
        texto += `\n\n- E-mail: ${email}`;
        texto += `\n- Telefone: ${telefone}`;
        texto += `\n- Serviço: ${motivo}`;
        if (mensagem) {
            texto += `\n- Situação: ${mensagem}`;
        }

        const numeroWhatsApp = '5521997274651';
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank');
    });

    // Máscara simples para telefone
    const telInput = document.getElementById('formTelefone');
    if (telInput) {
        telInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            if (value.length > 6) {
                value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
            } else if (value.length > 2) {
                value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            }
            e.target.value = value;
        });
    }
});
