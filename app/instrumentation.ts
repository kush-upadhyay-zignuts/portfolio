import * as Sentry from "@sentry/nextjs";

export function register() {
  Sentry.init({
    dsn: "YOUR_SENTRY_DSN",
    tracesSampleRate: 1.0,
  });
}