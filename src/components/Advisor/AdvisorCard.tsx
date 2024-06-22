import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AdvisorCardProps = {
  name: string;
  title: string;
  comment: string;
  imageSrc: string;
};

export default function AdvisorCard({
  name,
  title,
  comment,
  imageSrc,
}: AdvisorCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-x-2">
          <Avatar>
            <AvatarImage src={imageSrc} />
            <AvatarFallback>写真</AvatarFallback>
          </Avatar>
          {name}
        </CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{comment}</p>
      </CardContent>
    </Card>
  );
}
