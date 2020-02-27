import {ViewerBridgeServiceInterface} from "core-app/modules/bcf/services/viewer-bridge.service";

import {Injectable} from '@angular/core';
import {XeokitViewerService} from "core-app/modules/bcf/services/xeokit-viewer.service";

@Injectable()
export class XeokitBridgeService implements ViewerBridgeServiceInterface {
  constructor(readonly xeokitViewerService:XeokitViewerService) {
  }

  public getViewpoint():any {
    console.log("getViewpoint from XeokitViewerService.getViewer()", this.xeokitViewerService.getViewer());
    return new Promise((resolve, reject) => {});
  }
}
