import React from 'react';
import Typical from 'react-typical';
import {Button} from "@material-ui/core";
import styles from "./Profile.module.css";


function Profile(){

    return(
    <div id="profile"className={styles.profileContainer}>
        <div className={styles.profileParent}>
            <h2>Hello!! I'm Subhash Yadav.</h2>
            <div className={styles.typical}>
                <Typical
                loop={Infinity}
                wrapper="p"
                steps={[
                    "Full Stack Web-Developer",
                    2000,
                    "IIITIAN",
                    2000,
                    "ECE Undergraduate",
                    2000,
                ]}
             />
            </div>

            <a href="#" target="_blank">
                    <Button variant="contained" color="success" className={styles.butt}>
                        Get Resume
                    </Button>
             </a>
        </div>

    </div>


    );
}

export default Profile
