import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { CONTACT_TYPES } from "@/constants";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";

const googleRecaptchaSiteKey = import.meta.env.PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;
const formUrl = import.meta.env.PUBLIC_NEWT_FORM_URL;

const formSchema = z.object({
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

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      inquiryType: undefined,
      inquiryContent: "",
      privacyPolicy: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const token = await grecaptcha.execute(googleRecaptchaSiteKey, {
        action: "submit",
      });

      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (typeof value === "boolean") {
          formData.append(key, value.toString());
        } else {
          formData.append(key, value as string | Blob);
        }
      });
      formData.append("googleReCaptchaToken", token);

      const response = await fetch(formUrl, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        window.location.href = "/contact/thanks";
      } else {
        alert("お問い合わせの送信に失敗しました。\nもう一度お試しください。");
      }
    } catch (error) {
      alert(
        "お問い合わせの送信に失敗しました。\n時間を明けてもう一度お試しください。"
      );
    }
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>お問い合わせフォーム</CardTitle>
        <CardDescription>2-3日以内に返信します。</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>お名前（必須）</FormLabel>
                  <FormControl>
                    <Input placeholder="山田 太郎" {...field} />
                  </FormControl>
                  <FormDescription>
                    お問い合わせいただく方のお名前をフルネームでご入力ください。
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>メールアドレス（必須）</FormLabel>
                  <FormControl>
                    <Input placeholder="mail@example.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    お問い合わせ頂いた内容について返信するためのメールアドレスをご入力ください。
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="inquiryType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>お問い合わせ種別</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="選択する" />
                      </SelectTrigger>
                      <SelectContent>
                        {CONTACT_TYPES.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    お問い合わせの種別を選択してください。
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="inquiryContent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>お問い合わせ内容</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormDescription>
                    お問い合わせ内容をご入力ください。
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="privacyPolicy"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="privacyPolicy"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel htmlFor="privacyPolicy">
                      プライバシーポリシーに同意する
                    </FormLabel>
                    <FormDescription>
                      お問い合わせ内容を送信する前に、
                      <a href="/terms/privacy" target="blank">
                        プライバシーポリシー
                      </a>
                      をお読みいただき同意いただく必要があります。
                    </FormDescription>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button
              className="w-full"
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              送信する
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
