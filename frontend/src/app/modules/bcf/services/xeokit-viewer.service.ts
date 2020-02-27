import {Injectable} from '@angular/core';

@Injectable()
export class XeokitViewerService {
  constructor() {
  }

  private _viewer:any;

  public setViewer(viewer:any):void {
    this._viewer = viewer;
  }

  public getViewer():boolean {
    return this._viewer;
  }
}
