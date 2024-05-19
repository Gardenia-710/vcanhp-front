import { Button } from "./ui/button";
import { NAV_ITEMS } from "@/constants";

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
