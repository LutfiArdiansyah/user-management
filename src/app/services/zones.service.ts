import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ZonesService {
  constructor(private config: ConfigService, private http: HttpClient) {}

  addZone(data) {
    return this.http.post(this.config.apiUrlElogistik + "zones", data);
  }

  getZones() {
    return this.http.get(this.config.apiUrlElogistik + "zones");
  }

  activatedZone(data) {
    return this.http.post(
      this.config.apiUrlElogistik + "zones/activated",
      data
    );
  }

  deleteZone(data) {
    return this.http.post(this.config.apiUrlElogistik + "zones/delete", data);
  }

  updateZone(data) {
    return this.http.post(this.config.apiUrlElogistik + "zones/edit", data);
  }

  getZoneProject(zoneId) {
    return this.http.get(
      this.config.apiUrlElogistik + "zones/byZone/" + zoneId
    );
  }

  activatedZoneProject(data) {
    return this.http.post(
      this.config.apiUrlElogistik + "zones/project/activated",
      data
    );
  }

  deleteZoneProject(data) {
    return this.http.post(
      this.config.apiUrlElogistik + "zones/project/delete",
      data
    );
  }

  addZoneProject(data) {
    return this.http.post(this.config.apiUrlElogistik + "zones/project", data);
  }

  getZoneByProjectId(projectId) {
    return this.http.get(
      this.config.apiUrlElogistik + "zones/project/" + projectId
    );
  }
}
