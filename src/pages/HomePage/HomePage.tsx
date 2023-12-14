/**
 * HomePage component that renders the main UI for the kanban board app.
 * Displays intro text, form to add new todo items, and the Board component.
 * Manages todo item state with useState hook.
 */
import { Button } from "@/components/ui/button";
import { Board } from "./Board";
import { useState } from "react";
import { Form } from "react-router-dom";

export function HomePage() {
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // create card component using title
  };
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
      <Button> Add todo item </Button>
      <Form onSubmit={handleSubmit}>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">Add Card</button>
      </Form>

      <Board></Board>
    </section>
  );
}
