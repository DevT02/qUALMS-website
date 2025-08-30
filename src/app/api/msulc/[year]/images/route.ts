import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET(request: Request, context: any) {
  try {
    const year = context?.params?.year ?? '2025'
    const dir = path.join(process.cwd(), 'public', 'msulc', year)
    const files = await fs.promises.readdir(dir)
    const images = files.filter((f) => /\.(jpe?g|png|webp|gif|avif)$/i.test(f))
    return NextResponse.json({ images })
  } catch (err) {
    return NextResponse.json({ images: [], error: (err as Error).message }, { status: 500 })
  }
}
