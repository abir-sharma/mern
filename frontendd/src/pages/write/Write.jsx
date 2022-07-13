import React,{useState,useRef, Children,useEffect} from 'react'
import './write.css'
import  {Editor} from '@tinymce/tinymce-react'
import * as api from "../../api/index"
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer,toast } from 'react-toastify'
import { writePost,clearErrors } from '../../actions/postActions'

const Write = () => {
  const dispatch=useDispatch()
  const [isChecked, setIsChecked] = useState(false);
  const [image,setImage]=useState("")
  const editorRef=useRef()
  const [formData, setFormData] = useState({title:"",desc:""})
  const [cat,setCat]=useState([])
  const [react,setReact]=useState(false)
  const {user}=useSelector(state=>state.store.userDetails)
  const {error,isWritten}=useSelector(state=>state.store.posts)
  const uploadImage=async e =>{
    const files=e.target.files
    const data=new FormData()
    data.append('file',files[0])
    data.append('upload_preset','myImages')
    const res=await fetch("https://api.cloudinary.com/v1_1/dk8e3ijx2/upload",{
      method:'POST',
      body:data
    })
    const file = await res.json()
    console.log(file.url)
    setImage(file.url)
  }
  var arr=Object.keys(cat)
  function handleSubmit(event){
    event.preventDefault()
    dispatch(writePost({
        "title":formData.title,
        "desc":editorRef.current.getContent(),
        "photo":image,
        "username":user.username,
        "categories":arr 
      }))
  }
  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearErrors());
    }
    if (isWritten) {
      toast.success("Post created successfully !!!")
    }
  }, [dispatch,error,isWritten])

  function handleChngae(event){
    setFormData({...formData,[event.target.name]:event.target.value})
  }
  function handleCat(e){
    setCat({...cat,[e.target.name]:e.target.checked})
  }
  console.log(arr,"s")
  return (
    <div className="write">
    {/* <img
      className="writeImg"
      src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt=""
    /> */}
    <form className="writeForm">
      <div className="writeFormGroup">
        <label htmlFor="fileInput">
          <i className="writeIcon fas fa-plus"></i>
                  </label>
        <input id="fileInput" onChange={uploadImage} type="file" style={{ display: "none" }} />
        <input
          className="writeInput"
          placeholder="Title"
          type="text"
          name="title"
          onChange={(event)=>handleChngae(event)}
          autoFocus={true}
        />
      </div>
      <div className="writeFormGroup">
        {/* <textarea
          className="writeInput writeText"
          placeholder="Tell your story..."
          type="text"
          name="desc"
          onChange={(event)=>handleChngae(event)}
          autoFocus={true}
        /> */}
        
      
      </div>
      <div className="e">
      <Editor
        onInit={(evt,editor)=>editorRef.current=editor}
        initialValue="<p>Compose Your blog here .</p>"
        init={{
          menubar:false,
        }}
        />
      </div>
      <div className="checkbox">
        <div className="singleCheckbox">
        <input type="checkbox" name="django" checked={cat.django} onChange={handleCat} id="django" />
      <label htmlFor="django">Django</label>
        </div>
        <div className="singleCheckbox">
        <input type="checkbox" name="react" checked={cat.react} onChange={handleCat} id="react" />
      <label htmlFor="react">React js</label>
        </div>
        <div className="singleCheckbox">
        <input type="checkbox" name="next" checked={cat.next} onChange={handleCat} id="next" />
      <label htmlFor="next">Next js</label>
        </div>
        <div className="singleCheckbox">
        <input type="checkbox" name="blockchain" checked={cat.blockchain} onChange={handleCat} id="blockchain" />
      <label htmlFor="blockchain">Blockchain</label>
        </div>
        <div className="singleCheckbox">
        <input type="checkbox" name="ml" checked={cat.ml} onChange={handleCat} id="ml" />
      <label htmlFor="ml">Machine learning</label>
        </div>
        <div className="singleCheckbox">
        <input type="checkbox" name="reactNative" checked={cat.reactNative} onChange={handleCat} id="reactNative" />
      <label htmlFor="reactNative">React Native</label>
        </div>  
      </div>
      <div className="categ">
      {arr.map((item)=><span className='singleCateg' > {item} </span>)}
      </div>
      <button className="writeSubmit" type="submit"  onClick={(event)=>handleSubmit(event)}>
        Publish
      </button>
    </form>
    <ToastContainer  position='bottom-right' />
  </div>
  )
}

export default Write