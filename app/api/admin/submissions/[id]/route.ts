import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { isRead } = await request.json()

    const submission = await prisma.submission.update({
      where: { id: params.id },
      data: { isRead },
    })

    return NextResponse.json(submission)
  } catch (error) {
    console.error('Update submission error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
