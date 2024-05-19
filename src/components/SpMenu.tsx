import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { NAV_ITEMS } from "@/constants";

export default function SpMenu() {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger>
          <Button variant="outline" size="icon" asChild>
            <Menu className="h-9 w-9" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mb-2">
            <SheetTitle>
              <a href="/">Vcan</a>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-y-2">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.title}
                variant="link"
                className="w-full"
                asChild
              >
                <a href={item.href}>{item.title}</a>
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
