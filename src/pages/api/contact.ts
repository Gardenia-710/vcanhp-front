import { formSchema } from "@/lib/validate";
import type { APIRoute } from "astro";
import { Resend } from "resend";
import { ZodError, type AnyZodObject } from "zod";

export const prerender = false;

const validate = async (formData: FormData) => {
  try {
    await formSchema.parse(formData);

    return true;
  } catch (error) {
    return false;
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const inquiryType = formData.get("inquiryType");
    const inquiryContent = formData.get("inquiryContent");
    const privacyPolicy = formData.get("privacyPolicy");

    formSchema.parse({
      name,
      email,
      inquiryType,
      inquiryContent,
      privacyPolicy,
    });

    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    async () => {
      const { data, error } = await resend.emails.send({
        from: "Vcan問い合わせフォーム <noreply@vcan-hpv.org>",
        to: [email],
        subject: "お問い合わせありがとうございます。",
      });
    };

    return new Response(
      JSON.stringify({
        ok: true,
      }),
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      console.error(error);
    }
    return new Response(
      JSON.stringify({
        ok: false,
      }),
      { status: 400 }
    );
  }
};
