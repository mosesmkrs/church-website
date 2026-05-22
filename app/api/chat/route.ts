import systemPrompts from "@/app/components/systemPrompt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ reply: "Please provide a message." }, { status: 400 });
    }

    const systemPrompt = systemPrompts;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY || ""}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        max_tokens: 1024,
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("API Error:", data);
      return NextResponse.json(
        { reply: "Sorry, I encountered an error processing your message. Please try again." },
        { status: 500 }
      );
    }

    const reply = data.choices[0]?.message?.content || "I couldn't generate a response.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { reply: "Sorry, an error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
