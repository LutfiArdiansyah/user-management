import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProjectsService {
  constructor(private config: ConfigService, private http: HttpClient) {}

  getProject() {
    return this.http.get(this.config.apiUrlElogistik + "projects");
  }
}
