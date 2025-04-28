// app/api/signup/route.ts

import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
    await connectToDB();

    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
        return NextResponse.json(
            { error: "Name, email, and password are required." },
            { status: 400 }
        );
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return NextResponse.json(
            { error: "Email already in use." },
            { status: 409 }
        );
    }

    // Hash the password
    //   const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        name,
        email,
        password
    });

    return NextResponse.json(
        {
            success: true,
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        },
        { status: 201 }
    );
}
