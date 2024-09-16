import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Stats({
  title,
  data,
}: {
  title: string;
  data: number;
}) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{data}</p>
      </CardContent>
    </Card>
  );
}
