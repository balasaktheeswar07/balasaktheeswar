const header = document.querySelector('.site-header');

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 20);
  });
}

// LibreCounter's official image embed returns the live aggregate count and
// identifies the site from the page referrer. No API key or private credential
// is required. Keep this in the existing footer rather than adding a section.
const footerBottom = document.querySelector('.footer-bottom');

if (footerBottom && !footerBottom.querySelector('.visitor-counter')) {
  const counterLink = document.createElement('a');
  counterLink.className = 'visitor-counter';
  counterLink.href = 'https://librecounter.org/referer/show';
  counterLink.target = '_blank';
  counterLink.rel = 'noopener';
  counterLink.setAttribute('aria-label', 'View public visitor statistics');
  counterLink.style.display = 'inline-flex';
  counterLink.style.alignItems = 'center';
  counterLink.style.flexShrink = '0';
  counterLink.style.lineHeight = '1';

  const counterImage = document.createElement('img');
  counterImage.src = 'https://librecounter.org/counter.svg';
  counterImage.alt = 'Visitor counter';
  counterImage.title = 'Visitor count provided by LibreCounter';
  counterImage.referrerPolicy = 'unsafe-url';
  counterImage.height = 16;
  counterImage.style.display = 'block';
  counterImage.style.width = 'auto';
  counterImage.style.maxWidth = '100%';

  counterLink.append(counterImage);
  footerBottom.append(counterLink);
  footerBottom.style.flexWrap = 'wrap';
  footerBottom.style.alignItems = 'center';
}
