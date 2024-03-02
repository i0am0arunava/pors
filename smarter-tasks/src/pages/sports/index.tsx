import "./sport.css"
import Navbar from './Navbar';
import { useEffect } from "react";
import { fetcharticles } from "../../context/sports/actions";
import { usearticlesState } from "../../context/sports/context";
import { usearticleDispatch } from "../../context/sports/context";
import SkeletonLoading from "./loadings"

import "react-loading-skeleton/dist/skeleton.css";
const Sports = () => {
  const articalState = usearticlesState();
  const taskDispatch = usearticleDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  useEffect(() => {
    fetcharticles(taskDispatch);


  }, [taskDispatch]);
  console.log(articalState)
  return (

    <div className="hell">

      <div className="sidebar">
        <div className="content-box2"></div>
        <div className="content-box2"></div>
        <div className="content-box2"></div>
        <div className="content-box2"></div>
        <div className="content-box2"></div>

        <div className="content-box2"></div>
        <div className="content-box2"></div>
        <div className="content-box2"></div>
        <div className="content-box2"></div>
        <div className="content-box2"></div>

        <div className="content-box2"></div>
        <div className="content-box2"></div>
        <div className="content-box2"></div>
        <div className="content-box2"></div>
        <div className="content-box2"></div>

        <div className="content-box2"></div>
        <div className="content-box2"></div>
        <div className="content-box2"></div>
        <div className="content-box2"></div>
        <div className="content-box2"></div>

        <div className="content-box2"></div>
        <div className="content-box2"></div>
        <div className="content-box2"></div>
        <div className="content-box2"></div>
        <div className="content-box2"></div>

        <div className="content-box2"></div>
        <div className="content-box2"></div>
        <div className="content-box2"></div>
        <div className="content-box2"></div>
        <div className="content-box2"></div>


      </div>

      <div className="rectangular-box">
        <div className="rect-box "></div>
        <div className="rect-box "></div>
        <div className="rect-box "></div>
        <div className="rect-box "></div>
        <div className="rect-box "></div>
        <div className="rect-box "></div>
        <div className="rect-box "></div>
        <div className="rect-box "></div>

      </div>
      <div className="container">
        <Navbar />
        <div className="scroll-box">
          {articalState.isLoading ? (
           <>
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />  
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />  
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             <SkeletonLoading />
             </>
          ) : (
            articalState.article.map((article) => (
              <div className="content-box1" key={article.id}>
                <div className="image-wrapper relative">
                  <img
                    src={article.thumbnail}
                    alt="Thumbnail"
                    className="w-[300px] h-[200px] max-w-full max-h-full object-cover rounded-t-lg min-[1024px]:rounded-l-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-black text-center">
                      <div className="text-lg font-bold mb-2">
                        <b>
                          <i>{article.sport.name}</i>
                        </b>
                      </div>
                      <div className="text-lg font-bold mb-2">
                        <i>{article.title}</i>
                      </div>
                      {/* Add other details like summary or date if needed */}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>



    </div >


  )
}
export default Sports;