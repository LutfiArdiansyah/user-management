export class Index {
  appVersion: Number = 1.0;
  appName: String = "UserManagement";
}

export class FormLogin {
  username: String = "";
  password: String = "";
  application_id: Number = 1;
  token_fcm: String = "";
}

export class AddUser {
  username: String = "";
  full_name: String = "";
  gender: String = "";
  email: String = "";
  no_handphone: String = "";
  password: String = "";
  created_by: String = "";
}

export class AddJob {
  job_code: String = "";
  job_desc: String = "";
  created_by: String = "";
}

export class AddRole {
  role_code: String = "";
  role_desc: String = "";
  created_by: String = "";
}

export class AddApplication {
  application_name: String = "";
  created_by: String = "";
}

export class AddZone {
  zone_name: String = "";
  created_by: String = "";
}

export class AddArea {
  area_name: String = "";
  created_by: String = "";
}
