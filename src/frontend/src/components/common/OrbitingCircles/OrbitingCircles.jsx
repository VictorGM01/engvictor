import React from "react";
import styles from "./OrbitingCircles.module.scss";

export default function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className={styles.orbitPath}
        >
          <circle
            className={styles.orbitCircle}
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={{
              "--duration": calculatedDuration,
              "--radius": radius,
              "--angle": angle,
              "--icon-size": `${iconSize}px`,
            }}
            className={`${styles.orbitingItem} ${
              reverse ? styles.reverse : ""
            } ${className || ""}`}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
