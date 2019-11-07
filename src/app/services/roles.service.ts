import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RolesService {
  constructor(private config: ConfigService, private http: HttpClient) {}

  getRole() {
    return this.http.get(this.config.apiUrl + "roles");
  }

  addRole(data) {
    return this.http.post(this.config.apiUrl + "roles", data);
  }

  activatedRole(data) {
    return this.http.post(this.config.apiUrl + "roles/activated", data);
  }

  deleteRole(data) {
    return this.http.post(this.config.apiUrl + "roles/delete", data);
  }

  updateRole(data) {
    return this.http.post(this.config.apiUrl + "roles/edit", data);
  }

  getRoleJob(roleId) {
    return this.http.get(this.config.apiUrl + "roles/job/" + roleId);
  }

  addRoleJob(data) {
    return this.http.post(this.config.apiUrl + "roles/job", data);
  }

  activatedRoleJob(data) {
    return this.http.post(this.config.apiUrl + "roles/job/activated", data);
  }

  deleteRoleJob(data) {
    return this.http.post(this.config.apiUrl + "roles/job/delete", data);
  }
}
