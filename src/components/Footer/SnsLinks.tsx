import { Button } from "../ui/button";

const SNS_LINKS = [
  {
    name: "X（Twitter）",
    url: "https://twitter.com/OfficialVcan",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/vcan_official_/",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UC46wHK1CV1ChEdmVLX_0aLg",
  },
];

export default function SnsLinks() {
  return (
    <div className="flex flex-col">
      <span className="text-center">Vcan公式SNS</span>
      {SNS_LINKS.map((sns) => (
        <Button key={sns.name} variant="link" asChild>
          <a href={sns.url}>{sns.name}</a>
        </Button>
      ))}
    </div>
  );
}
