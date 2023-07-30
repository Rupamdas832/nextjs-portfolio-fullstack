import { NextResponse } from "next/server";
import client from "../db/index";

export async function GET(req: any) {
  const { searchParams } = new URL(req.url);
  const limitParam = searchParams.get("limit");

  let limit = Number(limitParam) ? Number(limitParam) : null;

  const query = `SELECT * FROM projects LIMIT ${limit};`;
  const result = await client.query(query);

  return NextResponse.json(result.rows);
}

export async function POST(req: any) {
  const requestBody = await req.json();

  const query =
    "INSERT INTO projects(title, image, landscape_image, display_image, link, description,duration) VALUES ($1,$2,$3,$4,$5,$6,$7)";
  const values = [
    requestBody.title,
    requestBody.image,
    requestBody.landscape_image,
    requestBody.display_image,
    requestBody.link,
    requestBody.description,
    requestBody.duration,
  ];
  const result = await client.query(query, values);
  return NextResponse.json({});
}
