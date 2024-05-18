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
};

export default function AdvisorCard({
  name,
  title,
  comment,
}: AdvisorCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-x-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
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
