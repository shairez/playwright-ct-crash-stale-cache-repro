import { expect, test } from "@playwright/experimental-ct-react";
import Child from "./Child";

test("should render", async ({ mount }) => {
  const component = await mount(<Child />);
  await expect(component.getByText('Child')).toBeVisible();
});