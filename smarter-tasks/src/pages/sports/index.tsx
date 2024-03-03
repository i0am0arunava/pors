/* eslint-disable @typescript-eslint/no-unused-vars */
import "./sport.css"
import Navbar from './Navbar';
import { useEffect, useState } from "react";
import { fetcharticles } from "../../context/article/actions";
import { usearticlesState } from "../../context/article/context";
import { usearticleDispatch } from "../../context/article/context";
import SkeletonLoading from "./loadings"
import { useMatchesState, useMatchesDispatch } from "../../context/Match/context";
import { FetchMatches } from "../../context/Match/actions";
import "react-loading-skeleton/dist/skeleton.css";
import { FaLocationDot } from "react-icons/fa6";
import SkeletonLoadingtwo from "./loadingtwo";
const Sports = () => {
  const articalState = usearticlesState();
  const taskDispatch = usearticleDispatch();
  const matchstate = useMatchesState();
  const matchDispatch = useMatchesDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [animationCount, setAnimationCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetcharticles(taskDispatch);


  }, [taskDispatch]);

  useEffect(() => {
    FetchMatches(matchDispatch);


  }, [matchDispatch]);
  console.log("here", matchstate)
  useEffect(() => {
    const interval = setInterval(() => {
      // Update the state to trigger the animation reset
      setAnimationCount((prevCount) => prevCount + 1);
    }, 15000); // Interval should match the animation duration

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  const sortedData = matchstate.matches.sort((a, b) => (a.isRunning && !b.isRunning ? -1 : 0));
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
      <div className="rectangular-box" style={{ animationIterationCount: animationCount }}>
        {matchstate.isLoading ? (
          <>
            <SkeletonLoadingtwo />
            <SkeletonLoadingtwo />
            <SkeletonLoadingtwo />
            <SkeletonLoadingtwo />
            <SkeletonLoadingtwo />
            <SkeletonLoadingtwo />
            <SkeletonLoadingtwo />
          </>
        ) : (
          sortedData.map((match) => (
            <div
              key={match.id}
              className="rect-box"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ animationPlayState: isHovered ? "paused" : "running" }}
            >
              {match.isRunning && <><div className="flex gap-1"><span className="flex gap-1 items-center match-live"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd"></path></svg>Live</span></div><span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-green-800 opacity-70 logo border-2 border-green-600 shadow-lg">
  {/* Your content goes here */}
</span>

</>}
              <div className="match-name">{match.sportName}</div>
              <div className="match-description">{match.name}</div>
              <div className="match-team">
                {match.teams.map((item) => (
                  <div key={item.id}>{item.name}:{item.id}</div>
                ))}
              </div>

              <div className="match-location">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FaLocationDot style={{ fontSize: '30px', color: '#102894', marginRight: '5px' }} />
                  <span>{match.location}</span>
                </div>
              </div>
            </div>
          ))
        )}
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
            </>
          ) : (
            articalState.article.map((article) => (
              <div className="content-box1" key={article.id}>
                <div className="image-wrapper relative">
                  <img
                    src={article.thumbnail}
                    alt="Thumbnail"
                    className="w-[300px] h-[200px] max-w-full max-h-full object-cover rounded-t-lg min-[1024px]:rounded-l-lg p-1"
                  />
                  <div className="absolute inset-0 flex items-center justify-center ">
                    <div className="text-white text-center">
                      <div className="text-lg font-bold mb-2">
                        <b>
                          <i>{article.sport.name}</i>
                        </b>
                      </div>
                      <div className="  mb-2">
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