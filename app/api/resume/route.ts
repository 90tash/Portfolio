import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "resume.pdf");
  
  if (!fs.existsSync(filePath)) {
    return new NextResponse("Resume file not found", { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Ashish_Kumar_Patra_Resume.pdf"',
      "Cache-Control": "no-cache",
    },
  });
}
