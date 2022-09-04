import api from "../api";
import { IPatientListModel, IPatientCreateModel, IPatientEditModel, IPatientShowModel } from "./dtos/IPatientModel";
import { IPatientParser } from "./dtos/IPatientParser";

export async function fetchPatientList({ id, page, perPage }: IPatientListModel): Promise<IPatientParser> {
  const url = `v1/users/patients`;
  const filters: any = {id, page, perPage}
  const { data } = await api.get(url, { params: filters });

  return data;
}

export async function fetchPatientById({workerId, patientId}: IPatientShowModel): Promise<IPatientParser> {
  const url = `v1/${workerId}/patients/${patientId}`;
  const { data } = await api.get(url);

  return data;
}

export async function fetchRegisterPatient({ name, password, birthDate, phone, email, address, workerId }: IPatientCreateModel): Promise<IPatientParser> {

  const params ={
    name,
    password,
    birthDate,
    phone,
    email,
    address,
    workerId,
    role: 'user'
  }
  
  const url = `v1/users/${workerId}/patients`;
  const { data } = await api.post(url, params);

  return data;
}


export async function fetchEditPatient({id, name, password, birthDate, phone, email, address, workerId, role} :IPatientEditModel): Promise<IPatientParser> {
  const params ={
    id,
    name,
    password,
    birthDate,
    phone,
    email,
    address,
    workerId,
    role
  }
  
  const url = `${workerId}/patients`;
  const { data } = await api.put(url, params);
  return data;
}

export async function fetchDeletePatient({workerId, patientId}: IPatientShowModel): Promise<IPatientParser> {
  const url = `v1/${workerId}/patients/${patientId}`;
  const { data } = await api.delete(url);

  return data;
}