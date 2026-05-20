import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maison d'or" },
      { name: "description", content: "Visit our Jaipur showroom or speak with our atelier." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <Contact />
    </div>
  ),
});
