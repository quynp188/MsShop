import { DeleteOutline } from "@material-ui/icons";
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;
export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
export const EditButton = styled.button`
  border-radius: 10px;
  border: none;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;
export const DeleteOutlineStyle = styled(DeleteOutline)`
  color: red;
  cursor: pointer;
`;
