import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const faqs = await prisma.fAQ.findMany({
      orderBy: { order: 'asc' },
    })

    return NextResponse.json(faqs)
  } catch (error) {
    console.error('Get FAQs error:', error)
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

    const faq = await prisma.fAQ.create({
      data: {
        questionAz: data.questionAz,
        questionEn: data.questionEn,
        questionRu: data.questionRu,
        answerAz: data.answerAz,
        answerEn: data.answerEn,
        answerRu: data.answerRu,
        order: data.order || 0,
      },
    })

    return NextResponse.json(faq)
  } catch (error) {
    console.error('Create FAQ error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
