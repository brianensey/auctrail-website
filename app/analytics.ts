type AnalyticsParameters = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, parameters?: AnalyticsParameters) => void;
  }
}

export function trackLead(eventName: "demo_request" | "information_request") {
  window.gtag?.("event", eventName, {
    form_location: window.location.pathname,
  });
}
