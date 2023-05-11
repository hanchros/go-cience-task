import Box from "@mui/material/Box";
import React from "react";
import ReactQuillEdittor from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector, useDispatch } from "react-redux";
import { setImage } from "../../../store/action";
let dispatch
const imageHandler = () => {
  const input = document.createElement('input');

  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();

  input.onchange = async () => {
    var file = input.files[0];
    var formData = new FormData();

    formData.append('image', file);
    dispatch(setImage({ image: URL.createObjectURL(file) }))
  };
}

const modules = {
  toolbar: {
    container: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'blockquote', 'code'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean'],
      [{ 'color': [] }],
    ],
    handlers: {
      image: imageHandler
    },
    table: true
  },
  // clipboard: {
  //   // toggle to add extra line breaks when pasting HTML:
  //   matchVisual: false,
  // },
};

// modules={{  
//   toolbar: {  
//     container: [  
//       [{ 'header': [1, 2, 3, 4, 5, 6, false] }],  
//       ['bold', 'italic', 'underline'],  
//       [{ 'list': 'ordered' }, { 'list': 'bullet' }],  
//       [{ 'align': [] }],  
//       ['link', 'image'],  
//       ['clean'],  
//       [{ 'color': [] }]  
//     ],  
//     handlers: {  
//       image: this.imageHandler  
//     }  
//   },  
//   table: true  
// }} 

const ReactQuill = ({ data, setData, sx = {} }) => {
  dispatch = useDispatch()
  const themeType = useSelector(state => state.theme.type)
  const isThemeDark = themeType === 'dark'
  return (
    <Box
      component={ReactQuillEdittor}
      value={data}
      theme="snow"
      onChange={(content) => {
        setData(content)
      }}
      modules={modules}

      sx={{
        height: "300px", ...sx,
        '.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options': {
          backgroundColor: 'primary.background'
        },
        '.ql-snow *': { color: isThemeDark && '#fff' },
        '.ql-snow .ql-picker': { color: isThemeDark && '#fff !important' },
        '.ql-snow .ql-stroke': { color: isThemeDark && '#fff !important', stroke: isThemeDark && '#fff !important' },
        '.ql-container': { height: '60%' }
      }}
    />
  );
};

export default ReactQuill;
