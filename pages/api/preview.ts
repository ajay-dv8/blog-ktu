import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  draftMode().enable();
  redirect("/");
  //return new Response("Draft mode is enabled");
}


/*
import { NextApiRequest, NextApiResponse } from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse) {
    res.setPreviewData({});
    res.writeHead(307, { Location: "/"});
    res.end();
}
*/