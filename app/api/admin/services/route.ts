import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

// GET all services
export async function GET() {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const services = await prisma.service.findMany({
      orderBy: { order: 'asc' },
    })

    return NextResponse.json(services)
  } catch (error) {
    console.error('Get services error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST create new service
export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()

    const service = await prisma.service.create({
      data: {
        slug: data.slug,
        icon: data.icon,
        titleAz: data.titleAz,
        titleEn: data.titleEn,
        titleRu: data.titleRu,
        descAz: data.descAz,
        descEn: data.descEn,
        descRu: data.descRu,
        featuresAz: JSON.stringify(data.featuresAz || []),
        featuresEn: JSON.stringify(data.featuresEn || []),
        featuresRu: JSON.stringify(data.featuresRu || []),
        deliveryAz: data.deliveryAz,
        deliveryEn: data.deliveryEn,
        deliveryRu: data.deliveryRu,
        priceRange: data.priceRange,
        order: data.order || 0,
      },
    })

    return NextResponse.json(service)
  } catch (error) {
    console.error('Create service error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
