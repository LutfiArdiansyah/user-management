import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApplicationsService {
  constructor(private config: ConfigService, private http: HttpClient) {}

  getApplications() {
    return this.http.get(this.config.apiUrl + "applications");
  }

  addApplication(data) {
    return this.http.post(this.config.apiUrl + "applications", data);
  }

  updateApplication(data) {
    return this.http.post(this.config.apiUrl + "applications/edit", data);
  }

  getApplicationMenu(applicationId) {
    return this.http.get(this.config.apiUrl + "applications/" + applicationId);
  }

  addMenu(data) {
    return this.http.post(this.config.apiUrl + "applications/addMenu", data);
  }

  activatedMenu(data) {
    return this.http.post(this.config.apiUrl + "applications/activated", data);
  }

  deleteMenu(data) {
    return this.http.post(this.config.apiUrl + "applications/delete", data);
  }

  updateMenu(data) {
    return this.http.post(this.config.apiUrl + "applications/editMenu", data);
  }

  getApplicationRole(applicationId) {
    return this.http.get(
      this.config.apiUrl + "applications/role/" + applicationId
    );
  }

  addApplicationRole(data) {
    return this.http.post(this.config.apiUrl + "applications/role", data);
  }

  activatedAppRole(data) {
    return this.http.post(
      this.config.apiUrl + "applications/role/activated",
      data
    );
  }

  deleteAppRole(data) {
    return this.http.post(
      this.config.apiUrl + "applications/role/delete",
      data
    );
  }
}
