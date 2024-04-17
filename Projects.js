import React from "react";
import {Card, CardContent, Typography, Grid} from "@material-ui/core"; 
import styles from "./Projects.module.css";


function Projects(){
    return(
        <div id="projects" className={styles.container}>
          <h1 className={styles.heading}>Projects</h1>
          <Grid container spacing={4} justifyContent="center">
              <Grid item component={Card} xs={12} md={4} className={styles.project}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom><h4>Codepen Clone</h4></Typography>
                      <Typography variant="body1" gutterBottom>An application made using HTML,CSS and ReactJs</Typography>
                      <Typography variant="body1" gutterBottom>It is the clone of codepen and its properties are similar,we can code HTML,CSS,JavaScript and compile it and it also saves the code!!!</Typography>
                      <div className={styles.iconContainer}>
                       <a className={styles.icon} href="#"><i class="fas fa-link fa-lg"></i></a>
                       <a className={styles.icon} href="#" target="_blank"><i class="fab fa-github-square fa-lg"></i></a>
                      </div>
                  </CardContent>

              </Grid>

              <Grid item component={Card} xs={12} md={4} className={styles.project}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom><h4>Tic-Tac-Toe</h4></Typography>
                      <Typography variant="body1" gutterBottom>An application made using HTML,CSS and JavaScript</Typography>
                      <Typography variant="body1" gutterBottom>It is similar to the tic tac toe game after every instant the players swap their turns until a winner is found or else we will result in a draw!!</Typography>
                      <div className={styles.iconContainer}>
                       <a className={styles.icon} href="#" target="_blank"><i class="fas fa-link fa-lg"></i></a>
                       <a className={styles.icon} href="#" target="_blank"><i class="fab fa-github-square fa-lg"></i></a>
                      </div>
                  </CardContent>

              </Grid>


          </Grid>
        </div>
    );
}

export default Projects;