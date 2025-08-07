import styles from './styles.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, slideIn } from './animation';
import Magnetic from '../../common/Magnetic';

export default function index() {
    const phrase = `I am actively seeking internships and opportunities in the field of Computer Science and Engineering. I have completed a comprehensive course in cybersecurity and have developed strong skills in web application development...`;
    const description = useRef(null);
    const isInView = useInView(description);

    return (
        <div ref={description} className={styles.description} id='about'>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map((word, index) => (
                        <span key={index} className={styles.mask}>
                            <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"}>{word}</motion.span>
                        </span>
                    ))
                }
                </p>
                <motion.p variants={slideIn} animate={isInView ? "open" : "closed"}>
                    Other than that, I like video games, Figma and e-Sports. I touch grass by playing Cricket and Running.
                </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Magnetic>
                    <div className={styles.button}>
  <a
    href="https://drive.google.com/file/d/1Xwnen0wSsMGxJgqt5JSC54Ucsk5gaBMu/view?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
     style={{ textDecoration: 'none', color: 'inherit' }}
  >
    Resume in menu.
  </a> 
</div>
                    </Magnetic>
                </div>
            </div>
        </div>
    )
}
