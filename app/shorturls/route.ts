import { NextResponse } from "next/server";
import LOG from "../logger/logger";
import { findUrl, uploadUrl } from "@/urlhandler/urls";


// let allURLS:any[] = []

function generateCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    code += chars[randomIndex];
  }
  return code;
}

export async function POST(req:Request){
    try{

        const body = await req.json();
        if (!body.url){
            return NextResponse.json({"status":505, msg:"invalid url"})
        }

        if (!body.validity){
            body.validity = 30;
        }
        if (!body.shortcode){
            body.shortcode = generateCode();
            while (findUrl){
                body.shortcode = generateCode();
            }
        }
        const now = new Date();
        body.expiry = new Date(now.getTime() + body.validity * 60 * 1000);

        uploadUrl(body)
        LOG("backend","info", "handler", `url uploaded successfullty ${body}`)
        return NextResponse.json({status:200, msg:""})
    }catch(err){
        LOG("backend", "error", "handler", "generate url failed")
        return NextResponse.json("uploading failed "+ err)
    }
}