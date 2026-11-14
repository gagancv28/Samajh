# Security Policy & Vulnerability Disclosure

Samajh takes the security of citizen document data, multimodal AI integrations, and developer credentials seriously.

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability or potential credential exposure in Samajh:

1. **Do not create a public GitHub issue.**
2. Send an email to [gagancvcm28@gmail.com](mailto:gagancvcm28@gmail.com) with the subject prefix `[SECURITY VULNERABILITY]`.
3. Provide details including:
   - Nature of the vulnerability (e.g. token leak, auth bypass, injection)
   - Steps to reproduce or proof of concept
   - Potential impact
4. We will acknowledge receipt within 48 hours and work with you on a responsible disclosure and patch schedule.

## Environment Secrets & Safe Practices

- **Never commit `.env` or `.env.production` files.** All `.env*` files (except `.env.example`) are blocked by `.gitignore`.
- Always store `GEMINI_API_KEY`, `SUPABASE_SECRET_KEY`, and `JWT_SECRET` in secure cloud environment stores (e.g. Render Dashboard, Vercel Environment Variables).
- Rotate API keys immediately if inadvertent exposure occurs.
