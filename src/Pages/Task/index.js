import Box from "@mui/material/Box";
import dayjs from "dayjs";
import parser from 'html-react-parser'
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Header from "../../Components/Layout/Header";
import Avatar from "../../Components/Shared/Avatar";
import Button from "../../Components/Shared/Button";
import CheckBox from "../../Components/Shared/CheckBox";
import {
  ChildContainer,
  MainContainer,
} from "../../Components/Shared/Containers";
import Datepicker from "../../Components/Shared/DatePicker";
import Dropdown from "../../Components/Shared/Dropdown";
import InputField from "../../Components/Shared/InputField";
import ReactQuill from "../../Components/Shared/ReactQuill";
// import { comments } from "../../dummyData/comments";
import { user } from "../../dummyData/user";
import { textStyles } from "../../utils/textStyles";
import { assignedToOptions, whenDoneOptions } from "./helper";
import { useLocation } from "react-router-dom";
import tasks from "../../dummyData/tasks";
import style from "./style";
import LabelWrapper from "./LabelWrapper";
import profilePic from "../../assets/images/user.png";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../../store/action";

const Task = () => {
  const quillData = useSelector(state => state?.quillData)
  const disptach = useDispatch()
  let commentImage = quillData?.image
  const search = useLocation().search;
  const taskId = search?.split("?")?.[1];

  const task = tasks?.find((item) => item.id === taskId);
  const [userComments, setUserComments] = useState([])
  const [data, setData] = useState(task);
  const [inputData, setInputData] = useState('')
  const { isCompleted, name } = task;
  const handleChange = (name, value) => {
    setData({ ...data, [name]: value });
  };
  const handleSubmit = () => {
    setUserComments([...userComments, {
      name: "The Woman",
      designation: "Something",
      profilePic,
      createdAt: new Date().toISOString(),
      comment: inputData,
      image: commentImage
    }])
    setInputData('')
    disptach(setImage({ image: '' }))

  }
  return (
    <>
      <Header />

      <MainContainer sx={{ pb: "95px", backgroundColor: "primary.background" }}>
        <Box sx={style.subHeader}>
          <CheckBox
            color="#3076FF"
            isChecked={isCompleted}
            label={<Box sx={style.subHeaderCheck}>{name}</Box>}
          />

          <Box
            component={BsThreeDotsVertical}
            color="#64748B"
            size="15px"
            cursor="pointer"
          />
        </Box>

        <ChildContainer sx={{
          backgroundColor: "secondary.background"
        }}>

          <Box sx={style.childMain}>
            <LabelWrapper label="Added by">
              <InputField
                placeholder=""
                value={data?.addedBy}
                onChange={(e) => handleChange("addedBy", e.target.value)}
              />
            </LabelWrapper>

            <LabelWrapper label=" Assigned to">
              <Dropdown
                isAvatar
                avatarBackground="#3076FF"
                options={assignedToOptions}
                value={data?.assignedTo}
                user={{ name: data?.assignedTo }}
                onChange={(value) => handleChange("assignedTo", value)}
              />
            </LabelWrapper>

            <LabelWrapper label="When done, notify">
              <Dropdown
                isAvatar
                avatarBackground="#4FC371"
                options={whenDoneOptions}
                value={data?.whenDone}
                user={{ name: data?.whenDone }}
                onChange={(value) => handleChange("whenDone", value)}
              />
            </LabelWrapper>

            <LabelWrapper label="Due on">
              <Datepicker
                value={data?.dueOn}
                onChange={(value) => handleChange("dueOn", value)}
              />
            </LabelWrapper>

            <LabelWrapper
              label="Notes"
              sx={{ mb: { xs: "25px", sm: "50px", lg: "100px" } }}
            >
              <InputField
                placeholder="Add extra details or attach a file..."
                value={data?.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
              />
            </LabelWrapper>
          </Box>
          <Box sx={style.divider} />

          <Box sx={style.commentParent}>
            {!!userComments?.length && (
              <Box sx={style.commentMain}>
                {userComments.map(({ createdAt, profilePic, comment, image }) => {
                  return (
                    <Box>
                      <Box
                        sx={{ display: "flex", mb: { xs: "20px", sm: "50px" } }}
                      >
                        <Box sx={style.createdAt}>
                          {dayjs(createdAt).format("MMM D")}
                        </Box>
                        <Avatar
                          user={{ profilePic }}
                          size="50px"
                          sx={{ mr: "21px" }}
                        />
                        <Box sx={style.createdAt1}>
                          {dayjs(createdAt).format("MMM D")}
                        </Box>
                        <Box sx={style.comment}>{parser(comment)}</Box>
                        <Box
                          component={BsThreeDotsVertical}
                          color="#64748B"
                          size="15px"
                          cursor="pointer"
                          sx={{
                            mt: "15px",
                            minWidth: "15px",
                          }}
                        />
                      </Box>
                      <Box sx={style.comment1}>{parser(comment)}</Box>
                      {image && <Box sx={style.imageParent}>
                        <Box sx={style.imageBackground}>
                          <Box
                            component="img"
                            alt={""}
                            src={image}
                            sx={style.image}

                          />
                        </Box>
                        <Box sx={{ ...textStyles.poppins6, color: "#64748B" }}>
                          images-stickers.jpg 36 KB{' '}
                          <Box
                            component="span"
                            sx={{
                              textDecoration: "underline",
                              cursor: "pointer",
                            }}
                          >
                            View full-size Download
                          </Box>
                        </Box>
                      </Box>}
                    </Box>
                  );
                })}
              </Box>
            )}
            <Box>

              <Box sx={style.myComment}>
                <Avatar user={user} size="50px" sx={style.avatar} />
                <ReactQuill
                  data={inputData}
                  setData={setInputData}
                  sx={style.reactQuill}
                />
                {/* <ReactQuill sx={{ flexGrow: { xs: 0, sm: 1 } }} /> */}
              </Box>
              {commentImage &&
                <Box sx={style.seletedImageContainer}>
                  <Box sx={style.seletedImageTitle}>
                    Selected Image*
                  </Box>
                  <Box
                    component="img"
                    alt={""}
                    src={commentImage}
                    sx={style.imagePreveiw}

                  />
                </Box>
              }
            </Box>
            <Box sx={style.addComment}>
              <Button
                disabled={!inputData?.length || inputData === '<p><br></p>'}
                onClick={handleSubmit}
                title="Add this comment"
                sx={{
                  width: "134px",
                  marginTop: '55px'
                }}
              />
            </Box>
          </Box>
        </ChildContainer>
      </MainContainer>
    </>
  );
};

export default Task;
