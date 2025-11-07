import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding services...')

  // AI Chatbot
  await prisma.service.upsert({
    where: { slug: 'chatbot' },
    update: {},
    create: {
      slug: 'chatbot',
      icon: 'Bot',
      titleAz: 'AI Chatbot',
      titleEn: 'AI Chatbot',
      titleRu: 'AI Чат-бот',
      descAz: '24/7 müştəri dəstəyi üçün ağıllı chatbot həlləri',
      descEn: 'Smart chatbot solutions for 24/7 customer support',
      descRu: 'Умные чат-боты для круглосуточной поддержки клиентов',
      featuresAz: JSON.stringify([
        'Məlumat bazası ilə inteqrasiya',
        'Çoxdilli cavablar və kontekst yaddaşı',
        'Sorğu yönləndirmə və avtomatik cavablandırma',
        'Bilik bazası və hesabatlama',
        '24/7 müştəri dəstəyi',
      ]),
      featuresEn: JSON.stringify([
        'Database integration',
        'Multilingual responses and context memory',
        'Query routing and automatic responses',
        'Knowledge base and reporting',
        '24/7 customer support',
      ]),
      featuresRu: JSON.stringify([
        'Интеграция с базой данных',
        'Многоязычные ответы и контекстная память',
        'Маршрутизация запросов и автоответы',
        'База знаний и отчетность',
        'Круглосуточная поддержка',
      ]),
      deliveryAz: '3-6 həftə',
      deliveryEn: '3-6 weeks',
      deliveryRu: '3-6 недель',
      priceRange: '2000-5000',
      order: 1,
    },
  })

  // Avtomatlaşdırma
  await prisma.service.upsert({
    where: { slug: 'automation' },
    update: {},
    create: {
      slug: 'automation',
      icon: 'Workflow',
      titleAz: 'Avtomatlaşdırma',
      titleEn: 'Automation',
      titleRu: 'Автоматизация',
      descAz: 'Biznes proseslərini avtomatlaşdırın və effektivliyi artırın',
      descEn: 'Automate business processes and increase efficiency',
      descRu: 'Автоматизируйте бизнес-процессы и повышайте эффективность',
      featuresAz: JSON.stringify([
        'İş axını orkestri',
        'Mütəmadi məlumat toplama və transformasiya',
        'Bildiriş və eskalasiya sistemləri',
        'Status izləmə və arxivləşdirmə',
        'ROI ölçülməsi',
      ]),
      featuresEn: JSON.stringify([
        'Workflow orchestration',
        'Regular data collection and transformation',
        'Notification and escalation systems',
        'Status tracking and archiving',
        'ROI measurement',
      ]),
      featuresRu: JSON.stringify([
        'Оркестрация рабочих процессов',
        'Регулярный сбор и преобразование данных',
        'Системы уведомлений и эскалации',
        'Отслеживание статуса и архивирование',
        'Измерение ROI',
      ]),
      deliveryAz: '4-8 həftə',
      deliveryEn: '4-8 weeks',
      deliveryRu: '4-8 недель',
      priceRange: '3000-8000',
      order: 2,
    },
  })

  // Veb və Mobil
  await prisma.service.upsert({
    where: { slug: 'web-mobile' },
    update: {},
    create: {
      slug: 'web-mobile',
      icon: 'Globe',
      titleAz: 'Veb və Mobil',
      titleEn: 'Web & Mobile',
      titleRu: 'Веб и мобильные',
      descAz: 'Premium UI/UX ilə responsive veb və mobil tətbiqlər',
      descEn: 'Responsive web and mobile apps with premium UI/UX',
      descRu: 'Адаптивные веб и мобильные приложения с премиум UI/UX',
      featuresAz: JSON.stringify([
        'Responsive və mobil-öncə dizayn',
        'E-commerce və ödəniş inteqrasiyası',
        'Rezervasiya və şəxsi kabinet',
        'Çoxdillilik və SEO optimallaşdırma',
        'Test və monitorinq',
      ]),
      featuresEn: JSON.stringify([
        'Responsive and mobile-first design',
        'E-commerce and payment integration',
        'Booking and personal cabinet',
        'Multilingual and SEO optimization',
        'Testing and monitoring',
      ]),
      featuresRu: JSON.stringify([
        'Адаптивный и мобильный дизайн',
        'Интеграция электронной коммерции и платежей',
        'Бронирование и личный кабинет',
        'Многоязычность и SEO-оптимизация',
        'Тестирование и мониторинг',
      ]),
      deliveryAz: '4-12 həftə',
      deliveryEn: '4-12 weeks',
      deliveryRu: '4-12 недель',
      priceRange: '5000-15000',
      order: 3,
    },
  })

  console.log('Services seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
