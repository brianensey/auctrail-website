# Auctrail website email — preparation

Status: handler deployed to Cloudflare on September 10, 2026. The live endpoint rejects missing spam tokens with HTTP 400. Five isolated handler tests and the website production build passed. No live email delivery test has been performed yet. The website uses the previous endpoint until NEXT_PUBLIC_CONTACT_USE_GOOGLE is set to true at build time.

The existing static website remains on Render. A Cloudflare Worker handles only POST /api/contact and sends through Gmail API as admin@auctrail.com using the existing info@auctrail.com sending alias. The recipient is fixed to info@auctrail.com. Reply-To is the visitor's validated address. This does not change demo provisioning or its FreeScout email path.

Google one-time authorization uses https://developers.google.com/oauthplayground with the user's own OAuth client. Add that exact URL (no trailing slash) as an authorized redirect URI. In Playground settings use Google endpoints, server-side flow, Offline access, and Use your own OAuth credentials. Authorize only https://www.googleapis.com/auth/gmail.send while signed in as admin@auctrail.com, then exchange the code. Keep the refresh token private. Google's default Playground credentials revoke refresh tokens after 24 hours, so the user's own client is essential.

Required encrypted Worker secrets: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, TURNSTILE_SECRET_KEY. Do not put these in NEXT_PUBLIC variables, source files, build logs, or chat. Do not print Google's token response.

Configuration and activation:
- Worker: auctrail-website-email in Cloudflare account b2db8792ac3b38d2c05218a391043977, using the available Free allowance. Do not upgrade or enable paid usage.
- Endpoint: https://auctrail-website-email.brianensey.workers.dev/api/contact
- Public Turnstile site key: 0x4AAAAAAEvd7BG-w1BMGrHJ. Managed widget, no pre-clearance. The widget currently allows auctrail.com and development hosts; backend validation accepts only auctrail.com and www.auctrail.com.
- Contact form renders the widget explicitly with action contact, removes it on unmount, and resets it after each submission attempt. Failed submissions preserve the entered message.
- Google refresh token, Google client secret, and Turnstile secret are stored as encrypted Worker secrets. GOOGLE_CLIENT_ID is a public OAuth identifier stored as a normal runtime variable.
- Worker was initially deployed through the Cloudflare dashboard. Keep this source in GitHub when making further dashboard edits. No automatic Worker deployment is configured.
- Activation requires NEXT_PUBLIC_CONTACT_USE_GOOGLE=true and a website rebuild. Obtain approval for a test message to info@auctrail.com, verify actual delivery and Reply-To behavior, and roll back the flag if delivery fails.
- Rollback: unset the flag or set it to false and rebuild. The original NEXT_PUBLIC_CONTACT_REQUEST_ENDPOINT remains available.
- Do not change demo-access or demo-notification endpoints in this change.

Limitations: synchronous delivery, no persistent outbox; no automatic send retry because a timeout can follow successful acceptance by Gmail. Turnstile is the primary spam barrier; CORS alone is not authentication. Add provider rate limits if abuse warrants it. Free quotas may reject requests; never automatically upgrade. Google Workspace sending limits and token revocation still apply. A Google password/security change may require reconnecting.

References:
- https://developers.google.com/oauthplayground
- https://developers.google.com/workspace/gmail/api/guides/sending
- https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
- https://developers.cloudflare.com/workers/platform/pricing/
