import { CONTACT_TYPES } from "@/constants";
import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string({
      required_error: "お名前を入力してください。",
    })
    .trim()
    .min(1, "お名前を入力してください。"),
  email: z
    .string({
      required_error: "メールアドレスを入力してください。",
    })
    .email("有効なメールアドレスを入力してください。"),
  inquiryType: z.enum(CONTACT_TYPES, {
    required_error: "お問い合わせ種別を選択してください。",
  }),
  inquiryContent: z
    .string({
      required_error: "お問い合わせ内容を入力してください。",
    })
    .trim()
    .min(1, "お問い合わせ内容を入力してください。"),
  privacyPolicy: z
    .boolean({
      required_error: "プライバシーポリシーに同意する必要があります。",
    })
    .refine((val) => val, {
      message: "プライバシーポリシーに同意する必要があります。",
    }),
});
