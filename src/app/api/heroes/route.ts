import { NextResponse } from "next/server";

import JSONData from "./heroes.json";

export function GET() {
  return NextResponse.json({ data: JSONData });
}

// export async function GET() {
//   let res = await fetch(`${process.env.API_URL}/api/heroes`);
//   let data = await res.json();

//   if (!data) {
//     data = JSONData;
//   }

//   return NextResponse.json({ data });
// }
