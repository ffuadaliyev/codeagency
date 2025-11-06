import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const value = await prisma.value.findUnique({
      where: { id: params.id },
    })

    if (!value) {
      return NextResponse.json({ error: 'Value not found' }, { status: 404 })
    }

    return NextResponse.json(value)
  } catch (error) {
    console.error('Get value error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()

    const value = await prisma.value.update({
      where: { id: params.id },
      data: {
        icon: data.icon,
        titleAz: data.titleAz,
        titleEn: data.titleEn,
        titleRu: data.titleRu,
        descAz: data.descAz,
        descEn: data.descEn,
        descRu: data.descRu,
        order: data.order,
      },
    })

    return NextResponse.json(value)
  } catch (error) {
    console.error('Update value error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await prisma.value.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete value error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
