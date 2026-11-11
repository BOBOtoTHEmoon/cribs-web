import { SITE } from "./seo";

const GOLD = "#C8A84E";

export function waitlistEmail(role: "tenant" | "landlord") {
  const isLandlord = role === "landlord";
  const subject = "You're on the Cribs waitlist";

  const lead = isLandlord
    ? "Thanks for joining as a landlord. When Cribs launches, you'll be among the first to list your property for free and reach verified tenants directly, with no agents taking a cut."
    : "Thanks for joining. When Cribs launches, you'll be among the first to find verified homes in Lagos and talk directly to landlords, with no agent fees.";

  const perks = isLandlord
    ? ["Free listing for early landlords", "Verified, serious tenants only", "Rent collection and reminders built in"]
    : ["Early access before the public launch", "Verified listings only, no fake photos", "Direct chat with landlords, no agent fees"];

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#0A0A0B;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">You're in. We'll let you know the moment the Cribs app is live.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#0A0A0B;">
  <tr>
    <td align="center" style="padding:40px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:520px;">
        <tr>
          <td style="padding:0 4px 28px;">
            <a href="${SITE.url}" style="text-decoration:none;"><img src="${SITE.url}/email-logo.png" width="170" height="52" alt="Cribs" style="display:block;border:0;"></a>
          </td>
        </tr>
        <tr>
          <td style="background:#151517;border:1px solid #222226;border-radius:18px;padding:36px 32px;font-family:'Plus Jakarta Sans',Helvetica,Arial,sans-serif;">
            <div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${GOLD};margin-bottom:14px;">Waitlist confirmed</div>
            <div style="font-size:28px;line-height:1.2;font-weight:800;color:#F0EDE6;margin-bottom:16px;">You're on the list.</div>
            <div style="font-size:15px;line-height:1.7;color:#B5B2A9;margin-bottom:26px;">${lead}</div>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
              ${perks
                .map(
                  (p) => `<tr>
                <td width="28" valign="top" style="padding:7px 0;"><div style="width:18px;height:18px;border-radius:5px;background:rgba(200,168,78,0.14);color:${GOLD};font-size:12px;line-height:18px;text-align:center;font-weight:700;">&#10003;</div></td>
                <td style="padding:7px 0;font-size:14px;line-height:1.5;color:#F0EDE6;">${p}</td>
              </tr>`
                )
                .join("")}
            </table>
            <a href="${SITE.url}" style="display:inline-block;background:${GOLD};color:#0A0A0B;font-size:14px;font-weight:700;text-decoration:none;padding:13px 24px;border-radius:10px;">Visit cribshq.app</a>
            <div style="font-size:13px;line-height:1.7;color:#97948B;margin-top:28px;">We'll email you the moment the app is live on iOS and Android. Questions? Just reply to this email.</div>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding:26px 8px 0;font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#55534B;">
            Cribs. The smarter way to rent in Lagos.<br>You're receiving this because you joined the waitlist at cribshq.app.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;

  const text = `You're on the Cribs waitlist.

${lead}

${perks.map((p) => `- ${p}`).join("\n")}

We'll email you the moment the app is live on iOS and Android.
Questions? Just reply to this email.

${SITE.url}`;

  return { subject, html, text };
}
