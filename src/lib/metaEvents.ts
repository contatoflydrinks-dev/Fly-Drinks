export async function trackMetaEvent(eventName: string, userData: any = {}) {
  // First, track with the regular Pixel if available in the browser
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq('track', eventName, userData);
  }

  // Then, track via Conversions API (Server-side)
  try {
    const response = await fetch("/api/meta-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventName,
        eventSourceUrl: window.location.href,
        userData,
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to track Meta event via CAPI:", errorData);
    }
  } catch (error) {
    console.error("Error sending Meta event to backend:", error);
  }
}
