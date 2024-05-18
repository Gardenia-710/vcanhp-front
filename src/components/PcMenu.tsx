import { Button } from "./ui/button";

const NAV_ITEMS = [
  {
    title: "Vcanについて",
    href: "/about",
  },
  {
    title: "活動実績",
    href: "/activity-result",
  },
  {
    title: "アドバイザー",
    href: "/adviser",
  },
  {
    title: "メンバー",
    href: "/member",
  },
  {
    title: "ご支援のお願い",
    href: "/support",
  },
  {
    title: "お問い合わせ",
    href: "/contact",
  },
];

export default function PcMenu() {
  return (
    <div className="md:flex flex-row hidden">
      {NAV_ITEMS.map((item) => (
        <Button key={item.title} variant="link" asChild>
          <a href={item.href}>{item.title}</a>
        </Button>
      ))}
    </div>
  );
}
