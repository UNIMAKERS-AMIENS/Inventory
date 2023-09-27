import { Title } from "solid-start";
import Table from "~/components/Table";
import { Operation } from "~/types";

export default function Home() {
  let ops: Operation = {
    Id: "0",
    Status: "false",
    Quantity: "3",
    Borrower: "james",
    Date: "2003-12-08",
    Tool: "BreadBoard",
  };

  return (
    <main>
      <Table op={ops} />
    </main>
  );
}
