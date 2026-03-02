import { NextResponse } from "next/server"
import { resend } from "@/lib/resend"

export async function POST(req: Request) {
  try {
    if (!process.env.GOOGLE_SCRIPT_URL)
      throw new Error("GOOGLE_SCRIPT_URL missing")

    if (!process.env.RESEND_API_KEY)
      throw new Error("RESEND_API_KEY missing")

    const body = await req.json()

    const { name, email, phone, slot, doctor } = body

    if (!name || !email || !phone || !slot || !doctor) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Save to Google Sheets
    const googleResponse = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, slot, doctor }),
    })

    if (!googleResponse.ok)
      throw new Error("Failed to save to Google Sheets")

    // Send Email changes
    await resend.emails.send({
      from: "MediCare <onboarding@resend.dev>",
      to: email,
      subject: "Appointment Confirmation",
      html: `
        <h2>Appointment Confirmed</h2>
        <p>Hello ${name},</p>
        <p>Your appointment with <b>${doctor}</b> is confirmed at <b>${slot}</b>.</p>
        <p>Thank you for choosing MediCare.</p>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (error: any) {
    console.error("API ERROR:", error)

    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    )
  }
}