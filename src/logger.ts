import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { sendDiscordMessage } from "./discord";

export async function logEvent(type: string, data: Record<string, unknown> = {}) {
  try {
    await addDoc(collection(db, "logs"), {
      type,
      data,
      createdAt: serverTimestamp(),
    });
  } catch (err) {
    console.error("[Logger] Firestore log failed", err);
  }

  // Discord je len bonus
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
