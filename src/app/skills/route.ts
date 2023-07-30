import { NextResponse } from "next/server";
import client from "../db/index";

export async function GET(req: any, res: any) {
  const query = "SELECT * FROM skills;";
  const result = await client.query(query);
  return NextResponse.json(result.rows);
}

export async function POST(req: any) {
  //   const requestBody = await req.json();
  //   const newPost = {
  //     ...requestBody,
  //     id: posts.length,
  //   };
  //   posts.push(newPost);
  //   return NextResponse.json(newPost);
}
