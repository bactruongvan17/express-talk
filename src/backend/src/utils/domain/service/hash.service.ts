export interface HashService {
  encrypt<T>(data: T): Promise<string>;

  verify<T>(hash: string, origin: T): Promise<boolean>;
}
