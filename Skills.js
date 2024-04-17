import React from 'react'
import styles from "./Skills.module.css";
import {Grid} from "@material-ui/core";
import Tilt from "react-parallax-tilt";
import {ImHtmlFive2} from "react-icons/im";
import {IoLogoCss3,IoLogoJavascript}  from "react-icons/io";
import {SiCplusplus,SiBootstrap,SiJquery,SiMysql} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";


function Skills() {
  Aos.init({
      delay: 200,
      duration: 2500
  })

  return (
      <div id="skills" className={styles.container}>
          <h1 className={styles.heading}>Skills</h1>
          <Grid container spacing={6} justifyContent="center">
              <Grid item xs={6} sm={4} md={3} className={styles.grid} data-aos="fade-right">
                  <Tilt className={styles.skillBox}>
                      <div>
                          <SiCplusplus size="5.5rem" />
                      </div>
                      <div className={styles.skillName}>C++</div>
                  </Tilt>
              </Grid>

              <Grid item xs={6} sm={4} md={3} className={styles.grid} data-aos="fade-down">
                  <Tilt className={styles.skillBox}>
                      <div>
                          <ImHtmlFive2 size="5.5rem" />
                      </div>
                      <div className={styles.skillName}>HTML</div>
                  </Tilt>
              </Grid>

              <Grid item xs={6} sm={4} md={3} className={styles.grid} data-aos="fade-down">
                  <Tilt className={styles.skillBox}>
                      <div>
                          <IoLogoCss3 size="5.5rem" />
                      </div>
                      <div className={styles.skillName}>CSS</div>
                  </Tilt>
              </Grid>

              <Grid item xs={6} sm={4} md={3} className={styles.grid} data-aos="fade-left">
                  <Tilt className={styles.skillBox}>
                      <div>
                          <IoLogoJavascript size="5.5rem" />
                      </div>
                      <div className={styles.skillName}>Javascript</div>
                  </Tilt>
              </Grid>

              <Grid item xs={6} sm={4} md={3} className={styles.grid} data-aos="fade-right">
                  <Tilt className={styles.skillBox}>
                      <div>
                          <SiJquery size="5.5rem" />
                      </div>
                      <div className={styles.skillName}>Jquery</div>
                  </Tilt>
              </Grid>

              <Grid item xs={6} sm={4} md={3} className={styles.grid} data-aos="fade-up">
                  <Tilt className={styles.skillBox}>
                      <div>
                          <FaReact size="5.5rem" />
                      </div>
                      <div className={styles.skillName}>React</div>
                  </Tilt>
              </Grid>

              <Grid item xs={6} sm={4} md={3} className={styles.grid} data-aos="fade-up">
                  <Tilt className={styles.skillBox}>
                      <div>
                          <SiMysql size="5.5rem" />
                      </div>
                      <div className={styles.skillName}>MySQL</div>
                  </Tilt>
              </Grid>
             
             
              <Grid item xs={6} sm={4} md={3} className={styles.grid} data-aos="fade-left">
                  <Tilt className={styles.skillBox}>
                      <div>
                          <SiBootstrap size="5.5rem" />
                      </div>
                      <div className={styles.skillName}>BootStrap</div>
                  </Tilt>
              </Grid>

          </Grid>
      </div>
  )
}

export default Skills;

