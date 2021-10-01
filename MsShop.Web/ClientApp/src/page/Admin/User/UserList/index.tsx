import React, { useState } from "react";
import {
  AvatarContainer,
  Avatar,
  Container,
  EditButton,
  DeleteOutlineStyle,
} from "../UserList/styles";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userRows } from "./data";
import { Link } from "react-router-dom";
import { IDataRows } from "./module";

const UserList = () => {
  const [data, setDataRows] = useState(userRows);
  const removeItem = (id: number) => {
    const restData = data.filter((item: IDataRows) => item.id !== id);
    setDataRows([...restData]);
  };
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <AvatarContainer>
            <Avatar src={params.row.avatar} alt="Avatar" />
            {params.row.username}
          </AvatarContainer>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 200,
    },
    {
      field: "desc",
      headerName: "Description",
      sortable: true,
      width: 200,
    },
    {
      field: "action",
      headerName: "#",
      width: 150,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <>
            <Link to={`/admin/user/${params.row.id}`}>
              <EditButton>Edit</EditButton>
            </Link>
            <DeleteOutlineStyle
              onClick={(id) => removeItem(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <Container>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(ids) => {
          console.log("ids", ids);
          const selectedIDs = new Set(ids);
          const selectedRowData = userRows.filter((row) =>
            selectedIDs.has(row.id)
          );
          console.log("onSelectionModelChange:", selectedRowData);
        }}
      />
    </Container>
  );
};

export default UserList;
