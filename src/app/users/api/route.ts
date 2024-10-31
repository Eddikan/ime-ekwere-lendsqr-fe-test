// src/app/user/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "User data fetched successfully." });
}

export async function POST() {
  return NextResponse.json({ message: "User data updated successfully." });
}
