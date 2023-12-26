import axios from "axios";
import { NextResponse } from "next/server";

export const revalidate = 0
export async function GET() {
  const res = await axios.get("http://34.87.73.123:5006/api/v1/vaults");
  return NextResponse.json(res.data.data)
}
