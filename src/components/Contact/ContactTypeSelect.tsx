import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { CONTACT_TYPES } from "@/constants";

export default function ContactTypeSelect() {
  return (
    <>
      <Label htmlFor="type">お問い合わせ種別</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="お問い合わせ種別を選択してください。" />
        </SelectTrigger>
        <SelectContent id="type">
          {CONTACT_TYPES.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
