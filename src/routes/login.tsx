import { Form } from "solid-start/data/Form";

export default function () {
  return (
    <div class="flex flex-col items-center">
      <Form>
        <div class="flex gap-3 mt-40 flex-col max-w-sm justify-center place-items-center boder border-gray-500 border-2 p-6 rounded-xl">
          <img src="logo-unimakers.png" />

          <input
            class="input-primary"
            name="username"
            type="text"
            placeholder="Username"
          />
          <input
            class="input-primary"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button class="btn-primary">Login</button>
        </div>
      </Form>
    </div>
  );
}
