import { NextResponse } from "next/server";
import { initSocket, NextApiResponseServerIO } from "@/lib/socket";

export async function GET(req: Request, res: NextApiResponseServerIO) {
  try {
    initSocket(res);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to initialize socket" },
      { status: 500 }
    );
  }
}