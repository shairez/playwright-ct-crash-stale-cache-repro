import { expect, test } from "@playwright/experimental-ct-react";
import App from "./App";

test("should render", async ({ mount }) => {
  const component = await mount(<App />);
  await expect(component.getByRole('heading', { name: 'Vite + React' })).toBeVisible();
});