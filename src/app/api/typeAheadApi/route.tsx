import { typeAheadData } from "@/app/apiData/typeAheadData";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  return NextResponse.json(typeAheadData);
}
