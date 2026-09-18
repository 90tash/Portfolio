import { NextResponse } from "next/server";

const GOOGLE_DRIVE_RESUME_URL =
  "https://drive.google.com/file/d/19iGvt9Ox3e2m_eAIil58jSQ2C9zTZz2z/view?usp=sharing";

export async function GET() {
  return NextResponse.redirect(GOOGLE_DRIVE_RESUME_URL, 307);
}
