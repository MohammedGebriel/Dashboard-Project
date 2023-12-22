import { useState } from 'react';
import './new.css'
import { MdDriveFolderUpload } from "react-icons/md";

function New({inputs,title}) {
    const [file,setFile] = useState("");

    return (
        <div className='new'>
            <div className="top">
                <h1>{title}</h1>
            </div>
            <div className="bottom">
                <div className="left text-center">
                    <img src= {
                        file ?
                        URL.createObjectURL(file):
                        "https://picsum.photos/100/100?grayscale"
                    }
                    alt="" className='rounded-circle'/>
                </div>
                <div className="right">
                    <form action="">
                        <div className="form-input">
                            <label htmlFor="file">Image: <MdDriveFolderUpload className='icon'/></label>
                            <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{display: "none"}}/>
                        </div>
                        {inputs.map((input) => (
                            <div className="form-input">
                            <label htmlFor="">{input.label}</label>
                            <input type={input.type} placeholder={input.placeholder}/>
                        </div>
                        ))}
                        
                        {/* <div className="form-input">
                            <label htmlFor="">UserName</label>
                            <input type="text" placeholder='john-doe'/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="">Name And Surname</label>
                            <input type="text" placeholder='John Doe'/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='john_doe@gmail.com'/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="">Phone</label>
                            <input type="text" placeholder='+1 234 567 89'/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="">Password</label>
                            <input type="password"/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="">Adress</label>
                            <input type="text" placeholder='Elton St. 216 NewYork'/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="">Country</label>
                            <input type="text" placeholder='USA'/>
                        </div> */}

                        <input type="submit" value="Send" className='button'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default New