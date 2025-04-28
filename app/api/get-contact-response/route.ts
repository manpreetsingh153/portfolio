import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import Contact from "@/models/Contact";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


export async function POST(req: Request) {
    await connectToDB();

    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
        return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const newContact = await Contact.create({ name, email, subject, message });

    return NextResponse.json({ success: true, data: newContact }, { status: 201 });
}


export async function GET(req: Request) {

    const session = await getServerSession(authOptions);

    // If not logged in, return unauthorized
    if (!session) {
        return NextResponse.json(
            { success: false, message: "Unauthorized" },
            { status: 401 }
        );
    }

    await connectToDB();

    const contacts = await Contact.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: contacts }, { status: 200 });
}