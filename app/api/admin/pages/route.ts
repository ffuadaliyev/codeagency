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

    const pages = await prisma.pageContent.findMany()

    return NextResponse.json(pages)
  } catch (error) {
    console.error('Get page content error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
