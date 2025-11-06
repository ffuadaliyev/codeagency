import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import bcrypt from 'bcryptjs'
import { prisma } from './prisma'

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'fallback-secret-key'
)

export interface AdminUser {
  id: string
  username: string
  email: string
}

// Create JWT token
export async function createToken(user: AdminUser): Promise<string> {
  return await new SignJWT({ user })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(JWT_SECRET)
}

// Verify JWT token
export async function verifyToken(token: string): Promise<AdminUser | null> {
  try {
    const verified = await jwtVerify(token, JWT_SECRET)
    return verified.payload.user as AdminUser
  } catch (error) {
    return null
  }
}

// Get current user from cookies
export async function getCurrentUser(): Promise<AdminUser | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin-token')

  if (!token) {
    return null
  }

  return await verifyToken(token.value)
}

// Login admin
export async function loginAdmin(username: string, password: string) {
  const admin = await prisma.admin.findUnique({
    where: { username },
  })

  if (!admin) {
    return { success: false, error: 'Invalid credentials' }
  }

  const isValidPassword = await bcrypt.compare(password, admin.password)

  if (!isValidPassword) {
    return { success: false, error: 'Invalid credentials' }
  }

  const user: AdminUser = {
    id: admin.id,
    username: admin.username,
    email: admin.email,
  }

  const token = await createToken(user)

  return { success: true, token, user }
}

// Logout admin
export async function logoutAdmin() {
  const cookieStore = await cookies()
  cookieStore.delete('admin-token')
}

// Check if user is authenticated
export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser()
  return user !== null
}
