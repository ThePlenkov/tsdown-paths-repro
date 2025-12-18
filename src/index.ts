// Using tsconfig path alias #base
import { createClient, type HttpClient } from '#base';

export function getClient(): HttpClient {
  return createClient();
}

export type { HttpClient };
