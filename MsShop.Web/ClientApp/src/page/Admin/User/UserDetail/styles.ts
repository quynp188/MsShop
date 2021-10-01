import { PermIdentity, Publish } from "@material-ui/icons";
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;
export const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.h1``;
export const AddButton = styled.button`
  width: 80px;
  border: none;
  background-color: teal;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;
export const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
export const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px #000000;
  box-shadow: 0px 0px 15px -10px #000000;
`;
export const UserDetailContainer = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px #000000;
  box-shadow: 0px 0px 15px -10px #000000;
  margin-left: 20px;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50%;
  object-fit: cover;
`;

export const Image = styled.img`
  width: 40px;
  height: 40%;
`;
export const TopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const UserName = styled.span`
  font-weight: 600;
`;
export const UserTitle = styled.span`
  font-weight: 300;
`;
export const Bottom = styled.div`
  margin-top: 20px;
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;
  .MuiSvgIcon-root {
    font-size: 16px;
    margin-right: 10px;
  }
`;

export const BottomTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;
export const BottomInfoTitle = styled.span``;
export const UserDetailTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
export const UserDetailForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export const UserDetailLeft = styled.div``;
export const UserDetailRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const UserDetailItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const Lable = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
`;
export const Input = styled.input`
  border: none;
  width: 250px;
  border-bottom: 1px solid grey;
  height: 30px;
`;
export const UploadImageContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ImageUpload = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
export const PublishStyle = styled(Publish)`
  cursor: pointer;
`;
export const InputImage = styled.input`
  display: none;
`;
export const LableImage = styled.label``;
export const SaveButton = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: darkblue;
  color: whitesmoke;
  font-weight: 600;
`;
