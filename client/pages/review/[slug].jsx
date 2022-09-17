
import { useRouter } from 'next/router'
export default function Review() {
    const router = useRouter()
    const { slug } = router.query 
  return (
    <div>{slug}</div>
  )
}
