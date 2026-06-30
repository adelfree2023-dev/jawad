/**
 * JAWAD Advisory - Client-Side Logic & HTMX Event Handlers
 * 
 * Strict academic tone, zero emojis, robust error handling,
 * validation, and modal control.
 */

document.addEventListener('DOMContentLoaded', () => {
    initializeModal();
    initializeMobileMenu();
    initializeFormHandlers();
    initializeSmoothScrolling();
});

/**
 * Handles modal open, close, and keypress states.
 */
function initializeModal() {
    const modalOverlay = document.getElementById('consultationModal');
    const openButtons = document.querySelectorAll('[data-open-modal]');
    const closeButton = document.querySelector('.modal-close');

    if (!modalOverlay) return;

    // Open Modal
    openButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Pre-fill service input if triggered from service card
            const serviceName = btn.getAttribute('data-service-name');
            if (serviceName) {
                const serviceSelect = modalOverlay.querySelector('select[name="service"]');
                if (serviceSelect) {
                    serviceSelect.value = serviceName;
                }
            }
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling background
        });
    });

    // Close Modal
    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Escape Key Closing
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
}

/**
 * Mobile navigation menu toggle handler
 */
function initializeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

/**
 * Set up form validation and HTMX response processing.
 */
function initializeFormHandlers() {
    // Listen to HTMX events on forms
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            if (!validateForm(form)) {
                e.preventDefault();
                e.stopPropagation();
            }
        });

        // HTMX success handler after AJAX post completion
        form.addEventListener('htmx:afterRequest', (event) => {
            try {
                if (event.detail.successful) {
                    processSuccessfulSubmission(form);
                } else {
                    showToast('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.', 'error');
                }
            } catch (error) {
                // Adhering to Rule 2: error handling
                showToast('حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.', 'error');
            }
        });
    });
}

/**
 * Validates inputs based on strict rules.
 * @param {HTMLFormElement} form 
 * @returns {boolean}
 */
function validateForm(form) {
    const nameInput = form.querySelector('[name="name"]');
    const phoneInput = form.querySelector('[name="phone"]');

    if (nameInput && nameInput.value.trim().length < 3) {
        showToast('يرجى إدخال الاسم الثلاثي الكامل للتحقق.', 'error');
        nameInput.focus();
        return false;
    }

    if (phoneInput) {
        const phoneVal = phoneInput.value.trim();
        // Saudi standard format 05xxxxxxxx
        const saudiPhoneRegex = /^05\d{8}$/;
        if (!saudiPhoneRegex.test(phoneVal)) {
            showToast('صيغة رقم الجوال غير صحيحة. يجب أن يبدأ بـ 05 ويتكون من 10 أرقام.', 'error');
            phoneInput.focus();
            return false;
        }
    }

    return true;
}

/**
 * Processes successful form submission, initiates WhatsApp redirection,
 * shows success toast, and closes modal if open.
 * @param {HTMLFormElement} form 
 */
function processSuccessfulSubmission(form) {
    const formData = new FormData(form);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const service = formData.get('service') || 'استشارة مالية عامة';
    const message = formData.get('message') || 'لا توجد تفاصيل إضافية';

    // Construct highly professional, emoji-free message
    const formattedText = `طلب استشارة مالية\n\n` +
                          `الاسم الكامل: ${name}\n` +
                          `رقم الاتصال: ${phone}\n` +
                          `نوع الخدمة المطلوبة: ${service}\n` +
                          `تفاصيل الطلب: ${message}\n\n` +
                          `يرجى التنسيق لتحديد موعد الاستشارة المحاسبية.`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/966506662700?text=${encodedText}`;

    // Open WhatsApp in new tab safely (prevent opener hijacking)
    const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (newWindow) {
        newWindow.opener = null;
    }

    // Success Toast
    showToast('تم استلام طلبكم بنجاح. سنقوم بالتواصل معكم وتنسيق موعد الاستشارة خلال 24 ساعة.', 'success');

    // Reset Form
    form.reset();

    // Close Modal if the form was inside a modal
    const modalOverlay = document.getElementById('consultationModal');
    if (modalOverlay && modalOverlay.classList.contains('active')) {
        setTimeout(() => {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }, 1500);
    }
}

/**
 * Display toast message dynamically with sanitization.
 * @param {string} message 
 * @param {'success' | 'error'} type 
 */
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // XSS Prevention: Sanitizing output by using textContent
    toast.textContent = message;

    container.appendChild(toast);

    // Trigger CSS animation reflow
    setTimeout(() => toast.classList.add('show'), 50);

    // Remove toast after duration
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

/**
 * Configure smooth page scrolling with sticky menu height offset.
 */
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80; // height of the sticky nav
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}
