export interface TokenService {
  Sign(payload: any): Promise<string>;

  Verify(token: string): Promise<any>;
}
