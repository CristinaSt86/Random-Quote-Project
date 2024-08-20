import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function GET() {
  try {
    const visitor = await prisma.visitorCount.findFirst();
    const count = visitor?.count || 0;
    return NextResponse.json({ count }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Failed to fetch visitor count:', error);
    return NextResponse.json({ error: 'Failed to fetch visitor count' }, { status: 500, headers: { 'Cache-Control': 'no-store' } });
  }
}


export async function POST() {
  try {
    console.log('POST request received');
    let visitor = await prisma.visitorCount.findFirst();

    if (!visitor) {
      console.log('No visitor record found. Creating new one.');
      visitor = await prisma.visitorCount.create({
        data: { count: 1 },
      });
    } else {
      console.log('Visitor record found. Incrementing count.');
      visitor = await prisma.visitorCount.update({
        where: { id: visitor.id },
        data: { count: { increment: 1 } },
      });
    }

    console.log('Updated visitor count:', visitor.count);
    return NextResponse.json({ count: visitor.count }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Failed to increment visitor count:', error);
    return NextResponse.json({ error: 'Failed to increment visitor count' }, { status: 500, headers: { 'Cache-Control': 'no-store' } });
  }
}
