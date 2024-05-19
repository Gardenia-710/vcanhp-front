import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type MemberAvatarProps = {
  imageSrc: string;
};

export default function MemberAvatar({ imageSrc }: MemberAvatarProps) {
  return (
    <Avatar className="w-32 h-32">
      <AvatarImage src={imageSrc} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
