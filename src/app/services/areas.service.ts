import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AreasService {
  constructor(private config: ConfigService, private http: HttpClient) {}

  getAreas() {
    return this.http.get(this.config.apiUrlElogistik + "areas");
  }

  addArea(data) {
    return this.http.post(this.config.apiUrlElogistik + "areas", data);
  }

  activatedArea(data) {
    return this.http.post(
      this.config.apiUrlElogistik + "areas/activated",
      data
    );
  }

  deleteArea(data) {
    return this.http.post(this.config.apiUrlElogistik + "areas/delete", data);
  }

  updateArea(data) {
    return this.http.post(this.config.apiUrlElogistik + "areas/edit", data);
  }

  getProjectZoneByArea(areaId) {
    return this.http.get(
      this.config.apiUrlElogistik + "areas/byArea/" + areaId
    );
  }

  activatedProjectZone(data) {
    return this.http.post(
      this.config.apiUrlElogistik + "areas/projectZone/activated",
      data
    );
  }

  deleteProjectZone(data) {
    return this.http.post(
      this.config.apiUrlElogistik + "areas/projectZone/delete",
      data
    );
  }

  addProjectZoneArea(data) {
    return this.http.post(
      this.config.apiUrlElogistik + "areas/zone/project",
      data
    );
  }
}
