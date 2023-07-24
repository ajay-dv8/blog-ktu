import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  draftMode().disable();
  redirect("/");
  //return new Response("Draft mode is disabled");
}


/*
import { NextApiRequest, NextApiResponse } from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse) {
    res.clearPreviewData({});
    res.writeHead(307, { Location: "/"});
    res.end();
} 
*/