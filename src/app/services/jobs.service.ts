import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class JobsService {
  constructor(private config: ConfigService, private http: HttpClient) {}

  getJob() {
    return this.http.get(this.config.apiUrl + "jobs");
  }

  addJob(data) {
    return this.http.post(this.config.apiUrl + "jobs", data);
  }

  activatedJob(data) {
    return this.http.post(this.config.apiUrl + "jobs/activated", data);
  }

  deleteJob(data) {
    return this.http.post(this.config.apiUrl + "jobs/delete", data);
  }

  updateJob(data) {
    return this.http.post(this.config.apiUrl + "jobs/edit", data);
  }

  getUsersJob(jobId) {
    return this.http.get(this.config.apiUrl + "jobs/users/" + jobId);
  }

  addUserJob(data) {
    return this.http.post(this.config.apiUrl + "jobs/user", data);
  }

  activatedUserJob(data) {
    return this.http.post(this.config.apiUrl + "jobs/user/activated", data);
  }

  deleteUserJob(data) {
    return this.http.post(this.config.apiUrl + "jobs/user/delete", data);
  }
}
