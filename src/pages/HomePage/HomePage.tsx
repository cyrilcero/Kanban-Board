import { Button } from "@/components/ui/button";
import { Board } from "./Board";

export function HomePage() {
  return (
    <section className="flex flex-col p-8">
      <h1 className="text-5xl font-bold py-4">What is a kanban board?</h1>
      <h3 className="text-2xl font-semibold py-2">
        Learn how to build a kanban board and see examples from Atlassian and
        others
      </h3>
      <p className="text-lg font-normal leading-8">
        A kanban board is an agile project management tool designed to help
        visualize work, limit work-in-progress, and maximize efficiency (or
        flow). It can help both agile and DevOps teams establish order in their
        daily work. - Source ( Atlassian )
      </p>
      <Button> Testing </Button>

      <Board></Board>
    </section>
  );
}
