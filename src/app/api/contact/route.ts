import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/service/sendEmail.service';

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    try {
        await sendEmail({ name, email, message });
        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Contact route error:', err);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
