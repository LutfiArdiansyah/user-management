import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private config: ConfigService, private http: HttpClient) {}

  getUser() {
    return this.http.get(this.config.apiUrl + "users");
  }

  addUser(data) {
    return this.http.post(this.config.apiUrl + "users", data);
  }

  activatedUser(data) {
    return this.http.post(this.config.apiUrl + "users/activated", data);
  }

  deleteUser(data) {
    return this.http.post(this.config.apiUrl + "users/delete", data);
  }

  updateUser(data) {
    return this.http.post(this.config.apiUrl + "users/edit", data);
  }

  changePassword(data) {
    return this.http.post(this.config.apiUrl + "users/changePassword", data);
  }

  getUserProject(data) {
    return this.http.post(this.config.apiUrl + "users/project", data);
  }

  activatedUserProject(data) {
    return this.http.post(this.config.apiUrl + "users/project/activated", data);
  }

  deleteUserProject(data) {
    return this.http.post(this.config.apiUrl + "users/project/delete", data);
  }

  addUserProject(data) {
    return this.http.post(this.config.apiUrl + "users/project/add", data);
  }

  getUserProjectZone(data) {
    return this.http.post(this.config.apiUrl + "users/project/zone", data);
  }

  addUserProjectZone(data) {
    return this.http.post(this.config.apiUrl + "users/project/zone/add", data);
  }

  activatedUserProjectZone(data) {
    return this.http.post(
      this.config.apiUrl + "users/project/zone/activated",
      data
    );
  }

  deleteUserProjectZone(data) {
    return this.http.post(
      this.config.apiUrl + "users/project/zone/delete",
      data
    );
  }

  getUserSloc() {
    return this.http.get(
      this.config.apiUrlElogistik + "materials/getSlocProject"
    );
  }
}
