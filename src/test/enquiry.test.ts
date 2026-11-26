import { describe, expect, it } from "vitest";
import { enquirySchema, enquirySubject, enquiryConfirmation, buildEnquiryMailto, WHATSAPP_URL, SERVICE_OPTIONS, MANAGEMENT_SERVICES } from "../lib/website-content";
const enquiry = { name: "Kenny Jacobs", email: "kenny@example.com", phone: "", business: "", service: "LinkedIn Management", message: "" };
describe("Approved enquiry rules", () => {
  it("requires a name", () => { expect(enquirySchema.safeParse({ ...enquiry, name: "" }).success).toBe(false); });
  it("requires a valid email", () => { expect(enquirySchema.safeParse({ ...enquiry, email: "invalid" }).success).toBe(false); });
  it("requires an approved selected service", () => { expect(enquirySchema.safeParse({ ...enquiry, service: "" }).success).toBe(false); expect(enquirySchema.safeParse({ ...enquiry, service: "unknown" }).success).toBe(false); });
  it("allows phone, business and message to be empty", () => { expect(enquirySchema.safeParse(enquiry).success).toBe(true); });
  it("includes selected service in subject", () => { expect(enquirySubject("LinkedIn Management")).toBe("New enquiry: LinkedIn Management"); });
  it("uses General as the subject when no service is supplied", () => { expect(enquirySubject("")).toBe("New enquiry: General"); });
  it("builds an encoded email to the approved recipient in the required field order", () => {
    const href = buildEnquiryMailto({ name: "Kenny & Jacobs", email: "kenny@example.com", phone: "+44 123", service: "LinkedIn Management", message: "Hello & thanks\nSecond line" });
    expect(href).toBe("mailto:info@penpixeldp.com?subject=New%20enquiry%3A%20LinkedIn%20Management&body=Name%3A%20Kenny%20%26%20Jacobs%0D%0AEmail%3A%20kenny%40example.com%0D%0APhone%3A%20%2B44%20123%0D%0AService%3A%20LinkedIn%20Management%0D%0A%0D%0AMessage%3A%0D%0AHello%20%26%20thanks%0D%0ASecond%20line");
  });
  it("capitalises only the first letter of the first name", () => { expect(enquiryConfirmation("kEnny Jacobs")).toBe("Thank you, KEnny! We've got your message and we'll be in touch within one working day. Can't wait? Send us a WhatsApp on +44 7925 171979."); });
  it("omits the first-name punctuation when the name is empty", () => { expect(enquiryConfirmation(" ")).toBe("Thank you! We've got your message and we'll be in touch within one working day. Can't wait? Send us a WhatsApp on +44 7925 171979."); });
  it("accepts all eight approved service choices", () => { expect(SERVICE_OPTIONS).toHaveLength(8); for (const service of SERVICE_OPTIONS) expect(enquirySchema.safeParse({ ...enquiry, service }).success).toBe(true); });
  it("uses the specified WhatsApp recipient and prefilled message", () => { const url = new URL(WHATSAPP_URL); expect(url.pathname).toBe("/447925171979"); expect(url.searchParams.get("text")).toBe("Hi Aanu, I found you on your website and I'd love to know more about your services."); });
  it("preserves the 12-post monthly social management commitment", () => { expect(MANAGEMENT_SERVICES.find(item => item.name === "Facebook and Instagram Management")?.description).toContain("12 posts a month"); });
  it("addresses confirmation to the first name with one-working-day commitment", () => { expect(enquiryConfirmation("Kenny Jacobs")).toBe("Thank you, Kenny! We've got your message and we'll be in touch within one working day. Can't wait? Send us a WhatsApp on +44 7925 171979."); });
});
