import { getFactories } from "./factories";

export async function getLiveFactories() {
  try {
    return await getFactories();
  } catch (error) {
    console.error(error);
    return [];
  }
}