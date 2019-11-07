import { Injectable, EventEmitter, Output } from "@angular/core";
import swal from "sweetalert";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  apiLoginUrl: String = "https://stg-api-um-elogistic.acset.co/";
  apiUrl: String = "https://stg-api-um-elogistic.acset.co/";
  apiUrlElogistik: String = "https://stg-api-elogistic.acset.co/";
  secretKey: String = "ACS3T !dN";
  @Output() fLoading: EventEmitter<Boolean> = new EventEmitter(false);

  constructor() {}

  errorMessage(message: string) {
    swal("ERROR!", message, "error");
  }

  successMessage(title: string, message: string) {
    swal(title, message, "success");
  }

  infoMessage(title: string, message: string) {
    swal(title, message, "info");
  }

  warningMessage(title: string, message: string) {
    swal(title, message, "warning");
  }

  promptMessage(title: string, message: string, icon: string) {
    return swal(title, message, icon, { buttons: ["Cancel", true] }).then(
      res => {
        if (res) {
          return true;
        } else {
          return false;
        }
      }
    );
  }
  setFloading(value) {
    this.fLoading.emit(value);
  }

  getFloading() {
    return this.fLoading;
  }
}
