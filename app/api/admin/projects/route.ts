import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const projects = await prisma.project.findMany({
      orderBy: { order: 'asc' },
    })

    return NextResponse.json(projects)
  } catch (error) {
    console.error('Get projects error:', error)
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

    const project = await prisma.project.create({
      data: {
        slug: data.slug,
        titleAz: data.titleAz,
        titleEn: data.titleEn,
        titleRu: data.titleRu,
        categoryAz: data.categoryAz,
        categoryEn: data.categoryEn,
        categoryRu: data.categoryRu,
        descriptionAz: data.descriptionAz,
        descriptionEn: data.descriptionEn,
        descriptionRu: data.descriptionRu,
        image: data.image || null,
        tagsAz: data.tagsAz,
        tagsEn: data.tagsEn,
        tagsRu: data.tagsRu,
        roi: data.roi,
        durationAz: data.durationAz,
        durationEn: data.durationEn,
        durationRu: data.durationRu,
        satisfaction: data.satisfaction,
        order: data.order,
      },
    })

    return NextResponse.json(project)
  } catch (error) {
    console.error('Create project error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
