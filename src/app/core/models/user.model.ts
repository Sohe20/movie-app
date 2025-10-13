
export interface User {
  idToken: string;
  id: string;
  name: string;
  email: string;
  photoUrl: string;
  firstName: string;
  lastName: string;
  provider: 'GOOGLE' | string;
}

/**
 * Authentication provider types
 */
export enum AuthProvider {
  GOOGLE = 'GOOGLE',
  // Add other providers as needed
}