import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const members = await prisma.teamMember.findMany({
      orderBy: { order: 'asc' },
    })

    return NextResponse.json(members)
  } catch (error) {
    console.error('Get team members error:', error)
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

    const member = await prisma.teamMember.create({
      data: {
        nameAz: data.nameAz,
        nameEn: data.nameEn,
        nameRu: data.nameRu,
        roleAz: data.roleAz,
        roleEn: data.roleEn,
        roleRu: data.roleRu,
        bioAz: data.bioAz || null,
        bioEn: data.bioEn || null,
        bioRu: data.bioRu || null,
        image: data.image || null,
        order: data.order,
      },
    })

    return NextResponse.json(member)
  } catch (error) {
    console.error('Create team member error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
