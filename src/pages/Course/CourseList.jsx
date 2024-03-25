import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../Layouts/Homelayout";
import { getAllCourses } from "../../redux/slices/courseSlice";
import { useEffect } from "react";
import CourseCard from "../../components/CourseCard";

function CourseList(){

    const dispatch = useDispatch();

    const {courseList} = useSelector((state)=>state.course)

    async function loadCourses(){
            await dispatch(getAllCourses());
    }

    useEffect(()=>{
        loadCourses();
    },[])

    return (
        <HomeLayout>
            <div className=" min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white">
                    <h1 className=" text-center text-4xl font-semibold mb-5">Explore Courses made by { " " } 
                    <span className=" font-bold text-yellow-500">industry experts</span>
                    </h1>

                    <div className=" mb-10 flex flex-wrap gap-14">
                {courseList?.map((el)=>{
                    return <CourseCard key={el.id} data={el} />
                })}
            </div>
            </div>
           
        </HomeLayout>
    );
}

export default CourseList;