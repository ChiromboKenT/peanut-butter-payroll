import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

interface Employee {
  employeeNumber: number;
  firstName: string;
  lastName: string;
  salutation: string;
  profileColor: string;
  gender: string;
  fullName: string;
  grossSalary: number;
}

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
  endpoints: (builder) => ({
    getEmployees: builder.query<Employee[], void>({
      query: () => "user",
    }),
  }),
});

export const {useGetEmployeesQuery} = employeeApi;
