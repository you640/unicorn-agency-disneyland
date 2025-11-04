export interface DiscordEmbedField {
  name: string;
  value: string;
  inline?: boolean;
}

export interface DiscordExtra {
  title?: string;
  description?: string;
  color?: number;
  fields?: DiscordEmbedField[];
}

export async function sendDiscordMessage(content: string, extra?: DiscordExtra) {
  const webhook = import.meta.env.VITE_DISCORD_WEBHOOK;
  if (!webhook) {
    console.warn("[Discord] Webhook URL is missing");
    return;
  }

  const payload: Record<string, unknown> = { content };

  if (extra) {
    payload.embeds = [
      {
        title: extra.title || "Unicorn App",
        description: extra.description || "",
        color: extra.color || 0x33cc66,
        fields: extra.fields || [],
      },
    ];
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error("[Discord] Failed to send", await res.text());
    }
  } catch (err) {
    console.error("[Discord] Error", err);
  }
}
