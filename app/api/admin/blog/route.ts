import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const posts = await prisma.blogPost.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Get blog posts error:', error)
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

    const post = await prisma.blogPost.create({
      data: {
        slug: data.slug,
        titleAz: data.titleAz,
        titleEn: data.titleEn,
        titleRu: data.titleRu,
        excerptAz: data.excerptAz,
        excerptEn: data.excerptEn,
        excerptRu: data.excerptRu,
        contentAz: data.contentAz,
        contentEn: data.contentEn,
        contentRu: data.contentRu,
        categoryAz: data.categoryAz,
        categoryEn: data.categoryEn,
        categoryRu: data.categoryRu,
        image: data.image || null,
        author: data.author,
        published: data.published || false,
      },
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error('Create blog post error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
