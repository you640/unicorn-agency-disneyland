import React, { useState } from "react";
import { logEvent } from "./logger";

const DiscordTest: React.FC = () => {
  const [msg, setMsg] = useState("Hello from Unicorn 🦄");

  const send = async () => {
    await logEvent("MANUAL_DISCORD_MESSAGE", {
      message: msg,
      by: "local-dev",
    });
    alert("Odoslané na Discord (a možno aj do Firestore) ✅");
  };

  return (
    <div className="discord-panel">
      <h3>Discord testovací panel</h3>
      <p>Zadaj správu a pošleme ju do logov + Discordu.</p>
      <label htmlFor="discord-msg">Správa:</label>
      <input
        id="discord-msg"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        className="discord-input"
        placeholder="Zadaj správu"
      />
      <button onClick={send}>Send to Discord</button>
    </div>
  );
};

export default DiscordTest;
