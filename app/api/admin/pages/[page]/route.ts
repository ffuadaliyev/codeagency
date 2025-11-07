import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET(
  request: Request,
  { params }: { params: { page: string } }
) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const pageContent = await prisma.pageContent.findUnique({
      where: { page: params.page },
    })

    if (!pageContent) {
      return NextResponse.json({ error: 'Page not found' }, { status: 404 })
    }

    return NextResponse.json(pageContent)
  } catch (error) {
    console.error('Get page content error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { page: string } }
) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()

    // Create or update
    const pageContent = await prisma.pageContent.upsert({
      where: { page: params.page },
      update: {
        contentAz: data.contentAz,
        contentEn: data.contentEn,
        contentRu: data.contentRu,
      },
      create: {
        page: params.page,
        contentAz: data.contentAz,
        contentEn: data.contentEn,
        contentRu: data.contentRu,
      },
    })

    return NextResponse.json(pageContent)
  } catch (error) {
    console.error('Update page content error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
