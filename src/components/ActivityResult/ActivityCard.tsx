import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

type ActivityCardProps = {
  title: string;
  description: string;
  postId: string;
  imageSrc: string;
};

export default function ActivityCard({
  title,
  description,
  postId,
  imageSrc,
}: ActivityCardProps) {
  return (
    <a href={`/posts/${postId}`}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>2024年6月20日 公開</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <img src={imageSrc} alt="サムネイル" className="object-contain" />
          </div>
          <div>
            <p>{description}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="link" asChild>
            <a href="https://google.com" target="blank">
              続きを読む→
            </a>
          </Button>
        </CardFooter>
      </Card>
    </a>
  );
}
