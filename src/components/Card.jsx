import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from "react-toastify"

const Card = ({ course, likedCourses, setLikedCourses }) => {

    const clickHandler = () => {
        if (likedCourses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)))
            toast.warning("Like removed")
        } else {
            if (likedCourses.length === 0) {
                setLikedCourses([course.id])
            } else {
                setLikedCourses((prev) => [...prev, course.id])
            }
            toast.success("Liked succesfully")
        }
    }

    return (
        <div className="w-75 bg-bgDark/80 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url} />

                <div className="absolute right-2 bottom-1 flex justify-center items-center w-10 h-10 bg-white rounded-full">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ?
                                (<FcLike fontSize={"2rem"} />) :
                                (<FcLikePlaceholder fontSize={"2rem"} />)
                        }
                    </button>
                </div>

            </div>

            <div>
                <p className="text-white m-4 font-semibold text-lg leading-6">
                    {course.title}
                </p>

                <p className="m-4 text-white">
                    {
                        course.description.length>100 ?
                            (course.description.substr(0, 100)) + "..." :
                            (course.description)
                    }
                </p>

            </div>

        </div>
    )
}

export default Card