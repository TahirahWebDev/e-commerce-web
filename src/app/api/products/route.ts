import { NextResponse } from "next/server";
import products from "../../../data/products";

// Use named exports for HTTP methods (GET, POST, etc.)
export async function GET() {
  return NextResponse.json(products);
}
