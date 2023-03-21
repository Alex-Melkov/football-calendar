import React from "react";
import ContentLoader from "react-content-loader";

import styles from './Skeleton.module.scss';

const Skeleton = () => (
  <ContentLoader
    className={styles.container} 
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 400 522"
    backgroundColor="#f3f3f3"
    foregroundColor="#dbd9d9"
  >
    <rect x="100" y="15" rx="10" ry="10" width="200" height="36" /> 
    <rect x="20" y="80" rx="10" ry="10" width="123" height="150" /> 
    <rect x="238" y="80" rx="10" ry="10" width="123" height="150" /> 
    <rect x="10" y="310" rx="10" ry="10" width="350" height="65" /> 
    <rect x="10" y="440" rx="10" ry="10" width="350" height="65" /> 
    <rect x="142" y="260" rx="10" ry="10" width="115" height="33" /> 
    <rect x="115" y="400" rx="10" ry="10" width="160" height="33" />
  </ContentLoader>
)

export default Skeleton;