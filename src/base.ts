export interface HttpClient {
  get(url: string): Promise<unknown>;
  post(url: string, body: unknown): Promise<unknown>;
}

export function createClient(): HttpClient {
  return {
    get: async (url) => ({ url }),
    post: async (url, body) => ({ url, body }),
  };
}
