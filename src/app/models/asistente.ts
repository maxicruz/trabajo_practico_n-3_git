export class Asistente {
  email: string;
  nombreOrganizacion:string;
  solicitaConstancia:boolean;

  constructor(email?: string, nombreOrganizacion?: string, solicitaConstancia?: boolean) {
    this.email = email;
    this.nombreOrganizacion = nombreOrganizacion;
    this.solicitaConstancia = solicitaConstancia;
  }
}
