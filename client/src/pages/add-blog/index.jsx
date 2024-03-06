import { GlobalContext } from "../../context";
import classes from "./styles.module.css";
import { useContext } from "react";
import axios from "axios"
import {useNavigate} from 'react-router-dom'

export default function AddBlog() {
  const {formData, setFormData} = useContext(GlobalContext);
  const navigate = useNavigate();
  console.log(formData);


  async function handleSaveBlogToDatabase(){
    const response =await axios.post('http://localhost:5000/api/blogs/add',{
        title: formData.title,
        description: formData.description
    })
    const result = await response.data;
    console.log(result);
    if(result){
        setFormData({
            title:'',
            description:'',
        });
        navigate('/');
    }
  }

  return (
    <div className={classes.wrapper}>
      <h1>Add blog</h1>
      <div className={classes.formwrapper}>
        <input
          name="title"
          placeholder="enter a blog"
          id="title"
          type="text"
          value={formData.title}
          onChange={(e)=>setFormData({
            ...formData,
            title: e.target.value,
          })}
        ></input>
        <textarea
          name="description"
          placeholder="Enter description"
          id="description"
          value={formData.description}
          onChange={(event)=>setFormData({
            ...formData,
            description: event.target.value,
          })}
        ></textarea>
        <button onClick={handleSaveBlogToDatabase}>Add new blog</button>
      </div>
    </div>
  );
}
