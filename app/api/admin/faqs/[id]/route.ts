import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const faq = await prisma.fAQ.findUnique({
      where: { id: params.id },
    })

    if (!faq) {
      return NextResponse.json({ error: 'FAQ not found' }, { status: 404 })
    }

    return NextResponse.json(faq)
  } catch (error) {
    console.error('Get FAQ error:', error)
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

    const faq = await prisma.fAQ.update({
      where: { id: params.id },
      data: {
        questionAz: data.questionAz,
        questionEn: data.questionEn,
        questionRu: data.questionRu,
        answerAz: data.answerAz,
        answerEn: data.answerEn,
        answerRu: data.answerRu,
        order: data.order,
      },
    })

    return NextResponse.json(faq)
  } catch (error) {
    console.error('Update FAQ error:', error)
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

    await prisma.fAQ.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete FAQ error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
