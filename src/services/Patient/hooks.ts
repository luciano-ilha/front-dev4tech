import { useQuery, UseQueryResult } from  '@tanstack/react-query';
import {
  fetchPatientList,
  fetchPatientById,
  fetchRegisterPatient,
  fetchEditPatient,
  fetchDeletePatient
} from './service';
import { IPatientShowModel, IPatientCreateModel, IPatientEditModel } from './dtos/IPatientModel';
import { IPatientParser } from './dtos/IPatientParser';

export function usePatientsList(filterParams: {}): UseQueryResult<IPatientParser[]> {
  const queryKey = ['patientList'];
  return useQuery(queryKey, () => fetchPatientList(filterParams), {
    keepPreviousData: true,
  });
}

export function usePatientById({workerId, patientId}: IPatientShowModel): UseQueryResult<IPatientParser> {
  const queryKey = ['patientById'];
  return useQuery(queryKey, () => fetchPatientById({workerId, patientId}), {
    keepPreviousData: true,
  });
}

export function useRegisterPatient({ addressId, name, email, document, gender, birthDate, phone }: IPatientCreateModel): UseQueryResult<IPatientParser> {
  const queryKey = ['registerPatient'];
  return useQuery(queryKey, () => fetchRegisterPatient(
      {
        addressId,
        name,
        email,
        document,
        gender,
        birthDate,
        phone
      }
    ),
    {
    keepPreviousData: true,
    }
  );
}

export function useEditPatient({ patientId, addressId, name, email, document, gender, birthDate, phone }: IPatientEditModel): UseQueryResult<IPatientParser> {
  const queryKey = ['editPatient'];
  return useQuery(queryKey, () => fetchEditPatient(
      {
        patientId,
        addressId,
        name,
        email,
        document,
        gender,
        birthDate,
        phone
      }
    ),
    {
    keepPreviousData: true,
    }
  );
}

export function useDeletePatient({workerId, patientId}: IPatientShowModel): UseQueryResult<IPatientParser> {
  const queryKey = ['deletePatient'];
  return useQuery(queryKey, () => fetchDeletePatient({workerId, patientId}), {
    keepPreviousData: true,
  });
}