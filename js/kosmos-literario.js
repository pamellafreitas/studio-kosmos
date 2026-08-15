/**
 * Kosmos Literário - Interatividade & Animações 3D (GSAP)
 */
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
    document.querySelectorAll(".mobile-link").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.add("hidden");
      });
    });
  }

  // Scroll Reveal Animations Observer (.reveal-on-scroll)
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(element => {
    revealObserver.observe(element);
  });

  // GSAP Interactive 3D Mouse Tilt Effect for Hero Cards & Livros Card
  const cardsWrapper = document.getElementById('cards-wrapper');
  const livrosCardWrapper = document.getElementById('livros-card-wrapper');
  
  if (cardsWrapper && typeof gsap !== 'undefined') {
    gsap.set(cardsWrapper, { 
      rotationY: -15, 
      rotationX: 10, 
      rotationZ: -5, 
      transformPerspective: 2000 
    });
  }

  if (livrosCardWrapper && typeof gsap !== 'undefined') {
    gsap.set(livrosCardWrapper, { 
      rotationY: -18, 
      rotationX: 12, 
      rotationZ: -6, 
      transformPerspective: 2000 
    });
  }

  document.addEventListener('mousemove', (e) => {
    const xNorm = (e.clientX / window.innerWidth) - 0.5;
    const yNorm = (e.clientY / window.innerHeight) - 0.5;
    
    if (cardsWrapper && typeof gsap !== 'undefined') {
      gsap.to(cardsWrapper, {
        rotationY: -15 + (xNorm * 25),
        rotationX: 10 - (yNorm * 25),
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto"
      });
    }

    if (livrosCardWrapper && typeof gsap !== 'undefined') {
      gsap.to(livrosCardWrapper, {
        rotationY: -18 + (xNorm * 20),
        rotationX: 12 - (yNorm * 20),
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto"
      });
    }
  });

  // Portfolio Filtering Logic
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  const modal = document.getElementById('portfolio-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalTag = document.getElementById('modal-tag');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (filterBtns.length && portfolioCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('active', 'bg-[#9110DC]', 'shadow-[0_0_20px_rgba(145,16,220,0.5)]', 'border-[#B336FF]/60');
          b.classList.add('bg-white/[0.06]', 'text-white/80', 'border-white/15');
        });
        btn.classList.add('active', 'bg-[#9110DC]', 'shadow-[0_0_20px_rgba(145,16,220,0.5)]', 'border-[#B336FF]/60');
        btn.classList.remove('bg-white/[0.06]', 'text-white/80', 'border-white/15');

        const filter = btn.getAttribute('data-filter');
        portfolioCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Lightbox Modal Interactions
  if (portfolioCards.length && modal && modalImg) {
    portfolioCards.forEach(card => {
      card.addEventListener('click', () => {
        const src = card.getAttribute('data-src');
        const title = card.getAttribute('data-title');
        const tag = card.getAttribute('data-tag');

        if (src) {
          modalImg.src = src;
          if (modalTitle) modalTitle.textContent = title || 'Projeto Literário Stúdio Kosmos';
          if (modalTag) modalTag.textContent = tag || '#STUDIO_KOSMOS';
          modal.classList.remove('hidden');
        }
      });
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });

    // ESC key closes modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
      }
    });
  }

  // FAQ Accordion Toggle Logic
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length) {
    faqItems.forEach(item => {
      const button = item.querySelector('.faq-btn');
      const content = item.querySelector('.faq-content');
      const icon = item.querySelector('.faq-icon');

      if (button && content) {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          const isOpen = item.classList.contains('active') || !content.classList.contains('hidden');

          // Close all FAQ items
          faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
            const otherContent = otherItem.querySelector('.faq-content');
            const otherIcon = otherItem.querySelector('.faq-icon');
            if (otherContent) otherContent.classList.add('hidden');
            if (otherIcon) {
              otherIcon.textContent = '+';
              otherIcon.classList.remove('bg-[#9110DC]', 'text-white');
            }
            otherItem.classList.remove('border-[#B336FF]/70', 'bg-[#18102A]', 'shadow-[0_10px_30px_rgba(145,16,220,0.4)]');
            otherItem.classList.add('border-white/15', 'bg-[#140E22]/90');
          });

          // Open current item if it was closed
          if (!isOpen) {
            item.classList.add('active');
            content.classList.remove('hidden');
            if (icon) {
              icon.textContent = '−';
              icon.classList.add('bg-[#9110DC]', 'text-white');
            }
            item.classList.remove('border-white/15', 'bg-[#140E22]/90');
            item.classList.add('border-[#B336FF]/70', 'bg-[#18102A]', 'shadow-[0_10px_30px_rgba(145,16,220,0.4)]');
          }
        });
      }
    });
  }
});

