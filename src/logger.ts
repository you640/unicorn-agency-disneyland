import { sendDiscordMessage } from "./discord";

export async function logEvent(type: string, data: Record<string, unknown> = {}) {
  // Logovanie len na Discord
  try {
    await sendDiscordMessage(`📢 [${type}] ${data?.message || ""}`, {
      title: `Log: ${type}`,
      description: (data?.description as string) || "",
      fields: Object.entries(data || {}).map(([k, v]) => ({
        name: k,
        value: typeof v === "string" ? v : JSON.stringify(v),
        inline: false,
      })),
    });
  } catch (err) {
    console.error("[Logger] Discord log failed", err);
  }
}
