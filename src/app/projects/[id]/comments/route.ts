import client from "@/app/db";
import { NextResponse } from "next/server";

export async function GET(req: any, { params }: any) {
  const query = `SELECT * FROM comments WHERE project_id=${params.id};`;
  const result = await client.query(query);
  return NextResponse.json(result.rows);
}
