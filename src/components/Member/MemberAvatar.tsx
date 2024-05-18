import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function MemberAvatar() {
  return (
    <Avatar className="w-32 h-32">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
