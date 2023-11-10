import { useRouter } from "next/router";

const BlogDetail = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <p>Blog ID : {id}</p>
        </>
    )
}


export default BlogDetail