// Initialize EmailJS
emailjs.init('2s1WDFyr77H4SmL-R');

// State management
let isScrolled = false;
let visibleSections = new Set();
let isSubmitting = false;

// Services data
const services = [
  "Full yard & garden overhaul / rework / design",
  "Turf installation", 
  "Garden bed design & planting",
  "Mulchwork & soil prepping",
  "Hedge and screening installation"
];

const serviceImages = [
  'Screenshot 2025-08-23 084134.png',
  'files_6614947-1755904577218-unrolling-sod.webp', 
  'files_6614947-1755904677971-My-Raised-Bed-Garden-Design-Tips-1024x538.webp',
  'files_6614947-1755904569347-18101010259436359-m-90-600.jpg',
  'files_6614947-1755904559610-18059309800659720-m-90-600.jpg'
];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Setup event listeners
  setupEventListeners();
  
  // Generate service cards
  generateServiceCards();
  
  // Initial scroll check
  handleScroll();
  
  // Setup scroll listener
  window.addEventListener('scroll', handleScroll);
});

function setupEventListeners() {
  // Book buttons
  document.getElementById('header-book-btn').addEventListener('click', scrollToContact);
  document.getElementById('header-book-mobile').addEventListener('click', scrollToContact);
  document.getElementById('hero-book-btn').addEventListener('click', scrollToContact);
  
  // Form submission
  document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);
}

function generateServiceCards() {
  const servicesGrid = document.querySelector('.grid.md\\:grid-cols-2.lg\\:grid-cols-3.gap-8');
  
  services.forEach((service, index) => {
    const card = document.createElement('div');
    card.id = `service-card-${index}`;
    card.className = `group hover:shadow-2xl transition-all duration-500 border-2 border-gray-300 shadow-2xl overflow-hidden transform hover:scale-105 rounded-lg bg-white opacity-0 ${getServiceCardAnimation(index)}`;
    
    card.innerHTML = `
      <div class="h-48 bg-gradient-to-br from-emerald-100 to-green-200 relative overflow-hidden">
        <img 
          src="${serviceImages[index]}" 
          alt="${service}"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div class="absolute inset-0" style="background-color: rgba(233, 254, 240, 0.35);"></div>
      </div>
      <div class="p-6">
        <h3 class="text-lg font-bold text-gray-900 mb-2">${service}</h3>
        <p class="text-gray-600">
          Professional ${service.toLowerCase()} tailored to Canberra's climate and soil conditions.
        </p>
      </div>
    `;
    
    servicesGrid.appendChild(card);
  });
}

function getServiceCardAnimation(index) {
  const isLeftColumn = index % 3 === 0;
  const isRightColumn = index % 3 === 2;
  
  if (isLeftColumn) {
    return '-translate-x-12';
  } else if (isRightColumn) {
    return 'translate-x-12';
  } else {
    const slideLeft = Math.floor(index / 3) % 2 === 0;
    return slideLeft ? '-translate-x-12' : 'translate-x-12';
  }
}

function handleScroll() {
  const scrollY = window.scrollY;
  const newIsScrolled = scrollY > 50;
  
  if (newIsScrolled !== isScrolled) {
    isScrolled = newIsScrolled;
    updateHeader();
  }
  
  // Check visibility of sections
  checkSectionVisibility();
}

function updateHeader() {
  const header = document.getElementById('header');
  const logo = document.getElementById('header-logo');
  const title = document.getElementById('header-title');
  const phone = document.getElementById('header-phone');
  const bookBtn = document.getElementById('header-book-btn');
  const bookMobile = document.getElementById('header-book-mobile');
  
  if (isScrolled) {
    header.className = 'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 bg-green-500/20 backdrop-blur-md shadow-lg py-2';
    logo.className = 'w-auto transition-all duration-300 h-8 md:h-10';
    title.className = 'text-sm md:text-2xl font-bold transition-colors duration-300 text-gray-900';
    phone.className = 'flex items-center space-x-2 text-sm transition-colors duration-300 text-gray-600';
    bookBtn.className = 'transition-all duration-300 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-md font-medium text-white';
    bookMobile.className = 'transition-all duration-300 text-xs px-3 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-md font-medium text-white';
  } else {
    header.className = 'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 bg-green-500 shadow-sm py-4';
    logo.className = 'w-auto transition-all duration-300 h-12 md:h-16';
    title.className = 'text-sm md:text-2xl font-bold transition-colors duration-300 text-white';
    phone.className = 'flex items-center space-x-2 text-sm transition-colors duration-300 text-white/90';
    bookBtn.className = 'transition-all duration-300 bg-white text-green-500 hover:bg-gray-100 px-4 py-2 rounded-md font-medium';
    bookMobile.className = 'transition-all duration-300 text-xs px-3 py-2 bg-white text-green-500 hover:bg-gray-100 rounded-md font-medium';
  }
}

function checkSectionVisibility() {
  const sections = [
    'hero-badge', 'hero-title', 'hero-description', 'hero-buttons', 'hero-trust-points',
    'services-header', 'trust-header', 'trust-card-0', 'trust-card-1', 'trust-card-2', 'trust-info',
    'contact-header', 'contact-form-header', 'contact-form-fields',
    'faq-header', 'faq-item-0', 'faq-item-1', 'faq-item-2',
    'footer-content'
  ];
  
  // Add service cards
  for (let i = 0; i < services.length; i++) {
    sections.push(`service-card-${i}`);
  }
  
  const newVisibleSections = new Set(visibleSections);
  
  sections.forEach(sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const visibilityRatio = Math.max(0, visibleHeight) / elementHeight;
      
      if (visibilityRatio >= 0.15 && rect.top < windowHeight && rect.bottom > 0) {
        if (!newVisibleSections.has(sectionId)) {
          newVisibleSections.add(sectionId);
          animateElementIn(element, sectionId);
        }
      }
    }
  });
  
  visibleSections = newVisibleSections;
}

function animateElementIn(element, sectionId) {
  // Remove opacity and transform classes
  element.classList.remove('opacity-0', '-translate-y-8', 'translate-y-8', '-translate-x-12', 'translate-x-12', 'translate-y-12', 'scale-95');
  element.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100');
}

function scrollToContact() {
  const contactSection = document.getElementById('contact-header');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

async function handleFormSubmit(e) {
  e.preventDefault();
  
  if (isSubmitting) return;
  
  isSubmitting = true;
  
  const submitBtn = document.getElementById('submit-btn');
  const submitText = document.getElementById('submit-text');
  const submitLoading = document.getElementById('submit-loading');
  
  // Show loading state
  submitText.classList.add('hidden');
  submitLoading.classList.remove('hidden');
  submitBtn.disabled = true;
  
  try {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Send email using EmailJS
    await emailjs.send(
      'service_3jb89e1',
      'new_inquiry',
      {
        from_name: data.name,
        from_phone: data.phone,
        from_email: data.email,
        suburb: data.suburb,
        service: data.service,
        message: data.message,
        to_name: 'Realityscapes CBR',
      }
    );
    
    // Send auto-reply to customer if email provided
    if (data.email) {
      await emailjs.send(
        'service_3jb89e1',
        'customer_auto_reply',
        {
          to_name: data.name,
          to_email: data.email,
        }
      );
    }
    
    // Show success message
    document.getElementById('form-container').classList.add('hidden');
    document.getElementById('form-success').classList.remove('hidden');
    
    // Redirect to thank you page after delay
    setTimeout(() => {
      window.location.href = 'thank-you.html';
    }, 2000);
    
  } catch (error) {
    console.error('Failed to send email:', error);
    alert('Sorry, there was an error sending your message. Please try calling us directly at 0415 174 668.');
  } finally {
    isSubmitting = false;
    submitText.classList.remove('hidden');
    submitLoading.classList.add('hidden');
    submitBtn.disabled = false;
  }
}

function toggleFaq(index) {
  const content = document.getElementById(`faq-content-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    icon.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('hidden');
    icon.style.transform = 'rotate(0deg)';
  }
}