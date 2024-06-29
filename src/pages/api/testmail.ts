import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const GET: APIRoute = async () => {
  (async function () {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [""],
      subject: "Hello World",
      html: "<strong>It works!</strong>",
    });

    if (error) {
      return console.error({ error });
    }

    console.log({ data });
  })();

  return new Response("OK");
};
