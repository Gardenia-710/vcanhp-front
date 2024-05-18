import { Button } from "../ui/button";

const TERM_LINKS = [
  {
    name: "プライバシーポリシー",
    href: "/terms/privacy",
  },
  {
    name: "免責事項",
    href: "/terms/disclaimer",
  },
  {
    name: "著作権について",
    href: "/terms/copyright",
  },
];

export default function TermLinks() {
  return (
    <div className="flex flex-col">
      <span className="text-center">各種規約</span>
      {TERM_LINKS.map((term) => (
        <Button key={term.name} variant="link" asChild>
          <a href={term.href}>{term.name}</a>
        </Button>
      ))}
    </div>
  );
}
