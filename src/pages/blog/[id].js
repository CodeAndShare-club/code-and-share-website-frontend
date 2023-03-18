import { useRouter } from 'next/router'
import { BlogDetail } from '@/components'

const Blog = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Blog: {id}</p>
}

export default Blog
