import LoadingModal from "./LoadingModal";
import { SkeletonDemo } from "./SkeletonPage";

export default function LoadingContainer() {
  return (
    <>
      <div className="skeleton-container">
        <div>
          <SkeletonDemo/>
          <SkeletonDemo/>
          <SkeletonDemo/>
          <SkeletonDemo/>
          <SkeletonDemo/>
          <SkeletonDemo/>
          <SkeletonDemo/>
          <SkeletonDemo/>
          <SkeletonDemo/>
          <SkeletonDemo/>
        </div>
        <div>
          <SkeletonDemo/>
          <SkeletonDemo/>
          <SkeletonDemo/>
          <SkeletonDemo/>
          <SkeletonDemo/>
          <SkeletonDemo/>
          <SkeletonDemo/>
          <SkeletonDemo/>
        </div>
      </div>
      <div>
        <LoadingModal/>
      </div>
    </>
  )
}