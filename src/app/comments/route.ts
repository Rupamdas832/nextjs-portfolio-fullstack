import { NextResponse } from "next/server";
import client from "../db/index";

export async function GET(req: any) {
  const query = `SELECT * FROM comments`;
  const result = await client.query(query);

  return NextResponse.json(result.rows);
}

export async function POST(req: any) {
  const requestBody = await req.json();

  const query =
    "INSERT INTO comments(project_id, name, text) VALUES ($1,$2,$3) RETURNING *";
  const values = [requestBody.project_id, requestBody.name, requestBody.text];
  const result = await client.query(query, values);
  return NextResponse.json(result.rows[0]);
}
