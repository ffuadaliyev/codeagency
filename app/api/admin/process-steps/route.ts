import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const steps = await prisma.processStep.findMany({
      orderBy: { order: 'asc' },
    })

    return NextResponse.json(steps)
  } catch (error) {
    console.error('Get process steps error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()

    const step = await prisma.processStep.create({
      data: {
        icon: data.icon,
        titleAz: data.titleAz,
        titleEn: data.titleEn,
        titleRu: data.titleRu,
        descAz: data.descAz,
        descEn: data.descEn,
        descRu: data.descRu,
        detailsAz: data.detailsAz,
        detailsEn: data.detailsEn,
        detailsRu: data.detailsRu,
        order: data.order,
      },
    })

    return NextResponse.json(step)
  } catch (error) {
    console.error('Create process step error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
