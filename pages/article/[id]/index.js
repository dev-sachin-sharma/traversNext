import Link from 'next/link'
import { useRouter} from 'next/router'

const  Article= ({article}) => {
    const router=useRouter()
    const {id}=router.query
    console.log(id)
    return (
        <>
          <h1>{article.title}</h1> 
          <p>{article.body}</p> 
          <Link href='/'>Go back to Home</Link>
        </>
    )
}

export const getStaticProps=async(context)=>{
    const id=context.params.id;
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data=await res.json();

    return{
        props:{article:data}
    }
}
export const getStaticPaths=async()=>{
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const article=await res.json();
    const ids=article.map(article=>(article.id))
    const paths=ids.map(id=>({params:{id:id.toString()}}))
    return{
        paths,
        fallback:false
    }

}


export default Article
