import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export function Board() {
  return (
    <div className="dropdown-containers flex w-full flex-wrap gap-8">
      <Card className="p-8">
        <CardTitle>Backlog</CardTitle>
        <CardDescription>List your things ToDo here:</CardDescription>
        <CardContent>{/* MAP HERE */}</CardContent>
      </Card>
      <Card className="p-8">
        <CardTitle>Todo</CardTitle>
        <CardDescription>List your things ToDo here:</CardDescription>
        <CardContent>{/* MAP HERE */}</CardContent>
      </Card>
      <Card className="p-8">
        <CardTitle>Doing</CardTitle>
        <CardDescription>List your things ToDo here:</CardDescription>
        <CardContent>{/* MAP HERE */}</CardContent>
      </Card>
      <Card className="p-8">
        <CardTitle>Done</CardTitle>
        <CardDescription>List your things ToDo here:</CardDescription>
        <CardContent>{/* MAP HERE */}</CardContent>
      </Card>
    </div>
  );
}
