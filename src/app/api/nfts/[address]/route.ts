import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import Moralis from 'moralis';

const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImQ0NDk5ODdmLTFiMDctNGFjYS05Y2NkLTMyZDNlM2Q2ZGE3ZSIsIm9yZ0lkIjoiMzY5Nzc1IiwidXNlcklkIjoiMzgwMDM1IiwidHlwZUlkIjoiMzNmNWFkYmYtZjZiNS00NDRiLTk4NjItODMyMWQ2ZWQ5MjMyIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDM2NjA0NDEsImV4cCI6NDg1OTQyMDQ0MX0.sSlXdsV-U9Ivf_dP860p-0ScvwDfBYhposWWzp98S4c"
Moralis.start({
  apiKey: apiKey
}).then();

export const revalidate = 0
export async function GET(req: NextRequest, { params }: { params: { address: string } }) {

  try {
    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      "chain": "0xaa36a7",
      "format": "decimal",
      "mediaItems": false,
      "address": params.address
    });

    return NextResponse.json(response.raw)
  } catch (e) {
    console.error(e);
    return NextResponse.json({})
  }

}
