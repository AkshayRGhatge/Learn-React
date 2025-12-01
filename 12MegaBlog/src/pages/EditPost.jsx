import React, {useEffect,useState} from "react";
import { PostForm, Container} from "../components";
import appWriteService from "../appwrite/config"
import { useNavigate,useParams } from "react-router-dom";

function EditPost(){
    const [posts,setPosts] = useState(null)
    const {slug} = useParams();
    const navigate= useNavigate();

    useEffect(()=>{
        if(slug)
        {
            appWriteService.getPosts(slug).then((post)=>{
                if(post)
                {
                    setPosts(post)
                }
            })
        }
        else
        {
            navigate('/')
        }
    },[slug,navigate])

    return posts ? (
         <div className="py-8">
            <Container>
                <PostForm post={posts}/>
            </Container>
        </div> ) : null 


       
    
}


export default EditPost