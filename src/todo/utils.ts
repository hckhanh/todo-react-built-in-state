export type Todo = {
  id: string;
  content: string;
  done: boolean;
};

export function generateItemId(): string {
  // Generate a random 8-character string
  const randomString = Math.random().toString(36).substring(2, 10);

  // Use the current timestamp to ensure uniqueness
  const timestamp = Date.now().toString(36);

  // Combine the random string and timestamp to create the ID
  const id = `${randomString}-${timestamp}`;

  return id;
}
