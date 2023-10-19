import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

interface Employee {
  employeeNumber: number;
  firstName: string;
  lastName: string;
  salutation: string;
  profileColor: string;
  gender: string;
  grossSalary: number;
}

interface FetchResponse<T>{
  data: T;
  message : string
}
export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://server-api:3000"}),
  endpoints: (builder) => ({
    getEmployees: builder.query<FetchResponse<Employee[]>, void>({
      query: () => "user",
    }),
    getEmployeeById: builder.query<FetchResponse<Employee>, number>({
      query: (employeeId) => `user/${employeeId}`,
    }),
    createUser: builder.mutation<Employee, Partial<Employee>>({
      query: (newUser) => ({
        url: `user/${newUser.employeeNumber}`,
        method: "POST",
        body: newUser,
      }),
    }),
    updateUser: builder.mutation<
      Employee,
      {employeeId: number; user: Partial<Employee>}
    >({
      query: ({employeeId, user}) => ({
        url: `user/${employeeId}`,
        method: "PUT",
        body: user,
      }),
    }),
    deleteUser: builder.mutation<void, number>({
      query: (employeeId) => ({
        url: `user/${employeeId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useGetEmployeeByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = employeeApi;
