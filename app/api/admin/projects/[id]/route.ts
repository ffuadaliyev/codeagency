import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const project = await prisma.project.findUnique({
      where: { id: params.id },
    })

    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    return NextResponse.json(project)
  } catch (error) {
    console.error('Get project error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()

    const project = await prisma.project.update({
      where: { id: params.id },
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
    console.error('Update project error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await prisma.project.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete project error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
