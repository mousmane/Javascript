/**
 * Contient les informations de contact d'une personne
 */
export class Contact {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: object;
  phone?: number;
  website?: string;
  company?: object;
}
