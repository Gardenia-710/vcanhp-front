import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type CoreMemberAvatarProps = {
  name: string;
  title: string;
};

export default function CoreMemberAvatar({
  name,
  title,
}: CoreMemberAvatarProps) {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <Avatar className="w-44 h-44">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="text-lg">{name}</span>
      <span>{title}</span>
    </div>
  );
}
