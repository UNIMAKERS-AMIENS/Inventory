import { For } from "solid-js";
import { Operation } from "~/types";

export default function ({ op }: { op: Operation | undefined }) {
  return (
    <div class="flex flex-col gap-1 w-56 p-3 bg-gray-800 hover:bg-gray-800">
      <span>ID: {op?.Id}</span>
      <span>Tool: {op?.Tool}</span>
      <span>Q: {op?.Quantity}</span>
      <span>By {op?.Borrower}</span>
      <span>D: {op?.Date}</span>
      <span>S: {op?.Status}</span>
    </div>
  );
}
