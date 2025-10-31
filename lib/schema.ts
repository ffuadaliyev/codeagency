// Schema.org structured data for SEO

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Code Agency',
  url: 'https://codeagency.az',
  logo: 'https://codeagency.az/logo.png',
  description:
    'AI və avtomatlaşdırma həlləri, veb və mobil inkişaf, data science xidmətləri.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bakı',
    addressCountry: 'AZ',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+994-50-123-45-67',
    contactType: 'customer service',
    email: 'info@codeagency.az',
    availableLanguage: ['az', 'en'],
  },
  sameAs: [
    'https://facebook.com/codeagency',
    'https://linkedin.com/company/codeagency',
    'https://instagram.com/codeagency',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Code Agency',
  url: 'https://codeagency.az',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://codeagency.az/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export const serviceSchema = (service: {
  name: string
  description: string
  url: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.name,
  provider: {
    '@type': 'Organization',
    name: 'Code Agency',
    url: 'https://codeagency.az',
  },
  description: service.description,
  areaServed: {
    '@type': 'Country',
    name: 'Azerbaijan',
  },
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: service.url,
  },
})

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})
