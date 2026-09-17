# Auctrail website email

Status: live and verified on September 17, 2026.

The Auctrail website contact form no longer uses FormSubmit or another third-party form relay. Website submissions are sent directly to the Auctrail-controlled Cloudflare Worker, which sends mail through the Gmail API using Auctrail's Google Workspace account.

Current flow:

Auctrail website → Auctrail Cloudflare Worker → Gmail API → info@auctrail.com

The website itself remains hosted on Render.

## Contact form

- Endpoint: `https://auctrail-website-email.brianensey.workers.dev/api/contact`
- Recipient: `info@auctrail.com`
- Sender: Auctrail's Google Workspace account using the existing `info@auctrail.com` sending identity.
- Reply-To: the visitor's validated email address.
- Spam protection: Cloudflare Turnstile.
- Allowed production origins: `https://auctrail.com` and `https://www.auctrail.com`.
- The contact form always uses the Auctrail Worker. There is no FormSubmit fallback and no `NEXT_PUBLIC_CONTACT_REQUEST_ENDPOINT` dependency.

## Demo email

The same Worker also exposes the signed internal `POST /api/demo-email` route used by the Auctrail demo service. Only the demo server can generate a valid HMAC-signed delivery request. The Worker then sends the demo credentials email through Gmail API.

Demo provisioning and account creation remain handled by the Auctrail demo application. The Worker only performs outbound email delivery.

## Secrets and security

Required Worker secrets include Google OAuth credentials, the Google refresh token, Turnstile secret, and the demo-email signing secret. Keep all secrets in encrypted Worker configuration only. Do not place them in `NEXT_PUBLIC` variables, source files, logs, or documentation.

The public Turnstile site key may remain in client code because it is not a secret.

## Deployment

- Website: Render, built from `main`.
- Email Worker: Cloudflare Worker.
- Worker source of truth: this repository under `workers/website-email/`.
- Keep dashboard changes synchronized back to GitHub.
- The Worker does not currently have automatic deployment configured.

## Operational behavior

- Delivery is synchronous.
- There is no persistent outbox.
- Do not automatically retry an email after an ambiguous timeout because Gmail may already have accepted it.
- Gmail/Google Workspace sending limits still apply.
- OAuth token revocation or an account-security change may require reconnecting Google authorization.
- Keep the Worker on the available free allowance unless a deliberate future decision is made to change that.

## References

- Google Gmail API sending documentation
- Cloudflare Turnstile server-side validation documentation
- Cloudflare Workers documentation
