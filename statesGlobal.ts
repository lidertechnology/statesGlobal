import { Injectable, signal, Signal, WritableSignal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StatesGlobal {

  private readonly _sesionActiva: WritableSignal<boolean> = signal(false);
  private readonly _rolDeUsuario: WritableSignal<string | null> = signal(null);
  private readonly _aplicacionLista: WritableSignal<boolean> = signal(false);

  public readonly sesionActiva: Signal<boolean> = this._sesionActiva.asReadonly();
  public readonly rolDeUsuario: Signal<string | null> = this._rolDeUsuario.asReadonly();
  public readonly aplicacionLista: Signal<boolean> = this._aplicacionLista.asReadonly();

  public establecerSesionActiva(valor: boolean): void { this._sesionActiva.set(valor); }
  public establecerRolDeUsuario(rol: string | null): void { this._rolDeUsuario.set(rol); }
  public establecerAplicacionLista(valor: boolean): void { this._aplicacionLista.set(valor); }
  
}
