import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const values = await prisma.value.findMany({
      orderBy: { order: 'asc' },
    })

    return NextResponse.json(values)
  } catch (error) {
    console.error('Get values error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()

    const value = await prisma.value.create({
      data: {
        icon: data.icon,
        titleAz: data.titleAz,
        titleEn: data.titleEn,
        titleRu: data.titleRu,
        descAz: data.descAz,
        descEn: data.descEn,
        descRu: data.descRu,
        order: data.order || 0,
      },
    })

    return NextResponse.json(value)
  } catch (error) {
    console.error('Create value error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
